import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";
import { Header } from "../../../app/components/landing/Header";
import { NmdcFooter } from "../../../app/components/landing/NmdcFooter";
import { OverviewVideoPlayer } from "../nmdc-overview/OverviewVideoPlayer";
import {
  aiPlatforms,
  nmdcTechnologyBrand,
  nmdcTechnologyNavLinks,
  technologyApplications,
  technologyHero,
  technologyIntro,
  technologyMedia,
  technologySections,
  technologyVideo,
} from "./content";

export function NmdcTechnologyPage() {
  return (
    <main className="overflow-x-hidden bg-[#f4f7fa] text-[#43536a]">
      <section className="relative isolate h-[290px] overflow-hidden bg-primary-navy-blue px-5 text-white md:h-[487px] md:px-10">
        <Image
          src={technologyHero.image}
          alt={technologyHero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,15,26,0.72)_0%,rgba(3,15,26,0.42)_48%,rgba(3,15,26,0.76)_100%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.36)_0%,rgba(0,0,0,0.10)_45%,rgba(0,0,0,0.22)_100%)]"
          aria-hidden="true"
        />
        <Header
          brandName={nmdcTechnologyBrand.name}
          logo={nmdcTechnologyBrand.logo}
          logoAlt={nmdcTechnologyBrand.logoAlt}
          links={nmdcTechnologyNavLinks}
        />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1240px] items-end pb-[34px] md:pb-[137px]">
          <div className="max-w-[620px]">
            <h1 className="text-[30px] font-bold leading-[36px] text-white md:text-[48px] md:leading-[58px]">
              <span className="hidden md:inline">Technology &amp; Ai</span>
              <span className="md:hidden">Technology &amp; AI</span>
            </h1>
            <p className="mt-[9px] max-w-[320px] text-[14px] font-normal leading-[21px] text-white md:hidden">
              {technologyHero.subtitle}
            </p>
          </div>
        </div>
      </section>

      <MobileTechnologyContent />

      <section className="hidden md:block bg-[#f4f7fa] md:px-10 md:pb-[100px] md:pt-12">
        <div className="mx-auto grid w-full max-w-[1240px] gap-8 lg:grid-cols-[minmax(0,609px)_minmax(0,609px)] lg:gap-6">
          <div>
            <h2 className="max-w-[590px] text-[22px] font-bold leading-[30px] text-[#43536a] md:text-[24px] md:leading-[30px]">
              {technologyIntro.title}
            </h2>
            <p className="mt-5 max-w-[590px] text-[16px] leading-[27px] text-[#43536a] md:text-[18px] md:leading-[29px]">
              {technologyIntro.copy}
            </p>

            <div className="mt-[34px] grid gap-9">
              {technologySections.map((section, index) =>
                index === 0 ? (
                  <article
                    key={section.title}
                    className="rounded-[15px] bg-[#062c45] px-6 py-6 text-white md:h-[339px] md:px-6 md:py-6"
                  >
                    <SectionHeading
                      title={section.title}
                      icon={section.icon}
                      inverted
                    />
                    <SectionList
                      points={section.points}
                      className="mt-4 text-white"
                    />
                  </article>
                ) : (
                  <article key={section.title}>
                    <SectionHeading title={section.title} icon={section.icon} />
                    <SectionList
                      points={section.points}
                      className="mt-4 text-[#43536a]"
                    />
                  </article>
                ),
              )}
            </div>

            <section className="mt-9">
              <h2 className="text-[22px] font-bold leading-[30px] text-[#43536a]">
                {technologyApplications.title}
              </h2>
              <div className="mt-[18px] rounded-[22px] border border-primary-sky-blue/45 bg-[#062c45] px-6 pb-7 pt-2 text-white md:min-h-[812px]">
                <div>
                  {aiPlatforms.map((platform) => (
                    <div
                      key={platform}
                      className="border-b border-white/16 py-[17px] text-[20px] font-bold leading-[26px] text-primary-sky-blue md:text-[22px] md:leading-[30px]"
                    >
                      {platform}
                    </div>
                  ))}
                </div>
                <p className="mt-7 text-center text-[18px] font-bold leading-7 text-white md:text-[24px]">
                  {technologyApplications.knowMoreLabel}{" "}
                  <Link
                    href={technologyApplications.href}
                    className="text-primary-sky-blue underline underline-offset-4 transition-colors hover:text-white"
                  >
                    {technologyApplications.href}
                  </Link>
                </p>
              </div>
            </section>
          </div>

          <aside className="grid content-start gap-8">
            {technologyMedia.map((image, index) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={609}
                height={index === 0 ? 352 : 865}
                className={`w-full rounded-[22px] bg-[#062c45] object-cover ${
                  index === 0
                    ? "h-[220px] md:h-[352px]"
                    : "h-[420px] md:h-[865px]"
                }`}
              />
            ))}
          </aside>
        </div>

        <div className="mx-auto mt-[52px] w-full max-w-[1240px] [&>div]:rounded-[22px]">
          <OverviewVideoPlayer
            poster={technologyVideo.poster}
            sources={technologyVideo.sources}
          />
        </div>
      </section>

      <NmdcFooter />
    </main>
  );
}

function MobileTechnologyContent() {
  return (
    <section className="bg-[#f4f7fa] md:hidden">
      <div className="bg-white px-5 pb-4 pt-[30px]">
        <h2 className="text-[20px] font-bold leading-[28px] text-[#43536a]">
          {technologyIntro.title}
        </h2>
        <p className="mt-[18px] text-[14px] leading-[23px] text-[#43536a]">
          {technologyIntro.copy}
        </p>
      </div>

      <Image
        src={technologyMedia[0].src}
        alt={technologyMedia[0].alt}
        width={360}
        height={207}
        className="h-[207px] w-full object-cover"
      />
      <Image
        src={technologyMedia[1].src}
        alt={technologyMedia[1].alt}
        width={360}
        height={325}
        className="h-[325px] w-full object-cover"
      />

      <MobileTechnologySection section={technologySections[0]} inverted />

      <div className="[&>div]:max-w-none [&>div]:rounded-none [&_button>span]:size-[70px] [&_video]:!aspect-auto [&_video]:!h-[232px]">
        <OverviewVideoPlayer
          poster={technologyVideo.poster}
          sources={technologyVideo.sources}
        />
      </div>

      <MobileTechnologySection section={technologySections[1]} />

      <section className="bg-[#062c45] px-5 pb-[99px] pt-[34px] text-white">
        <h2 className="text-[20px] font-bold leading-[28px]">
          {technologyApplications.title}
        </h2>
        <div className="mt-4">
          {aiPlatforms.map((platform) => (
            <div
              key={platform}
              className="break-words border-b border-white/16 py-[14px] text-[14px] leading-[21px] text-primary-sky-blue"
            >
              {platform}
            </div>
          ))}
        </div>
        <p className="mt-[26px] break-words text-[16px] leading-6 text-white">
          {technologyApplications.knowMoreLabel}
          <Link
            href={technologyApplications.href}
            className="text-primary-sky-blue underline underline-offset-4"
          >
            {technologyApplications.href}
          </Link>
        </p>
      </section>
    </section>
  );
}

function MobileTechnologySection({
  section,
  inverted = false,
}: {
  section: (typeof technologySections)[number];
  inverted?: boolean;
}) {
  const points = section.mobilePoints ?? section.points;

  return (
    <article
      className={`px-5 pb-1 pt-[34px] ${
        inverted ? "bg-[#062c45] text-white" : "bg-white text-[#43536a]"
      }`}
    >
      <SectionHeading
        title={section.title}
        icon={section.icon}
        inverted={inverted}
        mobile
      />
      <div className={`mt-[18px] border-t ${inverted ? "border-white/16" : "border-[#c7d0da]"}`} />
      <SectionList
        points={points}
        className={`mt-[18px] ${inverted ? "text-white" : "text-[#43536a]"}`}
        mobile
      />
    </article>
  );
}

function SectionHeading({
  title,
  icon,
  inverted = false,
  mobile = false,
}: {
  title: string;
  icon: string;
  inverted?: boolean;
  mobile?: boolean;
}) {
  const iconClassName = "mt-0.5 size-[22px] shrink-0 text-primary-sky-blue";

  return (
    <h2
      className={`flex items-start gap-3 font-bold ${
        mobile ? "text-[20px] leading-[28px]" : "text-[22px] leading-[30px]"
      } ${
        inverted ? "text-white" : "text-[#43536a]"
      }`}
    >
      {icon === "bolt" ? (
        <BoltIcon className={iconClassName} />
      ) : (
        <NetworkIcon className={iconClassName} />
      )}
      <span>{title}</span>
    </h2>
  );
}

function SectionList({
  points,
  className,
  mobile = false,
}: {
  points: string[];
  className: string;
  mobile?: boolean;
}) {
  return (
    <ul
      className={`grid ${
        mobile
          ? "gap-[14px] text-[14px] leading-[23px]"
          : "gap-0.5 text-[16px] leading-[27px] md:text-[18px] md:leading-[27px]"
      } ${className}`}
    >
      {points.map((point) => (
        <li key={point} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-[11px] size-1 shrink-0 rounded-full bg-current"
          />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}

function NetworkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <path d="M12 5v6" strokeLinecap="round" />
      <path d="M6 13h12" strokeLinecap="round" />
      <rect x="9.5" y="2.5" width="5" height="5" rx="1" />
      <rect x="3.5" y="15.5" width="5" height="5" rx="1" />
      <rect x="15.5" y="15.5" width="5" height="5" rx="1" />
      <path d="M6 13v2.5M18 13v2.5" strokeLinecap="round" />
    </svg>
  );
}

function BoltIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <path
        d="M13 2 4 14h7l-1 8 10-13h-7l1-7Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
