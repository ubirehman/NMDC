import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "../../../app/components/landing/icons";
import { Header } from "../../../app/components/landing/Header";
import { NmdcFooter } from "../../../app/components/landing/NmdcFooter";
import {
  emiratizationContent,
  emiratizationStats,
  maharaSections,
  masarProgramIntro,
  masarTracks,
  nmdcPeopleCultureBrand,
  nmdcPeopleCultureNavLinks,
  peopleCultureGallery,
  peopleCultureMobileGallery,
} from "./content";

export function NmdcPeopleCulturePage() {
  return (
    <main className="overflow-x-hidden bg-white text-primary-navy-blue">
      <section className="relative isolate flex h-[318px] items-end overflow-hidden bg-primary-navy-blue px-5 text-white md:h-[487px] md:px-10">
        <Image
          src="/images/landing/people-hero-boardroom.jpg"
          alt="NMDC people and culture event"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,15,26,0.30)_0%,rgba(3,15,26,0.54)_64%,rgba(3,15,26,0.82)_100%)]"
          aria-hidden="true"
        />

        <Header
          brandName={nmdcPeopleCultureBrand.name}
          logo={nmdcPeopleCultureBrand.logo}
          logoAlt={nmdcPeopleCultureBrand.logoAlt}
          links={nmdcPeopleCultureNavLinks}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1240px] pb-[84px] md:pb-[89px]">
          <div className="grid gap-5 md:grid-cols-[430px_1fr] md:items-start md:gap-20">
            <h1 className="whitespace-nowrap text-center text-[23px] font-bold uppercase leading-[1.05] md:whitespace-normal md:text-left md:text-[48px] md:leading-[58px]">
              NMDC PEOPLE &amp;{" "}
              <br className="hidden md:block" />
              <span className="text-primary-sky-blue">CULTURE</span>
            </h1>
            <p className="mx-auto max-w-[318px] text-center text-[13px] leading-[1.45] text-white md:mx-0 md:max-w-[730px] md:justify-self-end md:pt-[43px] md:text-[24px] md:leading-[32px]">
              We are defined by a strong and cohesive company culture. We strive
              to cultivate a working environment where everyone can thrive.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 pb-11 pt-12 md:bg-[#f5fcff] md:px-10 md:pb-[135px] md:pt-[109px]">
        <div className="mx-auto w-full max-w-[1240px]">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-[62px]">
            <h2 className="shrink-0 text-[20px] font-bold uppercase leading-[1.35] text-[#06447a] md:text-[28px] md:leading-[1.12]">
              {emiratizationContent.title}
            </h2>
            <div
              className="hidden h-px flex-1 bg-[#c5d4e0] md:block"
              aria-hidden="true"
            />
          </div>

          <StatsGrid className="mt-8 md:hidden" mobile />

          <div className="mt-7 hidden max-w-[1240px] md:block">
            <p className="text-[16px] font-medium uppercase leading-6 text-[#485a70]">
              {emiratizationContent.eyebrow}
            </p>
            <div className="mt-7 grid gap-[14px] text-[15px] leading-[1.45] text-[#43556c] md:text-[16px] md:leading-[22px]">
              {emiratizationContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:mt-[38px] md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-4">
            <section>
              <MasarIntroCard />

              <div className="hidden min-h-[88px] items-center rounded-[20px] bg-[#dfe7f0] px-8 md:flex">
                <h2 className="text-[20px] font-bold leading-6 text-primary-navy-blue">
                  Masar programm for UAE nationals
                </h2>
              </div>

              <div className="mt-5 grid gap-[18px] md:mt-[18px] md:gap-[18px]">
                {masarTracks.map((track) => (
                  <ProgramBlock
                    key={track.title}
                    title={track.title}
                    copy={track.copy}
                    mobileCopy={track.mobileCopy}
                    cohort={track.cohort}
                  />
                ))}
              </div>
            </section>

            <MobileMaharaCard />

            <section className="hidden overflow-hidden rounded-[20px] bg-[#dfe7f0] px-8 py-8 md:block md:h-[1159px] md:min-h-[1159px] md:px-[30px] md:py-[26px]">
              <h2 className="text-[22px] font-bold leading-[1.18] text-primary-navy-blue md:text-[28px] md:leading-[36px]">
                Mahara Fresh Graduate Development Program
              </h2>
              <div className="mt-6 grid gap-7">
                {maharaSections.map((section, index) => (
                  <section key={section.title}>
                    <h3 className="text-[16px] font-bold leading-[1.35] text-[#43556c] md:text-[20px] md:leading-[28px]">
                      {section.title}
                    </h3>
                    <div className="mt-2 grid gap-5 text-[15px] leading-[1.43] text-[#43556c] md:text-[18px] md:leading-[28px]">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    {index === maharaSections.length - 1 ? (
                      <Link
                        href="/nmdc-group/people-and-culture/mahara-fresh-graduate-development-program"
                        className="mt-2 inline-flex text-[15px] font-bold leading-none text-primary-blue transition-colors hover:text-primary-sky-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-sky-blue md:text-[18px]"
                      >
                        Read more...
                      </Link>
                    ) : null}
                  </section>
                ))}
              </div>
            </section>
          </div>

          <StatsGrid className="mt-[50px] hidden md:grid" />
        </div>
      </section>

      <MobileMediaGallery />

      <section className="hidden bg-[#062c45] px-5 py-12 md:block md:px-10 md:pb-0 md:pt-[258px]">
        <div className="mx-auto grid w-full max-w-[1240px] gap-8 md:gap-[95px]">
          {peopleCultureGallery.slice(0, 2).map((image, index) => (
            <MediaPanel key={image.src} image={image} showPlay={index === 1} />
          ))}
        </div>
      </section>

      <NmdcFooter variant="compact" />
    </main>
  );
}

function ProgramBlock({
  title,
  copy,
  mobileCopy,
  cohort,
}: {
  title: string;
  copy: string;
  mobileCopy: string;
  cohort: string;
}) {
  return (
    <article className="rounded-[14px] border-[2px] border-primary-sky-blue bg-[#dfe7f0] px-[15px] py-5 md:h-[197px] md:min-h-[197px] md:rounded-[20px] md:px-[30px] md:py-[28px]">
      <div className="flex items-center gap-4 md:gap-4">
        <TrackIcon
          title={title}
          className="size-[22px] shrink-0 text-[#53667d] md:size-7 md:text-primary-sky-blue"
        />
        <h3 className="text-[16px] font-bold uppercase leading-6 text-primary-navy-blue md:text-[20px]">
          {title}
        </h3>
      </div>
      <p className="mt-4 text-[16px] leading-[1.45] text-[#43556c] md:hidden">
        {mobileCopy}
      </p>
      <p className="mt-5 hidden text-[15px] leading-[1.45] text-[#43556c] md:block md:text-[16px] md:leading-[23px]">
        {copy}
      </p>
      <p className="mt-4 text-[16px] font-semibold leading-[1.45] text-[#43556c] md:hidden">
        {cohort}
      </p>
    </article>
  );
}

function StatsGrid({
  className,
  mobile = false,
}: {
  className?: string;
  mobile?: boolean;
}) {
  return (
    <div
      className={`${className ?? ""} gap-4 ${
        mobile ? "grid" : "md:grid-cols-3 md:gap-4"
      }`}
    >
      {emiratizationStats.map((stat) => (
        <article
          key={stat.year}
          className={`bg-[#062c45] text-white ${
            mobile
              ? "h-[177px] rounded-[20px] px-6 py-7"
              : "rounded-[20px] px-6 py-7 md:h-[177px] md:min-h-[177px]"
          }`}
        >
          <p
            className={`font-bold uppercase text-white/70 ${
              mobile ? "text-[13px] leading-5" : "text-[13px] leading-5"
            }`}
          >
            EMIRATIZATION RATE (NMDC GROUP)
          </p>
          <p
            className={`font-bold leading-none text-primary-sky-blue ${
              mobile ? "mt-6 text-[48px]" : "mt-6 text-[48px] md:text-[48px]"
            }`}
          >
            {stat.value}
          </p>
          <p className="mt-4 text-[22px] font-bold">
            {stat.year}
          </p>
        </article>
      ))}
    </div>
  );
}

function MasarIntroCard() {
  return (
    <div className="rounded-[14px] border-[2px] border-primary-sky-blue bg-[#dfe7f0] px-[15px] py-5 md:hidden">
      <h2 className="text-[18px] font-bold uppercase leading-[1.4] text-primary-navy-blue">
        Masar programm for UAE nationals
      </h2>
      <p className="mt-4 text-[16px] leading-[1.45] text-[#43556c]">
        {masarProgramIntro}
      </p>
    </div>
  );
}

function MobileMaharaCard() {
  return (
    <section className="rounded-[20px] bg-[#dfe7f0] px-4 py-5 md:hidden">
      <h2 className="text-[18px] font-bold leading-[1.25] text-primary-navy-blue">
        Mahara Fresh Graduate
        <br />
        Development Program
      </h2>
      <p className="mt-7 text-[19px] leading-[1.55] text-[#43556c]">
        {maharaSections[0].paragraphs[0]}
      </p>
      <Link
        href="/nmdc-group/people-and-culture/mahara-fresh-graduate-development-program"
        className="mt-8 inline-flex text-[18px] font-bold leading-6 text-primary-blue transition-colors hover:text-primary-sky-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-sky-blue"
      >
        Read more...
      </Link>
    </section>
  );
}

function MobileMediaGallery() {
  return (
    <section className="bg-[#062c45] px-5 pb-[87px] pt-12 md:hidden">
      <div className="grid gap-8">
        {peopleCultureMobileGallery.map((image, index) => (
          <article key={image.src}>
            <div className="relative overflow-hidden rounded-[12px] bg-primary-navy-blue">
              <Image
                src={image.src}
                alt={image.alt}
                width={646}
                height={index === 0 ? 1080 : 510}
                className={`w-full object-cover ${
                  index === 0 ? "h-[540px]" : "h-[320px]"
                }`}
              />
              {index === 0 ? null : (
                <button
                  type="button"
                  aria-label={`Play ${image.alt}`}
                  className="absolute inset-0 flex items-center justify-center bg-black/32"
                >
                  <span className="flex size-[70px] items-center justify-center rounded-full bg-white/60 shadow-[0_16px_28px_rgba(0,0,0,0.26)] backdrop-blur-[10px]">
                    <span
                      aria-hidden="true"
                      className="ml-1 h-0 w-0 border-y-[11px] border-l-[17px] border-y-transparent border-l-primary-sky-blue"
                    />
                  </span>
                </button>
              )}
            </div>
            {index === 0 ? (
              <div className="mt-8">
                <div className="flex justify-center gap-8">
                  <button
                    type="button"
                    aria-label="Previous item"
                    className="flex size-11 items-center justify-center rounded-full border border-white/70 text-white/72"
                  >
                    <ArrowLeft className="size-5" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next item"
                    className="flex size-11 items-center justify-center rounded-full bg-white text-primary-sky-blue"
                  >
                    <ArrowRight className="size-5" />
                  </button>
                </div>
                <div className="mt-8 flex justify-center gap-1.5">
                  <span className="h-3 w-10 rounded-full bg-primary-sky-blue" />
                  <span className="size-3 rounded-full bg-white/82" />
                  <span className="size-3 rounded-full bg-white/82" />
                  <span className="size-3 rounded-full bg-white/82" />
                </div>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function TrackIcon({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  if (title === "SHABAB") {
    return (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={className}
      >
        <path d="M18 5v9" />
        <path d="M14 9h8" />
        <path d="M18 14c-5 1-8 4-9 9 5 0 8-2 9-6 1 4 4 6 9 6-1-5-4-8-9-9Z" />
        <path d="M18 23v8" />
      </svg>
    );
  }

  if (title === "Tatweer") {
    return (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={className}
      >
        <path d="M8 26c8 0 14-6 14-14" />
        <path d="M22 12h-6" />
        <path d="M22 12v6" />
        <path d="M11 29l-4-4 4-4" />
        <path d="M26 25l3-5 3 5" />
        <path d="M29 20v10" />
      </svg>
    );
  }

  if (title === "Qiyada") {
    return (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={className}
      >
        <path d="M6 13 18 7l12 6-12 6-12-6Z" />
        <path d="M10 17v7l8 4 8-4v-7" />
        <path d="M28 15v8" />
        <path d="M26 29h4" />
      </svg>
    );
  }

  if (title === "Riyada") {
    return (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={className}
      >
        <path d="M18 4 21 10l7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6Z" />
        <path d="M12 25v6" />
        <path d="M24 25v6" />
        <path d="M12 31h12" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M3 14.5 18 7l15 7.5L18 22 3 14.5Z" />
      <path d="M9 18.5v7c0 2.2 4 4 9 4s9-1.8 9-4v-7" />
      <path d="M32 15v9" />
      <path d="M32 24.5v2.5" />
    </svg>
  );
}

function MediaPanel({
  image,
  showPlay,
}: {
  image: {
    src: string;
    alt: string;
  };
  showPlay: boolean;
}) {
  return (
    <article>
      <div className="relative overflow-hidden rounded-[6px] bg-primary-navy-blue md:rounded-[20px]">
        <Image
          src={image.src}
          alt={image.alt}
          width={1040}
          height={520}
          className="h-[230px] w-full object-cover md:h-[610px]"
        />
        {showPlay ? (
          <button
            type="button"
            aria-label={`Play ${image.alt}`}
            className="absolute inset-0 flex items-center justify-center bg-black/35 transition-colors hover:bg-black/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-sky-blue"
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-[rgba(7,48,59,0.62)] backdrop-blur-[8px] md:size-[112px] md:bg-black/40">
              <span
                aria-hidden="true"
                className="ml-0.5 h-0 w-0 border-y-[8px] border-l-[13px] border-y-transparent border-l-primary-sky-blue md:ml-1 md:border-y-[18px] md:border-l-[28px]"
              />
            </span>
          </button>
        ) : null}
      </div>
      <div className="mt-4 flex justify-center gap-2 md:mt-10 md:gap-6">
        <button
          type="button"
          aria-label="Previous item"
          className="flex size-8 items-center justify-center rounded-full border border-white/18 text-white/72 transition-colors hover:border-white hover:text-white md:size-16 md:border-white/80"
        >
          <ArrowLeft className="size-4 md:size-8" />
        </button>
        <button
          type="button"
          aria-label="Next item"
          className="flex size-8 items-center justify-center rounded-full bg-white text-primary-blue transition-colors hover:bg-primary-sky-blue hover:text-white md:size-16"
        >
          <ArrowRight className="size-4 md:size-8" />
        </button>
      </div>
    </article>
  );
}
