import Image from "next/image";
import Link from "next/link";
import { LtsFooter } from "../components/Footer";
import { Header } from "../components/Header";
import { LtsHomeCardRail } from "../components/LtsHomeCardRail";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "../components/icons";
import { getLtsNavLinks, nmdcLtsContent as content } from "../content/content";

function LtsBackground() {
  return (
    <>
      <Image
        src={content.home.hero.background.src}
        alt={content.home.hero.background.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_50%] md:object-center"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,20,28,0.86)_0%,rgba(3,39,50,0.46)_50%,rgba(3,20,28,0.80)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,20,28,0.22)_0%,rgba(3,45,58,0.18)_45%,rgba(2,35,47,0.76)_100%)]"
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
      className="group inline-flex items-center gap-[3px] text-[15px] font-bold leading-5 text-lts-ink transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lts-tan"
    >
      <span className="flex h-[49px] w-[174px] items-center justify-center rounded-full bg-white shadow-[0_16px_32px_rgba(0,0,0,0.18)] transition-colors group-hover:bg-white/92">
        {label}
      </span>
      <span className="flex size-[49px] items-center justify-center rounded-full bg-lts-tan text-lts-ink shadow-[0_16px_32px_rgba(0,0,0,0.18)] transition-transform duration-200 group-hover:translate-x-0.5">
        <ArrowUpRight className="size-5" />
      </span>
    </Link>
  );
}

function HomeHeadline() {
  const headline = content.home.hero.headline;

  return (
    <h1 className="text-[28px] font-bold leading-[40px] tracking-[0] text-white md:text-[48px] md:leading-[56px]">
      <span className="hidden md:block">{headline.leading}</span>
      <span className="hidden md:block">
        with <span className="text-lts-tan">{headline.accent.replace("with ", "")}</span>
      </span>
      <span className="block md:hidden">{headline.mobile.lines[0]}</span>
      <span className="block md:hidden">
        {headline.mobile.secondLeading}{" "}
        <span className="text-lts-tan">{headline.mobile.secondAccent}</span>
      </span>
      <span className="block text-lts-tan md:hidden">{headline.mobile.lines[2]}</span>
    </h1>
  );
}

export function NmdcLtsHomePage() {
  const hero = content.home.hero;

  return (
    <main className="min-h-screen bg-lts-navy">
      <section className="relative isolate h-[776px] md:h-[786px] overflow-hidden bg-lts-navy px-5 text-white md:px-10">
        <LtsBackground />
        <Header links={getLtsNavLinks("/")} />

        <div className="relative z-10 mx-auto h-full w-full max-w-[1240px]">
          <div className="pt-[136px] md:absolute md:left-0 md:top-[244px] md:w-[760px] md:pt-0">
            <HomeHeadline />

            <div className="mt-[28px] flex max-w-[304px] items-start gap-[13px] md:mt-[36px] md:max-w-[520px] md:gap-[15px]">
              <span
                className="mt-1 h-[43px] w-[4px] shrink-0 rounded-full bg-lts-cyan md:h-[43px]"
                aria-hidden="true"
              />
              <p className="text-[14px] font-normal leading-[19px] text-white/90 md:text-[16px] md:leading-[26px]">
                {hero.subhead}
              </p>
            </div>

            <div className="mt-[34px] md:mt-[34px]">
              <VisitButton href={hero.cta.href} label={hero.cta.label} />
            </div>
          </div>

          <div className="absolute inset-x-0 top-[447px] z-10 px-5 md:absolute md:bottom-[82px] md:right-0 md:top-auto md:left-auto md:w-[832px] md:px-0">
            <LtsHomeCardRail cards={content.home.cards} />
          </div>
        </div>
      </section>
    </main>
  );
}

function AtAGlanceHeroBackground() {
  const hero = content.atAGlance.hero;

  return (
    <>
      <div className="absolute inset-x-0 bottom-0 top-[98px] md:inset-0">
        <Image
          src={hero.background.src}
          alt={hero.background.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[54%_50%] md:object-center"
        />
      </div>
      <div
        className="absolute inset-x-0 bottom-0 top-[98px] bg-[linear-gradient(90deg,rgba(5,13,18,0.86)_0%,rgba(32,14,7,0.66)_47%,rgba(5,13,18,0.66)_100%)] md:inset-0"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 top-[98px] bg-[linear-gradient(180deg,rgba(5,13,18,0.18)_0%,rgba(8,3,1,0.48)_48%,rgba(0,0,0,0.88)_100%)] md:inset-0"
        aria-hidden="true"
      />
    </>
  );
}

function AtAGlanceHeroText() {
  const hero = content.atAGlance.hero;

  return (
    <div className="md:pt-[95px]">
      <p className="text-[22px] font-bold uppercase leading-[28px] text-lts-tan md:text-[28px] md:leading-[34px]">
        {hero.eyebrow}
      </p>
      <h1 className="mt-[19px] text-[48px] font-bold leading-[56px] tracking-[0] text-white md:mt-[17px] md:text-[64px] md:leading-[74px]">
        {hero.title}
      </h1>
      <div className="mt-[44px] space-y-[24px] text-[16px] font-normal leading-[22px] text-white/92 md:mt-[33px] md:space-y-[34px] md:text-[20px] md:leading-[28px]">
        <p>{hero.paragraphs[0]}</p>
        <p>
          {hero.paragraphs[1]}
        </p>
      </div>
    </div>
  );
}

type LtsCapability = (typeof content.atAGlance.capabilities.items)[number];

function LtsCapabilityCard({
  item,
  index,
}: {
  item: LtsCapability;
  index: number;
}) {
  const count = String(index + 1).padStart(2, "0");

  return (
    <article className="min-h-[420px] bg-[#14344a] px-[36px] py-[32px] text-white md:min-h-[456px] md:px-[43px] md:py-[36px]">
      <div className="flex items-start justify-between gap-5">
        <div className="relative h-[138px] w-[118px] overflow-hidden rounded-[2px] md:h-[120px] md:w-[160px] md:rounded-[20px]">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            sizes="(min-width: 768px) 160px, 118px"
            className="object-cover"
          />
        </div>
        <div className="text-right">
          <p className="text-[56px] font-bold leading-[60px] text-white md:text-[56px] md:leading-[64px]">
            {count}
          </p>
          <span className="mt-[15px] ml-auto block h-[5px] w-[70px] bg-lts-tan md:mt-[18px]" />
        </div>
      </div>

      <h2 className="mt-[51px] text-[22px] font-bold uppercase leading-[26px] text-lts-tan md:mt-[66px] md:text-[30px] md:leading-[36px]">
        {item.title}
      </h2>
      <p className="mt-[28px] text-[18px] font-normal leading-[22px] text-white/92 md:mt-[43px] md:text-[22px] md:leading-[28px]">
        {item.description}
      </p>
    </article>
  );
}

function CapabilitiesSection() {
  const capabilities = content.atAGlance.capabilities;

  return (
    <section className="bg-white text-lts-ink px-5 py-[52px] md:px-10 md:pt-[66px] md:pb-[132px]">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="text-[38px] md:text-[48px] font-bold uppercase leading-[44px] tracking-[0] md:leading-[58px]">
          {capabilities.title}
        </h2>
        <span className="mt-[18px] block h-[5px] w-[54px] bg-lts-tan md:hidden" />
      </div>

      <div className="mx-auto mt-[36px] max-w-[1268px] rounded-[52px] bg-lts-deep-navy px-[29px] py-[44px] md:mt-[74px] md:px-[92px] md:py-[104px]">
        <div className="grid gap-[28px] md:grid-cols-2 md:gap-[42px_24px]">
          {capabilities.items.map((item, index) => (
            <LtsCapabilityCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function NmdcLtsAtAGlancePage() {
  const hero = content.atAGlance.hero;

  return (
    <main className="bg-white">
      <section className="relative isolate h-[1060px] md:h-[760px] overflow-hidden bg-lts-navy px-5 text-white md:px-10">
        <AtAGlanceHeroBackground />
        <Header links={getLtsNavLinks("/key-highlights")} />

        <div className="relative z-10 mx-auto w-full max-w-[1240px] pt-[132px] md:pt-[134px]">
          <Link
            href={content.atAGlance.backHref}
            className="inline-flex items-center gap-[17px] text-[22px] font-bold leading-7 text-white transition-colors hover:text-lts-tan md:hidden"
          >
            <ArrowLeft className="size-9" />
            {content.atAGlance.backLabel}
          </Link>

          <div className="mt-[49px] grid md:mt-0 md:grid-cols-[minmax(0,690px)_minmax(0,423px)] md:gap-[112px]">
            <AtAGlanceHeroText />

            <div className="relative mt-[49px] h-[420px] overflow-hidden rounded-[32px] shadow-[0_28px_70px_rgba(0,0,0,0.30)] md:mt-0 md:h-[505px]">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                fill
                sizes="(min-width: 768px) 423px, calc(100vw - 40px)"
                className="object-cover object-[58%_54%] md:object-[50%_58%]"
              />
            </div>
          </div>
        </div>
      </section>

      <CapabilitiesSection />
      <LtsFooter />
    </main>
  );
}

function MarineVesselsHero() {
  const hero = content.marineVessels.hero;

  return (
    <section className="relative isolate h-[360px] md:h-[486px] overflow-hidden bg-lts-navy px-5 text-white md:px-10">
      <Image
        src={hero.background.src}
        alt={hero.background.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_50%] md:object-center"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,42,54,0.76)_0%,rgba(6,42,54,0.48)_49%,rgba(6,42,54,0.70)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,42,54,0.18)_0%,rgba(6,42,54,0.36)_48%,rgba(6,42,54,0.78)_100%)]"
        aria-hidden="true"
      />

      <Header links={getLtsNavLinks("/marine-vessels")} />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1240px] items-end justify-center pb-[94px] md:block md:pb-0 md:pt-[340px]">
        <h1 className="text-center text-[40px] font-bold uppercase md:normal-case leading-[48px] tracking-[0] text-white md:text-left md:text-[48px] md:leading-[58px]">
          {hero.title.leading}{" "}
          <span className="text-lts-tan">{hero.title.accent}</span>
        </h1>
      </div>
    </section>
  );
}

type LtsMarineVessel = (typeof content.marineVessels.vessels)[number];

function VesselTitlePill({
  title,
  isLight,
}: {
  title: string;
  isLight: boolean;
}) {
  return (
    <h2
      className={`inline-flex min-h-[67px] items-center rounded-[25px] px-[28px] text-[20px] font-bold leading-[24px] md:min-h-[72px] md:rounded-[22px] md:px-[50px] md:text-[22px] md:leading-[28px] ${
        isLight
          ? "bg-lts-navy text-lts-tan"
          : "bg-lts-tan text-lts-ink"
      }`}
    >
      {title}
    </h2>
  );
}

function VesselImage({
  vessel,
  isLight,
}: {
  vessel: LtsMarineVessel;
  isLight: boolean;
}) {
  return (
    <div className="mt-[17px] md:mt-[34px]">
      <div className="relative mx-auto h-[196px] w-full max-w-[520px] md:h-[276px] md:max-w-[560px]">
        <Image
          src={vessel.image.src}
          alt={vessel.image.alt}
          fill
          sizes="(min-width: 768px) 560px, calc(100vw - 40px)"
          className="object-contain"
        />
      </div>
      <p
        className={`mt-[30px] max-w-[590px] text-[22px] font-normal leading-[31px] md:mt-[25px] md:text-[18px] md:font-bold md:leading-[24px] ${
          isLight ? "text-[#243a4c]" : "text-lts-tan"
        }`}
      >
        {vessel.description}
      </p>
    </div>
  );
}

function VesselDetails({
  vessel,
  isLight,
}: {
  vessel: LtsMarineVessel;
  isLight: boolean;
}) {
  const titleColor = isLight ? "text-lts-ink" : "text-lts-tan";
  const bodyColor = isLight ? "text-[#30465a]" : "text-white";
  const bulletColor = isLight ? "bg-lts-navy" : "bg-lts-tan";
  const mobileDetailsTitle =
    "mobileDetailsTitle" in vessel ? vessel.mobileDetailsTitle : undefined;

  return (
    <div>
      <h3 className={`text-[30px] font-bold leading-[36px] md:text-[24px] md:leading-[30px] ${titleColor}`}>
        {mobileDetailsTitle ? (
          <>
            <span className="md:hidden">{mobileDetailsTitle}</span>
            <span className="hidden md:inline">{vessel.detailsTitle}</span>
          </>
        ) : (
          vessel.detailsTitle
        )}
      </h3>
      <p className={`mt-[19px] text-[20px] font-bold leading-[30px] md:mt-[7px] md:text-[22px] md:leading-[30px] ${titleColor}`}>
        {vessel.detailsSubtitle}
      </p>
      <ul className={`mt-[26px] grid gap-[20px] md:mt-[27px] md:gap-[20px] ${bodyColor}`}>
        {vessel.bullets.map((bullet) => (
          <li
            key={bullet}
            className="grid grid-cols-[12px_minmax(0,1fr)] gap-[18px] text-[22px] font-normal leading-[30px] md:grid-cols-[10px_minmax(0,1fr)] md:gap-[14px] md:text-[16px] md:font-bold md:leading-[24px]"
          >
            <span
              className={`mt-[10px] size-[12px] rounded-full md:mt-[7px] md:size-[9px] ${bulletColor}`}
              aria-hidden="true"
            />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <Link
        href={vessel.specificationsHref}
        className={`mt-[20px] flex items-center justify-end gap-[10px] text-[18px] font-bold leading-6 transition-colors md:mt-[47px] md:text-[18px] ${
          isLight
            ? "text-lts-ink hover:text-lts-tan"
            : "text-lts-tan hover:text-white"
        }`}
      >
        {vessel.specificationsLabel}
        <ArrowUpRight className="size-5" />
      </Link>
    </div>
  );
}

function LtsVesselSection({
  vessel,
  index,
}: {
  vessel: LtsMarineVessel;
  index: number;
}) {
  const isLight = vessel.theme === "light";
  const visualOrder = isLight ? "md:order-2" : "md:order-1";
  const detailsOrder = isLight ? "md:order-1" : "md:order-2";

  return (
    <section
      className={`px-5 py-[46px] md:min-h-[714px] md:px-10 md:py-0 ${
        isLight ? "bg-white text-lts-ink" : "bg-lts-navy text-white"
      }`}
    >
      <div className="mx-auto grid max-w-[1280px] gap-[39px] md:min-h-[714px] md:grid-cols-2 md:items-center md:gap-0">
        <div
          className={`${visualOrder} ${
            isLight
              ? "md:border-l md:border-lts-cyan md:pl-[88px]"
              : "md:pr-[74px]"
          }`}
        >
          <VesselTitlePill title={vessel.title} isLight={isLight} />
          <VesselImage vessel={vessel} isLight={isLight} />
        </div>

        <div
          className={`${detailsOrder} ${
            isLight
              ? "md:pr-[88px]"
              : "md:border-l md:border-white/10 md:pl-[63px]"
          } ${index === 1 ? "md:pt-[8px]" : ""}`}
        >
          <VesselDetails vessel={vessel} isLight={isLight} />
        </div>
      </div>
    </section>
  );
}

export function NmdcLtsMarineVesselsPage() {
  return (
    <main className="bg-lts-navy">
      <MarineVesselsHero />
      {content.marineVessels.vessels.map((vessel, index) => (
        <LtsVesselSection key={vessel.title} vessel={vessel} index={index} />
      ))}
      <LtsFooter />
    </main>
  );
}

function WhipstockHero() {
  const hero = content.whipstockSystem.hero;

  return (
    <section className="relative isolate h-[421px] md:h-[486px] overflow-hidden bg-lts-navy px-5 text-white md:px-10">
      <Image
        src={hero.mobileBackground.src}
        alt={hero.mobileBackground.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_50%] md:hidden"
      />
      <Image
        src={hero.desktopBackground.src}
        alt={hero.desktopBackground.alt}
        fill
        priority
        sizes="100vw"
        className="hidden object-cover object-[50%_50%] md:block"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,42,54,0.78)_0%,rgba(6,42,54,0.42)_50%,rgba(6,42,54,0.72)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,42,54,0.12)_0%,rgba(6,42,54,0.36)_50%,rgba(6,42,54,0.78)_100%)]"
        aria-hidden="true"
      />

      <Header links={getLtsNavLinks("/whipstock-system")} />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1240px] items-end pb-[92px] md:block md:pb-0 md:pt-[360px]">
        <h1 className="text-[30px] font-bold leading-[38px] tracking-[0] text-white md:text-[48px] md:leading-[58px]">
          {hero.title.leading}{" "}
          <span className="text-lts-tan">{hero.title.accent}</span>
        </h1>
      </div>
    </section>
  );
}

type WhipstockFeature = (typeof content.whipstockSystem.features)[number];

function WhipstockFeatureIcon({
  icon,
  className,
}: {
  icon: WhipstockFeature["icon"];
  className?: string;
}) {
  if (icon === "mechanical") {
    return (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className={className} aria-hidden="true">
        <path d="M10 15h44a4 4 0 0 1 0 8H10a4 4 0 0 1 0-8Z" />
        <path d="M18 23v12M32 23v16M46 23v12" />
        <circle cx="18" cy="40" r="6" />
        <circle cx="32" cy="44" r="6" />
        <circle cx="46" cy="40" r="6" />
        <path d="M18 46v7M32 50v7M46 46v7" />
      </svg>
    );
  }

  if (icon === "permanent") {
    return (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className={className} aria-hidden="true">
        <path d="M14 26c0 12 8 20 18 20s18-8 18-20" />
        <path d="M16 36c8-8 24-8 32 0" />
        <path d="M20 54h24" />
      </svg>
    );
  }

  if (icon === "retrievable") {
    return (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className={className} aria-hidden="true">
        <rect x="18" y="19" width="28" height="34" rx="4" />
        <rect x="12" y="11" width="40" height="12" rx="6" />
        <path d="M32 28v16" />
        <path d="m24 37 8 8 8-8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className={className} aria-hidden="true">
      <rect x="24" y="7" width="16" height="13" rx="3" />
      <path d="M27 7a5 5 0 0 1 10 0" />
      <path d="M23 20h18v16H23z" />
      <path d="M26 36h12v13H26z" />
      <circle cx="32" cy="55" r="7" />
      <circle cx="32" cy="55" r="3" />
    </svg>
  );
}

function WhipstockIntroPanel() {
  return (
    <article className="order-1 rounded-[24px] bg-lts-navy px-[64px] py-[39px] text-[24px] font-bold leading-[49px] text-white md:order-2 md:min-h-[680px] md:rounded-[24px] md:px-[35px] md:py-[37px] md:text-[20px] md:leading-[24px]">
      <div className="space-y-[46px] md:space-y-[27px]">
        {content.whipstockSystem.introduction.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

function WhipstockFeatureCard({ feature }: { feature: WhipstockFeature }) {
  return (
    <article className="flex min-h-[194px] items-center gap-[25px] rounded-[24px] bg-lts-navy px-[32px] py-[30px] text-white md:h-[160px] md:gap-[24px] md:rounded-[24px] md:px-[34px] md:py-0">
      <WhipstockFeatureIcon
        icon={feature.icon}
        className="size-[76px] shrink-0 text-lts-tan md:size-[60px]"
      />
      <p className="text-[24px] font-bold leading-[42px] md:text-[20px] md:leading-[24px]">
        <span className="text-lts-tan">{feature.title}:</span>{" "}
        {feature.description}
      </p>
    </article>
  );
}

function WhipstockDiagram() {
  const whipstock = content.whipstockSystem;

  return (
    <div className="mx-auto mt-[42px] max-w-full md:mt-[39px] md:w-[1240px]">
      <div className="relative h-[318px] overflow-hidden rounded-[32px] bg-lts-navy md:h-[624px] md:rounded-[28px]">
        <Image
          src={whipstock.diagram.src}
          alt={whipstock.diagram.alt}
          fill
          sizes="(min-width: 768px) 1000px, calc(100vw - 80px)"
          className="object-contain p-[30px] md:p-[118px]"
        />
      </div>

      <div className="mt-[25px] flex flex-col items-center gap-[17px] md:mt-[32px] md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
        <Link
          href={whipstock.specificationsHref}
          className="order-2 inline-flex items-center gap-[10px] text-[23px] font-bold leading-7 text-lts-ink transition-colors hover:text-lts-tan md:order-1 md:justify-self-start md:text-[18px] md:leading-6"
        >
          {whipstock.specificationsLabel}
          <ArrowUpRight className="size-6 md:size-5" />
        </Link>

        <div className="order-1 flex items-center justify-center gap-[24px] md:order-2">
          <button
            type="button"
            aria-label="Previous whipstock specification"
            className="flex size-[52px] items-center justify-center rounded-full border border-[#c7d4e4] text-[#8aa0b8] md:size-[64px]"
          >
            <ArrowLeft className="size-6 md:size-7" />
          </button>
          <button
            type="button"
            aria-label="Next whipstock specification"
            className="flex size-[52px] items-center justify-center rounded-full bg-lts-tan text-lts-ink md:size-[64px]"
          >
            <ArrowRight className="size-6 md:size-7" />
          </button>
        </div>

        <div className="order-3 hidden h-[7px] w-full max-w-[506px] overflow-hidden rounded-full bg-[#dedede] md:block md:justify-self-end">
          <span className="block h-full w-[135px] rounded-full bg-lts-tan" />
        </div>
      </div>
    </div>
  );
}

export function NmdcLtsWhipstockSystemPage() {
  return (
    <main className="bg-white">
      <WhipstockHero />

      <section className="bg-white px-5 pb-[51px] pt-[36px] text-lts-ink md:px-10 md:pb-[96px] md:pt-[50px]">
        <div className="mx-auto grid max-w-[1248px] gap-[12px] md:grid-cols-[minmax(0,560px)_minmax(0,670px)] md:gap-5">
          <div className="order-2 grid gap-[12px] md:order-1 md:gap-[16px]">
            {content.whipstockSystem.features.map((feature) => (
              <WhipstockFeatureCard key={feature.title} feature={feature} />
            ))}
          </div>

          <WhipstockIntroPanel />
        </div>

        <WhipstockDiagram />
      </section>

      <LtsFooter />
    </main>
  );
}
