import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "../../../app/components/landing/icons";
import { Header } from "../../../app/components/landing/Header";
import { NmdcFooter } from "../../../app/components/landing/NmdcFooter";
import { nmdcGroupLandingContent } from "./content";
import {
  nmdcGroupProductFooterLinks,
  type NmdcGroupProductDetail,
} from "./productDetailsContent";

type ProductDetailSection = NmdcGroupProductDetail["sections"][number];
type ProductDetailMedia = NmdcGroupProductDetail["media"][number];

export function NmdcGroupProductDetailPage({
  detail,
}: {
  detail: NmdcGroupProductDetail;
}) {
  if (detail.slug === "mussafah-yard") {
    return <MussafahYardDetailLayout detail={detail} />;
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#062638] text-white">
      <section className="relative isolate overflow-hidden bg-[#082c40] px-5 pb-12 pt-[104px] md:min-h-[788px] md:px-10 md:pb-[72px] md:pt-[54px]">
        <div
          className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#071e34_0%,#082c40_48%,#052235_100%)]"
          aria-hidden="true"
        />
        <div
          className="absolute right-[-120px] top-[160px] -z-10 h-[390px] w-[520px] rotate-[-34deg] bg-white/8 md:right-[-74px] md:top-[174px] md:h-[536px] md:w-[610px]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-[-25%] bottom-[-110px] -z-10 h-[260px] rotate-[-5deg] bg-[repeating-linear-gradient(180deg,rgba(25,174,232,0.12)_0px,rgba(25,174,232,0.12)_1px,transparent_1px,transparent_8px)] opacity-60 md:bottom-[-52px]"
          aria-hidden="true"
        />

        <div className="md:hidden">
          <Header
            brandName={nmdcGroupLandingContent.brand.name}
            logo={nmdcGroupLandingContent.brand.logo}
            logoAlt={nmdcGroupLandingContent.brand.logoAlt}
            links={nmdcGroupLandingContent.nav.links}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1240px]">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-[14px] font-bold leading-5 text-white transition-colors hover:text-primary-sky-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-sky-blue md:gap-3 md:text-[15px] md:leading-6"
          >
            <ArrowLeft className="size-5" />
            Back
          </Link>

          <h1 className="mt-6 flex max-w-full flex-wrap items-baseline gap-x-2 text-[22px] font-bold leading-[30px] md:mt-[30px] md:gap-x-[7px] md:text-[20px] md:leading-7">
            <span className={detail.accentClassName}>{detail.brandName}</span>
            <span className="text-white/90">|</span>
            <span className="min-w-0 break-words text-white">{detail.title}</span>
          </h1>

          <div className="mt-7 hidden md:grid md:grid-cols-[minmax(0,0.96fr)_minmax(320px,0.82fr)] md:items-start md:gap-4">
            <ProductTextCard detail={detail} />
            <ProductMediaPanel media={detail.media} />
          </div>

          <div className="mt-6 grid gap-5 md:hidden">
            <ProductTextCard detail={detail} />
            <ProductMediaPanel media={detail.media} />
          </div>

          <div className="mt-9 flex justify-center md:mt-10">
            <ProductQrCode />
          </div>
        </div>
      </section>

      <NmdcFooter variant="compact" pageLinks={nmdcGroupProductFooterLinks} />
    </main>
  );
}

function MussafahYardDetailLayout({
  detail,
}: {
  detail: Extract<NmdcGroupProductDetail, { slug: "mussafah-yard" }>;
}) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0d2638] text-white">
      <section className="relative isolate overflow-hidden bg-[#0d2638] px-5 pb-12 pt-[104px] md:min-h-[1390px] md:px-10 md:pb-[112px] md:pt-[64px]">
        <div
          className="absolute inset-0 -z-20 bg-[#0d2638]"
          aria-hidden="true"
        />
        <div
          className="absolute right-[-150px] top-[180px] -z-10 h-[440px] w-[520px] rotate-[-34deg] bg-white/8 md:right-[-96px] md:top-[201px] md:h-[726px] md:w-[676px]"
          aria-hidden="true"
        />

        <div className="md:hidden">
          <Header
            brandName={nmdcGroupLandingContent.brand.name}
            logo={nmdcGroupLandingContent.brand.logo}
            logoAlt={nmdcGroupLandingContent.brand.logoAlt}
            links={nmdcGroupLandingContent.nav.links}
          />
        </div>

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

          <div className="mt-6 grid gap-5 md:mt-[54px] md:grid-cols-[641px_583px] md:gap-4">
            <MussafahTextCard detail={detail} />
            <div className="relative h-[360px] overflow-hidden rounded-[20px] bg-[#12394d] md:h-[846px] md:rounded-[20px]">
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
            <Image
              src="/images/landing/products/mussafah-yard-qr.webp"
              alt="Mussafah Yard QR code"
              width={154}
              height={154}
              className="size-[128px] bg-white md:size-[154px]"
            />
          </div>
        </div>
      </section>

      <NmdcFooter
        variant="compact"
        logo={{
          src: "/images/landing/logo-energy.webp",
          alt: "NMDC Energy",
          width: 146,
          height: 46,
          className: "h-[54px] w-[146px] object-cover object-center md:h-[58px] md:w-[156px]",
        }}
        pageLinks={mussafahFooterLinks}
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
    <article className="rounded-[20px] bg-[#213848] px-5 py-6 shadow-[0_24px_64px_rgba(0,0,0,0.16)] md:min-h-[846px] md:px-6 md:py-7">
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

function ProductTextCard({ detail }: { detail: NmdcGroupProductDetail }) {
  return (
    <article className="rounded-[8px] bg-[#21465a]/86 px-5 py-5 shadow-[0_24px_64px_rgba(0,0,0,0.16)] md:min-h-[330px] md:px-6 md:py-6">
      <div className="grid gap-4 text-[13px] font-medium leading-[21px] text-white md:text-[13px] md:leading-[20px]">
        {detail.summary.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-5 grid gap-5">
        {detail.sections.map((section) => (
          <ProductSection key={section.title} section={section} />
        ))}
      </div>

      {"cta" in detail && detail.cta ? (
        <Link
          href={detail.cta.href}
          className="group mt-5 inline-flex h-8 items-center gap-2 rounded-[4px] bg-[#0a344d] px-3 text-[12px] font-bold leading-4 text-white transition-colors hover:bg-primary-sky-blue"
        >
          <span className="size-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-primary-sky-blue group-hover:border-l-white" />
          {detail.cta.label}
        </Link>
      ) : null}
    </article>
  );
}

const mussafahFooterLinks = [
  { label: "Home", href: "/" },
  { label: "NMDC Energy Overview", href: "/products" },
  { label: "Yard Highlights", href: "/products" },
  { label: "Our Products", href: "/products" },
];

function ProductSection({ section }: { section: ProductDetailSection }) {
  return (
    <section>
      {section.title ? (
        <h2 className="text-[13px] font-bold leading-5 text-primary-sky-blue">
          {section.title}
        </h2>
      ) : null}

      {"paragraphs" in section && section.paragraphs ? (
        <div className="mt-2 grid gap-3 text-[13px] font-medium leading-[21px] text-white">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : null}

      {"bullets" in section && section.bullets ? (
        <ul className="mt-2 grid gap-2 text-[13px] font-medium leading-[20px] text-white">
          {section.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span
                className="mt-[8px] size-[4px] shrink-0 rounded-full bg-primary-sky-blue"
                aria-hidden="true"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {"stats" in section && section.stats ? (
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {section.stats.map((stat) => (
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

function ProductMediaPanel({ media }: { media: readonly ProductDetailMedia[] }) {
  return (
    <div className="grid gap-3">
      {media.map((image) => {
        const isContain = image.fit === "contain";

        return (
          <div
            key={image.src}
            className={`relative overflow-hidden rounded-[8px] ${
              isContain
                ? "h-[210px] bg-[#033241] md:h-[330px]"
                : "h-[220px] bg-[#12394d] md:h-[330px]"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 768px) 520px, 100vw"
              className={isContain ? "object-contain p-4" : "object-cover"}
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
