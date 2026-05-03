# NMDC Nginx Deployment

The standalone apps are built with subpath-aware Next.js `basePath` values:

- NMDC Group: `/`
- NMDC Dredging & Marine: `/dredging`
- NMDC Infra: `/infra`
- NMDC LTS: `/lts`
- NMDC Energy: `/energy`

Use `deploy/nginx/nmdcgroups.conf` on the EC2 host. The subpath `proxy_pass`
entries intentionally do not end with `/`; this preserves the prefix that
Next.js uses for `/_next`, image optimizer, SVG, and document assets.
The exact subpaths, such as `/dredging`, are proxied directly instead of
redirecting to `/dredging/` because Next.js canonicalizes `/dredging/` back to
`/dredging`.

```bash
sudo cp deploy/nginx/nmdcgroups.conf /etc/nginx/sites-available/exhibitions.nmdc-group.com
sudo ln -sf /etc/nginx/sites-available/exhibitions.nmdc-group.com /etc/nginx/sites-enabled/exhibitions.nmdc-group.com
sudo nginx -t
sudo systemctl reload nginx
```

Rebuild the Docker image after these config changes:

```bash
docker compose --profile prod up -d --build
```

After deployment, confirm D&M assets are prefixed:

```bash
curl -L https://exhibitions.nmdc-group.com/dredging/ | grep '/dredging/_next/static'
curl -I https://exhibitions.nmdc-group.com/dredging
curl -I https://exhibitions.nmdc-group.com/dredging/
```


```Docker CMD
sudo docker compose down --remove-orphans && \
sudo docker rm -f nextjs-dev-container nextjs-standalone-container 2>/dev/null || true && \
sudo docker compose --profile prod up -d --build nextjs-standalone && \
sudo docker ps

// build image first, then remove the old one
sudo docker compose --profile prod build nextjs-standalone && \
sudo docker compose down --remove-orphans && \
(sudo docker rm -f nextjs-dev-container nextjs-standalone-container 2>/dev/null || true) && \
sudo docker compose --profile prod up -d nextjs-standalone && \
sudo docker ps


sudo docker compose --profile prod build nextjs-standalone \
&& sudo docker compose down --remove-orphans \
&& (sudo docker rm -f nextjs-dev-container nextjs-standalone-container 2>/dev/null || true) \
&& sudo docker compose --profile prod up -d nextjs-standalone \
&& sudo docker ps \
&& sudo docker system prune -af
```
