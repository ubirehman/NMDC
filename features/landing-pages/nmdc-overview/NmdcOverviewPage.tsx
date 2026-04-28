import Image from "next/image";
import Link from "next/link";
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

        <Header
          brandName={nmdcOverviewBrand.name}
          logo={nmdcOverviewBrand.logo}
          logoAlt={nmdcOverviewBrand.logoAlt}
          links={nmdcOverviewNavLinks}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 pb-9 pt-[112px] md:px-10 md:pb-0 md:pt-[138px]">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white md:hidden"
          >
            <ArrowLeft className="size-4" />
            Back
          </Link>

          <div className="grid gap-7 md:grid-cols-[minmax(0,510px)_minmax(0,610px)] md:items-start md:gap-[58px]">
            <div className="md:pb-12">
              <p className="text-[16px] font-bold uppercase leading-6 text-brand-sky text-primary-sky-blue md:text-[20px]">
                NMDC GROUP
              </p>
              <h1 className="mt-1 text-[32px] font-bold leading-[1.08] md:text-[52px]">
                At a Glance
              </h1>
              <p className="mt-4 max-w-[405px] text-xs leading-[1.5] text-white md:text-[16px]">
                A global EPC and marine dredging leader delivering complex
                infrastructure and mega projects across energy, marine, and
                urban development sectors.
              </p>
              <p className="mt-5 max-w-[432px] text-xs leading-[1.5] text-white/90 md:text-[16px]">
                NMDC Group stands as a global leader in the engineering,
                procurement, and construction (EPC) solutions for onshore and
                offshore projects, as well as state-of-the-art marine dredging
                and construction capabilities, uniquely positioned to drive
                growth and innovation with extensive industry expertise and
                world-class assets.{" "}
                <span className="font-bold text-brand-sky hover:text-primary-blue transition-colors cursor-pointer">
                  Read more...
                </span>
              </p>

              <div className="mt-7 grid gap-3 md:grid-cols-2 md:gap-3.5">
                {overviewCards.map((card, index) => (
                  <article
                    key={card.copy}
                    className={`rounded-[6px] bg-[rgba(6,31,49,0.88)] p-4 shadow-[0_20px_44px_-22px_rgba(0,0,0,0.72)] backdrop-blur-[18px] md:min-h-[118px] md:p-5 ${
                      index === overviewCards.length - 1 ? "md:col-span-2" : ""
                    }`}
                  >
                    <Image
                      src={card.logo}
                      alt={card.alt}
                      width={92}
                      height={28}
                      className="h-5 w-auto object-contain"
                    />
                    <p className="mt-4 text-[11px] font-bold leading-[1.45] text-white md:text-[13px]">
                      {card.copy}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[10px] md:mt-[70px] md:rounded-[8px]">
              <Image
                src="/images/landing/nmdc-vessel-overview.webp"
                alt="NMDC offshore energy project"
                width={694}
                height={829}
                priority
                className="h-[330px] w-full rounded-[10px] object-cover object-center md:h-[696px] md:rounded-[8px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-12 md:px-10 md:py-16">
        <div className="mx-auto w-full max-w-[1240px]">
          <div className="max-w-[560px]">
            <h2 className="text-[28px] font-bold uppercase leading-[1.08] text-[#06447a] md:text-[40px]">
              KEY FIGURES & GLOBAL PRESENCE.
            </h2>
            <p className="mt-4 max-w-[390px] text-sm leading-[1.6] text-primary-navy-blue/70">
              Our strategic pillars define our dominance in marine engineering
              and infrastructure development across the globe.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-7 gap-y-8 md:mt-10 md:grid-cols-4 md:gap-0">
            {keyFigures.map((figure, index) => (
              <div
                key={figure.label}
                className={`md:px-10 ${
                  index === 0 ? "md:pl-0" : "md:border-l md:border-content-200"
                }`}
              >
                <p className="text-[28px] font-bold leading-none text-primary-blue md:text-[40px]">
                  {figure.value}
                </p>
                <p className="mt-3 text-xs leading-5 text-primary-navy-blue md:text-sm">
                  {figure.label}
                </p>
              </div>
            ))}
          </div>

          <Image
            src="/images/landing/overview-map.webp"
            alt="NMDC Group global presence map"
            width={1040}
            height={520}
            className="mx-auto mt-10 w-full max-w-[940px] md:mt-12"
          />
        </div>
      </section>

      <NmdcOverviewVideoSection />

      <NmdcFooter />
    </main>
  );
}

function NmdcOverviewVideoSection() {
  return (
    <section className="bg-white px-5 pb-14 md:px-10 md:pb-16">
      <div className="mx-auto flex h-full w-full max-w-[1240px]">
        <OverviewVideoPlayer
          poster={overviewVideo.poster}
          sources={overviewVideo.sources}
        />
      </div>
    </section>
  );
}
