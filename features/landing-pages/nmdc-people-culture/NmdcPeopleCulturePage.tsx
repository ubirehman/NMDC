import Image from "next/image";
import Link from "next/link";
import { Header } from "../../../app/components/landing/Header";
import { LandingVideoCarousel } from "../../../app/components/landing/LandingVideoCarousel";
import { NmdcFooter } from "../../../app/components/landing/NmdcFooter";
import { PeopleCultureGalleryCarousel } from "./PeopleCultureGalleryCarousel";
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

const peopleCultureVideos = [
  {
    src: "/videos/nmdc_technology_.mp4",
    poster: "/images/landing/video-posters/nmdc-technology_.png",
    playLabel: "Play NMDC Technology video",
  },
  {
    src: "/videos/nmdc_people_and_culture_and_at-a_glance.mp4",
    poster: "/images/landing/video-posters/nmdc-people-culture-at-glance.png",
    playLabel: "Play NMDC People and Culture video",
  },
];

export function NmdcPeopleCulturePage() {
  return (
    <main className="overflow-x-hidden bg-white text-primary-navy-blue">
      <Header
        brandName={nmdcPeopleCultureBrand.name}
        logo={nmdcPeopleCultureBrand.logo}
        logoAlt={nmdcPeopleCultureBrand.logoAlt}
        links={nmdcPeopleCultureNavLinks}
      />
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

        <div className="relative z-10 mx-auto w-full max-w-[1240px] pb-[84px] md:pb-[89px]">
          <div className="grid gap-5 md:grid-cols-[430px_minmax(0,1fr)] md:items-start md:gap-20">
            <h1 className="whitespace-nowrap text-center text-[23px] font-bold uppercase leading-[1.05] md:whitespace-normal md:text-left md:text-[48px] md:leading-[58px]">
              NMDC PEOPLE &amp;{" "}
              <br className="hidden md:block" />
              <span className="text-primary-sky-blue">CULTURE</span>
            </h1>
            <div className="flex flex-col my-auto">
              <p className="mx-auto max-w-[318px] text-center text-[13px] leading-[1.45] text-white md:mx-0 md:max-w-[730px] md:justify-self-end md:whitespace-nowrap md:text-[24px] md:leading-[32px]">
                We are defined by a strong and cohesive company culture.
              </p>
              <p className="mx-auto max-w-[318px] text-center text-[13px] leading-[1.45] text-white md:mx-0 md:max-w-[730px] md:justify-self-end md:whitespace-nowrap md:text-[24px] md:leading-[32px]">
                We striveto cultivate a working environment where everyone can thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-10 md:bg-[#f5fcff] md:px-10 md:py-24">
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

            <section className="hidden rounded-[20px] bg-[#dfe7f0] px-8 py-8 md:block md:h-[1163px] md:min-h-[1159px] md:px-[30px] md:py-[26px]">
              <h2 className="text-[22px] font-bold leading-[1.18] text-primary-navy-blue md:text-[24px] md:leading-[36px]">
                Mahara Fresh Graduate Development Program
              </h2>
              <div className="mt-6 grid gap-4">
                {maharaSections.map((section, index) => (
                  <section key={section.title}>
                    <h3 className="text-[16px] font-bold leading-[1.35] text-[#43556c] md:text-[18px] md:leading-[24px]">
                      {section.title}
                    </h3>
                    <div className="mt-2 grid gap-3 text-[15px] leading-[1.43] text-[#43556c] md:text-[16px] md:leading-[24px]">
                      {section.paragraphs.map((paragraph) => (
                        <div key={paragraph}>
                          <p>{paragraph}
                              {index === 2 && section.paragraphs[2] === paragraph ? <Link
                            href="/people-and-culture/mahara-fresh-graduate-development-program"
                            className="mt-2 inline-flex text-[15px] font-bold leading-none text-primary-blue transition-colors hover:text-primary-sky-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-sky-blue md:text-[16px]"
                          >
                            View more...
                          </Link> : null}
                          </p>
                          
                        </div>
                      ))}
                    </div>
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
        <div className="mx-auto grid w-full max-w-[1240px] gap-8">
          {peopleCultureGallery.slice(0, 2).map((image, index) => (
            <MediaPanel key={image.src} showPlay={index === 1} />
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
        <h3 className="text-[16px] font-bold uppercase leading-6 text-primary-navy-blue md:text-[18px]">
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
          className={`flex flex-col bg-[#062c45] text-white items-center ${
            mobile
              ? "h-[177px] rounded-[20px] px-6 py-6"
              : "rounded-[20px] px-6 py-7 md:h-[177px] md:min-h-[177px]"
          }`}
        >
          <p
            className={`font-bold uppercase text-white/70 ${
              mobile ? "text-[13px] leading-5" : "text-[13px] leading-5"
            }`}
          >
            EMIRATIZATION RATE
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
        href="/people-and-culture/mahara-fresh-graduate-development-program"
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
        <PeopleCultureGalleryCarousel
          images={peopleCultureMobileGallery}
          frameClassName="rounded-[12px] bg-primary-navy-blue"
          imageClassName="h-[540px] w-full object-cover"
          controlsClassName="mt-8 flex justify-center gap-8"
          previousButtonClassName="flex size-11 items-center justify-center rounded-full border border-white/70 text-white/72"
          nextButtonClassName="flex size-11 items-center justify-center rounded-full bg-white text-primary-sky-blue"
          iconClassName="size-5"
          showDots
        />
        {peopleCultureVideos.map((video) => (
          <article key={video.src}>
            <div className="relative overflow-hidden rounded-[12px] bg-primary-navy-blue">
              <video
                controls
                playsInline
                preload="metadata"
                src={video.src}
                poster={video.poster}
                aria-label={video.playLabel}
                className="h-[320px] w-full bg-primary-navy-blue object-cover"
              />
            </div>
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

function MediaPanel({ showPlay }: { showPlay: boolean }) {
  if (showPlay) {
    return (
      <article>
        <LandingVideoCarousel
          videos={peopleCultureVideos}
          videoClassName="h-[230px] w-full bg-primary-navy-blue object-cover md:h-[610px]"
        />
      </article>
    );
  }

  return (
    <PeopleCultureGalleryCarousel
      images={peopleCultureGallery}
      imageClassName="h-[230px] w-full object-cover md:h-[610px]"
    />
  );
}
