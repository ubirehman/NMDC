import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { DmHomeCardRail } from "../components/DmHomeCardRail";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ArrowLeft, ArrowRight } from "../components/icons";
import {
  caissonSteps,
  caissonCapabilities,
  dmCapabilities,
  dmHomeCards,
  dmVessels,
  getDmNavLinks,
  hydraulicCapabilities,
  hydraulicTestingFacilities,
  overviewIntro,
} from "../content/content";

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
        <div className="max-w-[760px] pb-2">
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

function CarouselControls({ dark = false }: { dark?: boolean }) {
  return (
    <div className="mt-5 flex items-center justify-center gap-3">
      <button
        type="button"
        aria-label="Previous item"
        className={`flex size-8 items-center justify-center rounded-full border transition-colors ${
          dark
            ? "border-white/28 text-white/72 hover:border-white hover:text-white"
            : "border-dm-text/16 text-dm-text/60 hover:border-dm-cyan hover:text-dm-text"
        }`}
      >
        <ArrowLeft className="size-4" />
      </button>
      <button
        type="button"
        aria-label="Next item"
        className="flex size-8 items-center justify-center rounded-full bg-dm-cyan text-white transition-colors hover:bg-dm-blue"
      >
        <ArrowRight className="size-4" />
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
        <Image
          src={image}
          alt={title}
          width={1240}
          height={560}
          className="h-[250px] w-full object-cover md:h-[430px]"
        />
        <button
          type="button"
          aria-label={`Play ${title}`}
          className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/92 text-dm-blue shadow-[0_12px_34px_rgba(0,0,0,0.22)] transition-colors hover:bg-dm-cyan hover:text-white"
        >
          <span
            className="ml-1 block h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-current"
            aria-hidden="true"
          />
        </button>
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
  return (
    <main className="overflow-x-hidden">
      <section className="relative isolate min-h-[100svh] w-full bg-dm-navy">
        <Image
          src="/images/dm/home-dredger-ghasha.jpg"
          alt="Dredging vessel operating at sea"
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
            <div className="md:absolute md:left-0 md:top-[244px]">
              <div className="flex w-full max-w-[559px] flex-col gap-6 text-white md:gap-8">
                <h1 className="max-w-[547px] text-[28px] font-bold uppercase leading-[1.18] tracking-[-0.2px] md:text-[48px] md:leading-[56px] md:tracking-[-0.5px]">
                  <span className="block text-white md:inline">Achieving</span>
                  <span className="block text-white md:inline">
                    <span className="hidden md:inline"> </span>
                    Excellence With
                  </span>
                  <br />
                  <span className="text-dm-cyan">
                    <span className="block md:inline">
                      Dredging &amp; Marine
                    </span>
                    <span className="block md:inline">
                      <span className="hidden md:inline"> </span>
                      Construction
                    </span>
                  </span>
                </h1>

                <div className="flex w-full max-w-[350px] items-stretch gap-3 md:max-w-[559px]">
                  <span
                    aria-hidden="true"
                    className="mt-[2px] h-[43px] w-[3px] shrink-0 rounded-[20px] bg-dm-cyan shadow-[0_0_6px_0_rgba(41,183,227,0.75)]"
                  />
                  <p className="flex-1 pt-[1px] text-[13px] leading-[1.45] text-white md:text-[16px] md:leading-[1.5]">
                    NMDC Dredging &amp; Marine delivers complex marine
                    infrastructure, dredging, reclamation, and coastal
                    development projects with a modern fleet and proven
                    engineering capability.
                  </p>
                </div>

                <Link
                  href="/overview"
                  className="group inline-flex items-center gap-0.5 self-start"
                >
                  <span className="flex h-12 min-w-[136px] items-center justify-center rounded-full bg-white px-6 text-base font-medium text-dm-navy transition-colors group-hover:bg-dm-cyan group-hover:text-white md:w-[174px]">
                    <span className="md:hidden">Explore</span>
                    <span className="hidden md:inline">More</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex size-12 items-center justify-center rounded-full bg-dm-cyan text-white transition-transform group-hover:translate-x-0.5"
                  >
                    <ArrowRight className="size-5" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="md:absolute md:bottom-[58px] md:right-0">
              <DmHomeCardRail cards={dmHomeCards} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function DredgingMarineOverviewPage() {
  return (
    <main className="overflow-x-hidden bg-white text-dm-text">
      <section className="relative isolate bg-dm-navy px-5 pb-16 pt-[132px] text-white md:px-10 md:pb-20 md:pt-[154px]">
        <Header links={getDmNavLinks("/overview")} />
        <div className="mx-auto grid min-w-0 w-full max-w-[1120px] grid-cols-[minmax(0,1fr)] gap-10 md:grid-cols-[minmax(0,440px)_1fr] md:items-center">
          <div className="min-w-0 w-full max-w-[350px] md:max-w-[460px]">
            <p className="text-[18px] font-bold leading-6 text-dm-cyan md:text-[22px]">
              NMDC - Dredging &amp; Marine
            </p>
            <h1 className="mt-3 text-[34px] font-bold leading-[1.08] text-white md:text-[48px]">
              At a glance
            </h1>
            <div className="mt-5 space-y-3 break-words text-sm leading-6 text-white/78 md:text-[15px] md:leading-7">
              {overviewIntro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <Image
            src="/images/dm/vessel-al-mirfa.jpg"
            alt="NMDC dredging vessel"
            width={760}
            height={520}
            className="h-[280px] min-w-0 w-full max-w-[350px] rounded-[8px] object-cover md:h-[420px] md:max-w-full"
          />
        </div>
      </section>

      <section id="capabilities" className="bg-dm-ice px-5 py-12 md:px-10 md:py-16">
        <div className="mx-auto w-full max-w-[1120px]">
          <h2 className="text-[28px] font-bold uppercase leading-[1.12] text-dm-blue md:text-[36px]">
            Capabilities
          </h2>
          <div className="mt-8 grid min-w-0 grid-cols-[minmax(0,1fr)] gap-5 md:grid-cols-3">
            {dmCapabilities.map((capability) => (
              <article
                key={capability.title}
                className="group relative min-w-0 w-full max-w-[350px] overflow-hidden rounded-[6px] bg-dm-navy p-4 text-white shadow-[0_16px_38px_-28px_rgba(5,38,59,0.72)] transition-transform duration-200 hover:-translate-y-1 md:max-w-none"
              >
                <span
                  className="absolute right-4 top-4 grid size-7 place-items-center rounded-full border border-white/24 text-white/80"
                  aria-hidden="true"
                >
                  <span className="size-2 rounded-full bg-dm-cyan" />
                </span>
                <Image
                  src={capability.image}
                  alt={capability.title}
                  width={520}
                  height={260}
                  className="h-[124px] w-full rounded-[4px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pt-4">
                  <h3 className="text-[16px] font-bold leading-6 text-dm-cyan">
                    {capability.title}
                  </h3>
                  <p className="mt-3 break-words text-sm leading-6 text-white/72">
                    {capability.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export function DredgingMarineVesselsPage() {
  return (
    <main className="overflow-x-hidden bg-white text-dm-text">
      <DmHero
        activeHref="/marine-vessels"
        image="/images/dm/vessel-al-sadr.jpg"
        eyebrow="NMDC Dredging and Marine"
        title="Marine Vessels"
        copy="Explore NMDC D&M's dredging and marine construction fleet."
      />

      <section className="bg-dm-ice px-5 py-12 md:px-10 md:py-16">
        <div className="mx-auto w-full max-w-[1240px]">
          <SectionHeading
            eyebrow="NMDC Dredging & Marine"
            title="Featured marine vessels"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {dmVessels.map((vessel) => (
              <Link
                key={vessel.slug}
                href={`/marine-vessels/${vessel.slug}`}
                className="group overflow-hidden rounded-[8px] bg-dm-navy text-white"
              >
                <Image
                  src={vessel.image}
                  alt={vessel.name}
                  width={620}
                  height={360}
                  className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-5">
                  <p className="text-xs font-bold uppercase leading-5 text-dm-cyan">
                    Marine Vessels
                  </p>
                  <h2 className="mt-1 text-[22px] font-bold leading-7 text-white">{vessel.name}</h2>
                  <p className="mt-2 text-sm leading-5 text-white/72">{vessel.type}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-dm-cyan">
                    View specification
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <CarouselControls />
        </div>
      </section>

      <Footer />
    </main>
  );
}

export function DredgingMarineVesselDetailPage({ slug }: { slug: string }) {
  const vessel = dmVessels.find((item) => item.slug === slug) ?? dmVessels[0];

  return (
    <main className="overflow-x-hidden bg-white text-dm-text">
      <DmHero
        activeHref="/marine-vessels"
        image={vessel.image}
        eyebrow={`${vessel.name} | Marine Vessels`}
        title="Specification"
        copy={vessel.type}
      />

      <section className="bg-dm-ice px-5 py-12 md:px-10 md:py-16">
        <div className="mx-auto w-full max-w-[1240px]">
          <Link
            href="/marine-vessels"
            className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-dm-blue"
          >
            <ArrowLeft className="size-4" />
            All Marine Vessels
          </Link>
          <div className="grid gap-8 md:grid-cols-[320px_1fr]">
          <aside className="rounded-[8px] bg-dm-navy p-6 text-white">
            <h2 className="text-[22px] font-bold leading-7">{vessel.name}</h2>
            <p className="mt-2 text-sm leading-5 text-white/72">{vessel.type}</p>
            <div className="mt-8 space-y-3">
              {dmVessels.map((item) => (
                <Link
                  key={item.slug}
                  href={`/marine-vessels/${item.slug}`}
                  className={`flex items-center justify-between rounded-[6px] px-3 py-3 text-sm font-bold transition-colors ${
                    item.slug === vessel.slug
                      ? "bg-dm-cyan text-white"
                      : "bg-white/7 text-white/78 hover:bg-white/12 hover:text-white"
                  }`}
                >
                  {item.name}
                  <ArrowRight className="size-4" />
                </Link>
              ))}
            </div>
          </aside>
          <div className="rounded-[8px] bg-white p-6 shadow-[0_16px_50px_-35px_rgba(5,38,59,0.75)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase leading-5 text-dm-cyan">
                  Marine Vessels
                </p>
                <h2 className="mt-2 text-[24px] font-bold uppercase leading-8 text-dm-blue">
                  Specification
                </h2>
              </div>
              <p className="hidden text-right text-sm font-bold leading-5 text-dm-text/54 md:block">
                {vessel.name}
              </p>
            </div>
            <div className="mt-6 grid overflow-hidden rounded-[8px] md:grid-cols-[260px_1fr]">
              <dl className="bg-dm-navy p-5 text-white">
                {vessel.specs.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-4 border-b border-white/10 py-3 last:border-0"
                  >
                    <dt className="text-xs font-bold uppercase leading-5 text-white/62">
                      {label}
                    </dt>
                    <dd className="text-right text-sm font-bold leading-5">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="bg-dm-card p-5">
                <h3 className="text-[18px] font-bold leading-6 text-dm-text">
                  {vessel.type}
                </h3>
                <p className="mt-3 text-sm leading-6 text-dm-text/68">
                  A fleet asset configured for demanding dredging and marine
                  construction work, supporting NMDC D&amp;M projects across
                  ports, coastal protection, reclamation, and offshore work
                  areas.
                </p>
              </div>
            </div>
            <Image
              src={vessel.image}
              alt={vessel.name}
              width={900}
              height={520}
              className="mt-8 h-[260px] w-full rounded-[8px] object-cover md:h-[420px]"
            />
            <CarouselControls />
          </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export function HydraulicPhysicalModelPage() {
  return (
    <main className="overflow-x-hidden bg-white text-dm-text">
      <DmHero
        activeHref="/hydraulic-physical-model"
        image="/images/dm/hydraulic-hero.jpg"
        eyebrow="NMDC Dredging & Marine"
        title="Coastal & Hydrodynamic Center"
        copy="Physical modelling supports coastal design, wave action studies, and verification of marine structures before construction."
      />

      <section className="bg-white px-5 py-12 md:px-10 md:py-16">
        <div className="mx-auto w-full max-w-[1240px]">
          <div className="grid gap-10 md:grid-cols-[minmax(0,540px)_1fr] md:items-center">
            <div>
              <SectionHeading
                eyebrow="Hydraulic physical modelling"
                title="Coastal & Hydrodynamic Center"
              />
              <p className="mt-5 text-sm leading-6 text-dm-text/70 md:text-[15px] md:leading-7">
                Physical modelling helps validate coastal and marine designs
                before construction by simulating waves, currents, structural
                stability, and operational conditions at model scale.
              </p>
            </div>
            <MediaPanel
              image="/images/dm/hydraulic-hero.jpg"
              title="NMDC Dredging & Marine Coastal and Hydrodynamic Center"
            />
          </div>
        </div>
      </section>

      <section className="bg-dm-deep-navy px-5 py-12 text-white md:px-10 md:py-16">
        <div className="mx-auto w-full max-w-[1240px]">
          <SectionHeading eyebrow="Capabilities" title="Testing capability" light />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {hydraulicCapabilities.map((capability) => (
              <article
                key={capability}
                className="rounded-[8px] border border-white/10 bg-white p-5 text-dm-text"
              >
                <h2 className="text-[18px] font-bold leading-6">{capability}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dm-ice px-5 py-12 md:px-10 md:py-16">
        <div className="mx-auto w-full max-w-[1240px]">
          <SectionHeading
            eyebrow="Hydraulic Physical Model Testing Facility"
            title="Testing facility"
          />
          <div className="mt-8 grid gap-6">
            {hydraulicTestingFacilities.map((facility) => (
              <div key={facility.title}>
                <MediaPanel image={facility.image} title={facility.title} />
                <CarouselControls />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export function CaissonMethodPage() {
  return (
    <main className="overflow-x-hidden bg-white text-dm-text">
      <DmHero
        activeHref="/caisson-method"
        image="/images/dm/caisson-hero.jpg"
        eyebrow="NMDC Dredging & Marine Caisson Method"
        title="Caisson Method"
        copy="Precast caissons provide a practical and efficient solution for marine infrastructure and coastal protection projects."
      />

      <section className="bg-dm-ice px-5 py-12 md:px-10 md:py-16">
        <div className="mx-auto grid w-full max-w-[1240px] gap-8 md:grid-cols-[minmax(0,540px)_1fr] md:items-start">
          <div>
            <SectionHeading
              eyebrow="Caisson Method"
              title="Construction and installation process"
            />
            <p className="mt-5 text-sm leading-6 text-dm-text/70">
              The caisson method uses reinforced precast concrete units that
              are launched, floated, positioned, sunk, and filled to form
              resilient marine infrastructure.
            </p>
            <div className="mt-6 grid gap-3">
              {caissonSteps.map((step, index) => (
                <article
                  key={step}
                  className="rounded-[8px] border border-dm-cyan/35 bg-white p-4"
                >
                  <p className="text-xs font-bold uppercase text-dm-cyan">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 text-[17px] font-bold leading-6">{step}</h3>
                </article>
              ))}
            </div>
          </div>
          <Image
            src="/images/dm/caisson-installation.jpg"
            alt="Caisson construction and installation"
            width={800}
            height={560}
            className="h-[320px] w-full rounded-[8px] object-cover md:h-[520px]"
          />
        </div>
      </section>

      <section className="bg-white px-5 py-12 md:px-10 md:py-16">
        <div className="mx-auto w-full max-w-[1240px]">
          <MediaPanel
            image="/images/dm/caisson-hero.jpg"
            title="Caisson method installation sequence"
          />
        </div>
      </section>

      <section className="bg-dm-deep-navy px-5 py-12 text-white md:px-10 md:py-16">
        <div className="mx-auto w-full max-w-[1240px]">
          <SectionHeading
            eyebrow="Capabilities"
            title="Construction and installation"
            light
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {caissonCapabilities.map((capability) => (
              <article
                key={capability.title}
                className="rounded-[8px] bg-white p-5 text-dm-text"
              >
                <h2 className="text-[18px] font-bold leading-6">
                  {capability.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-dm-text/68">
                  {capability.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
