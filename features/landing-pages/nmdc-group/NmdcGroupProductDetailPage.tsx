import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "../../../app/components/landing/icons";
import { Header } from "../../../app/components/landing/Header";
import { NmdcFooter } from "../../../app/components/landing/NmdcFooter";
import { nmdcGroupLandingContent } from "./content";
import { type NmdcGroupProductDetail } from "./productDetailsContent";

type ProductDetailSection = NmdcGroupProductDetail["sections"][number];
type ProductDetailMedia = NmdcGroupProductDetail["media"][number];

function getPdfViewerHref(filePath: string, title: string, returnTo: string) {
  const params = new URLSearchParams({
    file: filePath,
    title,
    returnTo,
  });

  return `/pdf-viewer?${params.toString()}`;
}

export function NmdcGroupProductDetailPage({
  detail,
}: {
  detail: NmdcGroupProductDetail;
}) {
  if (detail.slug === "marine-vessels") {
    return <MarineVesselsDetailLayout detail={detail} />;
  }

  if (detail.slug === "coastal-hydrodynamic-center") {
    return <CoastalHydrodynamicDetailLayout detail={detail} />;
  }

  if (detail.slug === "mussafah-yard") {
    return <MussafahYardDetailLayout detail={detail} />;
  }

  if (isHailGhashaDetail(detail)) {
    return <HailGhashaDetailLayout detail={detail} />;
  }

  if (detail.slug === "valve") {
    return <ValveDetailLayout detail={detail} />;
  }

  return <StandardProductDetailLayout detail={detail} />;
}

function isHailGhashaDetail(
  detail: NmdcGroupProductDetail,
): detail is Extract<NmdcGroupProductDetail, { layout: "hail-ghasha" }> {
  return "layout" in detail && detail.layout === "hail-ghasha";
}

function ProductMobileHeader() {
  return (
    <Header
      brandName={nmdcGroupLandingContent.brand.name}
      logo={nmdcGroupLandingContent.brand.logo}
      logoAlt={nmdcGroupLandingContent.brand.logoAlt}
      links={nmdcGroupLandingContent.nav.links}
      className="md:hidden"
    />
  );
}

function ProductDetailBackdrop() {
  return (
    <>
      <div className="absolute inset-0 -z-20 bg-[#0b2d3f]" aria-hidden="true" />
      <div
        className="absolute right-[-170px] top-[162px] -z-10 h-[520px] w-[620px] rotate-[-34deg] bg-white/8 md:right-[-108px] md:top-[202px] md:h-[626px] md:w-[676px]"
        aria-hidden="true"
      />
    </>
  );
}

function ProductBackLink() {
  return (
    <Link
      href="/products"
      className="inline-flex items-center gap-2 text-[14px] font-bold leading-5 text-white transition-colors hover:text-primary-sky-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-sky-blue md:gap-3 md:text-[20px] md:leading-7"
    >
      <ArrowLeft className="size-5 md:size-7" />
      Back
    </Link>
  );
}

function ProductDetailTitle({ detail }: { detail: NmdcGroupProductDetail }) {
  return (
    <h1 className="mt-8 flex max-w-full flex-wrap items-baseline gap-x-2 text-[24px] font-bold leading-[32px] md:mt-[38px] md:gap-x-[8px] md:text-[36px] md:leading-[46px]">
      <span className={detail.accentClassName}>{detail.brandName}</span>
      <span className="text-white">|</span>
      <span className="min-w-0 break-words text-white">{detail.title}</span>
    </h1>
  );
}

function StandardProductDetailLayout({
  detail,
}: {
  detail: NmdcGroupProductDetail;
}) {
  const panelHeightClassName = getPanelHeightClassName(detail);
  const sectionMinHeightClassName = getSectionMinHeightClassName(detail);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0b2d3f] text-white">
      <ProductMobileHeader />
      <section
        className={`relative isolate overflow-hidden bg-[#0b2d3f] px-5 pb-12 pt-[104px] md:px-10 md:pb-[100px] md:pt-[64px] ${sectionMinHeightClassName}`}
      >
        <ProductDetailBackdrop />

        <div className="relative z-10 mx-auto w-full max-w-[1240px]">
          <ProductBackLink />
          <ProductDetailTitle detail={detail} />

          <div className="mt-6 hidden md:grid md:grid-cols-[minmax(0,641fr)_minmax(0,583fr)] md:items-stretch md:gap-4">
            <ProductTextCard
              detail={detail}
              panelHeightClassName={panelHeightClassName}
            />
            <ProductMediaPanel
              media={detail.media}
              panelHeightClassName={panelHeightClassName}
            />
          </div>

          <div className="mt-6 grid gap-5 md:hidden">
            <ProductTextCard detail={detail} />
            <ProductMediaPanel media={detail.media} />
          </div>

          <div className="mt-12 flex justify-center md:mt-[100px]">
            <ProductQrImage detail={detail} />
          </div>
        </div>
      </section>

      <NmdcFooter
        variant="compact"
        logo={energyFooterLogo}
        pageLinks={energyProductFooterLinks}
      />
    </main>
  );
}

function getPanelHeightClassName(detail: NmdcGroupProductDetail) {
  return "panelHeightClassName" in detail ? detail.panelHeightClassName : "";
}

function getSectionMinHeightClassName(detail: NmdcGroupProductDetail) {
  return "sectionMinHeightClassName" in detail
    ? detail.sectionMinHeightClassName
    : "";
}

function ValveDetailLayout({ detail }: { detail: NmdcGroupProductDetail }) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0b2d3f] text-white">
      <ProductMobileHeader />
      <section className="relative isolate overflow-hidden bg-[#0b2d3f] px-5 pb-20 pt-[104px] md:min-h-[825px] md:px-10 md:pb-[92px] md:pt-[64px]">
        <ProductDetailBackdrop />

        <div className="relative z-10 mx-auto w-full max-w-[1240px]">
          <ProductBackLink />
          <ProductDetailTitle detail={detail} />

          <div className="mt-10 max-w-[612px] md:mt-[58px]">
            <ValveSpecificationCard detail={detail} />
          </div>
        </div>
      </section>

      <NmdcFooter
        variant="compact"
        logo={energyFooterLogo}
        pageLinks={energyProductFooterLinks}
      />
    </main>
  );
}

function ValveSpecificationCard({ detail }: { detail: NmdcGroupProductDetail }) {
  const introTitle =
    "introTitle" in detail && detail.introTitle ? detail.introTitle : "";

  return (
    <article className="rounded-[22px] bg-[#213e50] px-6 py-7 shadow-[0_24px_64px_rgba(0,0,0,0.16)] md:min-h-[494px] md:px-6 md:py-7">
      {introTitle ? (
        <h2 className="text-[18px] font-bold leading-7 text-[#00bd66] md:text-[20px]">
          {introTitle}
        </h2>
      ) : null}

      <div className="mt-8 grid gap-4 text-[16px] leading-[27px] text-white/92 md:text-[18px] md:leading-[29px]">
        {detail.summary.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-7 grid gap-7">
        {detail.sections.map((section) => (
          <section key={section.title}>
            <h3 className="text-[16px] font-bold leading-6 text-[#00bd66] md:text-[18px] md:leading-7">
              {section.title}
            </h3>

            {"paragraphs" in section && section.paragraphs ? (
              <div className="mt-1 grid gap-2 text-[16px] leading-[27px] text-white/92 md:text-[18px] md:leading-[29px]">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ) : null}

            {"bullets" in section && section.bullets ? (
              <ul className="mt-1 grid gap-1 text-[16px] leading-[27px] text-white/92 md:text-[18px] md:leading-[29px]">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span
                      className="mt-[12px] size-[4px] shrink-0 rounded-full bg-white/92"
                      aria-hidden="true"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </article>
  );
}

function HailGhashaDetailLayout({
  detail,
}: {
  detail: Extract<NmdcGroupProductDetail, { layout: "hail-ghasha" }>;
}) {
  const panel = detail.hailPanels[0];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0b2d3f] text-white">
      <ProductMobileHeader />
      <section className="relative isolate overflow-hidden bg-[#0b2d3f] px-5 pb-12 pt-[104px] md:min-h-[1276px] md:px-10 md:pb-[100px] md:pt-[64px]">
        <ProductDetailBackdrop />

        <div className="relative z-10 mx-auto w-full max-w-[1240px]">
          <ProductBackLink />
          <ProductDetailTitle detail={detail} />

          <div className="mt-6 md:mt-[31px]">
            <HailGhashaContentPanel panel={panel} />
          </div>
        </div>
      </section>

      <NmdcFooter variant="compact" />
    </main>
  );
}

function HailGhashaContentPanel({
  panel,
}: {
  panel: Extract<NmdcGroupProductDetail, { layout: "hail-ghasha" }>["hailPanels"][number];
}) {
  return (
    <article className="rounded-[20px] bg-[#213e50] px-5 py-6 shadow-[0_24px_64px_rgba(0,0,0,0.16)] md:min-h-[973px] md:px-6 md:pb-7 md:pt-7">
      <h2 className="text-[18px] font-bold leading-7 text-[#00bd66] md:text-[18px] md:leading-[28px]">
        {panel.title}
      </h2>

      <ul className="mt-10 grid gap-1 text-[17px] font-bold leading-[25px] text-[#00bd66] md:mt-[59px] md:text-[20px] md:leading-[28px]">
        {panel.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3">
            <span
              className="mt-[10px] size-[5px] shrink-0 rounded-full bg-[#00bd66] md:mt-[12px]"
              aria-hidden="true"
            />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 grid gap-5 text-[15px] leading-[25px] text-white/92 md:mt-[34px] md:text-[18px] md:leading-[29px]">
        {panel.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-8 grid gap-8 md:mt-[31px] md:gap-[34px]">
        {panel.sections.map((section) => (
          <HailGhashaSection key={section.title} section={section} />
        ))}
      </div>
    </article>
  );
}

function HailGhashaSection({
  section,
}: {
  section: Extract<NmdcGroupProductDetail, { layout: "hail-ghasha" }>["hailPanels"][number]["sections"][number];
}) {
  return (
    <section>
      <h3 className="text-[16px] font-bold leading-6 text-[#00bd66] md:text-[20px] md:leading-7">
        {section.title}
      </h3>

      {"bullets" in section && section.bullets ? (
        <ul className="mt-1 grid gap-1 text-[15px] leading-[25px] text-white/92 md:text-[18px] md:leading-[29px]">
          {section.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-4">
              <span
                className="mt-[10px] size-[4px] shrink-0 rounded-full bg-white/92 md:mt-[12px]"
                aria-hidden="true"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {"paragraphs" in section && section.paragraphs ? (
        <div className="mt-1 grid gap-3 text-[15px] leading-[25px] text-white/92 md:text-[18px] md:leading-[29px]">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : null}
    </section>
  );
}

function MarineVesselsDetailLayout({
  detail,
}: {
  detail: Extract<NmdcGroupProductDetail, { slug: "marine-vessels" }>;
}) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#082c40] text-white">
      <ProductMobileHeader />
      <section className="relative isolate overflow-hidden bg-[#082c40] px-5 pb-12 pt-[104px] md:min-h-[1728px] md:px-10 md:pb-[112px] md:pt-[64px]">
        <div
          className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#082c40_0%,#082c40_64%,#051f33_100%)]"
          aria-hidden="true"
        />
        <div
          className="absolute right-[-150px] top-[230px] -z-10 h-[520px] w-[520px] rotate-[-34deg] bg-white/8 md:right-[-96px] md:top-[209px] md:h-[726px] md:w-[676px]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-[-12%] bottom-[-7px] -z-10 h-[420px] bg-[repeating-linear-gradient(180deg,rgba(25,174,232,0.13)_0px,rgba(25,174,232,0.13)_1px,transparent_1px,transparent_8px)] opacity-50"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1240px]">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 text-[14px] font-bold leading-5 text-white transition-colors hover:text-primary-sky-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-sky-blue md:text-[15px] md:leading-6"
          >
            <ArrowLeft className="size-5" />
            Back
          </Link>

          <h1 className="mt-8 flex max-w-full flex-wrap items-baseline gap-x-2 text-[24px] font-bold leading-[32px] md:mt-[28px] md:text-[31px] md:leading-[42px]">
            <span className={detail.accentClassName}>{detail.brandName}</span>
            <span className="text-white">|</span>
            <span className="min-w-0 break-words text-white">{detail.title}</span>
          </h1>

          <article className="mt-8 rounded-[8px] bg-[#22475b]/92 px-5 py-5 shadow-[0_24px_64px_rgba(0,0,0,0.14)] md:mt-[32px] md:min-h-[102px] md:rounded-[18px] md:px-6 md:py-6">
            <div className="grid gap-4 text-[13px] font-medium leading-[21px] text-white md:text-[13px] md:leading-[20px]">
              {detail.summary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <div className="mt-8 grid gap-7 md:mt-[45px] md:grid-cols-3 md:gap-x-[27px] md:gap-y-[43px]">
            {detail.vesselCards.map((vessel) => (
              <MarineVesselCard key={vessel.name} vessel={vessel} />
            ))}
          </div>

          <div className="mt-12 flex justify-center md:mt-[100px]">
            <ProductQrImage detail={detail} />
          </div>
        </div>
      </section>

      <NmdcFooter
        variant="compact"
        logo={energyFooterLogo}
        pageLinks={energyProductFooterLinks}
      />
    </main>
  );
}

type MarineVesselCardData = Extract<
  NmdcGroupProductDetail,
  { slug: "marine-vessels" }
>["vesselCards"][number];

function MarineVesselCard({ vessel }: { vessel: MarineVesselCardData }) {
  const pdfSlug = vessel.name.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="group relative h-[360px] overflow-hidden rounded-[10px] bg-[#12394d] shadow-[0_22px_48px_rgba(0,0,0,0.18)] md:h-[421px]">
      <Image
        src={vessel.image}
        alt={vessel.alt}
        fill
        sizes="(min-width: 768px) 386px, 100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-x-0 bottom-0 translate-y-14 rounded-t-[16px] bg-[#22475b]/92 backdrop-blur-[10px] transition-transform duration-300 ease-out group-hover:translate-y-0">
        <div className="px-4 pb-0 pt-4">
          <h2 className="text-center text-[14px] font-bold leading-5 text-primary-sky-blue md:text-[15px]">
            {vessel.name}
          </h2>
          <p className="text-center text-[10px] font-medium leading-4 text-white md:text-[11px]">
            {vessel.type}
          </p>
          <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 pb-4 text-[10px] font-medium leading-4 text-white md:text-[11px]">
            {vessel.specs.map((spec: { label: string; value: string }) => (
              <div key={spec.label} className="flex justify-between gap-2">
                <dt className="text-white/86">{spec.label}:</dt>
                <dd className="text-right text-white">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <a
          href={getPdfViewerHref(
            `/pdfs/${pdfSlug}.pdf`,
            `${vessel.name} Specification`,
            "/products/marine-vessels",
          )}
          className="flex items-center justify-center gap-3 rounded-t-xl bg-[#0a1e2e]/80 py-4 transition-colors hover:bg-[#0a1e2e]"
        >
          <EyeIcon className="size-5 shrink-0 text-primary-sky-blue" />
          <span className="text-[15px] font-semibold text-primary-sky-blue">
            View specification
          </span>
        </a>
      </div>
    </div>
  );
}

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 12s3.636-7 10-7 10 7 10 7-3.636 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function CoastalHydrodynamicDetailLayout({
  detail,
}: {
  detail: Extract<
    NmdcGroupProductDetail,
    { slug: "coastal-hydrodynamic-center" }
  >;
}) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#082c40] text-white">
      <ProductMobileHeader />
      <section className="relative isolate overflow-hidden bg-[#082c40] px-5 pb-12 pt-[104px] md:min-h-[1458px] md:px-10 md:pb-[112px] md:pt-[64px]">
        <div
          className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#082c40_0%,#082c40_63%,#051f33_100%)]"
          aria-hidden="true"
        />
        <div
          className="absolute right-[-150px] top-[230px] -z-10 h-[520px] w-[520px] rotate-[-34deg] bg-white/8 md:right-[-96px] md:top-[209px] md:h-[726px] md:w-[676px]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1240px]">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 text-[14px] font-bold leading-5 text-white transition-colors hover:text-primary-sky-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-sky-blue md:text-[15px] md:leading-6"
          >
            <ArrowLeft className="size-5" />
            Back
          </Link>

          <h1 className="mt-8 flex max-w-full flex-wrap items-baseline gap-x-2 text-[24px] font-bold leading-[32px] md:mt-[28px] md:text-[31px] md:leading-[42px]">
            <span className={detail.accentClassName}>{detail.brandName}</span>
            <span className="text-white">|</span>
            <span className="min-w-0 break-words text-white">{detail.title}</span>
          </h1>

          <div className="mt-6 grid gap-5 md:mt-[39px] md:grid-cols-[minmax(0,641fr)_minmax(0,583fr)] md:gap-4">
            <CoastalHydrodynamicTextCard detail={detail} />
            <div className="relative h-[520px] overflow-hidden rounded-[20px] bg-[#12394d] md:h-[862px]">
              <Image
                src={detail.collageImage.src}
                alt={detail.collageImage.alt}
                fill
                priority
                sizes="(min-width: 768px) 583px, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="mt-12 flex justify-center md:mt-[100px]">
            <ProductQrImage detail={detail} />
          </div>
        </div>
      </section>

      <NmdcFooter
        variant="compact"
        logo={energyFooterLogo}
        pageLinks={energyProductFooterLinks}
      />
    </main>
  );
}

function CoastalHydrodynamicTextCard({
  detail,
}: {
  detail: Extract<
    NmdcGroupProductDetail,
    { slug: "coastal-hydrodynamic-center" }
  >;
}) {
  return (
    <article className="flex flex-col rounded-[20px] bg-[#22475b]/92 px-5 py-6 shadow-[0_24px_64px_rgba(0,0,0,0.16)] md:h-[862px] md:px-6 md:py-7">
      <div className="grid gap-4 text-[13px] font-normal leading-[21px] text-white/92 md:text-[13px] md:leading-[21px]">
        {detail.summary.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <Link
        href={detail.cta.href}
        className="group mt-7 inline-flex h-[48px] w-full items-center gap-3 rounded-[4px] bg-[#0a344d] px-5 text-[13px] font-normal leading-5 text-white transition-colors hover:bg-primary-sky-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-sky-blue md:h-[61px]"
      >
        <span
          className="size-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-primary-sky-blue transition-colors group-hover:border-l-white"
          aria-hidden="true"
        />
        {detail.cta.label}
      </Link>
    </article>
  );
}

function MussafahYardDetailLayout({
  detail,
}: {
  detail: Extract<NmdcGroupProductDetail, { slug: "mussafah-yard" }>;
}) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0d2638] text-white">
      <ProductMobileHeader />
      <section className="relative isolate overflow-hidden bg-[#0d2638] px-5 pb-12 pt-[104px] md:min-h-[1390px] md:px-10 md:pb-[112px] md:pt-[64px]">
        <div
          className="absolute inset-0 -z-20 bg-[#0d2638]"
          aria-hidden="true"
        />
        <div
          className="absolute right-[-150px] top-[180px] -z-10 h-[440px] w-[520px] rotate-[-34deg] bg-white/8 md:right-[-96px] md:top-[201px] md:h-[726px] md:w-[676px]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1240px]">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 text-[14px] font-bold leading-5 text-white transition-colors hover:text-primary-sky-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-sky-blue md:text-[20px] md:leading-7"
          >
            <ArrowLeft className="size-5 md:size-7" />
            Back
          </Link>

          <h1 className="mt-8 text-[26px] font-bold leading-[34px] text-[#00bd66] md:mt-[39px] md:text-[30px] md:leading-[40px]">
            {detail.fullTitle}
          </h1>

          <div className="mt-6 grid gap-5 md:mt-[54px] md:min-h-[846px] md:grid-cols-[minmax(0,641fr)_minmax(0,583fr)] md:gap-4">
            <MussafahTextCard detail={detail} />
            <div className="relative h-[360px] overflow-hidden rounded-[20px] bg-[#12394d] md:h-auto md:min-h-[846px] md:rounded-[20px]">
              <Image
                src={detail.media[0].src}
                alt={detail.media[0].alt}
                fill
                priority
                sizes="(min-width: 768px) 583px, 100vw"
                className="object-cover object-[50%_50%]"
              />
            </div>
          </div>

          <div className="mt-12 flex justify-center md:mt-[84px]">
            <ProductQrImage detail={detail} />
          </div>
        </div>
      </section>

      <NmdcFooter
        variant="compact"
        logo={energyFooterLogo}
        pageLinks={energyProductFooterLinks}
      />
    </main>
  );
}

function MussafahTextCard({
  detail,
}: {
  detail: Extract<NmdcGroupProductDetail, { slug: "mussafah-yard" }>;
}) {
  return (
    <article className="rounded-[20px] bg-[#213848] px-5 py-6 shadow-[0_24px_64px_rgba(0,0,0,0.16)] md:h-full md:px-6 md:py-7">
      <div className="grid gap-4 text-[15px] font-normal leading-[25px] text-white/92 md:text-[17px] md:leading-[28px]">
        {detail.summary.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-8 grid gap-8 md:mt-8 md:gap-8">
        {detail.sections.map((section) => (
          <MussafahSection key={section.title} section={section} />
        ))}
      </div>
    </article>
  );
}

function MussafahSection({
  section,
}: {
  section: Extract<NmdcGroupProductDetail, { slug: "mussafah-yard" }>["sections"][number];
}) {
  return (
    <section>
      <h2 className="text-[16px] font-bold leading-6 text-[#00bd66] md:text-[18px] md:leading-7">
        {section.title}
      </h2>

      {"lines" in section && section.lines ? (
        <div className="mt-1 grid gap-0 text-[15px] font-normal leading-[24px] text-white/92 md:text-[17px] md:leading-[28px]">
          {section.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      ) : null}

      {"bullets" in section && section.bullets ? (
        <ul className="mt-1 grid gap-1 text-[15px] font-normal leading-[24px] text-white/92 md:text-[17px] md:leading-[28px]">
          {section.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-4">
              <span
                className="mt-[10px] size-[4px] shrink-0 rounded-full bg-white/92 md:mt-[12px]"
                aria-hidden="true"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

function ProductTextCard({
  detail,
  panelHeightClassName = "",
}: {
  detail: NmdcGroupProductDetail;
  panelHeightClassName?: string;
}) {
  const introTitle =
    "introTitle" in detail && detail.introTitle ? detail.introTitle : "";

  return (
    <article className={`flex h-full flex-col rounded-[20px] bg-[#213e50] px-5 py-6 shadow-[0_24px_64px_rgba(0,0,0,0.16)] md:px-6 md:py-6 ${panelHeightClassName}`}>
      {introTitle ? (
        <h2 className={`text-[14px] font-bold leading-5 md:text-[15px] ${detail.accentClassName}`}>
          {introTitle}
        </h2>
      ) : null}

      <div className={`${introTitle ? "mt-6" : ""} grid gap-4 text-[14px] font-normal leading-[23px] text-white/92 md:text-[15px] md:leading-[24px]`}>
        {detail.summary.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-6 grid gap-6">
        {detail.sections.map((section) => (
          <ProductSection
            key={section.title}
            section={section}
            accentClassName={detail.accentClassName}
          />
        ))}
      </div>

      {"cta" in detail && detail.cta ? (
        <Link
          href={detail.cta.href}
          className="group mt-6 inline-flex h-[48px] w-full items-center gap-3 rounded-[4px] bg-[#0a344d] px-5 text-[13px] font-bold leading-5 text-white transition-colors hover:bg-primary-sky-blue md:mt-auto"
        >
          <span className="size-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-primary-sky-blue group-hover:border-l-white" />
          {detail.cta.label}
        </Link>
      ) : null}

      {"specificationFile" in detail && detail.specificationFile ? (
        <Link
          href={getPdfViewerHref(detail.specificationFile, detail.title, `/products/${detail.slug}`)}
          className="mt-6 inline-flex h-[48px] w-full items-center justify-center rounded-[4px] bg-[#0a344d] px-5 text-[13px] font-bold leading-5 text-white transition-colors hover:bg-primary-sky-blue md:mt-auto"
        >
          View Specification
        </Link>
      ) : null}
    </article>
  );
}

const energyFooterLogo = {
  src: "/images/landing/logo-energy.webp",
  alt: "NMDC Energy",
  width: 146,
  height: 46,
  className: "h-[54px] w-[146px] object-cover object-center md:h-[58px] md:w-[156px]",
};

const energyProductFooterLinks = [
  { label: "Home", href: "/" },
  { label: "NMDC Energy Overview", href: "/products" },
  { label: "Yard Highlights", href: "/products" },
  { label: "Our Products", href: "/products" },
];

function ProductSection({
  section,
  accentClassName,
}: {
  section: ProductDetailSection;
  accentClassName: string;
}) {
  return (
    <ProductSectionContent
      section={section}
      accentClassName={accentClassName}
    />
  );
}

function ProductSectionContent({
  section,
  accentClassName,
}: {
  section: ProductDetailSection;
  accentClassName: string;
}) {
  const sectionTitleClassName =
    "titleClassName" in section && section.titleClassName
      ? section.titleClassName
      : accentClassName;
  const stats =
    "stats" in section && Array.isArray(section.stats)
      ? section.stats
      : null;

  return (
    <section>
      {section.title ? (
        <h2 className={`text-[14px] font-bold leading-5 md:text-[15px] ${sectionTitleClassName}`}>
          {section.title}
        </h2>
      ) : null}

      {"paragraphs" in section && section.paragraphs ? (
        <div className="mt-2 grid gap-3 text-[14px] font-normal leading-[23px] text-white/92 md:text-[15px] md:leading-[24px]">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : null}

      {"bullets" in section && section.bullets ? (
        <ul className="mt-2 grid gap-2 text-[14px] font-normal leading-[23px] text-white/92 md:text-[15px] md:leading-[24px]">
          {section.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span
                className="mt-[9px] size-[4px] shrink-0 rounded-full bg-white/92"
                aria-hidden="true"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {"pillars" in section && section.pillars ? (
        <ol className="mt-3 grid gap-1 text-[14px] font-normal leading-[23px] text-white/92 md:text-[15px] md:leading-[24px]">
          {section.pillars.map((pillar) => (
            <li key={pillar.label}>
              <span className={`font-bold ${accentClassName}`}>{pillar.label}</span>
              <span> - {pillar.body}</span>
            </li>
          ))}
        </ol>
      ) : null}

      {stats ? (
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[7px] bg-[#07304a] px-3 py-3 shadow-[0_14px_32px_rgba(0,0,0,0.12)]"
            >
              <h3 className="text-[12px] font-bold leading-4 text-primary-sky-blue">
                {stat.label}
              </h3>
              <p className="mt-2 text-[11px] font-medium leading-[17px] text-white/88">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}

function ProductMediaPanel({
  media,
  panelHeightClassName = "",
}: {
  media: readonly ProductDetailMedia[];
  panelHeightClassName?: string;
}) {
  return (
    <div className="grid h-full gap-3">
      {media.map((image) => {
        const isContain = image.fit === "contain";
        const imageClassName =
          "className" in image && image.className
            ? image.className
            : isContain
              ? "object-contain p-8"
              : "object-cover";
        const wrapperClassName =
          "wrapperClassName" in image && image.wrapperClassName
            ? image.wrapperClassName
            : "";
        const wrapperBackgroundColor =
          "wrapperBackgroundColor" in image && typeof image.wrapperBackgroundColor === "string"
            ? image.wrapperBackgroundColor
            : "";
        const backgroundClassName =
          wrapperClassName || (isContain ? "bg-[#033241]" : "bg-[#12394d]");

        return (
          <div
            key={image.src}
            style={
              wrapperBackgroundColor
                ? { backgroundColor: wrapperBackgroundColor }
                : undefined
            }
            className={`relative h-full min-h-[220px] overflow-hidden rounded-[20px] md:min-h-0 ${panelHeightClassName} ${backgroundClassName}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 768px) 583px, 100vw"
              className={imageClassName}
            />
          </div>
        );
      })}
    </div>
  );
}

function ProductQrCode() {
  return (
    <div
      role="img"
      aria-label="Product QR code"
      className="grid grid-cols-[repeat(17,4px)] gap-[2px] rounded-[4px] bg-white p-2 shadow-[0_16px_36px_rgba(0,0,0,0.24)] md:grid-cols-[repeat(17,5px)] md:gap-[2px] md:p-3"
    >
      {Array.from({ length: 17 * 17 }).map((_, index) => {
        const row = Math.floor(index / 17);
        const col = index % 17;
        const isDark = isQrCellDark(row, col);

        return (
          <span
            key={`${row}-${col}`}
            className={isDark ? "size-1 bg-black md:size-[5px]" : "size-1 bg-white md:size-[5px]"}
          />
        );
      })}
    </div>
  );
}

function getProductQrImageSrc(detail: NmdcGroupProductDetail) {
  if (detail.slug === "safeen-nav") {
    return "/images/landing/products/qr/safeen-nav-subsea.png";
  }

  if (detail.slug === "whipstock-system") {
    return "/images/landing/products/qr/whipstock-system-qr.png";
  }

  return `/images/landing/products/qr/${detail.slug}.png`;
}

function shouldShowProductQrImage(detail: NmdcGroupProductDetail) {
  return detail.slug !== "esp-pump";
}

function ProductQrImage({ detail }: { detail: NmdcGroupProductDetail }) {
  if (!shouldShowProductQrImage(detail)) {
    return null;
  }

  return (
    <Image
      src={getProductQrImageSrc(detail)}
      alt={`${detail.title} QR code`}
      width={154}
      height={154}
      className="size-[128px] bg-white md:size-[154px]"
    />
  );
}

function isQrCellDark(row: number, col: number) {
  const inTopLeft = row <= 4 && col <= 4;
  const inTopRight = row <= 4 && col >= 12;
  const inBottomLeft = row >= 12 && col <= 4;
  const inFinderHole =
    ((row >= 1 && row <= 3 && col >= 1 && col <= 3) ||
      (row >= 1 && row <= 3 && col >= 13 && col <= 15) ||
      (row >= 13 && row <= 15 && col >= 1 && col <= 3)) &&
    !(row === 2 || row === 14) &&
    !(col === 2 || col === 14);

  return (
    ((inTopLeft || inTopRight || inBottomLeft) && !inFinderHole) ||
    ((row * 7 + col * 11) % 5 === 0 && row > 5 && col > 5) ||
    ((row + col) % 7 === 0 && row > 4 && col < 12)
  );
}
