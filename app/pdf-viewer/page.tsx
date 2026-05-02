import type { Metadata } from "next";
import { Header } from "../components/landing/Header";
import { ArrowLeft } from "../components/landing/icons";
import { NmdcFooter } from "../components/landing/NmdcFooter";
import { getNmdcNavLinks, nmdcBrand } from "../components/landing/nmdcShared";

type PdfViewerSearchParams = Promise<{
  file?: string | string[];
  title?: string | string[];
  returnTo?: string | string[];
}>;

export const metadata: Metadata = {
  title: "PDF Viewer | NMDC Group",
  description: "View NMDC Group PDF documents.",
};

function getFirstParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function getUrlOrigin(value: string | undefined) {
  if (!value) {
    return "";
  }

  try {
    return new URL(value).origin;
  } catch {
    return "";
  }
}

function getUrlPath(value: string | undefined) {
  if (!value) {
    return "";
  }

  if (value.startsWith("/") && !value.startsWith("//")) {
    return value;
  }

  try {
    return new URL(value).pathname;
  } catch {
    return "";
  }
}

function getPdfPathPrefix(value: string | undefined) {
  const path = getUrlPath(value).replace(/\/$/, "");

  return `${path}/pdfs`;
}

export function getAllowedPdfOrigins() {
  return new Set(
    [
      process.env.NEXT_PUBLIC_NMDC_GROUP_APP_URL ?? "http://localhost:3120",
      process.env.NEXT_PUBLIC_DREDGING_MARINE_APP_URL ?? "http://localhost:3121",
      process.env.NEXT_PUBLIC_INFRA_APP_URL ?? "http://localhost:3122",
      process.env.NEXT_PUBLIC_LTS_APP_URL ?? "http://localhost:3123",
      process.env.NEXT_PUBLIC_ENERGY_APP_URL ?? "http://localhost:3124",
    ]
      .map(getUrlOrigin)
      .filter(Boolean),
  );
}

export function getAllowedPdfPaths() {
  return Array.from(
    new Set(
      [
        "",
        process.env.NEXT_PUBLIC_NMDC_GROUP_APP_URL ?? "http://localhost:3120",
        process.env.NEXT_PUBLIC_DREDGING_MARINE_APP_URL ?? "http://localhost:3121",
        process.env.NEXT_PUBLIC_INFRA_APP_URL ?? "http://localhost:3122",
        process.env.NEXT_PUBLIC_LTS_APP_URL ?? "http://localhost:3123",
        process.env.NEXT_PUBLIC_ENERGY_APP_URL ?? "http://localhost:3124",
        process.env.NEXT_PUBLIC_DREDGING_MARINE_BASE_PATH ?? "",
        process.env.NEXT_PUBLIC_INFRA_BASE_PATH ?? "",
        process.env.NEXT_PUBLIC_LTS_BASE_PATH ?? "",
        process.env.NEXT_PUBLIC_ENERGY_BASE_PATH ?? "",
      ]
        .map(getPdfPathPrefix)
        .filter(Boolean),
    ),
  );
}

export function getAllowedReturnOrigins() {
  return getAllowedPdfOrigins();
}

export function getSafePdfPath(value: string | string[] | undefined) {
  const filePath = getFirstParam(value)?.trim() ?? "";

  if (!filePath || filePath.includes("..") || filePath.includes("\\")) {
    return "";
  }

  if (filePath.startsWith("/")) {
    const allowedPdfPaths = getAllowedPdfPaths();

    if (
      !allowedPdfPaths.some((allowedPath) =>
        filePath.startsWith(`${allowedPath}/`),
      ) ||
      !filePath.toLowerCase().endsWith(".pdf") ||
      filePath.includes("//")
    ) {
      return "";
    }

    return filePath;
  }

  try {
    const pdfUrl = new URL(filePath);
    const allowedPdfOrigins = getAllowedPdfOrigins();
    const allowedPdfPaths = getAllowedPdfPaths();

    if (
      !["http:", "https:"].includes(pdfUrl.protocol) ||
      !pdfUrl.pathname.toLowerCase().endsWith(".pdf") ||
      pdfUrl.pathname.includes("//") ||
      !allowedPdfPaths.some((allowedPath) =>
        pdfUrl.pathname.startsWith(`${allowedPath}/`),
      ) ||
      !allowedPdfOrigins.has(pdfUrl.origin)
    ) {
      return "";
    }

    return pdfUrl.toString();
  } catch {
    return "";
  }
}

function getSafeReturnPath(value: string | string[] | undefined) {
  const returnPath = getFirstParam(value)?.trim() ?? "";

  if (!returnPath || returnPath.includes("\\")) {
    return "/safeen-subsea";
  }

  if (returnPath.startsWith("/")) {
    if (returnPath.startsWith("//")) {
      return "/safeen-subsea";
    }

    return returnPath;
  }

  try {
    const returnUrl = new URL(returnPath);
    const allowedReturnOrigins = getAllowedReturnOrigins();

    if (
      !["http:", "https:"].includes(returnUrl.protocol) ||
      !allowedReturnOrigins.has(returnUrl.origin)
    ) {
      return "/safeen-subsea";
    }

    return returnUrl.toString();
  } catch {
    return "/safeen-subsea";
  }
}

export default async function PdfViewerPage({
  searchParams,
}: {
  searchParams: PdfViewerSearchParams;
}) {
  const params = await searchParams;
  const pdfPath = getSafePdfPath(params.file);
  const returnPath = getSafeReturnPath(params.returnTo);
  const title = getFirstParam(params.title)?.trim() || "PDF Specification";

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#001d2d] text-white">
      <Header
        brandName={nmdcBrand.name}
        logo={nmdcBrand.logo}
        logoAlt={nmdcBrand.logoAlt}
        links={getNmdcNavLinks("")}
      />

      <section className="px-5 pb-14 pt-[118px] md:px-10 md:pb-20 md:pt-[136px]">
        <div className="mx-auto w-full max-w-[1240px]">
          <a
            href={returnPath}
            className="inline-flex items-center gap-3 text-[16px] font-bold leading-6 text-primary-sky-blue transition-colors hover:text-white"
          >
            <ArrowLeft className="size-5" />
            Back
          </a>

          <h1 className="mt-6 text-[30px] font-bold leading-[38px] text-white md:text-[48px] md:leading-[58px]">
            {title}
          </h1>

          <div className="mt-8 overflow-hidden rounded-[18px] border border-white/16 bg-white shadow-[0_24px_64px_rgba(0,0,0,0.28)] md:rounded-[24px]">
            {pdfPath ? (
              <iframe
                src={pdfPath}
                title={`${title} PDF`}
                className="h-[calc(100svh-260px)] min-h-[520px] w-full border-0 bg-white"
              />
            ) : (
              <div className="flex min-h-[520px] items-center justify-center px-6 text-center text-[18px] font-bold leading-7 text-primary-navy-blue">
                PDF file unavailable
              </div>
            )}
          </div>
        </div>
      </section>

      <NmdcFooter variant="compact" />
    </main>
  );
}
