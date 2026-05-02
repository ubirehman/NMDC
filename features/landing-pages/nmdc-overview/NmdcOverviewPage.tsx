import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";
import { ArrowLeft } from "../../../app/components/landing/icons";
import { Header } from "../../../app/components/landing/Header";
import { NmdcFooter } from "../../../app/components/landing/NmdcFooter";
import { OverviewVideoPlayer } from "./OverviewVideoPlayer";
import {
  keyFigures,
  nmdcOverviewBrand,
  nmdcOverviewNavLinks,
  overviewCards,
  overviewVideo,
} from "./content";

export function NmdcOverviewPage() {
  return (
    <main className="overflow-x-hidden bg-white text-primary-navy-blue">
      <Header
        brandName={nmdcOverviewBrand.name}
        logo={nmdcOverviewBrand.logo}
        logoAlt={nmdcOverviewBrand.logoAlt}
        links={nmdcOverviewNavLinks}
      />
      <section className="relative isolate overflow-hidden bg-primary-navy-blue text-white">
        <Image
          src="/images/landing/overview-hero-sea.jpg"
          alt="NMDC marine operation at sea"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,15,26,0.48)_0%,rgba(3,15,26,0.64)_52%,rgba(3,15,26,0.92)_100%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 pb-9 pt-[112px] md:px-0 md:pb-[168px] md:pt-[138px]">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white md:hidden"
          >
            <ArrowLeft className="size-4" />
            Back
          </Link>

          <div className="grid gap-7 md:grid-cols-[510px_694px] md:items-start md:gap-[36px]">
            <div className="md:pt-[9px]">
              <p className="text-[16px] font-bold uppercase leading-6 text-brand-sky text-primary-sky-blue md:text-[28px] md:leading-[36px]">
                NMDC GROUP
              </p>
              <h1 className="mt-1 text-[32px] font-bold leading-[1.08] md:text-[64px] md:leading-[84px]">
                At a Glance
              </h1>
              <p className="mt-4 max-w-[405px] text-xs leading-[1.5] text-white md:mt-[10px] md:max-w-[500px] md:text-[20px] md:leading-[28px]">
                A global EPC and marine dredging leader delivering complex
                infrastructure and mega projects across energy, marine, and
                urban development sectors.
              </p>
              <p className="mt-5 max-w-[432px] text-xs leading-[1.5] text-white/90 md:mt-7 md:max-w-[540px] md:text-[20px] md:leading-[28px]">
                NMDC Group stands as a global leader in the engineering,
                procurement, and construction (EPC) solutions for onshore and
                offshore projects, as well as state-of-the-art marine dredging
                and construction capabilities, uniquely positioned to drive
                growth and innovation with extensive industry expertise and
                world-class assets.{" "}
                <Link
                  href="/nmdc-overview/at-a-glance"
                  className="font-bold text-brand-sky transition-colors hover:text-primary-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-sky-blue"
                >
                  Read more...
                </Link>
              </p>

              <div className="mt-7 grid gap-3 md:mt-[28px] md:grid-cols-2 md:gap-3.5">
                {overviewCards.map((card, index) => (
                  <article
                    key={card.copy}
                    className={`rounded-[16px] bg-[rgba(49,61,67,0.88)] p-4 shadow-[0_20px_44px_-22px_rgba(0,0,0,0.58)] backdrop-blur-[18px] md:min-h-[153px] md:p-4 ${
                      index === overviewCards.length - 1 ? "md:col-span-2" : ""
                    }`}
                  >
                    <span className={`relative block shrink-0 overflow-hidden ${getOverviewLogoFrameClassName(card.logo)}`}>
                      <Image
                        src={card.logo}
                        alt={card.alt}
                        fill
                        sizes="124px"
                        className={`${getOverviewLogoFitClassName(card.logo)} transition-transform duration-200`}
                      />
                    </span>
                    <p className="mt-4 text-[11px] font-bold leading-[1.45] text-white md:mt-6 md:text-[15px] md:leading-5">
                      {card.copy}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[10px] md:mt-[136px] md:rounded-[8px]">
              <Image
                src="/images/landing/nmdc_at_a_glance.jpg"
                alt="NMDC offshore energy project"
                width={694}
                height={829}
                priority
                className="h-[330px] w-full rounded-[10px] object-cover object-center md:h-[829px] md:rounded-[8px]"
              />
            </div>
          </div>
        </div>
      </section>

      <NmdcOverviewVideoSection />

      <section className="bg-white px-5 py-12 md:px-10 md:pb-[125px] md:pt-[45px]">
        <div className="mx-auto w-full max-w-[1240px]">
          <div className="max-w-[560px] md:max-w-[880px]">
            <h2 className="text-[28px] font-bold uppercase leading-[1.08] text-[#06447a] md:text-[48px] md:leading-[64px]">
              KEY FIGURES & GLOBAL PRESENCE.
            </h2>
            <p className="mt-4 max-w-[390px] text-sm leading-[1.6] text-primary-navy-blue/70 md:mt-3 md:max-w-[440px] md:text-[16px] md:leading-6">
              Our strategic pillars define our dominance in marine engineering
              and infrastructure development across the globe.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-7 gap-y-8 md:mt-10 md:grid-cols-4 md:gap-0">
            {keyFigures.map((figure, index) => {
              const Icon = keyFigureIcons[index];

              return (
                <div
                  key={figure.label}
                  className={`md:px-10 ${
                    index === 0
                      ? "md:pl-0"
                      : "md:border-l md:border-content-200"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {Icon ? (
                      <Icon className="size-5 text-[#8da3b9] md:size-7" />
                    ) : null}
                    <p className="text-[28px] font-bold leading-none text-primary-blue md:text-[48px]">
                      {figure.value}
                    </p>
                  </div>
                  <p className="mt-3 text-xs leading-5 text-primary-navy-blue md:text-[18px] md:leading-[23px]">
                    {figure.label}
                  </p>
                </div>
              );
            })}
          </div>

          <Image
            src="/images/landing/overview-map.webp"
            alt="NMDC Group global presence map"
            width={1240}
            height={774}
            className="mx-auto mt-10 w-full max-w-[940px] md:mt-[90px] md:max-w-[1240px]"
          />
        </div>
      </section>

      <NmdcFooter />
    </main>
  );
}

function NmdcOverviewVideoSection() {
  return (
    <section className="bg-white px-5 pt-14 md:px-10 md:pt-[110px]">
      <div className="mx-auto flex h-full w-full max-w-[1240px]">
        <OverviewVideoPlayer
          sources={overviewVideo.sources}
        />
      </div>
    </section>
  );
}

const keyFigureIcons = [
  IcvScoreIcon,
  EmployeesIcon,
  MarineFleetIcon,
  LandEquipmentIcon,
];

function getOverviewLogoFrameClassName(logo: string) {
  if (logo.includes("logo-dm") || logo.includes("logo-energy")) {
    return "h-10 w-[124px]";
  }

  if (logo.includes("logo-engineering")) {
    return "h-8 w-[88px]";
  }

  return "h-8 w-[104px]";
}

function getOverviewLogoFitClassName(logo: string) {
  if (logo.includes("logo-engineering") || logo.includes("logo-lts")) {
    return "object-contain";
  }

  return "object-cover";
}

function IcvScoreIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m12 3 2.7 5.47 6.03.88-4.36 4.25 1.03 6L12 16.76 6.6 19.6l1.03-6-4.36-4.25 6.03-.88L12 3Z" />
    </svg>
  );
}

function EmployeesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M16 19v-1.5a4 4 0 0 0-8 0V19" />
      <circle cx="12" cy="8" r="3" />
      <path d="M19 19v-1a3 3 0 0 0-2.3-2.92" />
      <path d="M17 5.2a3 3 0 0 1 0 5.6" />
      <path d="M5 19v-1a3 3 0 0 1 2.3-2.92" />
      <path d="M7 5.2a3 3 0 0 0 0 5.6" />
    </svg>
  );
}

function MarineFleetIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 17h16l-2 4H6l-2-4Z" />
      <path d="M7 17V7h7l3 4v6" />
      <path d="M7 11h10" />
      <path d="M10 7V4h4v3" />
    </svg>
  );
}

function LandEquipmentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M3 14h12l3 4h3" />
      <path d="M5 14V8h7l3 6" />
      <path d="M7 18h.01" />
      <path d="M17 18h.01" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  );
}
