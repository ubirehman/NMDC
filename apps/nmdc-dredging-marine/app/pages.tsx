import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { DmVideoPlayer } from "../components/DmVideoPlayer";
import { DmVideoCarousel } from "../components/DmVideoCarousel";
import { DmHomeCardRail } from "../components/DmHomeCardRail";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HydraulicFacilityImageCarousel } from "../components/HydraulicFacilityImageCarousel";
import { CaissonImageCarousel } from "../components/CaissonImageCarousel";
import { VesselDetailCarousel } from "../components/VesselDetailCarousel";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "../components/icons";
import {
  getDmNavLinks,
  nmdcDredgingMarineContent as content,
} from "../content/content";

const nmdcGroupAppUrl =
  process.env.NEXT_PUBLIC_NMDC_GROUP_APP_URL ?? "http://localhost:3120";
const dredgingMarineAppUrl =
  process.env.NEXT_PUBLIC_DREDGING_MARINE_APP_URL ?? "http://localhost:3121";

function getAppBaseUrl(url: string) {
  return url.replace(/\/$/, "");
}

function getPdfViewerHref(filePath: string, title: string, returnTo: string) {
  const params = new URLSearchParams({
    file: filePath,
    title,
    returnTo,
  });

  return `${getAppBaseUrl(nmdcGroupAppUrl)}/pdf-viewer?${params.toString()}`;
}

function getDredgingMarinePdfSource(filePath: string) {
  if (filePath.startsWith("http://") || filePath.startsWith("https://")) {
    return filePath;
  }

  const baseUrl = getAppBaseUrl(dredgingMarineAppUrl);

  if (baseUrl.startsWith("http")) {
    return `${baseUrl}${filePath}`;
  }

  return filePath;
}

function getDredgingMarineReturnPath(path: string) {
  return `${getAppBaseUrl(dredgingMarineAppUrl)}${path}`;
}

type HeroProps = {
  activeHref: string;
  title: string;
  eyebrow?: string;
  copy?: string;
  image: string;
  tall?: boolean;
  children?: ReactNode;
};

function DmHero({
  activeHref,
  title,
  eyebrow,
  copy,
  image,
  tall = false,
  children,
}: HeroProps) {
  return (
    <section
      className={`relative isolate overflow-hidden bg-dm-navy px-5 text-white md:px-10 ${
        tall ? "min-h-[650px] md:min-h-[720px]" : "min-h-[360px] md:min-h-[430px]"
      }`}
    >
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,15,26,0.36)_0%,rgba(3,15,26,0.58)_50%,rgba(3,15,26,0.90)_100%)]"
        aria-hidden="true"
      />
      <Header links={getDmNavLinks(activeHref)} />
      <div className="relative z-10 mx-auto flex min-h-[inherit] w-full max-w-[1240px] flex-col justify-end pb-10 pt-[116px] md:pb-14 md:pt-[132px]">
        <div className="max-w-[760px] pb-2 [@media_(pointer:coarse)_and_(min-width:768px)_and_(max-width:1199px)]:max-w-[calc(100vw-80px)]">
          {eyebrow ? (
            <p className="text-[18px] font-bold uppercase leading-6 text-dm-cyan md:text-[22px]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-2 text-[34px] font-bold uppercase leading-[1.08] md:text-[58px]">
            {title}
          </h1>
          {copy ? (
            <p className="mt-5 max-w-[610px] text-sm leading-6 text-white/86 md:text-[18px] md:leading-8">
              {copy}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

function CarouselControls({
  dark = false,
  largeMobile = false,
}: {
  dark?: boolean;
  largeMobile?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-center ${
        largeMobile ? "mt-8 gap-7 md:mt-5 md:gap-3" : "mt-5 gap-3"
      }`}
    >
      <button
        type="button"
        aria-label="Previous item"
        className={`flex items-center justify-center rounded-full border transition-colors ${
          largeMobile ? "size-[58px] md:size-8" : "size-8"
        } ${
          dark
            ? "border-white/28 text-white/72 hover:border-white hover:text-white"
            : "border-dm-text/16 text-dm-text/60 hover:border-dm-cyan hover:text-dm-text"
        }`}
      >
        <ArrowLeft className={largeMobile ? "size-7 md:size-4" : "size-4"} />
      </button>
      <button
        type="button"
        aria-label="Next item"
        className={`flex items-center justify-center rounded-full bg-dm-cyan text-white transition-colors hover:bg-dm-blue ${
          largeMobile ? "size-[58px] md:size-8" : "size-8"
        }`}
      >
        <ArrowRight className={largeMobile ? "size-7 md:size-4" : "size-4"} />
      </button>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div>
      {eyebrow ? (
        <p className="text-sm font-bold uppercase leading-5 text-dm-cyan">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-2 text-[26px] font-bold uppercase leading-[1.15] md:text-[34px] ${
          light ? "text-white" : "text-dm-blue"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

function getVesselCardImageClass(slug: string) {
  const base = "object-cover transition-transform duration-500";

  switch (slug) {
    case "al-mirfa":
      return `${base} object-[52%_50%] group-hover:scale-[1.03]`;
    case "jananah":
      return `${base} origin-bottom scale-[2.18] object-[54%_100%] group-hover:scale-[2.25]`;
    case "sarb":
      return `${base} object-[50%_44%] group-hover:scale-[1.03]`;
    case "ghasha":
      return `${base} object-[52%_50%] group-hover:scale-[1.03]`;
    default:
      return `${base} object-center group-hover:scale-[1.03]`;
  }
}

type VesselCardProps = {
  vessel: (typeof content.marineVessels.items)[number];
};

type OperationalBarMetric = {
  year: string;
  value: number;
  label?: string;
};

type OperationalStatusMetric = {
  year: string;
  totalLabel: string;
  completed: number;
  ongoing: number;
};

type OperationalHighlightsContent = {
  title: string;
  items: readonly {
    title: string;
    copy: string;
    unit: string;
    image?: {
      src: string;
      alt: string;
    };
    values?: readonly OperationalBarMetric[];
    legend?: readonly {
      label: string;
      color: string;
    }[];
    statusValues?: readonly OperationalStatusMetric[];
  }[];
};

function MarineVesselCard({ vessel }: VesselCardProps) {
  return (
    <div className="group relative block h-[420px] overflow-hidden rounded-[14px] bg-dm-navy shadow-[0_18px_45px_-30px_rgba(4,28,42,0.65)] md:aspect-[398/421] md:h-auto md:min-h-[360px]">
      {/* Full-card navigation link sits behind everything */}
      <Link
        href={`/marine-vessels/${vessel.slug}`}
        className="absolute inset-0 z-0"
        aria-label={vessel.name}
      />
      <Image
        src={vessel.image}
        alt={vessel.name}
        fill
        sizes="(min-width: 768px) 398px, calc(100vw - 40px)"
        className={getVesselCardImageClass(vessel.slug)}
      />
      <div className="absolute inset-x-0 bottom-0 translate-y-14 rounded-t-[18px] bg-[linear-gradient(101deg,rgba(4,38,55,0.98)_0%,rgba(8,72,78,0.90)_100%)] backdrop-blur-[10px] transition-transform duration-300 ease-out group-hover:translate-y-0">
        <div className="px-5 pb-0 pt-5 text-white">
          <h2 className="text-[18px] font-bold leading-[22px] text-dm-cyan">
            {vessel.name}
          </h2>
          <p className="mt-1 text-[14px] leading-[18px] text-white/80">
            {vessel.type}
          </p>
          <hr className="mt-4 border-white/20" />
          <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 pb-5 text-[13px] leading-[18px] text-white">
            {vessel.specs.map(([label, value], index: number) => (
              <div
                key={label}
                className={`whitespace-nowrap ${index % 2 === 0 ? "text-left" : "text-right"}`}
              >
                <dt className="inline font-normal">{label}: </dt>
                <dd className="inline font-normal">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <a
          href={getPdfViewerHref(
            getDredgingMarinePdfSource(vessel.detail.specificationFile),
            `${vessel.name} Specification`,
            getDredgingMarineReturnPath("/marine-vessels"),
          )}
          className="relative z-10 flex items-center justify-center gap-3 rounded-t-[14px] bg-[#0a1e2e]/80 py-4 transition-colors hover:bg-[#0a1e2e]"
        >
          <EyeIcon className="size-[22px] shrink-0 text-dm-cyan" />
          <span className="text-[16px] font-semibold text-dm-cyan">
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

function MediaPanel({
  image,
  title,
  dark = false,
}: {
  image: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-[8px] ${
        dark ? "bg-dm-deep-navy" : "bg-white"
      }`}
    >
      <div className="relative">
        <DmVideoPlayer
          src={content.videoSources[0].src}
          ariaLabel={`Play ${title}`}
          className="h-[250px] w-full bg-dm-navy object-cover md:h-[430px]"
          poster={content.videoSources[0].poster}
        />
      </div>
      <figcaption
        className={`px-4 py-3 text-sm font-bold uppercase leading-5 ${
          dark ? "text-white" : "text-dm-blue"
        }`}
      >
        {title}
      </figcaption>
    </figure>
  );
}

export function DredgingMarineHomePage() {
  const home = content.home;

  return (
    <main className="overflow-x-hidden">
      <section className="relative isolate min-h-[100svh] w-full bg-dm-navy">
        <Image
          src={home.hero.background.src}
          alt={home.hero.background.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center] md:object-center"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,15,26,0.74)_0%,rgba(3,15,26,0.58)_34%,rgba(3,15,26,0.18)_100%)]"
          aria-hidden="true"
        />

        <Header links={getDmNavLinks("/")} />

        <div className="relative z-10 mx-auto min-h-[100svh] w-full max-w-[1240px] px-5 pb-10 pt-12 md:min-h-[786px] md:px-10 md:pb-0 md:pt-0">
          <div className="flex min-h-[calc(100svh-7rem)] flex-col justify-start gap-8 pt-[76px] md:block md:h-[786px] md:min-h-0 md:pt-0">
            <div className="md:absolute px-10 lg:px-0 md:left-0 md:top-[244px]">
              <div className="flex w-full max-w-[559px] flex-col gap-6 text-white md:gap-8 [@media_(pointer:coarse)_and_(min-width:768px)_and_(max-width:1199px)]:max-w-[calc(100vw-80px)]">
                <h1 className="max-w-[547px] text-[28px] font-bold uppercase leading-[1.18] tracking-[-0.2px] md:text-[48px] md:leading-[56px] md:tracking-[-0.5px]">
                  <span className="block text-white md:inline">
                    {home.hero.headline.leading}
                  </span>
                  <span className="block text-white md:inline">
                    <span className="hidden md:inline"> </span>
                    {home.hero.headline.neutral}
                  </span>
                  <br />
                  <span className="text-dm-cyan">
                    <span className="block md:inline">
                      {home.hero.headline.accent[0]}
                    </span>
                    <span className="block md:inline">
                      <span className="hidden md:inline"> </span>
                      {home.hero.headline.accent[1]}
                    </span>
                  </span>
                </h1>

                <div className="flex w-full max-w-[350px] items-stretch gap-3 md:max-w-[559px] [@media_(pointer:coarse)_and_(min-width:768px)_and_(max-width:1199px)]:max-w-[calc(100vw-80px)]">
                  <span
                    aria-hidden="true"
                    className="mt-[2px] h-[43px] w-[3px] shrink-0 rounded-[20px] bg-dm-cyan shadow-[0_0_6px_0_rgba(41,183,227,0.75)]"
                  />
                  <p className="flex-1 pt-[1px] text-[13px] leading-[1.45] text-white md:text-[16px] md:leading-[1.5]">
                    {home.hero.subhead}
                  </p>
                </div>

                <Link
                  href={home.hero.cta.href}
                  className="group inline-flex items-center gap-0.5 self-start"
                >
                  <span className="flex h-12 min-w-[136px] items-center justify-center rounded-full bg-white px-6 text-base font-medium text-primary-blue transition-colors hover:bg-primary-sky-blue md:w-[174px]">
                    {home.hero.cta.label}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex size-12 items-center justify-center rounded-full bg-primary-sky-blue text-white transition-transform -rotate-45 group-hover:rotate-0"
                  >
                    <ArrowUpRight className="size-5" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="md:absolute md:translate-y-12 md:bottom-[58px] md:right-0 [@media_(pointer:coarse)_and_(min-width:768px)_and_(max-width:1199px)]:max-w-[calc(100vw-80px)]">
              <DmHomeCardRail cards={home.cards} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function DmOperationalHighlightsSection({
  highlights,
}: {
  highlights: OperationalHighlightsContent;
}) {
  return (
    <section className="bg-[#0b2d3f] px-5 pb-[72px] pt-[72px] text-white md:px-10 md:pb-[104px] md:pt-[92px]">
      <div className="mx-auto w-full max-w-[1240px]">
        <h2 className="max-w-[1120px] text-[34px] font-bold uppercase leading-[42px] tracking-normal text-white md:text-[50px] md:leading-[60px]">
          {highlights.title}
        </h2>

        <div className="mt-9 grid min-w-0 grid-cols-[minmax(0,1fr)] gap-5 md:mt-12 md:grid-cols-2 md:gap-x-5 md:gap-y-7">
          {highlights.items.map((item) => (
            <DmOperationalHighlightCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DmOperationalHighlightCard({
  item,
}: {
  item: OperationalHighlightsContent["items"][number];
}) {
  const isProjectStatus = Boolean(item.statusValues);

  return (
    <article className="min-w-0 rounded-[22px] bg-[#e5e5e5] px-5 pb-6 pt-6 text-dm-text md:min-h-[302px] md:px-6 md:pb-7">
      <h3 className="text-[22px] font-bold leading-7 text-dm-text">
        {item.title}
      </h3>
      <p className="mt-2 min-h-[48px] break-words text-[15px] leading-6 text-[#263a55] md:text-[16px]">
        {item.copy}
      </p>

      {isProjectStatus && item.statusValues ? (
        <DmProjectStatusChart
          unit={item.unit}
          values={item.statusValues}
          legend={item.legend ?? []}
        />
      ) : item.values ? (
        <div className="mt-4 grid gap-5 md:grid-cols-[minmax(0,260px)_minmax(0,274px)] md:items-end md:gap-4">
          <div className="min-w-0">
            <p className="text-right text-[18px] font-bold leading-6 text-[#465871]">
              {item.unit}
            </p>
            <DmOperationalBarChart values={item.values} />
          </div>

          {item.image ? (
            <div className="relative h-[190px] min-w-0 overflow-hidden rounded-[16px] bg-dm-navy md:h-[198px]">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="(min-width: 768px) 274px, calc(100vw - 80px)"
                className="object-cover object-center"
              />
            </div>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

const operationalBarColors = ["#acd3ea", "#0b93cf", "#24116f"];

function DmOperationalBarChart({
  values,
}: {
  values: readonly OperationalBarMetric[];
}) {
  const maxValue = Math.max(...values.map((item) => item.value), 1);

  return (
    <div className="mt-2">
      <div className="grid h-[148px] grid-cols-3 items-end gap-3 border-b border-transparent">
        {values.map((item, index) => {
          const barHeight =
            item.value > 0 ? Math.max(56, (item.value / maxValue) * 142) : 0;
          const label = item.label ?? String(item.value);
          const isLightBar = index === 0;

          return (
            <div
              key={`${item.year}-${index}`}
              className="grid h-full min-w-0 items-end justify-items-center"
            >
              {item.value > 0 ? (
                <div
                  className="flex w-full max-w-[74px] items-center justify-center rounded-t-[8px] px-1"
                  style={{
                    height: `${barHeight}px`,
                    backgroundColor:
                      operationalBarColors[index % operationalBarColors.length],
                  }}
                >
                  {label ? (
                    <span
                      className={`text-[18px] font-bold leading-none ${
                        isLightBar ? "text-[#2c3e55]" : "text-white"
                      }`}
                    >
                      {label}
                    </span>
                  ) : null}
                </div>
              ) : (
                <span aria-hidden="true" />
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-2 grid grid-cols-3 gap-3 text-center text-[14px] leading-5 text-[#263a55]">
        {values.map((item, index) => (
          <span key={`${item.year}-label-${index}`}>{item.year}</span>
        ))}
      </div>
    </div>
  );
}

function DmProjectStatusChart({
  unit,
  values,
  legend,
}: {
  unit: string;
  values: readonly OperationalStatusMetric[];
  legend: readonly {
    label: string;
    color: string;
  }[];
}) {
  const maxValue = Math.max(
    ...values.map((item) => item.completed + item.ongoing),
    1,
  );

  return (
    <div className="mt-4 grid gap-5 md:grid-cols-[minmax(0,1fr)_112px] md:items-center">
      <div className="min-w-0">
        <p className="text-right text-[18px] font-bold leading-6 text-[#465871]">
          {unit}
        </p>
        <div className="mt-3 grid h-[162px] grid-cols-3 items-end gap-5 px-4 md:px-10">
          {values.map((item) => {
            const total = item.completed + item.ongoing;
            const totalHeight = Math.max(70, (total / maxValue) * 142);
            const completedHeight = (item.completed / total) * totalHeight;
            const ongoingHeight = (item.ongoing / total) * totalHeight;

            return (
              <div
                key={item.year}
                className="grid h-full min-w-0 items-end justify-items-center"
              >
                <div className="grid justify-items-center gap-2">
                  <span className="text-[20px] font-bold leading-none text-dm-text">
                    {item.totalLabel}
                  </span>
                  <div className="w-[76px] overflow-hidden rounded-t-[8px]">
                    <div
                      className="flex items-center justify-center bg-[#062d44] text-[18px] font-bold leading-none text-white"
                      style={{ height: `${ongoingHeight}px` }}
                    >
                      {item.ongoing}
                    </div>
                    <div
                      className="flex items-center justify-center bg-[#0b93cf] text-[18px] font-bold leading-none text-white"
                      style={{ height: `${completedHeight}px` }}
                    >
                      {item.completed}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-2 grid grid-cols-3 gap-5 px-4 text-center text-[14px] leading-5 text-[#263a55] md:px-10">
          {values.map((item) => (
            <span key={`${item.year}-status-label`}>{item.year}</span>
          ))}
        </div>
      </div>

      <ul className="grid gap-3 justify-self-start text-[15px] leading-5 text-[#263a55] md:justify-self-end">
        {legend.map((item) => (
          <li key={item.label} className="flex items-center gap-3">
            <span
              className="size-5 shrink-0"
              style={{ backgroundColor: item.color }}
              aria-hidden="true"
            />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function DredgingMarineOverviewPage() {
  const overview = content.overview;

  return (
    <main className="overflow-x-hidden bg-[#f4f4f6] text-dm-text">
      <section className="relative isolate bg-dm-navy px-5 pb-[56px] pt-[132px] text-white md:min-h-[843px] md:px-10 md:pb-[80px] md:pt-[176px]">
        <Header links={getDmNavLinks(overview.activeHref)} />
        <div className="mx-auto grid min-w-0 w-full max-w-[1240px] grid-cols-[minmax(0,1fr)] gap-10 md:grid-cols-[minmax(0,482px)_minmax(0,715px)] md:items-start md:gap-[43px]">
          <div className="min-w-0 w-full max-w-[350px] md:max-w-none md:pt-[17px]">
            <p className="text-[20px] font-bold leading-7 text-dm-cyan md:text-[31px] md:leading-[38px]">
              {overview.eyebrow}
            </p>
            <h1 className="mt-[11px] text-[42px] font-bold leading-[48px] text-white md:text-[64px] md:leading-[74px]">
              {overview.title}
            </h1>
            <div className="mt-[22px] space-y-3 break-words text-[16px] leading-7 text-white/90 md:text-[21px] md:leading-[28px]">
              {overview.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="relative h-[280px] min-w-0 w-full max-w-[350px] overflow-hidden rounded-[18px] md:h-[584px] md:max-w-none md:rounded-[24px]">
            <Image
              src={overview.image.src}
              alt={overview.image.alt}
              fill
              priority
              sizes="(min-width: 768px) 715px, calc(100vw - 40px)"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section
        id={overview.capabilities.id}
        className="bg-[#f4f4f6] px-5 pb-[86px] pt-[70px] md:px-10 md:pb-[86px] md:pt-[70px]"
      >
        <div className="mx-auto w-full max-w-[1240px]">
          <h2 className="text-[32px] font-bold uppercase leading-[40px] text-dm-blue md:text-[48px] md:leading-[58px]">
            {overview.capabilities.title}
          </h2>
          <div className="mt-[43px] grid min-w-0 grid-cols-[minmax(0,1fr)] gap-5 md:grid-cols-3 md:gap-x-[20px] md:gap-y-[20px]">
            {overview.capabilities.items.map((capability, index) => (
              <article
                key={capability.title}
                className="group relative min-w-0 w-full overflow-hidden rounded-[12px] bg-dm-deep-navy px-6 pb-7 pt-6 text-white shadow-[0_16px_38px_-28px_rgba(5,38,59,0.72)] transition-transform duration-200 hover:-translate-y-1 md:min-h-[468px] md:rounded-[14px]"
              >
                <div className="flex items-start justify-between gap-5">
                  <Image
                    src={capability.image}
                    alt={capability.title}
                    width={274}
                    height={158}
                    className="h-[158px] w-full rounded-[6px] object-cover transition-transform duration-500 group-hover:scale-105 md:h-[158px] md:w-[274px]"
                  />
                  <span className="shrink-0 text-[32px] font-bold leading-none text-white md:text-[34px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="pt-[13px]">
                  <h3 className="text-[18px] font-bold leading-6 text-dm-cyan">
                    {capability.title}
                  </h3>
                  <p className="mt-[14px] break-words text-[15px] leading-[23px] text-white md:text-[16px] md:leading-6">
                    {capability.copy}
                  </p>
                  {"bullets" in capability ? (
                    <ul className="mt-2 space-y-1 text-[15px] leading-[23px] text-white md:text-[16px] md:leading-6">
                      {capability.bullets.map((item) => (
                        <li key={item} className="relative pl-4">
                          <span className="absolute left-0 top-[0.72em] size-1 rounded-full bg-white" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DmOperationalHighlightsSection highlights={overview.operationalHighlights} />

      <Footer />
    </main>
  );
}

export function DredgingMarineVesselsPage() {
  const marineVessels = content.marineVessels;
  const heroMeta = marineVessels.hero.copy.split("|").map((item) => item.trim());

  return (
    <main className="overflow-x-hidden bg-[#f4f4f6] text-dm-text">
      <section className="relative isolate h-[362px] overflow-hidden bg-dm-deep-navy px-5 text-white md:h-[488px] md:px-10">
        <Image
          src={marineVessels.hero.mobileImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_50%] md:hidden"
        />
        <Image
          src={marineVessels.hero.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-[center_62%] md:block"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,15,26,0.56)_0%,rgba(3,15,26,0.46)_45%,rgba(3,15,26,0.70)_100%)]"
          aria-hidden="true"
        />
        <Header links={getDmNavLinks(marineVessels.hero.activeHref)} />
        <div className="relative z-10 mx-auto hidden h-full w-full max-w-[1240px] flex-col justify-end pb-[86px] pt-[128px] md:flex">
          <h1 className="flex flex-wrap items-baseline gap-x-[18px] text-[34px] font-bold leading-[1.12] md:text-[48px] md:leading-[58px]">
            <span className="text-dm-cyan">{marineVessels.hero.eyebrow}</span>
            <span className="hidden text-white/90 md:inline">|</span>
            <span className="text-white">{marineVessels.hero.title}</span>
          </h1>
          <p className="mt-[15px] flex flex-wrap items-center gap-x-3 text-[16px] leading-[24px] text-white md:text-[18px] md:leading-[26px]">
            {heroMeta.map((item, index) => (
              <span
                key={item}
                className={
                  index === 0
                    ? undefined
                    : "border-l border-white/85 pl-3"
                }
              >
                {item}
              </span>
            ))}
          </p>
        </div>
      </section>

      <section className="bg-[#f4f4f6] px-5 pb-[263px] pt-[47px] md:px-10 md:pb-[100px] md:pt-[100px]">
        <div className="mx-auto w-full max-w-[1240px]">
          <div className="grid gap-[25px] md:grid-cols-3 md:gap-x-6 md:gap-y-10">
            {marineVessels.items.map((vessel) => (
              <MarineVesselCard key={vessel.slug} vessel={vessel} />
            ))}
          </div>
        </div>
      </section>

      <section
        data-marine-vessels-video-carousel
        className="bg-dm-deep-navy px-5 pb-[72px] pt-[56px] md:px-10 md:pb-[112px] md:pt-[96px]"
      >
        <div className="mx-auto w-full max-w-[1240px]">
          <DmVideoCarousel videos={content.videoSources} />
        </div>
      </section>

      <Footer />
    </main>
  );
}

type DetailPanelItem = {
  readonly label: string;
  readonly value: string;
};

type DetailPanelData = {
  readonly title: string;
  readonly items: readonly DetailPanelItem[];
};

function VesselDetailPanel({ panel }: { panel: DetailPanelData }) {
  return (
    <article className="rounded-[22px] bg-[#e5edf6] px-6 py-[23px] text-black">
      <h3 className="text-[20px] font-bold leading-7 text-dm-cyan">
        {panel.title}
      </h3>
      <div className="mt-[11px]">
        {panel.items.map((item) => (
          <div
            key={`${panel.title}-${item.label}`}
            className="border-b border-dashed border-[#9ab0c7] py-[13px] last:border-b-0"
          >
            <h4 className="text-[16px] font-bold leading-6">{item.label}</h4>
            {item.value ? (
              <p className="mt-[11px] break-words text-[16px] font-normal leading-6 text-dm-muted">
                {item.value}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </article>
  );
}

export function DredgingMarineVesselDetailPage({ slug }: { slug: string }) {
  const marineVessels = content.marineVessels;
  const vessel =
    marineVessels.items.find((item) => item.slug === slug) ??
    marineVessels.items[0];
  const vesselDetail = vessel.detail;
  const heroMeta = vesselDetail.heroMeta.split("|").map((item) => item.trim());
  const heroKicker =
    "heroKicker" in vesselDetail
      ? vesselDetail.heroKicker
      : marineVessels.detail.kicker;
  const detailImages =
    "images" in vesselDetail && vesselDetail.images.length > 0
      ? vesselDetail.images
      : [{ src: "image" in vesselDetail ? vesselDetail.image : vessel.image, alt: vessel.name }];
  const detailPanels =
    "panels" in vesselDetail
      ? vesselDetail.panels
      : "machinery" in vesselDetail && vesselDetail.machinery.length > 0
        ? [{ title: "Machinery", items: vesselDetail.machinery }]
        : [];
  const detailLeftPanels =
    "leftPanels" in vesselDetail ? vesselDetail.leftPanels : [];

  return (
    <main className="overflow-x-hidden bg-[#f4f4f6] text-dm-text">
      <section className="relative isolate h-[430px] overflow-hidden bg-dm-deep-navy px-5 text-white md:h-[488px] md:px-10">
        <Image
          src={vesselDetail.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,15,26,0.48)_0%,rgba(3,15,26,0.42)_45%,rgba(3,15,26,0.66)_100%)]"
          aria-hidden="true"
        />
        <Header links={getDmNavLinks("/marine-vessels")} />
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1240px] flex-col justify-end pb-[86px] pt-[128px]">
          <h1 className="flex max-w-full flex-wrap items-baseline gap-x-2 text-[30px] font-bold leading-[1.12] md:gap-x-[18px] md:text-[48px] md:leading-[58px]">
            <span className="text-dm-cyan">{vessel.name}</span>
            <span className="hidden text-white/90 md:inline">|</span>
            <span className="basis-full break-words text-white md:basis-auto">
              {heroKicker}
            </span>
          </h1>
          <span className="sr-only text-[22px] font-bold leading-7 text-white">
            {vessel.name}
          </span>
          <p className="mt-[15px] flex flex-wrap items-center gap-x-3 text-[16px] leading-[24px] text-white md:text-[18px] md:leading-[26px]">
            {heroMeta.map((item, index) => (
              <span
                key={item}
                className={
                  index === 0 ? undefined : "border-l border-white/85 pl-3"
                }
              >
                {item}
              </span>
            ))}
          </p>
        </div>
      </section>

      <section className="bg-[#f4f4f6] px-5 pb-[100px] pt-[102px] md:px-10">
        <div className="mx-auto w-full max-w-[1240px]">
          <div className="mx-auto w-full max-w-[1034px]">
            <Link
              href="/marine-vessels"
              className="inline-flex items-center gap-3 text-[16px] font-bold leading-6 text-dm-muted transition-colors hover:text-dm-blue"
            >
              <ArrowLeft className="size-5" />
              {marineVessels.detail.backLabel}
            </Link>

            <h2 className="mt-[16px] text-[42px] font-bold leading-[52px] text-dm-cyan">
              {marineVessels.detail.title}
            </h2>

            <div className="mt-[36px] grid gap-6 text-[16px] font-bold leading-6 text-dm-muted md:grid-cols-3">
              {vesselDetail.classification.map(([label, value]) => (
                <p key={label}>
                  {label} <span className="px-2">{value}</span>
                </p>
              ))}
            </div>

            <div className="mt-[32px] grid gap-6 md:grid-cols-2">
              <div className="grid gap-6 self-start">
                <article className="rounded-[22px] bg-dm-navy px-6 py-[23px] text-white md:min-h-[421px]">
                  <h3 className="text-[20px] font-bold leading-7 text-dm-cyan">
                    Technical Details
                  </h3>
                  <dl className="mt-[15px]">
                    {vesselDetail.technicalDetails.map(([label, value]) => (
                      <div
                        key={label}
                        className="flex flex-col gap-2 border-b border-dashed border-white/28 py-[18px] text-[16px] leading-6 last:border-b-0 md:flex-row md:items-center md:justify-between md:gap-8"
                      >
                        <dt className="font-bold text-white">{label}</dt>
                        <dd className="break-words text-left font-medium text-white md:shrink-0 md:text-right">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </article>

                {detailLeftPanels.map((panel) => (
                  <VesselDetailPanel key={panel.title} panel={panel} />
                ))}
              </div>

              <div className="grid gap-6 self-start">
                {detailPanels.map((panel) => (
                  <VesselDetailPanel key={panel.title} panel={panel} />
                ))}
              </div>
            </div>

            <div className="mt-[38px] flex items-center justify-end gap-8 border-t border-[#c8d4df] pt-0">
              <a
                href={getPdfViewerHref(
                  getDredgingMarinePdfSource(vesselDetail.specificationFile),
                  `${vessel.name} Specification`,
                  getDredgingMarineReturnPath(`/marine-vessels/${vessel.slug}`),
                )}
                className="inline-flex items-center gap-3 text-[18px] font-bold leading-7 text-dm-cyan transition-colors hover:text-dm-blue"
              >
                <span className="text-[22px] leading-none" aria-hidden="true">
                  ⇩
                </span>
                {marineVessels.detail.viewSpecificationLabel}
              </a>
            </div>
          </div>

          <VesselDetailCarousel images={detailImages} vesselName={vessel.name} />
        </div>
      </section>

      <Footer />
    </main>
  );
}

type HydraulicInfoCardData =
  (typeof content.hydraulicPhysicalModel.overview.infoCards)[number];
type HydraulicMediaData = (typeof content.hydraulicPhysicalModel.media)[number];
type HydraulicCapabilityData =
  (typeof content.hydraulicPhysicalModel.capabilities.items)[number];

function HydraulicInfoCard({ card }: { card: HydraulicInfoCardData }) {
  const isDark = card.tone === "dark";

  return (
    <article
      className={`min-w-0 rounded-[18px] px-5 py-6 md:rounded-[22px] md:px-8 md:py-[34px] ${
        isDark
          ? "bg-dm-deep-navy text-white"
          : "bg-[#e5edf6] text-dm-muted"
      }`}
    >
      <div className="flex min-w-0 gap-4 md:gap-5">
        <span
          className={`mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border-2 ${
            isDark
              ? "border-dm-cyan bg-dm-cyan/12"
              : "border-dm-cyan bg-white"
          }`}
          aria-hidden="true"
        >
          <span
            className={`block size-3 rounded-[3px] border-2 ${
              isDark ? "border-white" : "border-dm-cyan"
            }`}
          />
        </span>
        <div className="min-w-0">
          <h2
            className={`text-[20px] font-bold leading-7 md:text-[24px] md:leading-8 ${
              isDark ? "text-white" : "text-dm-blue"
            }`}
          >
            {card.title}
          </h2>
          <ul
            className={`mt-4 space-y-3 text-[15px] leading-6 md:text-[18px] md:leading-8 ${
              isDark ? "text-white/82" : "text-dm-muted"
            }`}
          >
            {card.items.map((item) => (
              <li key={item} className="relative min-w-0 break-words pl-4">
                <span
                  className={`absolute left-0 top-[0.72em] size-1.5 rounded-full ${
                    isDark ? "bg-dm-cyan" : "bg-dm-blue"
                  }`}
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function HydraulicMediaFrame({ item }: { item: HydraulicMediaData }) {
  const isVideo = item.type === "video";

  return (
    <figure className="relative overflow-hidden rounded-[14px] bg-dm-navy shadow-[0_26px_70px_-44px_rgba(0,0,0,0.72)]">
      {isVideo ? (
        <DmVideoPlayer
          src={item.src}
          ariaLabel={`Play ${item.alt}`}
          className="h-[245px] w-full bg-dm-navy object-cover object-[50%_43%] md:h-[560px]"
          poster={item.image}
        />
      ) : (
        <Image
          src={item.image}
          alt={item.alt}
          width={1240}
          height={390}
          className="h-[188px] w-full object-cover object-center md:h-[560px]"
        />
      )}
    </figure>
  );
}

function HydraulicCapabilityCard({
  capability,
  wide = false,
}: {
  capability: HydraulicCapabilityData;
  wide?: boolean;
}) {
  return (
    <article
      className={`min-w-0 rounded-[6px] bg-[#17384d] px-5 py-6 text-white md:px-7 md:py-8 ${
        wide ? "md:col-span-2" : ""
      }`}
    >
      <h3 className="text-[20px] font-bold leading-7 text-white md:text-[24px] md:leading-8">
        {capability.title}
      </h3>
      <ul
        className={`mt-5 grid gap-x-8 gap-y-3 text-[15px] leading-6 text-white md:text-[18px] md:leading-8 ${
          wide ? "md:grid-cols-2" : "md:grid-cols-1"
        }`}
      >
        {capability.points.map((point) => (
          <li key={point} className="relative min-w-0 break-words pl-5">
            <span
              className="absolute left-0 top-[0.68em] size-1.5 rounded-full bg-white"
              aria-hidden="true"
            />
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function HydraulicPhysicalModelPage() {
  const hydraulic = content.hydraulicPhysicalModel;

  return (
    <main className="overflow-x-hidden bg-white text-dm-muted">
      <section className="relative isolate h-[362px] overflow-hidden bg-dm-deep-navy px-5 text-white md:h-[488px] md:px-10">
        <Image
          src={hydraulic.hero.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[52%_50%] md:object-[50%_46%]"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,15,26,0.34)_0%,rgba(3,15,26,0.38)_44%,rgba(3,15,26,0.70)_100%)]"
          aria-hidden="true"
        />
        <Header links={getDmNavLinks(hydraulic.hero.activeHref)} />
        <div className="relative z-10 mx-auto flex h-full w-[calc(100vw-40px)] min-w-0 max-w-[1240px] items-end pb-[45px] pt-[128px] md:w-full md:pb-[76px]">
          <h1 className="w-full max-w-[320px] break-words text-[28px] font-bold uppercase leading-[1.16] text-white md:max-w-[760px] md:text-[48px] md:leading-[58px]">
            <span className="block">{hydraulic.hero.title.neutral}</span>
            <span className="block text-dm-cyan">
              {hydraulic.hero.title.accent}
            </span>
          </h1>
        </div>
      </section>

      <section className="bg-white px-5 py-12 md:px-10 md:py-[96px]">
        <div className="mx-auto w-[calc(100vw-40px)] min-w-0 max-w-[1240px] md:w-full">
          <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-8 md:grid-cols-[minmax(0,672px)_461px] md:items-start md:justify-between">
            <div className="order-2 min-w-0 space-y-5 text-[15px] leading-7 text-dm-muted md:order-1 md:text-[18px] md:leading-8">
              {hydraulic.overview.paragraphs.map((paragraph) => (
                <p key={paragraph} className="break-words">
                  {paragraph}
                </p>
              ))}
            </div>
            <Image
              src={hydraulic.overview.image.src}
              alt={hydraulic.overview.image.alt}
              width={461}
              height={319}
              className="order-1 h-[230px] min-w-0 w-full rounded-[12px] object-cover object-center md:order-2 md:h-full"
            />
          </div>
          <div className="mt-10 grid min-w-0 grid-cols-[minmax(0,1fr)] gap-5 md:mt-[58px] md:grid-cols-2 md:gap-6">
            {hydraulic.overview.infoCards.map((card) => (
              <HydraulicInfoCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="virtual-tour"
        className="bg-dm-deep-navy px-5 py-12 text-white md:px-10 md:py-[96px]"
      >
        <div className="mx-auto w-[calc(100vw-40px)] min-w-0 max-w-[1240px] md:w-full">
          <div className="grid min-w-0 pb-10">
            <div className="relative h-[480px] min-w-0 overflow-hidden rounded-[14px] bg-dm-navy shadow-[0_28px_70px_rgba(0,0,0,0.32)] md:h-[650px] md:rounded-[20px]">
              <iframe
                src="https://my.matterport.com/show/?m=rMCdYNJoynP"
                title="NMDC D&M Coastal and Hydrodynamic Center 3D tour"
                allow="fullscreen; xr-spatial-tracking"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>

          <div className="mt-[62px] md:mt-[60px]">
            <h2 className="text-[30px] font-bold uppercase leading-[1.15] text-white md:text-[42px] md:leading-[52px]">
              {hydraulic.capabilities.title}
            </h2>
            <div className="mt-8 grid min-w-0 grid-cols-[minmax(0,1fr)] gap-6 md:mt-[42px] md:grid-cols-2">
              {hydraulic.capabilities.items.map((capability, index) => (
                <HydraulicCapabilityCard
                  key={capability.title}
                  capability={capability}
                  wide={index === hydraulic.capabilities.items.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f4f6] px-5 py-12 md:px-10 md:py-[96px]">
        <div className="mx-auto w-[calc(100vw-40px)] min-w-0 max-w-[1240px] md:w-full">
          <div className="mt-9 grid min-w-0 gap-12 md:mt-- md:gap-[78px]">
            {hydraulic.testingFacilities.items.map((facility) => (
              <figure key={facility.title} className="min-w-0">
                <h3 className="break-words text-[20px] font-bold uppercase leading-7 text-dm-blue md:text-[24px] md:leading-8">
                  {facility.title}
                </h3>
                {"images" in facility ? (
                  <HydraulicFacilityImageCarousel images={facility.images} />
                ) : (
                  <>
                    <Image
                      src={facility.image}
                      alt={facility.alt}
                      width={1240}
                      height={650}
                      className="mt-5 h-[232px] w-full rounded-[14px] object-cover object-center md:mt-6 md:h-[560px]"
                    />
                    <CarouselControls />
                  </>
                )}
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

type CaissonProcessStep = (typeof content.caissonMethod.process.steps)[number];

function CaissonStepIcon({ step }: { step: CaissonProcessStep }) {
  return (
    <Image
      src={step.iconImage.src}
      alt={step.iconImage.alt}
      width={96}
      height={96}
      className="size-6 object-contain"
    />
  );
}

function CaissonProcessCard({ step }: { step: CaissonProcessStep }) {
  return (
    <article className="mx-1 min-w-0 rounded-[20px] border-2 border-dm-cyan bg-[#e5edf6] px-[18px] py-[22px] text-dm-text md:mx-0 md:rounded-[14px] md:px-7 md:py-6">
      <div className="flex min-w-0 items-center gap-2.5 md:gap-4">
        <span
          className="flex size-6 shrink-0 items-center justify-center"
          aria-hidden="true"
        >
          <CaissonStepIcon step={step} />
        </span>
        <h3 className="min-w-0 text-[16px] font-bold uppercase leading-6 text-dm-text md:text-[14px] md:leading-5">
          {step.title}
        </h3>
      </div>
      <p className="mt-4 break-words text-justify text-[14px] leading-[24px] text-dm-text/78 md:text-left md:text-[14px] md:leading-6">
        {step.copy}
      </p>
    </article>
  );
}

function CaissonAdvantagesPanel({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <article className="mx-1 mt-[56px] rounded-[20px] bg-[#e5edf6] px-5 py-[34px] text-dm-text md:mx-0 md:mt-[32px] md:rounded-[14px] md:px-8 md:py-8">
      <h2 className="text-[24px] font-bold leading-[36px] md:text-[24px] md:leading-8">
        {title}
      </h2>
      <ul className="mt-6 space-y-1 text-[18px] font-bold leading-[30px] text-dm-text/74 md:mt-5 md:space-y-2.5 md:text-[16px] md:font-normal md:leading-7 md:text-dm-text/86">
        {items.map((item) => (
          <li key={item} className="relative min-w-0 break-words pl-7">
            <span
              className="absolute left-0 top-[0.72em] size-1.5 rounded-full bg-dm-text/70"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function CaissonMethodPage() {
  const caisson = content.caissonMethod;

  return (
    <main className="overflow-x-hidden bg-[#f4f4f6] text-dm-text">
      <section className="relative isolate overflow-hidden bg-[#183d4d] px-5 pb-[34px] pt-[124px] text-white md:px-10 md:pb-[90px] md:pt-[146px]">
        <Image
          src={caisson.hero.backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,15,26,0.46)_0%,rgba(3,15,26,0.54)_48%,rgba(3,15,26,0.72)_100%)]"
          aria-hidden="true"
        />
        <Header links={getDmNavLinks(caisson.hero.activeHref)} />
        <div className="relative z-10 mx-auto grid w-[calc(100vw-40px)] min-w-0 max-w-[1240px] gap-[30px] md:w-full md:grid-cols-[minmax(0,492px)_minmax(0,714px)] md:items-center md:justify-between md:gap-[34px]">
          <div className="min-w-0">
            <h1 className="text-[24px] font-bold leading-[36px] md:text-[31px] md:leading-[38px]">
              <span className="text-dm-cyan">
                {caisson.overview.eyebrowAccent}
              </span>
              <span className="text-white"> {caisson.overview.eyebrowSuffix}</span>
              <br />
              <span className="text-white">{caisson.overview.title}</span>
            </h1>
            <p className="mt-5 max-w-[492px] break-words text-[14px] leading-[21px] text-white md:text-[16px] md:leading-[24px]">
              {caisson.overview.paragraph}
            </p>
          </div>
          <Image
            src={caisson.hero.image}
            alt={caisson.hero.alt}
            width={714}
            height={360}
            sizes="(min-width: 768px) 714px, 312px"
            priority
            className="mx-1 h-[260px] w-[calc(100%-8px)] rounded-[26px] object-cover object-[66%_72%] md:mx-0 md:h-[360px] md:w-full md:rounded-[22px]"
          />
        </div>
      </section>

      <section className="bg-[#f4f4f6] px-5 py-12 md:px-10 md:py-[112px]">
        <div className="mx-auto w-[calc(100vw-40px)] min-w-0 max-w-[1240px] md:w-full">
          <h2 className="text-[32px] font-bold uppercase leading-[39px] text-dm-blue md:text-[42px] md:leading-[52px]">
            {caisson.process.title}
          </h2>

          <div className="mt-8 grid min-w-0 gap-[18px] md:mt-[38px] md:gap-5">
            {caisson.process.steps.map((step) => (
              <CaissonProcessCard key={step.title} step={step} />
            ))}
          </div>

          <CaissonAdvantagesPanel
            title={caisson.advantages.title}
            items={caisson.advantages.items}
          />

          <CaissonImageCarousel images={caisson.carousel.images} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
