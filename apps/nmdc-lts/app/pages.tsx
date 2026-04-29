import Image from "next/image";
import Link from "next/link";
import { LtsFooter } from "../components/Footer";
import { Header } from "../components/Header";
import { LtsHomeCardRail } from "../components/LtsHomeCardRail";
import { ArrowLeft, ArrowUpRight } from "../components/icons";
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
      className="group inline-flex h-[49px] w-[224px] items-center justify-between rounded-full bg-white pl-[58px] pr-0 text-[15px] font-bold leading-5 text-lts-ink shadow-[0_16px_32px_rgba(0,0,0,0.18)] transition-colors hover:bg-white/92 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lts-tan"
    >
      <span>{label}</span>
      <span className="flex size-[49px] items-center justify-center rounded-full bg-lts-tan text-lts-ink transition-transform duration-200 group-hover:translate-x-0.5">
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
          <div className="pt-[268px] md:absolute md:left-0 md:top-[244px] md:w-[760px] md:pt-0">
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

          <div className="absolute inset-x-0 top-[512px] z-10 px-5 md:absolute md:bottom-[82px] md:right-0 md:top-auto md:left-auto md:w-[832px] md:px-0">
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
          {hero.paragraphs[1]}{" "}
          <span className="font-bold text-white">{hero.readMoreLabel}</span>
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
