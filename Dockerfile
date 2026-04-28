# ============================================
# Stage 1: Dependencies Installation Stage
# ============================================

# IMPORTANT: Node.js Version Maintenance
# This Dockerfile uses Node.js 24.13.0-slim, which was the latest LTS version at the time of writing.
# To ensure security and compatibility, regularly update the NODE_VERSION ARG to the latest LTS version.
ARG NODE_VERSION=24.13.0-slim

FROM node:${NODE_VERSION} AS dependencies

# Set working directory
WORKDIR /app

# Copy package-related files first to leverage Docker's caching mechanism
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./

# Install project dependencies with frozen lockfile for reproducible builds
RUN --mount=type=cache,target=/root/.npm \
    --mount=type=cache,target=/usr/local/share/.cache/yarn \
    --mount=type=cache,target=/root/.local/share/pnpm/store \
  if [ -f package-lock.json ]; then \
    npm ci --no-audit --no-fund; \
  elif [ -f yarn.lock ]; then \
    corepack enable yarn && yarn install --frozen-lockfile --production=false; \
  elif [ -f pnpm-lock.yaml ]; then \
    corepack enable pnpm && pnpm install --frozen-lockfile; \
  else \
    echo "No lockfile found." && exit 1; \
  fi

# ============================================
# Stage 2: Development stage with live reload
# ============================================

FROM node:${NODE_VERSION} AS development

# Set working directory
WORKDIR /app

# Reuse installed dependencies and provide a dev server entrypoint.
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=development
ENV PORT=3120
ENV HOSTNAME="0.0.0.0"
ENV NEXT_PUBLIC_DREDGING_MARINE_APP_URL="http://localhost:3121"

EXPOSE 3120 3121

CMD ["npm", "run", "dev:all"]

# ============================================
# Stage 3: Build Next.js application in standalone mode
# ============================================

FROM node:${NODE_VERSION} AS builder

# Set working directory
WORKDIR /app

# Copy project dependencies from dependencies stage
COPY --from=dependencies /app/node_modules ./node_modules

# Copy application source code
COPY . .

ENV NODE_ENV=production
ENV NEXT_PUBLIC_DREDGING_MARINE_APP_URL="http://localhost:3121"

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED=1

# Build Next.js application
# If you want to speed up Docker rebuilds, you can cache the build artifacts
# by adding: --mount=type=cache,target=/app/.next/cache
# This caches the .next/cache directory across builds, but it also prevents
# .next/cache/fetch-cache from being included in the final image, meaning
# cached fetch responses from the build won't be available at runtime.
RUN if [ -f package-lock.json ]; then \
    npm run build:all; \
  elif [ -f yarn.lock ]; then \
    corepack enable yarn && yarn build:all; \
  elif [ -f pnpm-lock.yaml ]; then \
    corepack enable pnpm && pnpm build:all; \
  else \
    echo "No lockfile found." && exit 1; \
  fi

# ============================================
# Stage 4: Run Next.js application
# ============================================

FROM node:${NODE_VERSION} AS runner

# Set working directory
WORKDIR /app

# Set production environment variables
ENV NODE_ENV=production
ENV PORT=3120
ENV HOSTNAME="0.0.0.0"
ENV NEXT_PUBLIC_DREDGING_MARINE_APP_URL="http://localhost:3121"

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the run time.
# ENV NEXT_TELEMETRY_DISABLED=1

# Copy the built multi-app workspace. This intentionally keeps the root
# NMDC Group app and the standalone D&M Next app together so one container
# can serve both ports.
COPY --from=builder --chown=node:node /app ./

# Switch to non-root user for security best practices
USER node

# Expose both Next.js apps:
# - 3120: NMDC Group
# - 3121: NMDC Dredging & Marine
EXPOSE 3120 3121

# Start both Next.js apps in one container
CMD ["npm", "run", "start:all"]
