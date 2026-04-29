import Image from "next/image";
import Link from "next/link";
import { EnergyHomeCardRail } from "../components/EnergyHomeCardRail";
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
      <section className="relative isolate h-[786px] overflow-hidden bg-energy-navy px-5 text-white md:px-10">
        <EnergyBackground />
        <Header links={getEnergyNavLinks("/")} />

        <div className="relative z-10 mx-auto h-full w-full max-w-[1240px]">
          <div className="pt-[140px] md:absolute md:left-0 md:top-[188px] md:w-[670px] md:pt-0">
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

          <div className="absolute inset-x-0 top-[480px] z-10 px-5 md:absolute md:bottom-[82px] md:right-0 md:top-auto md:left-auto md:w-[832px] md:px-0">
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
    <section className="relative isolate overflow-hidden bg-energy-deep-navy px-5 pb-10 pt-[110px] text-white md:h-[821px] md:px-10 md:pb-0 md:pt-0">
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
          <div>
            <p className="text-[18px] font-bold leading-6 text-energy-green md:text-[30px] md:leading-9">
              {detail.eyebrow}
            </p>
            <h1 className="mt-4 text-[40px] font-bold leading-[42px] tracking-[0] md:mt-3 md:text-[58px] md:leading-[1.04]">
              {detail.title}
            </h1>
            <div className="mt-7 grid gap-10 text-[16px] font-normal leading-[25px] text-white md:mt-7 md:gap-7 md:text-[18px] md:leading-[25px]">
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
    strokeWidth: 2,
  };

  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      {icon === "grid" ? (
        <>
          <path {...shared} d="M12 12h5v5h-5zM22 12h5v5h-5zM32 12h5v5h-5z" />
          <path {...shared} d="M12 22h5v5h-5zM22 22h5v5h-5zM32 22h5v5h-5z" />
          <path {...shared} d="M12 32h5v5h-5zM22 32h5v5h-5zM32 32h5v5h-5z" />
        </>
      ) : icon === "expand" ? (
        <>
          <rect {...shared} x="10" y="10" width="28" height="28" rx="2" />
          <path {...shared} d="M17 31 31 17M24 17h7v7M17 24v7h7" />
        </>
      ) : icon === "worker" ? (
        <>
          <circle {...shared} cx="24" cy="17" r="6" />
          <path {...shared} d="M16 18h16M18 14c2-5 10-5 12 0" />
          <path {...shared} d="M14 39v-5a10 10 0 0 1 20 0v5" />
          <path {...shared} d="M17 39h14" />
        </>
      ) : icon === "award" ? (
        <>
          <circle {...shared} cx="24" cy="19" r="10" />
          <path {...shared} d="m18 29-3 12 9-5 9 5-3-12" />
          <path {...shared} d="m20 19 3 3 6-7" />
        </>
      ) : icon === "steel" ? (
        <>
          <path {...shared} d="M8 15h21l11 18H19z" />
          <path {...shared} d="M15 15 26 33M25 15l11 18" />
          <path {...shared} d="M12 24h22" />
        </>
      ) : icon === "robot" ? (
        <>
          <path {...shared} d="M13 34 28 19l6 6-15 15" />
          <path {...shared} d="m25 16 7-7 7 7-7 7" />
          <circle {...shared} cx="32" cy="16" r="3" />
          <path {...shared} d="M10 38h16M12 31l6 6" />
        </>
      ) : icon === "monitor" ? (
        <>
          <rect {...shared} x="8" y="11" width="32" height="23" rx="3" />
          <path {...shared} d="M18 39h12M24 34v5M14 25l5-5 5 5 7-9 4 5" />
        </>
      ) : icon === "shield" ? (
        <>
          <path {...shared} d="M24 6 38 12v10c0 10-6 17-14 20-8-3-14-10-14-20V12l14-6Z" />
          <path {...shared} d="m18 24 4 4 8-9" />
        </>
      ) : icon === "cloud" ? (
        <>
          <path {...shared} d="M16 34h18a8 8 0 0 0 1-16 12 12 0 0 0-23-3A9 9 0 0 0 16 34Z" />
          <path {...shared} d="M18 39v-5M24 42v-8M30 39v-5" />
        </>
      ) : (
        <>
          <path {...shared} d="M24 7 42 39H6Z" />
          <path {...shared} d="M24 18v10M24 34h.01" />
        </>
      )}
    </svg>
  );
}

function EnergyYardSectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-7">
      <h2 className="shrink-0 text-[20px] font-bold uppercase leading-6 text-energy-green md:text-[24px] md:leading-8">
        {title}
      </h2>
      <span className="h-px flex-1 bg-[#b6c5cf]" aria-hidden="true" />
    </div>
  );
}

function EnergyYardArrowControls({
  previousLabel,
  nextLabel,
  slideCount,
}: {
  previousLabel: string;
  nextLabel: string;
  slideCount: string;
}) {
  const previousClassName =
    "grid size-9 place-items-center rounded-full border border-[#d5e3ea] bg-white text-[#9aacb8] shadow-[0_8px_18px_rgba(6,43,68,0.08)] transition-colors hover:border-energy-green hover:text-energy-green md:size-10";
  const nextClassName =
    "grid size-9 place-items-center rounded-full border border-[#d5e3ea] bg-white text-energy-green shadow-[0_8px_18px_rgba(6,43,68,0.08)] transition-colors hover:border-energy-green hover:bg-energy-green hover:text-white md:size-10";

  const buttons = (
    <>
      <button type="button" aria-label={previousLabel} className={previousClassName}>
        <ArrowLeft className="size-5" />
      </button>
      <button type="button" aria-label={nextLabel} className={nextClassName}>
        <ArrowRight className="size-5" />
      </button>
    </>
  );

  return (
    <>
      <div className="mt-4 flex items-center justify-center gap-5 md:hidden">{buttons}</div>
      <div className="relative mt-4 hidden h-10 items-center justify-center md:flex">
        <div className="flex items-center justify-center gap-5">{buttons}</div>
        <span className="absolute right-0 text-[13px] font-bold leading-5 text-energy-green">
          {slideCount}
        </span>
      </div>
    </>
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
            <div className="relative h-[212px] overflow-hidden rounded-[12px] md:h-[576px] md:rounded-[16px]">
              <Image
                src={keyHighlights.aerialImage.src}
                alt={keyHighlights.aerialImage.alt}
                fill
                loading="eager"
                sizes="(min-width: 768px) 760px, 100vw"
                className="object-cover object-[52%_48%]"
              />
              <div className="absolute left-0 top-0 hidden h-[84px] w-[256px] items-center justify-center rounded-br-[12px] bg-energy-green text-[24px] font-bold leading-7 text-white md:flex">
                {keyHighlights.activeYard}
              </div>
            </div>

            <EnergyYardArrowControls
              previousLabel="Previous yard"
              nextLabel="Next yard"
              slideCount={keyHighlights.slideCount}
            />
          </div>

          <div className="grid gap-0 overflow-hidden rounded-[14px] bg-[#062b43] px-8 py-5 text-white md:col-start-2 md:row-span-2 md:row-start-1 md:rounded-[16px] md:px-10 md:py-8">
            {keyHighlights.yards.map((yard, index) => (
              <article
                key={yard.name}
                className={`py-7 ${index === 0 ? "pt-0" : "border-t border-white/15"} md:py-8`}
              >
                <h3 className="text-center text-[17px] font-bold leading-6 md:text-[17px]">
                  {yard.name} <span aria-hidden="true">{yard.flag}</span>
                </h3>
                <ul className="mt-5 grid gap-3 rounded-[8px] bg-[#113a58] px-5 py-5 text-[12px] font-bold leading-5 md:text-[13px]">
                  {yard.facts.map((fact) => (
                    <li key={fact} className="flex gap-3">
                      <span className="mt-1 size-3 shrink-0 rounded-sm border border-energy-green" />
                      {fact}
                    </li>
                  ))}
                </ul>
              </article>
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
            <EnergyYardIcon icon="award" className="size-[72px] shrink-0 text-energy-green" />
          </div>
          <div>
            <h3 className="text-[16px] font-bold leading-6 text-energy-green">
              {keyHighlights.record.title}
            </h3>
            <p className="mt-2 text-[13px] font-bold leading-5 text-energy-ink md:text-[13px]">
              {keyHighlights.record.body}
            </p>
          </div>
        </article>

        <div className="mt-10 md:mt-16">
          <div className="relative h-[336px] overflow-hidden rounded-[12px] md:h-[620px] md:rounded-[16px]">
            <Image
              src={keyHighlights.video.image.src}
              alt={keyHighlights.video.image.alt}
              fill
              loading="eager"
              sizes="(min-width: 768px) 1240px, 100vw"
              className="object-cover object-[44%_50%]"
            />
            <button
              type="button"
              aria-label={keyHighlights.video.playLabel}
              className="absolute left-1/2 top-1/2 grid size-[78px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/35 text-energy-green shadow-[0_16px_42px_rgba(0,0,0,0.28)] backdrop-blur-sm md:size-[94px]"
            >
              <span className="ml-1 block h-0 w-0 border-y-[14px] border-l-[22px] border-y-transparent border-l-energy-green md:border-y-[17px] md:border-l-[27px]" />
            </button>
          </div>

          <div className="mt-7 flex justify-center gap-6">
            <button
              type="button"
              aria-label="Previous video"
              className="grid size-11 place-items-center rounded-full border border-[#d5e3ea] text-[#9aacb8] md:size-12"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next video"
              className="grid size-11 place-items-center rounded-full border border-[#d5e3ea] text-energy-green md:size-12"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function EnergyYardAchievements() {
  const achievements = content.yardHighlights.achievements;

  return (
    <section className="bg-white text-white">
      <div className="px-5 md:px-10">
        <div className="mx-auto w-full max-w-[1240px] border-t border-[#a7b4c0] py-8 md:py-[72px]">
          <EnergyYardSectionTitle title={achievements.title} />
        </div>
      </div>

      <div className="bg-[#062b43] px-5 py-8 md:px-10 md:py-[42px]">
        <div className="mx-auto grid w-full max-w-[1240px] gap-7 md:grid-cols-[230px_270px_minmax(0,1fr)] md:items-center md:gap-10">
          <div className="mx-auto grid size-[120px] place-items-center rounded-[8px] bg-white/8 text-energy-green md:size-[180px]">
            <EnergyYardIcon icon="award" className="size-[82px] md:size-[120px]" />
          </div>

          <div className="grid grid-cols-2 divide-x divide-white/18 rounded-[10px] bg-white/0 text-center md:h-[154px] md:items-center">
            {achievements.stats.map((stat) => (
              <div key={stat.label} className="px-4">
                <p className="text-[32px] font-bold leading-none md:text-[40px]">
                  {stat.value}
                </p>
                <p className="mt-3 text-[12px] font-bold leading-5 md:text-[13px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-[14px] font-bold leading-5 md:text-[15px]">
              {achievements.intro}
            </h3>
            <ul className="mt-4 grid gap-4 text-[12px] font-bold leading-5 md:text-[13px]">
              {achievements.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-energy-green" />
                  {bullet}
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
    <section className="bg-white text-white">
      <div className="px-5 md:px-10">
        <div className="mx-auto w-full max-w-[1240px] py-8 md:py-[72px]">
          <EnergyYardSectionTitle title={capabilities.title} />
        </div>
      </div>

      <div className="bg-[#062b43] px-5 py-8 md:px-10 md:py-[80px]">
        <div className="mx-auto grid w-full max-w-[1240px] gap-5 md:grid-cols-2 md:gap-6">
          {capabilities.items.map((item) => (
            <article
              key={item.body}
              className="grid min-h-[122px] grid-cols-[86px_minmax(0,1fr)] items-center rounded-[8px] bg-[#113a58] px-5 py-5 md:min-h-[150px] md:grid-cols-[170px_minmax(0,1fr)] md:px-8"
            >
              <div className="grid h-full place-items-center border-r border-white/22 pr-5 text-energy-green md:pr-9">
                <EnergyYardIcon icon={item.icon} className="size-[56px] md:size-[74px]" />
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
                <EnergyLineIcon icon={item.icon} className="size-[66px] md:size-[58px]" />
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
                <p className="mt-2 text-[16px] font-normal leading-[22px] md:mt-6 md:text-[16px] md:leading-[23px]">
                  {item.label}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnergyOverviewVideo() {
  const video = content.overview.video;

  return (
    <section className="bg-white px-5 pt-[66px] text-energy-ink md:px-10 md:pt-[72px]">
      <div className="mx-auto w-full max-w-[1240px] border-t border-[#65727d] pt-[59px]">
        <div className="relative h-[571px] overflow-hidden rounded-[18px] md:h-[609px] md:rounded-[22px]">
          <Image
            src={video.image.src}
            alt={video.image.alt}
            fill
            loading="eager"
            sizes="(min-width: 768px) 1240px, 100vw"
            className="object-cover object-[52%_50%]"
          />
          <div
            className="absolute inset-0 bg-[rgba(6,43,68,0.54)]"
            aria-hidden="true"
          />
          <button
            type="button"
            aria-label={video.playLabel}
            className="absolute left-1/2 top-1/2 grid size-[112px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/30 text-energy-green shadow-[0_16px_42px_rgba(0,0,0,0.28)] backdrop-blur-sm transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-energy-green md:size-[126px]"
          >
            <span className="ml-2 block h-0 w-0 border-y-[19px] border-l-[29px] border-y-transparent border-l-energy-green md:border-y-[22px] md:border-l-[34px]" />
          </button>
        </div>

        <div className="mt-9 flex justify-center gap-6 md:mt-8">
          <button
            type="button"
            aria-label="Previous video"
            className="grid size-16 place-items-center rounded-full border border-[#c5d0dc] text-[#8ca0b5] transition-colors hover:border-energy-green hover:text-energy-green"
          >
            <ArrowLeft className="size-8" />
          </button>
          <button
            type="button"
            aria-label="Next video"
            className="grid size-16 place-items-center rounded-full border border-[#d9e2ea] text-energy-green transition-colors hover:border-energy-green hover:bg-energy-green hover:text-white"
          >
            <ArrowRight className="size-8" />
          </button>
        </div>
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
            <span key={line} className="block">
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
          <div className="grid gap-4 md:content-start">
            {technology.cards.map((card) => (
              <article
                key={card.title}
                className="grid min-h-[143px] grid-cols-[116px_minmax(0,1fr)] items-center gap-7 rounded-[16px] bg-[#052b44] p-3 shadow-[0_18px_34px_rgba(0,0,0,0.22)] md:min-h-[122px] md:grid-cols-[90px_minmax(0,1fr)] md:gap-5 md:rounded-[12px]"
              >
                <div className="grid size-[116px] place-items-center rounded-[8px] bg-white/14 text-energy-green md:size-[90px]">
                  <EnergyLineIcon icon={card.icon} className="size-[72px] md:size-[58px]" />
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
                  <div key={agent.label} className="flex items-center gap-4">
                    <span className="grid size-[52px] shrink-0 place-items-center rounded-full bg-white/12 text-energy-green">
                      <EnergyLineIcon icon={agent.icon} className="size-8" />
                    </span>
                    <span className="min-w-0 text-[22px] font-bold leading-7 md:text-[16px] md:leading-6">
                      <AgentLabel label={agent.label} />
                    </span>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="relative hidden min-h-[665px] overflow-hidden rounded-[18px] md:block">
            <Image
              src={technology.image.src}
              alt={technology.image.alt}
              fill
              sizes="826px"
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

  return (
    <footer className="relative isolate overflow-hidden bg-energy-deep-navy px-5 py-10 text-white md:px-10 md:py-[64px]">
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

      <div className="mx-auto grid w-full max-w-[1240px] gap-10 rounded-[16px] bg-[#0b2f3d] px-7 py-10 shadow-[0_28px_80px_rgba(0,0,0,0.30)] md:grid-cols-[365px_360px_minmax(0,1fr)] md:grid-rows-[1fr_auto] md:gap-0 md:px-12 md:py-[52px]">
        <div className="flex flex-col justify-between">
          <div>
            <Image
              src={content.brand.logo}
              alt={content.brand.logoAlt}
              width={154}
              height={60}
              className="h-[58px] w-[148px] object-contain"
            />
            <ul className="mt-10 grid gap-5 text-[21px] font-bold leading-7 text-white md:mt-[58px] md:gap-4 md:text-[15px] md:leading-5">
              {footer.businesses.map((business) => (
                <li key={business.label} className="flex items-center gap-4 md:gap-3">
                  <span
                    className={`size-3 shrink-0 rounded-full ${business.dotColor}`}
                    aria-hidden="true"
                  />
                  {business.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-11 flex flex-wrap items-center gap-5 md:mt-0">
            <Link
              href={footer.connect.href}
              className="inline-flex shrink-0 text-[17px] font-normal leading-6 text-white transition-colors hover:text-energy-green md:text-[16px]"
            >
              {footer.connect.label}
            </Link>
            <div className="flex items-center gap-5 md:gap-4">
              {footer.socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="grid size-9 place-items-center rounded-full bg-[#effff6] text-[12px] font-bold leading-none text-energy-green transition-colors hover:bg-energy-green hover:text-white"
                >
                  {link.marker}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <nav
          aria-label={footer.navigationLabel}
          className="border-y border-white/12 py-9 md:border-x md:border-y-0 md:px-[88px] md:py-[146px]"
        >
          <ul className="grid gap-6 text-[22px] font-normal leading-7 text-white md:gap-4 md:text-[15px] md:leading-5">
            {content.nav.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-energy-green">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div id="contact" className="md:px-[88px] md:pt-[146px]">
          <h2 className="text-[22px] font-normal leading-7 text-white md:text-base md:font-bold md:leading-6">
            {footer.emailTitle}
          </h2>
          <dl className="mt-6 grid gap-6 text-[20px] leading-7 md:mt-5 md:gap-5 md:text-sm md:leading-5">
            {footer.emails.map((email) => (
              <div key={email.label}>
                <dt className="font-normal text-white md:font-medium">{email.label}</dt>
                <dd className="mt-2 font-bold text-energy-green md:mt-1 md:font-normal">
                  {email.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="border-t border-white/12 pt-8 text-[16px] leading-6 text-white md:col-span-3 md:mt-8 md:text-center md:text-[12px] md:leading-5">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}

export function NmdcEnergyOverviewPage() {
  return (
    <main className="min-h-screen bg-white">
      <EnergyOverviewHero />
      <EnergyIcvSection />
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
