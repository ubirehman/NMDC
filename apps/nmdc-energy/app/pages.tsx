import Image from "next/image";
import Link from "next/link";
import type { HTMLAttributes, ReactNode } from "react";
import { InstagramIcon } from "../../../app/components/landing/SocialIcons";
import { EnergyHomeCardRail } from "../components/EnergyHomeCardRail";
import { EnergyOverviewVideoPlayer } from "../components/EnergyOverviewVideoPlayer";
import { EnergyProductImageCarousel } from "../components/EnergyProductImageCarousel";
import { EnergyYardImageCarousel } from "../components/EnergyYardImageCarousel";
import { Header } from "../components/Header";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "../components/icons";
import { getEnergyNavLinks, nmdcEnergyContent as content } from "../content/content";

function EnergyBackground() {
  return (
    <>
      <Image
        src={content.home.hero.background.src}
        alt={content.home.hero.background.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[48%_50%] md:object-center"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,24,20,0.82)_0%,rgba(2,47,39,0.56)_49%,rgba(2,24,20,0.78)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,24,20,0.20)_0%,rgba(2,47,39,0.18)_45%,rgba(1,22,18,0.78)_100%)]"
        aria-hidden="true"
      />
    </>
  );
}

function VisitButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-[3px] text-[15px] font-bold leading-5 text-energy-ink transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-energy-green"
    >
      <span className="flex h-[49px] w-[174px] items-center justify-center rounded-full bg-white shadow-[0_16px_32px_rgba(0,0,0,0.18)] transition-colors group-hover:bg-white/92">
        {label}
      </span>
      <span className="flex size-[49px] items-center justify-center rounded-full bg-energy-green text-white shadow-[0_16px_32px_rgba(0,0,0,0.18)] transition-transform duration-200 group-hover:translate-x-0.5">
        <ArrowUpRight className="size-5" />
      </span>
    </Link>
  );
}

function HomeHeadline() {
  const headline = content.home.hero.headline;

  return (
    <h1 className="text-[28px] font-bold uppercase leading-[36px] tracking-[0] text-white md:text-[48px] md:leading-[56px]">
      {headline.white.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
      {headline.accent.map((line) => (
        <span key={line} className="block text-energy-green">
          {line}
        </span>
      ))}
    </h1>
  );
}

export function NmdcEnergyHomePage() {
  const hero = content.home.hero;

  return (
    <main className="min-h-screen bg-energy-navy">
      <section className="relative isolate min-h-[max(786px,100svh)] overflow-hidden bg-energy-navy px-5 text-white md:px-10">
        <EnergyBackground />
        <Header links={getEnergyNavLinks("/")} />

        <div className="relative z-10 mx-auto min-h-[max(786px,100svh)] w-full max-w-[1240px]">
          <div className="pt-[140px] md:absolute md:left-0 md:top-[188px] md:w-[670px] md:pt-0 [@media_(pointer:coarse)_and_(min-width:768px)_and_(max-width:1199px)]:max-w-[calc(100vw-80px)]">
            <HomeHeadline />

            <div className="mt-[24px] flex max-w-[320px] items-start gap-[18px] md:mt-[38px] md:max-w-[600px] md:gap-[14px]">
              <span
                className="mt-[3px] h-[43px] w-[4px] shrink-0 rounded-full bg-energy-green md:h-[43px]"
                aria-hidden="true"
              />
              <p className="text-[16px] font-normal leading-[27px] text-white/92 md:text-[16px] md:leading-[26px]">
                {hero.subhead}
              </p>
            </div>

            <div className="mt-[27px] md:mt-[34px]">
              <VisitButton href={hero.cta.href} label={hero.cta.label} />
            </div>
          </div>

          <div className="absolute inset-x-0 top-[480px] z-10 px-5 md:absolute md:bottom-[82px] md:right-0 md:top-auto md:left-auto md:w-[832px] md:px-0 [@media_(pointer:coarse)_and_(min-width:768px)_and_(max-width:1199px)]:w-[calc(100vw-80px)]">
            <EnergyHomeCardRail cards={content.home.cards} />
          </div>
        </div>
      </section>
    </main>
  );
}

function EnergyLineIcon({
  icon,
  className = "",
}: {
  icon: string;
  className?: string;
}) {
  const shared = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2.2,
  };

  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      {icon === "clock" ? (
        <>
          <circle {...shared} cx="24" cy="24" r="15" />
          <path {...shared} d="M24 14v11l7 5" />
        </>
      ) : icon === "people" ? (
        <>
          <circle {...shared} cx="24" cy="17" r="5" />
          <circle {...shared} cx="14" cy="20" r="4" />
          <circle {...shared} cx="34" cy="20" r="4" />
          <path {...shared} d="M15 37v-5a9 9 0 0 1 18 0v5" />
          <path {...shared} d="M7 36v-3a8 8 0 0 1 9-8" />
          <path {...shared} d="M41 36v-3a8 8 0 0 0-9-8" />
          <path {...shared} d="M12 37h24" />
        </>
      ) : icon === "cost" ? (
        <>
          <path {...shared} d="M13 13h18c3 0 3 5 0 5H15c-3 0-3 5 0 5h18c3 0 3 5 0 5H13" />
          <path {...shared} d="M20 28v8h15" />
          <circle {...shared} cx="31" cy="33" r="9" />
          <path {...shared} d="M31 28v10M27 31c0-2 2-3 4-3s4 1 4 3-2 3-4 3-4 1-4 3" />
        </>
      ) : icon === "shield" ? (
        <>
          <path {...shared} d="M24 6 38 12v10c0 10-6 17-14 20-8-3-14-10-14-20V12l14-6Z" />
          <path {...shared} d="M19 24h10M24 19v10" />
          <path {...shared} d="M17 16c3 2 11 2 14 0" />
        </>
      ) : icon === "scan" ? (
        <>
          <rect {...shared} x="15" y="7" width="18" height="30" rx="3" />
          <path {...shared} d="M20 13h8M20 31h8" />
          <path {...shared} d="M9 30c3 0 5-2 5-5v-5" />
          <path {...shared} d="M9 36c6 0 10-4 10-10" />
          <path {...shared} d="M22 20h7v7h-7z" />
          <path {...shared} d="M18 20h1M32 20h1M18 27h1M32 27h1" />
        </>
      ) : icon === "procurement" ? (
        <>
          <path {...shared} d="M12 14h14l5 5v17H12z" />
          <path {...shared} d="M26 14v6h6" />
          <path {...shared} d="M17 25h9M17 31h7" />
          <path {...shared} d="m30 32 3 3 6-8" />
          <path {...shared} d="M14 10h16" />
        </>
      ) : icon === "engineering" ? (
        <>
          <circle {...shared} cx="24" cy="16" r="6" />
          <path {...shared} d="M14 39v-5a10 10 0 0 1 20 0v5" />
          <path {...shared} d="M16 16h16" />
          <path {...shared} d="M18 12c2-5 10-5 12 0" />
          <path {...shared} d="M17 39h14" />
          <path {...shared} d="m34 19 3-3 3 3-3 3Z" />
        </>
      ) : (
        <>
          <path {...shared} d="M14 10h17l5 5v23H14z" />
          <path {...shared} d="M31 10v6h6" />
          <path {...shared} d="M19 22h10M19 28h8" />
          <path {...shared} d="m28 35 3 3 7-9" />
        </>
      )}
    </svg>
  );
}

function EnergySectionHeading({ title }: { title: string }) {
  return (
    <h2 className="max-w-[320px] break-words text-[30px] font-bold uppercase leading-[1.05] tracking-[0] text-energy-green md:max-w-none md:text-[48px]">
      {title}
    </h2>
  );
}

function EnergyOverviewHero() {
  const hero = content.overview.hero;

  return (
    <section className="relative isolate overflow-hidden bg-energy-deep-navy px-5 pb-9 pt-[158px] text-white md:h-[700px] md:px-10 md:pb-0 md:pt-0">
      <Image
        src={hero.background.src}
        alt={hero.background.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[47%_50%]"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,16,15,0.82)_0%,rgba(2,24,20,0.60)_46%,rgba(2,16,15,0.80)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,16,15,0.18)_0%,rgba(2,16,15,0.30)_54%,rgba(2,16,15,0.70)_100%)]"
        aria-hidden="true"
      />
      <Header links={getEnergyNavLinks("/overview")} />

      <div className="relative z-10 mx-auto grid w-full max-w-[1240px] gap-8 md:grid-cols-[minmax(0,520px)_minmax(0,630px)] md:gap-[90px] md:pt-[190px]">
        <div>
          <p className="text-[23px] font-bold leading-7 text-energy-green md:text-[30px] md:leading-9">
            {hero.eyebrow}
          </p>
          <h1 className="mt-6 text-[48px] font-bold leading-[50px] tracking-[0] md:mt-3 md:text-[58px] md:leading-[1.04]">
            {hero.title}
          </h1>
          <div className="mt-9 grid gap-7 text-[20px] font-normal leading-[28px] text-white md:mt-7 md:gap-7 md:text-[20px] md:leading-[28px]">
            <p>{hero.intro[0]}</p>
            <p>
              {hero.intro[1]}{" "}
              <Link
                href={hero.readMore.href}
                className="font-bold text-energy-green underline decoration-energy-green/80 underline-offset-2 transition-colors hover:text-white"
              >
                {hero.readMore.label}
              </Link>
            </p>
          </div>
        </div>

        <div className="relative h-[312px] overflow-hidden rounded-[18px] md:h-[420px] md:self-start">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            sizes="(min-width: 768px) 630px, 100vw"
            className="object-cover object-[45%_50%]"
          />
        </div>
      </div>
    </section>
  );
}

function EnergyAtAGlanceDetailHero() {
  const detail = content.overview.atAGlanceDetail;

  return (
    <section className="relative isolate overflow-hidden bg-energy-deep-navy px-5 pb-10 pt-[110px] text-white md:min-h-[821px] md:px-10 md:pb-16 md:pt-0">
      <Image
        src={detail.background.src}
        alt={detail.background.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[42%_50%] md:object-center"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,16,15,0.82)_0%,rgba(2,24,20,0.64)_47%,rgba(2,16,15,0.80)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,16,15,0.18)_0%,rgba(2,16,15,0.38)_58%,rgba(2,16,15,0.76)_100%)]"
        aria-hidden="true"
      />
      <Header links={getEnergyNavLinks("/overview")} />

      <div className="relative z-10 mx-auto w-full max-w-[1240px] md:pt-[180px]">
        <Link
          href={detail.back.href}
          className="inline-flex items-center gap-3 text-[18px] font-bold leading-6 text-white transition-colors hover:text-energy-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-energy-green md:text-[18px]"
        >
          <ArrowLeft className="size-6 text-energy-green" />
          {detail.back.label}
        </Link>

        <div className="mt-[92px] grid gap-8 md:mt-[58px] md:grid-cols-[minmax(0,520px)_minmax(0,630px)] md:items-start md:gap-[90px]">
          <div className="flex flex-col w-full h-fit">
            <p className="text-[18px] font-bold leading-6 text-energy-green md:text-[30px] md:leading-9">
              {detail.eyebrow}
            </p>
            <h1 className="mt-4 text-[40px] font-bold leading-[42px] tracking-[0] md:mt-3 md:text-[58px] md:leading-[1.04]">
              {detail.title}
            </h1>
            <div className="mt-7 break-words grid gap-10 text-[16px] font-normal leading-[25px] text-white md:mt-7 md:gap-7 md:text-[18px] md:leading-[25px]">
              {detail.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="relative h-[203px] overflow-hidden rounded-[12px] md:mt-[48px] md:h-[420px] md:rounded-[12px]">
            <Image
              src={detail.image.src}
              alt={detail.image.alt}
              fill
              sizes="(min-width: 768px) 630px, 100vw"
              className="object-cover object-[45%_50%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function EnergyYardIcon({
  icon,
  className = "",
}: {
  icon: string;
  className?: string;
}) {
  const shared = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2.4,
  };

  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      {icon === "grid" ? (
        <>
          <rect {...shared} x="9" y="10" width="30" height="28" rx="3" />
          <path {...shared} d="M15 10v28M24 10v28M33 10v28M9 19h30M9 29h30" />
          <path {...shared} d="M14 15h2M23 15h2M32 15h2M14 24h2M23 24h2M32 24h2M14 34h2M23 34h2M32 34h2" />
        </>
      ) : icon === "expand" ? (
        <>
          <path {...shared} d="M10 33 33 10" />
          <path {...shared} d="M22 10h11v11M26 38H12a2 2 0 0 1-2-2V22" />
          <path {...shared} d="M38 26v10a2 2 0 0 1-2 2H26" />
        </>
      ) : icon === "worker" ? (
        <>
          <path {...shared} d="M16 18h16" />
          <path {...shared} d="M18 17c.7-5.3 4-8 6-8s5.3 2.7 6 8" />
          <path {...shared} d="M20 12v4M28 12v4" />
          <circle {...shared} cx="24" cy="20" r="7" />
          <path {...shared} d="M14 40v-5c0-5.5 4.5-10 10-10s10 4.5 10 10v5" />
          <path {...shared} d="M18 40h12" />
        </>
      ) : icon === "award" || icon === "achievement" ? (
        <>
          <path {...shared} d="M17 6h14v7c0 5-3 9-7 10-4-1-7-5-7-10V6Z" />
          <path {...shared} d="m24 11 1.8 3.3 3.7.6-2.7 2.6.6 3.7-3.4-1.7-3.4 1.7.6-3.7-2.7-2.6 3.7-.6Z" />
          <path {...shared} d="M14 10h-3v4c0 4.5 3.1 8.2 7.2 9.3M34 10h3v4c0 4.5-3.1 8.2-7.2 9.3" />
          <path {...shared} d="M20 31h8M18 40h12M24 24v16" />
        </>
      ) : icon === "steel" ? (
        <>
          <path {...shared} d="M8 16h22l10 16H18Z" />
          <path {...shared} d="M15 16 25 32M25 16l10 16" />
          <path {...shared} d="M12 24h23" />
          <path {...shared} d="M19 11h10M14 37h18" />
        </>
      ) : icon === "robot" ? (
        <>
          <path {...shared} d="M9 38h17M14 31l7 7" />
          <path {...shared} d="M15 33 30 18l6 6-15 15" />
          <path {...shared} d="M25 13 31 7l10 10-6 6" />
          <circle {...shared} cx="31" cy="18" r="3.5" />
          <path {...shared} d="M36 25h5v7" />
        </>
      ) : icon === "monitor" ? (
        <>
          <rect {...shared} x="8" y="10" width="32" height="24" rx="3" />
          <path {...shared} d="M18 39h12M24 34v5" />
          <path {...shared} d="M14 26h6l3-7 5 11 3-7h4" />
          <circle {...shared} cx="34" cy="23" r="1.5" />
        </>
      ) : icon === "shield" ? (
        <>
          <path {...shared} d="M24 6 38 12v10c0 10-6 17-14 20-8-3-14-10-14-20V12l14-6Z" />
          <path {...shared} d="m18 24 4 4 8-9" />
          <path {...shared} d="M16 14h16" />
        </>
      ) : icon === "cloud" ? (
        <>
          <path {...shared} d="M16 32h18a8 8 0 0 0 1-16 12 12 0 0 0-23-3A9 9 0 0 0 16 32Z" />
          <path {...shared} d="M17 39v-5M24 42v-8M31 39v-5" />
          <path {...shared} d="M20 19h8M24 15v8" />
        </>
      ) : (
        <>
          <path {...shared} d="M24 7 42 39H6Z" />
          <path {...shared} d="M24 18v10M24 34h.01" />
          <path {...shared} d="M14 39h20" />
        </>
      )}
    </svg>
  );
}

function EnergyYardCapabilityIcon({
  icon,
  image,
}: {
  icon: string;
  image?: { src: string; alt: string };
}) {
  if (image) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        width={84}
        height={84}
        sizes="(min-width: 768px) 84px, 56px"
        className="size-[56px] object-contain md:size-[84px]"
      />
    );
  }

  return <EnergyYardIcon icon={icon} className="size-[56px] md:size-[74px]" />;
}

function EnergyYardFactIcon({
  icon,
  className = "",
}: {
  icon: string;
  className?: string;
}) {
  const shared = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2,
  };

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {icon === "area" ? (
        <>
          <rect {...shared} x="4" y="5" width="16" height="14" rx="2" />
          <path {...shared} d="M9 5v14M15 5v14M4 11h16" />
        </>
      ) : icon === "capabilities" ? (
        <>
          <path {...shared} d="M12 3v4M12 17v4M3 12h4M17 12h4" />
          <path {...shared} d="m5.6 5.6 2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
          <circle {...shared} cx="12" cy="12" r="3" />
        </>
      ) : (
        <>
          <path {...shared} d="M8 9h8" />
          <path {...shared} d="M9 8c.4-3 2.2-4.5 3-4.5S14.6 5 15 8" />
          <circle {...shared} cx="12" cy="10.5" r="4" />
          <path {...shared} d="M5 21v-2a7 7 0 0 1 14 0v2" />
        </>
      )}
    </svg>
  );
}

function EnergyYardRecordLogo({
  logo,
}: {
  logo: typeof content.yardHighlights.keyHighlights.record.logo;
}) {
  return (
    <span className="relative block size-[72px] shrink-0 overflow-hidden rounded-full bg-white md:size-[92px]">
      <Image
        src={logo.src}
        alt={logo.alt}
        fill
        sizes="(min-width: 768px) 92px, 72px"
        className="object-cover"
      />
    </span>
  );
}

function EnergyYardSectionTitle({ title }: { title: string }) {
  return (
    <div className="grid grid-cols-2 items-center gap-7">
      <h2 className="shrink-0 text-[20px] font-bold uppercase leading-6 text-energy-green md:text-[24px] md:leading-8">
        {title}
      </h2>
      <span className="ml-auto block h-px w-2/3 bg-[#b6c5cf]" aria-hidden="true" />
    </div>
  );
}

function EnergyYardHighlightsHero() {
  const hero = content.yardHighlights.hero;

  return (
    <section className="relative isolate h-[321px] overflow-hidden bg-energy-deep-navy px-5 text-white md:h-[486px] md:px-10">
      <Image
        src={hero.background.src}
        alt={hero.background.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[46%_46%]"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,40,33,0.82)_0%,rgba(6,40,33,0.70)_55%,rgba(6,40,33,0.92)_100%)]"
        aria-hidden="true"
      />
      <Header links={getEnergyNavLinks("/yard-highlights")} />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1240px] items-end pb-[54px] md:pb-[74px]">
        <h1 className="text-[27px] font-bold uppercase leading-[32px] tracking-[0] text-white md:text-[46px] md:leading-[54px]">
          <span className="block">{hero.title.white}</span>
          <span className="block text-energy-green">{hero.title.accent}</span>
        </h1>
      </div>
    </section>
  );
}

function EnergyYardKeyHighlights() {
  const keyHighlights = content.yardHighlights.keyHighlights;

  return (
    <section className="bg-white px-5 pb-11 pt-8 text-energy-ink md:px-10 md:pb-[78px] md:pt-[72px]">
      <div className="mx-auto w-full max-w-[1240px]">
        <EnergyYardSectionTitle title={keyHighlights.title} />

        <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,760px)_436px] md:gap-8">
          <div className="min-w-0 md:col-start-1 md:row-start-1">
            <EnergyYardImageCarousel
              images={keyHighlights.aerialImages}
              previousLabel="Previous yard"
              nextLabel="Next yard"
            />
          </div>

          <div className="grid gap-0 overflow-hidden rounded-[14px] bg-[#062b43] px-8 py-5 text-white md:col-start-2 md:row-span-2 md:row-start-1 md:rounded-[16px] md:px-10 md:py-8">
            {keyHighlights.yards.map((yard, index) => (
              <div
                key={yard.name}
                className={`py-7 ${index === 0 ? "pt-0" : "border-t border-white/15"} md:py-8`}
              >
                <h3 className="text-center text-[22px] font-bold leading-6 md:text-[17px]">
                  {yard.name} <span aria-hidden="true">{yard.flag}</span>
                </h3>
                <ul className="mt-5 grid gap-3 rounded-[8px] bg-[#113a58] px-5 py-5 text-[12px] font-bold leading-5 md:text-[13px]">
                  {yard.facts.map((fact) => (
                    <li key={fact.text} className="flex gap-3">
                      <EnergyYardFactIcon
                        icon={fact.icon}
                        className="mt-0.5 size-4 shrink-0 text-energy-green md:size-[18px]"
                      />
                      <span>{fact.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid rounded-[14px] bg-[#062b43] px-8 py-7 text-white md:col-start-1 md:row-start-2 md:min-h-[520px] md:grid-cols-1 md:px-[94px] md:py-12">
            {keyHighlights.stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`grid grid-cols-[70px_minmax(0,1fr)] items-center gap-7 ${
                  index === 0 ? "" : "mt-8 border-t border-white/14 pt-8 md:mt-0 md:border-t-0 md:pt-0"
                } md:grid-cols-[100px_minmax(0,1fr)] md:gap-10`}
              >
                <EnergyYardIcon
                  icon={stat.icon}
                  className="size-[54px] text-energy-green md:size-[76px]"
                />
                <div className="border-l border-white/30 pl-7 md:pl-10">
                  <p className="text-[32px] font-bold leading-none md:text-[54px]">
                    {stat.value}{" "}
                    <span className="align-middle text-[13px] leading-none text-energy-green md:text-[15px]">
                      {stat.unit}
                    </span>
                  </p>
                  <p className="mt-3 text-[13px] font-bold leading-5 md:text-[15px]">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <article className="mt-8 grid gap-5 rounded-[12px] border border-[#a7b4c0] bg-white px-6 py-6 md:mt-14 md:min-h-[176px] md:grid-cols-[150px_minmax(0,1fr)] md:items-center md:px-10">
          <div className="flex items-center gap-5 md:border-r md:border-[#a7b4c0] md:pr-9">
            <EnergyYardRecordLogo logo={keyHighlights.record.logo} />
          </div>
          <div>
            <h3 className="text-[22px] font-bold leading-6 text-energy-green">
              {keyHighlights.record.title}
            </h3>
            <p className="mt-2 text-[13px] font-bold leading-5 text-energy-ink md:text-[20px]">
              {keyHighlights.record.body}
            </p>
          </div>
        </article>

        <div className="mt-10 md:mt-16">
          <EnergyOverviewVideoPlayer
            videos={keyHighlights.video.videos}
            frameClassName="rounded-[12px] bg-energy-deep-navy md:rounded-[16px]"
            videoClassName="h-[336px] w-full bg-energy-deep-navy object-cover object-[44%_50%] md:h-[620px]"
            controlsClassName="mt-7 flex justify-center gap-6"
          />
        </div>
      </div>
    </section>
  );
}

function EnergyYardAchievements() {
  const achievements = content.yardHighlights.achievements;

  return (
    <section data-yard-achievements className="bg-white text-white">
      <div className="px-5 md:px-10">
        <div className="mx-auto w-full max-w-[1240px] border-t border-[#a7b4c0] py-8 md:py-[72px]">
          <EnergyYardSectionTitle title={achievements.title} />
        </div>
      </div>

      <div className="bg-[#062b43] px-5 py-10 md:px-10 md:py-[42px]">
        <div className="mx-auto grid w-full max-w-[1240px] gap-7 md:min-h-[245px] md:grid-cols-[236px_1px_193px_1px_minmax(0,1fr)] md:items-center md:gap-8">
          <div
            data-yard-achievement-icon-card
            className="mx-auto md:w-[193px] flex md:h-[270px] size-[150px] place-items-center rounded-[14px] bg-[#143a58] text-energy-green "
          >
            <EnergyYardIcon icon="achievement" className="mx-auto size-[100px] md:size-[132px]" />
          </div>

          <span className="hidden h-[205px] w-px bg-white/12 md:block" aria-hidden="true" />

          <div
            data-yard-achievement-summary-card
            className="mx-auto grid w-full max-w-[270px] rounded-[14px] bg-[#143a58] px-5 py-6 text-center md:h-full md:max-w-none md:content-center"
          >
            <h3 className="text-[14px] font-bold leading-5 text-white">
              {achievements.summaryTitle}
            </h3>
            <span className="mx-auto my-5 h-px w-full bg-energy-green" aria-hidden="true" />
            <div className="grid gap-5">
              {achievements.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-[34px] font-bold leading-none text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[12px] font-bold leading-5 text-white">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <span className="hidden h-[205px] w-px bg-white/12 md:block" aria-hidden="true" />

          <div data-yard-achievement-copy className="md:pl-6">
            <h3 className="text-[18px] font-bold leading-7 md:text-[22px] md:leading-8">
              {achievements.intro}
            </h3>
            <ul className="mt-6 grid gap-5 text-[13px] font-bold leading-6 md:text-[15px]">
              {achievements.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-4">
                  <span className="mt-2.5 size-2 shrink-0 rounded-full bg-energy-green" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function EnergyYardCapabilities() {
  const capabilities = content.yardHighlights.capabilities;

  return (
    <section data-yard-capabilities className="bg-white text-white">
      <div className="px-5 md:px-10">
        <div className="mx-auto w-full max-w-[1240px] py-8 md:py-[72px]">
          <EnergyYardSectionTitle title={capabilities.title} />
        </div>
      </div>

      <div className="bg-[#062b43] px-5 py-8 md:px-10 md:py-[80px]">
        <div
          data-yard-capability-grid
          className="mx-auto grid w-full max-w-[1240px] gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-6"
        >
          {capabilities.items.map((item) => (
            <article
              key={item.body}
              data-yard-capability-card
              className="grid min-h-[122px] grid-cols-[86px_minmax(0,1fr)] items-center rounded-[8px] bg-[#113a58] px-5 py-5 md:min-h-[150px] md:grid-cols-[184px_minmax(0,1fr)] md:px-8"
            >
              <div className="grid h-full place-items-center border-r border-white/22 pr-5 text-energy-green md:pr-9">
                <EnergyYardCapabilityIcon
                  icon={item.icon}
                  image={"image" in item ? item.image : undefined}
                />
              </div>
              <div className="pl-5 md:pl-9">
                {"value" in item && item.value ? (
                  <p className="text-[30px] font-bold leading-none text-energy-green md:text-[42px]">
                    {item.value}
                  </p>
                ) : null}
                <p className={`${"value" in item && item.value ? "mt-2" : ""} text-[13px] font-bold leading-5 md:text-[15px] md:leading-6`}>
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnergyProductCard({
  product,
}: {
  product: (typeof content.products.items)[number];
}) {
  return (
    <Link
      href={product.href}
      aria-label={product.title}
      className="group relative block h-[580px] min-w-0 overflow-hidden rounded-[34px] border-[4px] border-white bg-energy-navy shadow-[0_26px_44px_rgba(6,40,33,0.30)] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_34px_64px_rgba(6,40,33,0.36)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-energy-green md:h-[500px] md:rounded-[42px]"
    >
      <Image
        src={product.image.src}
        alt={product.image.alt}
        fill
        sizes="(min-width: 768px) 390px, 320px"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        style={{ objectPosition: product.image.objectPosition }}
      />
      <span
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,32,42,0.02)_0%,rgba(4,32,42,0.10)_42%,rgba(4,32,42,0.94)_100%)]"
        aria-hidden="true"
      />
      <h3 className="absolute bottom-[42px] left-[38px] right-7 text-[42px] font-bold leading-[48px] tracking-[0] text-energy-green md:bottom-[42px] md:left-[30px] md:text-[40px] md:leading-[48px]">
        {product.title}
      </h3>
    </Link>
  );
}

type EnergyProductDetail = (typeof content.products.details)[number];

function getEnergyProductSlugFromPath(productPath: string) {
  return productPath.split("/").filter(Boolean).pop() ?? "";
}

function getEnergyProductHeroBackground(productPath: string) {
  const hero = content.products.hero;
  const productSlug = getEnergyProductSlugFromPath(productPath);
  const heroBackgroundsBySlug = {
    jackets: hero.jacketBackground,
    "bridges-and-boat-landings": hero.bridgesAndBoatLandingsBackground,
    "pressure-vessels": hero.pressureVesselsBackground,
    "process-skids": hero.pressureVesselsBackground,
    "pipe-coating": hero.pipeCoatingBackground,
  };
  const selectedBackground =
    heroBackgroundsBySlug[productSlug as keyof typeof heroBackgroundsBySlug];

  return selectedBackground ?? hero.topSideBackground;
}

function EnergyProductHero({ productPath }: { productPath: string }) {
  const hero = content.products.hero;
  const background = getEnergyProductHeroBackground(productPath);

  return (
    <section className="relative isolate h-[450px] overflow-hidden bg-energy-deep-navy px-5 text-white md:h-[485px] md:px-10">
      <Image
        src={background.src}
        alt={background.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_50%]"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,24,20,0.66)_0%,rgba(2,24,20,0.58)_48%,rgba(2,24,20,0.74)_100%)]"
        aria-hidden="true"
      />
      <Header links={getEnergyNavLinks(content.products.activeHref)} />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1240px] items-end pb-[44px] md:pb-[73px]">
        <h1 className="text-[48px] font-bold leading-[58px] tracking-[0] text-white md:text-[48px] md:uppercase md:leading-[58px]">
          <span>{hero.titleLeading}</span>{" "}
          <span className="text-energy-green">{hero.titleAccent}</span>
        </h1>
      </div>
    </section>
  );
}

function EnergyDetailCard({
  children,
  className = "",
  ...props
}: {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLElement>) {
  return (
    <article
      {...props}
      className={`rounded-[14px] bg-[#062b43] p-6 text-white md:rounded-[16px] md:p-8 ${className}`}
    >
      {children}
    </article>
  );
}

function EnergyProductIntroCard({ detail }: { detail: EnergyProductDetail }) {
  const intro = detail.intro;

  return (
    <EnergyDetailCard className="min-h-[180px] md:min-h-[176px]">
      {"title" in intro && intro.title ? (
        <h2 className="text-[18px] font-bold uppercase leading-6 text-energy-green md:text-[24px] md:leading-8">
          {intro.title}
        </h2>
      ) : null}
      {"paragraphs" in intro && intro.paragraphs ? (
        <div className={`${"title" in intro && intro.title ? "mt-5" : ""} grid gap-5 text-[15px] leading-[23px] md:text-[16px] md:leading-[24px]`}>
          {intro.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : null}
      {"bullets" in intro && intro.bullets ? (
        <ul className={`${"title" in intro && intro.title ? "mt-5" : ""} grid gap-4 text-[14px] leading-[22px] md:text-[15px] md:leading-[23px]`}>
          {intro.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2 size-2 shrink-0 rounded-full bg-energy-green" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </EnergyDetailCard>
  );
}

function EnergyProductBarChart({
  chart,
}: {
  chart: NonNullable<EnergyProductDetail["chart"]>;
}) {
  const maxValue = Math.max(...chart.values.map((item) => item.value), 1);

  return (
    <EnergyDetailCard className="min-h-[180px] md:min-h-[176px]">
      <p className="max-w-[190px] text-[14px] font-bold leading-5 text-energy-green md:text-[15px]">
        {chart.title}
      </p>
      <div className="mt-5 grid h-[116px] grid-cols-3 items-end gap-7 px-4 md:mt-0 md:h-[120px] md:px-8">
        {chart.values.map((item) => (
          <div key={item.year} className="grid justify-items-center gap-3">
            <span className="text-[32px] font-bold leading-none text-white md:text-[36px]">
              {item.value}
            </span>
            <span
              className="block w-[72px] bg-[linear-gradient(180deg,rgba(0,183,101,0.72)_0%,rgba(0,183,101,0.18)_100%)]"
              style={{ height: `${Math.max(10, (item.value / maxValue) * 86)}px` }}
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
      <div className="mt-3 border-t flex-1 border-energy-green/80 grid grid-cols-3 px-4 text-center text-[24px] font-bold leading-8 text-energy-green md:px-8">
        {chart.values.map((item) => (
          <span key={item.year}>{item.year}</span>
        ))}
      </div>
    </EnergyDetailCard>
  );
}

function EnergyProductIcon({ icon }: { icon?: string }) {
  const mappedIcon =
    icon === "duration" ? "worker" : icon === "weight" ? "expand" : icon === "pipe" ? "grid" : "steel";

  return (
    <span className="grid size-[72px] shrink-0 place-items-center rounded-[8px] bg-white/7 text-energy-green">
      <EnergyYardIcon icon={mappedIcon} className="size-10" />
    </span>
  );
}

function EnergyProductHighlights({ detail }: { detail: EnergyProductDetail }) {
  if (!("highlights" in detail) || !detail.highlights) {
    return null;
  }

  return (
    <EnergyDetailCard className="min-h-[180px] md:min-h-[176px]">
      {"highlightsTitle" in detail && detail.highlightsTitle ? (
        <h2 className="text-[17px] font-bold leading-6 text-energy-green">
          {detail.highlightsTitle}
        </h2>
      ) : null}
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {detail.highlights.map((item) => (
          <div key={`${item.title}-${item.value}`} className="flex items-center gap-5">
            <EnergyProductIcon icon={item.icon} />
            <div>
              <p className="text-[12px] font-bold leading-4 text-white">{item.title}</p>
              <p className="mt-1 text-[24px] font-bold leading-7 text-energy-green">
                {item.value}
              </p>
              <p className="mt-1 text-[11px] font-bold leading-4 text-white">{item.unit}</p>
            </div>
          </div>
        ))}
      </div>
    </EnergyDetailCard>
  );
}

function EnergyPipeCoatingOverview({ detail }: { detail: EnergyProductDetail }) {
  if (detail.slug !== "pipe-coating") {
    return null;
  }

  return (
    <div
      data-pipe-coating-overview
      className="grid gap-3 md:grid-cols-[380px_minmax(0,1fr)] md:gap-5"
    >
      <EnergyProductIntroCard detail={detail} />
      <EnergyPipeCoatingCapabilitiesCard detail={detail} />
    </div>
  );
}

function EnergyPressureVesselsOverview({ detail }: { detail: EnergyProductDetail }) {
  if (
    detail.slug !== "pressure-vessels" ||
    !("highlights" in detail) ||
    !detail.highlights
  ) {
    return null;
  }

  const introParagraphs =
    "paragraphs" in detail.intro && detail.intro.paragraphs
      ? detail.intro.paragraphs
      : [];

  return (
    <div
      data-pressure-vessels-overview
      className="grid gap-5 md:grid-cols-[minmax(0,560px)_minmax(0,680px)]"
    >
      <EnergyDetailCard className="min-h-[300px] rounded-[22px] px-8 py-10 md:min-h-[340px] md:rounded-[28px] md:px-16 md:py-[76px]">
        <div className="grid gap-5 text-[22px] leading-[30px] text-white md:text-[29px] md:leading-[38px]">
          {introParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </EnergyDetailCard>

      <EnergyDetailCard
        data-pressure-vessels-highlights
        className="min-h-[300px] rounded-[22px] px-8 py-10 md:min-h-[340px] md:rounded-[28px] md:px-9 md:py-9"
      >
        {"highlightsTitle" in detail && detail.highlightsTitle ? (
          <h3 className="text-[24px] font-bold leading-8 text-energy-green md:text-[26px]">
            {detail.highlightsTitle}
          </h3>
        ) : null}
        <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-x-14 md:gap-y-10">
          {detail.highlights.map((item) => {
            const iconImage = "image" in item ? item.image : null;

            return (
              <article
                key={`${item.title}-${item.value}`}
                className="grid grid-cols-[96px_minmax(0,1fr)] items-center gap-7"
              >
                <span className="grid size-[96px] shrink-0 place-items-center rounded-[10px] bg-[#113a58] md:size-[104px]">
                  {iconImage ? (
                    <Image
                      src={iconImage.src}
                      alt={iconImage.alt}
                      width={72}
                      height={72}
                      className="size-[64px] object-contain md:size-[72px]"
                    />
                  ) : (
                    <EnergyProductIcon icon={item.icon} />
                  )}
                </span>
                <span>
                  <span className="block text-[14px] font-bold leading-5 text-white md:text-[16px]">
                    {item.title}
                  </span>
                  <span className="mt-2 block text-[32px] font-bold leading-9 text-energy-green md:text-[34px]">
                    {item.value}
                  </span>
                  <span className="mt-2 block text-[14px] font-bold leading-5 text-white md:text-[16px]">
                    {item.unit}
                  </span>
                </span>
              </article>
            );
          })}
        </div>
      </EnergyDetailCard>
    </div>
  );
}

function EnergyPipeCoatingCapabilitiesCard({
  detail,
}: {
  detail: EnergyProductDetail;
}) {
  if (
    detail.slug !== "pipe-coating" ||
    !("capabilities" in detail) ||
    !detail.capabilities
  ) {
    return null;
  }

  return (
    <EnergyDetailCard
      data-pipe-coating-capabilities-card
      className="min-h-[180px] rounded-[22px] p-[18px] md:min-h-[176px] md:rounded-[16px] md:p-4"
    >
      <div className="grid gap-8 md:grid-cols-[190px_minmax(0,1fr)] md:items-stretch md:gap-5">
        <div className="px-1 pt-1 md:px-0 md:pt-0">
          <h2 className="text-[20px] font-bold leading-7 text-energy-green md:text-[15px] md:leading-5">
            Capabilities :
          </h2>
          <ul className="mt-6 grid gap-5 text-[14px] leading-[22px] md:mt-4 md:gap-3 md:text-[12px] md:leading-4">
            {detail.capabilities.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-energy-green md:mt-1.5 md:size-1.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <EnergyPipeCoatingHighlightsList detail={detail} />
      </div>
    </EnergyDetailCard>
  );
}

function EnergyPipeCoatingHighlightsList({
  detail,
}: {
  detail: EnergyProductDetail;
}) {
  if (!("highlights" in detail) || !detail.highlights) {
    return null;
  }

  return (
    <div data-pipe-coating-highlights-list className="grid gap-[14px] md:gap-2">
      {detail.highlights.map((item) => {
        const iconImage = "image" in item ? item.image : null;

        return (
          <article
            key={`${item.title}-${item.value}`}
            className="grid min-h-[140px] grid-cols-[88px_minmax(0,1fr)] overflow-hidden rounded-[10px] bg-[#123a58] md:min-h-[48px] md:grid-cols-[72px_minmax(0,1fr)] md:rounded-[6px]"
          >
            <div className="grid place-items-center border-r border-white/15 px-4 md:px-3">
              {iconImage ? (
                <Image
                  src={iconImage.src}
                  alt={iconImage.alt}
                  width={64}
                  height={64}
                  className="size-[58px] object-contain md:size-[38px]"
                />
              ) : (
                <EnergyProductIcon icon={item.icon} />
              )}
            </div>
            <div className="min-w-0 px-5 py-5 md:px-4 md:py-2.5">
              <p className="text-[23px] font-bold leading-7 text-energy-green md:text-[13px] md:leading-4">
                {item.title}
              </p>
              <p className="mt-3 text-[11px] font-bold leading-[18px] text-white md:mt-1 md:text-[9px] md:leading-3">
                {item.value}
              </p>
              <p className="mt-1 text-[11px] font-bold leading-[18px] text-white md:text-[9px] md:leading-3">
                {item.unit}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function EnergyDetailArrowControls() {
  return (
    <div className="mt-6 flex items-center justify-end mr-auto gap-6 md:mt-8">
      <button
        type="button"
        aria-label="Previous product image"
        className="grid size-12 place-items-center rounded-full border border-[#c5d0dc] text-[#8ca0b5] transition-colors hover:border-energy-green hover:text-energy-green"
      >
        <ArrowLeft className="-translate-x-0.5 size-6" />
      </button>
      <button
        type="button"
        aria-label="Next product image"
        className="grid size-12 place-items-center rounded-full border border-[#d9e2ea] text-energy-green transition-colors hover:border-energy-green hover:bg-energy-green hover:text-white"
      >
        <ArrowRight className="translate-x-0.5 size-6" />
      </button>
      <span className="h-[6px] w-[180px] rounded-full bg-[#d8d8d8] md:w-[504px]">
        <span className="block h-full w-[37%] rounded-full bg-energy-green" />
      </span>
    </div>
  );
}

function EnergyProductMedia({ detail }: { detail: EnergyProductDetail }) {
  const hasMobileImage = "mobileImage" in detail.media && detail.media.mobileImage;
  const mediaImages = "images" in detail.media ? detail.media.images : null;

  if ("videos" in detail.media && detail.media.videos) {
    return (
      <section className="mt-8 md:mt-[72px]">
        <EnergyOverviewVideoPlayer
          videos={detail.media.videos}
          frameClassName="rounded-[12px] bg-energy-deep-navy md:rounded-[16px]"
          videoClassName="h-[320px] w-full bg-energy-deep-navy object-cover object-[50%_50%] md:h-[620px]"
          controlsClassName="mt-7 flex justify-center gap-6"
          label={detail.media.label}
        />
      </section>
    );
  }

  if (mediaImages && mediaImages.length > 0) {
    return (
      <EnergyProductImageCarousel
        images={mediaImages}
        label={detail.media.label}
      />
    );
  }

  return (
    <section className="mt-8 md:mt-[72px]">
      <div className="relative h-[320px] overflow-hidden rounded-[12px] md:h-[620px] md:rounded-[16px]">
        <Image
          src={hasMobileImage ? detail.media.mobileImage.src : detail.media.image.src}
          alt={hasMobileImage ? detail.media.mobileImage.alt : detail.media.image.alt}
          fill
          sizes="100vw"
          className={`object-cover md:hidden`}
          style={{
            objectPosition: hasMobileImage
              ? detail.media.mobileImage.objectPosition
              : detail.media.image.objectPosition,
          }}
        />
        <Image
          src={detail.media.image.src}
          alt={detail.media.image.alt}
          fill
          sizes="(min-width: 768px) 1240px, 100vw"
          className="hidden object-cover md:block"
          style={{ objectPosition: detail.media.image.objectPosition }}
        />
      </div>
      <EnergyDetailArrowControls />
    </section>
  );
}

function EnergyTopsideTypesSection({ detail }: { detail: EnergyProductDetail }) {
  if (detail.slug !== "topside" || !("offshore" in detail) || !detail.offshore) {
    return null;
  }

  return (
    <section className="mt-10 md:mt-[72px]">
      <div className="grid gap-8">
        <article className="rounded-[14px] bg-[#062b43] p-5 text-white md:rounded-[16px] md:p-8">
          <h3 className="text-[22px] font-bold uppercase leading-7 text-energy-green md:text-[26px]">
            {detail.offshore.title}
          </h3>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {detail.offshore.images.map((offshoreImage) => (
              <Image
                key={offshoreImage.src}
                src={offshoreImage.src}
                alt={offshoreImage.alt}
                width={772}
                height={420}
                sizes="(min-width: 768px) 386px, calc(100vw - 40px)"
                className="h-auto w-full rounded-[8px]"
              />
            ))}
          </div>
        </article>

        {"specificationImage" in detail.offshore && detail.offshore.specificationImage ? (
          <Image
            src={detail.offshore.specificationImage.src}
            alt={detail.offshore.specificationImage.alt}
            width={1938}
            height={929}
            sizes="(min-width: 768px) 1000px, calc(100vw - 40px)"
            className="h-auto w-full rounded-[8px] object-contain"
          />
        ) : null}

        {"onshore" in detail && detail.onshore ? (
          <article className="rounded-[14px] bg-[#062b43] p-6 text-white md:rounded-[16px] md:p-8">
            <h3 className="text-[22px] font-bold uppercase leading-7 text-energy-green md:text-[26px]">
              {detail.onshore.title}
            </h3>
            <div className="mt-7 grid gap-4">
              <div className="grid min-h-[124px] items-center overflow-hidden rounded-[8px] bg-[#113a58] p-5 md:grid-cols-[260px_1fr_210px] md:p-0">
                <div className="hidden place-items-center md:grid md:px-5">
                  <Image
                    src={detail.onshore.icon}
                    alt="Onshore structure icon"
                    width={56}
                    height={56}
                    className="size-14"
                  />
                </div>
                <div className="md:border-l md:border-white/28 md:py-5 md:pl-10">
                  <p className="text-[14px] font-bold leading-5 text-white">
                    {detail.onshore.module.title}
                  </p>
                  <p className="mt-1 text-[28px] font-bold leading-8 text-energy-green">
                    {detail.onshore.module.value}
                  </p>
                  <p className="text-[12px] font-bold leading-4 text-white">
                    {detail.onshore.module.unit}
                  </p>
                </div>
                <div className="hidden md:block">
                  <Image
                    src={detail.onshore.moduleImage}
                    alt="Onshore structure"
                    width={210}
                    height={124}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {detail.onshore.specs.map((spec) => (
                  <div
                    key={spec.title}
                    className="grid min-h-[156px] place-items-center rounded-[8px] border-[3px] border-energy-green bg-[#113a58] p-6 text-center"
                  >
                    <div>
                      <p className="text-[13px] font-bold leading-5 text-white">{spec.title}</p>
                      <p className="mt-4 text-[25px] font-bold leading-8 text-energy-green">
                        {spec.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ) : null}
      </div>
    </section>
  );
}

function EnergyPipeCoatingCapacityTable({ detail }: { detail: EnergyProductDetail }) {
  if (
    detail.slug !== "pipe-coating" ||
    !("capacityImage" in detail) ||
    !detail.capacityImage
  ) {
    return null;
  }

  return (
    <section className="mt-12 border-t border-[#a8b4bd] pt-12 md:mt-[72px] md:pt-[74px]">
      <div className="flex items-center gap-7">
        <h2 className="text-[20px] font-bold uppercase leading-7 text-energy-green md:text-[24px]">
          {detail.capacityImage.title}
        </h2>
        <span className="hidden h-px flex-1 bg-[#a8b4bd] md:block" aria-hidden="true" />
      </div>
      <div className="mt-8 w-full overflow-hidden rounded-[14px] md:rounded-[16px]">
        <Image
          src={detail.capacityImage.src}
          alt={detail.capacityImage.alt}
          width={3723}
          height={1230}
          sizes="(min-width: 768px) 1240px, calc(100vw - 40px)"
          className="h-auto w-full object-contain"
        />
      </div>
    </section>
  );
}

function EnergyProductDetailPage({ detail }: { detail: EnergyProductDetail }) {
  const isPipeCoating = detail.slug === "pipe-coating";
  const isPressureVessels = detail.slug === "pressure-vessels";

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <EnergyProductHero productPath={`/products/${detail.slug}`} />
      <section className="bg-white px-5 pb-[72px] pt-8 text-energy-ink md:px-10 md:pb-[110px] md:pt-[62px]">
        <div className="mx-auto w-full max-w-[1240px]">
          <Link
            href={content.products.activeHref}
            className="inline-flex items-center gap-3 text-[15px] font-bold leading-6 text-energy-ink transition-colors hover:text-energy-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-energy-green"
          >
            <ArrowLeft className="size-5 text-energy-green" />
            Back
          </Link>
          <h2 className="mt-9 text-[24px] font-bold uppercase leading-[30px] tracking-[0] text-energy-green md:mt-[58px] md:text-[40px] md:leading-[48px]">
            {detail.title}
          </h2>

          {isPipeCoating ? (
            <div className="mt-8">
              <EnergyPipeCoatingOverview detail={detail} />
            </div>
          ) : isPressureVessels ? (
            <div className="mt-8">
              <EnergyPressureVesselsOverview detail={detail} />
            </div>
          ) : (
            <div className="mt-8 grid gap-5 md:grid-cols-[minmax(0,560px)_minmax(0,640px)]">
              <EnergyProductIntroCard detail={detail} />
              {"chart" in detail && detail.chart ? (
                <EnergyProductBarChart chart={detail.chart} />
              ) : (
                <EnergyProductHighlights detail={detail} />
              )}
            </div>
          )}

          <div className="mt-8 h-px bg-[#a8b4bd] md:mt-[72px]" aria-hidden="true" />
          <EnergyProductMedia detail={detail} />
          <EnergyTopsideTypesSection detail={detail} />
          <EnergyPipeCoatingCapacityTable detail={detail} />
        </div>
      </section>
      <EnergyFooter />
    </main>
  );
}

export function NmdcEnergyProductDetailPage({
  detail,
}: {
  detail: EnergyProductDetail;
}) {
  return <EnergyProductDetailPage detail={detail} />;
}

export function NmdcEnergyProductsPage() {
  const products = content.products;
  const hero = products.hero;

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <section className="relative isolate h-[450px] overflow-hidden bg-energy-deep-navy px-5 text-white md:h-[485px] md:px-10">
        <Image
          src={hero.background.src}
          alt={hero.background.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_50%]"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,24,20,0.66)_0%,rgba(2,24,20,0.58)_48%,rgba(2,24,20,0.74)_100%)]"
          aria-hidden="true"
        />
        <Header links={getEnergyNavLinks(products.activeHref)} />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1240px] items-end pb-[44px] md:pb-[73px]">
          <h1 className="text-[48px] font-bold leading-[58px] tracking-[0] text-white md:text-[48px] md:uppercase md:leading-[58px]">
            <span>{hero.titleLeading}</span>{" "}
            <span className="text-energy-green">{hero.titleAccent}</span>
          </h1>
        </div>
      </section>

      <section className="bg-white px-5 pb-[76px] pt-[31px] text-energy-ink md:px-10 md:pb-[110px] md:pt-[76px]">
        <div className="mx-auto w-full max-w-[1240px]">
          <div className="flex items-start justify-between gap-8">
            <h2 className="text-[30px] font-bold uppercase leading-[38px] tracking-[0] text-energy-green md:text-[31px] md:leading-[38px]">
              {products.title}
            </h2>
            <span
              className="mt-[21px] hidden h-px w-[420px] bg-[#a8b4bd] md:block"
              aria-hidden="true"
            />
          </div>

          <div className="mt-[42px] grid gap-[36px] md:mt-[70px] md:grid-cols-3 md:gap-x-[34px] md:gap-y-[76px]">
            {products.items.map((product) => (
              <EnergyProductCard key={product.title} product={product} />
            ))}
          </div>
        </div>
      </section>

      <EnergyFooter />
    </main>
  );
}

function EnergyIcvSection() {
  const icv = content.overview.icv;

  return (
    <section id={icv.id} className="bg-white px-5 pt-9 text-black md:px-10 md:pt-[72px]">
      <div className="mx-auto grid w-full max-w-[1240px] gap-8 md:grid-cols-[minmax(0,720px)_433px] md:items-center md:gap-[87px]">
        <div>
          <EnergySectionHeading title={icv.title} />
          <div className="mt-7 grid gap-7 text-[19px] font-normal leading-[33px] md:mt-5 md:text-[21px] md:leading-[26px]">
            {icv.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <article className="overflow-hidden rounded-[12px] bg-energy-green text-white shadow-[0_18px_34px_rgba(0,0,0,0.22)] md:mt-2 md:rounded-[12px]">
          <h3 className="bg-[#062b43] px-6 py-5 text-center text-[24px] font-bold uppercase leading-7 md:py-5">
            {icv.scoreLabel}
          </h3>
          <p className="px-6 py-9 text-center text-[62px] font-bold leading-none md:py-10 md:text-[72px]">
            {icv.score}
          </p>
        </article>
      </div>
    </section>
  );
}

function EnergyHighlightsSection() {
  const highlights = content.overview.highlights;

  return (
    <section className="bg-white px-5 pt-[52px] text-white md:px-10 md:pt-[78px]">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="flex items-center gap-7">
          <EnergySectionHeading title={highlights.title} />
          <span className="hidden h-px flex-1 bg-[#a7b3bc] md:block" aria-hidden="true" />
        </div>

        <div className="mt-8 grid overflow-hidden rounded-[18px] bg-[#052b44] px-8 py-7 shadow-[0_18px_34px_rgba(0,0,0,0.22)] md:grid-cols-3 md:gap-0 md:rounded-[22px] md:px-[50px] md:py-[25px]">
          {highlights.items.map((item, index) => (
            <article
              key={item.label}
              className={`grid gap-5 text-center ${
                index === 2
                  ? "col-span-2 mt-8 border-t border-white/55 pt-8 md:col-span-1 md:mt-0 md:border-l md:border-t-0 md:pl-[70px] md:pt-0"
                  : index === 1
                    ? "md:border-l md:border-white/55 md:pl-[70px]"
                    : "md:pr-0"
              } md:grid-cols-[108px_minmax(0,1fr)] md:items-center md:text-left`}
            >
              <div className="mx-auto grid h-[112px] w-full max-w-[172px] place-items-center rounded-[8px] bg-white/10 text-energy-green md:mx-0 md:h-[148px] md:w-[108px]">
                {"iconImage" in item && item.iconImage ? (
                  <Image
                    src={item.iconImage.src}
                    alt={item.iconImage.alt}
                    width={72}
                    height={72}
                    className="size-[66px] object-contain md:size-[58px]"
                  />
                ) : (
                  <EnergyLineIcon icon={item.icon} className="size-[66px] md:size-[58px]" />
                )}
              </div>
              <div>
                <p className="text-[27px] font-bold leading-none md:text-[34px]">
                  {item.value}
                </p>
                {item.unit ? (
                  <p className="mt-3 text-[16px] font-bold leading-5 text-energy-green md:mt-2">
                    {item.unit}
                  </p>
                ) : null}
                <EnergyHighlightLabel label={item.label} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnergyHighlightLabel({ label }: { label: string }) {
  const lines = label.split("\n").filter(Boolean);

  return (
    <p className="mt-2 text-[16px] font-normal leading-[22px] md:mt-6 md:text-[16px] md:leading-[23px]">
      {lines.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </p>
  );
}

function EnergyOverviewVideo() {
  const video = content.overview.video;

  return (
    <section className="bg-white px-5 pt-[66px] text-energy-ink md:px-10 md:pt-[72px]">
      <div className="mx-auto w-full max-w-[1240px] border-t border-[#65727d] pt-[59px]">
        <EnergyOverviewVideoPlayer videos={video.videos} />
      </div>
    </section>
  );
}

function EnergyTechnologySection() {
  const technology = content.overview.technology;

  function AgentLabel({ label }: { label: string }) {
    const desktopLines =
      label === "Proposal & Estimation"
        ? ["Proposal &", "Estimation"]
        : label === "Procurement/Supply Chain"
          ? ["Procurement/", "Supply Chain"]
          : [label];

    return (
      <>
        <span className="break-words md:hidden">{label}</span>
        <span className="hidden md:block">
          {desktopLines.map((line) => (
            <span key={line} className="block whitespace-nowrap">
              {line}
            </span>
          ))}
        </span>
      </>
    );
  }

  return (
    <section className="bg-white px-5 pb-[54px] pt-[58px] text-white md:px-10 md:pb-[76px] md:pt-[72px]">
      <div className="mx-auto w-full max-w-[1240px] border-t border-[#65727d] pt-[58px] md:pt-[72px]">
        <EnergySectionHeading title={technology.title} />

        <div className="mt-9 grid gap-6 md:grid-cols-[390px_minmax(0,1fr)] md:gap-6">
          <div className="grid gap-10 md:content-start">
            {technology.cards.map((card) => (
              <article
                key={card.title}
                className="grid min-h-[143px] grid-cols-[116px_minmax(0,1fr)] items-center gap-7 rounded-[16px] bg-[#052b44] p-3 shadow-[0_18px_34px_rgba(0,0,0,0.22)] md:min-h-[122px] md:grid-cols-[90px_minmax(0,1fr)] md:gap-3 md:rounded-[12px]"
              >
                <div className="grid size-[116px] place-items-center rounded-[8px] bg-white/14 text-energy-green md:size-[90px]">
                  <Image
                    src={card.image.src}
                    alt={card.image.alt}
                    sizes="58px"
                    width={56}
                    height={56}
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="min-w-0 text-[23px] font-bold leading-7 md:text-[24px]">
                    {card.title}
                  </h3>
                  <p className="mt-4 min-w-0 text-[16px] font-normal leading-[23px] md:mt-3 md:text-[15px] md:leading-5">
                    {card.body}
                  </p>
                </div>
              </article>
            ))}

            <article className="rounded-[16px] border-l-[6px] border-energy-green bg-[#052b44] p-[30px] shadow-[0_18px_34px_rgba(0,0,0,0.22)] md:min-h-[266px] md:rounded-[12px] md:p-7">
              <h3 className="text-[24px] font-bold leading-7 md:text-[24px]">
                {technology.agents.title}
              </h3>
              <p className="mt-2 text-[18px] leading-6 md:text-[16px]">
                {technology.agents.subtitle}
              </p>
              <span className="mt-6 block h-px bg-energy-green" aria-hidden="true" />
              <div className="mt-6 grid gap-7 md:grid-cols-2 md:gap-x-8 md:gap-y-7">
                {technology.agents.items.map((agent) => (
                  <div key={agent.label} className="flex text-[12px] items-center gap-4">
                    <span className="grid shrink-0 place-items-center w-[48px] h-[48px] rounded-full bg-white/12 text-energy-green">
                      <Image
                        src={agent.image.src}
                        alt={agent.image.alt}
                        width={32}
                        height={32}
                        sizes="32px"
                        className="size-8 object-contain"
                      />
                    </span>
                    <span className="min-w-0 text-[18px] font-bold leading-7 md:text-[16px] md:leading-6">
                      <AgentLabel label={agent.label} />
                    </span>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="relative hidden min-h-[595px] overflow-hidden rounded-[18px] md:block">
            <Image
              src={technology.image.src}
              alt={technology.image.alt}
              fill
              sizes="800px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function EnergyFooter() {
  const footer = content.footer;
  const footerNavigationLinks = footer.navigationLinks;
  const mobileFooterLinks = footer.mobileNavigationLinks ?? footerNavigationLinks;

  return (
    <footer className="relative isolate overflow-hidden bg-energy-deep-navy px-5 py-8 text-white md:min-h-[658px] md:px-10 md:py-12">
      <div className="absolute inset-0 -z-10 opacity-80" aria-hidden="true">
          <Image
            src={footer.background.src}
            alt={footer.background.alt}
            fill
            loading="eager"
            sizes="100vw"
            className="object-cover"
          />
      </div>

      <div className="mx-auto max-w-[1240px] rounded-[16px] bg-[#0b2f3d] px-5 py-8 shadow-[0_28px_80px_rgba(0,0,0,0.30)] md:px-12">
        <Image
          src={content.brand.logo}
          alt={content.brand.logoAlt}
          width={146}
          height={46}
          className="block md:h-10 md:w-32 object-contain object-left pb-8 md:pb-0"
        />
        <div className="grid md:gap-0 gap-8 w-full md:grid-cols-[365px_360px_minmax(0,1fr)] md:grid-rows-[1fr_auto] md:min-h-[407px] md:py-8">
          <div className="flex flex-col justify-between pb-4 md:pb-0">
            <div>
              <ul className="grid gap-5 text-[16px] font-bold leading-5 text-white md:gap-3 md:text-[16px] md:leading-5">
                {footer.businesses.map((business) => (
                  <li key={business.label}>
                    <a
                      href={business.href}
                      className="flex items-center gap-3 transition-colors hover:text-energy-green"
                    >
                      <span
                        className={`size-3 shrink-0 rounded-full ${business.dotColor}`}
                        aria-hidden="true"
                      />
                      {business.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex items-center gap-5 md:mt-0">
              <Link
                href={footer.connect.href}
                className="inline-flex shrink-0 text-[16px] font-normal leading-6 text-white transition-colors hover:text-energy-green md:text-[16px] md:font-bold md:leading-6"
              >
                {footer.connect.label}
              </Link>
              <div className="flex gap-3" aria-label="Social links">
                {footer.socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="flex size-[48px] items-center justify-center rounded-full bg-[#effff6] text-[16px] font-bold leading-none text-energy-green transition-colors hover:bg-energy-green hover:text-white md:size-[34px] md:text-[14px]"
                  >
                    {link.label === "Instagram" ? (
                      <InstagramIcon className="size-[15px]" />
                    ) : (
                      link.marker
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <nav
            aria-label={footer.navigationLabel}
            className="border-y py-8 md:py-0 px-0 md:px-5  font-bold border-white/12 md:border-x md:border-y-0 md:border-white/16 md:mx-auto] max-h-[541px]"
          >
            <ul className="hidden grid-cols-1 gap-[24px] text-[16px] font-bold leading-6 text-white md:grid md:gap-3">
              {footerNavigationLinks.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <a href={link.href} className="transition-colors hover:text-energy-green">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="grid gap-[24px] text-[16px] font-normal leading-6 text-white md:hidden">
              {mobileFooterLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-energy-green">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div id="contact" className="border-b px-0 md:px-5 border-white/12 pb-8 md:border-b-0">
            <h2 className="text-[16px] font-normal leading-6 text-white md:text-[16px] md:font-bold md:leading-6">
              {footer.emailTitle}
            </h2>
            <dl className="mt-5 grid gap-5 md:mt-4 md:gap-4">
              {footer.emails.map((email) => (
                <div key={email.label}>
                  <dt className="text-[16px] font-normal leading-5 text-white md:text-[16px] md:font-medium md:leading-5">{email.label}</dt>
                  <dd className="mt-1 text-[16px] font-bold leading-5 text-energy-green md:text-[16px] md:font-normal md:leading-5">
                    {email.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="md:border-t border-white/12 text-center text-[16px] leading-6 text-white md:col-span-3 md:mt-8 md:pt-5 md:text-[16px] md:leading-6">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

export function NmdcEnergyOverviewPage() {
  return (
    <main className="min-h-screen bg-white">
      <EnergyOverviewHero />
      {/* <EnergyIcvSection /> */}
      <EnergyHighlightsSection />
      <EnergyOverviewVideo />
      <EnergyTechnologySection />
      <EnergyFooter />
    </main>
  );
}

export function NmdcEnergyAtAGlancePage() {
  return (
    <main className="min-h-screen bg-energy-deep-navy">
      <EnergyAtAGlanceDetailHero />
      <EnergyFooter />
    </main>
  );
}

export function NmdcEnergyYardHighlightsPage() {
  return (
    <main className="min-h-screen bg-white">
      <EnergyYardHighlightsHero />
      <EnergyYardKeyHighlights />
      <EnergyYardAchievements />
      <EnergyYardCapabilities />
      <EnergyFooter />
    </main>
  );
}
