import Link from "next/link";
import { ArrowUpRight } from "./icons";
import type { LandingContent } from "./types";

type HeroProps = {
  hero: LandingContent["hero"];
};

export function Hero({ hero }: HeroProps) {
  return (
    <div className="flex w-full max-w-[559px] flex-col gap-6 text-white md:gap-8">
      <h1 className="max-w-[547px] text-[28px] font-bold leading-[1.18] tracking-[-0.2px] md:text-[48px] md:leading-[56px] md:tracking-[-0.5px]">
        <span className="text-brand-sky text-primary-sky-blue">
          {hero.headline.leadingAccent}
        </span>
        <br />
        {hero.headline.neutral}
        <span className="text-white">{hero.headline.trailingAccent}</span>
      </h1>

      <div className="flex w-full max-w-[559px] items-stretch gap-3">
        <span
          aria-hidden="true"
          className="mt-[2px] h-[43px] w-[3px] shrink-0 rounded-[20px] bg-brand-sky bg-primary-sky-blue shadow-[0_0_6px_0_var(--color-effect-cyan-glow)]"
        />
        <p className="flex-1 pt-[1px] text-sm leading-[1.5] md:text-[16px]">
          {hero.subhead}
        </p>
      </div>

      <Link
        href={hero.cta.desktop.href}
        className="group inline-flex items-center gap-0.5 self-start"
      >
        <span className="flex h-12 min-w-[136px] items-center justify-center rounded-full bg-white hover:bg-primary-sky-blue px-6 text-base font-medium text-brand-navy text-primary-navy-blue md:w-[174px]">
          <span className="md:hidden">{hero.cta.mobile.label}</span>
          <span className="hidden md:inline">{hero.cta.desktop.label}</span>
        </span>
        <span
          aria-hidden="true"
          className="flex size-12 items-center justify-center rounded-full bg-brand-sky bg-primary-sky-blue text-white transition-transform group-hover:rotate-45"
        >
          <ArrowUpRight className="size-5" />
        </span>
      </Link>
    </div>
  );
}
