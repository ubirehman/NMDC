"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "./icons";

type HomeCard = {
  title: string;
  href: string;
  image: string;
  logo?: {
    src: string;
    alt: string;
  };
};

type InfraHomeCardRailProps = {
  cards: readonly HomeCard[];
};

const SCROLL_STEP = 168;

export function InfraHomeCardRail({ cards }: InfraHomeCardRailProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateAffordances = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;

    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateAffordances();
    const el = scrollerRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateAffordances, { passive: true });
    window.addEventListener("resize", updateAffordances);
    return () => {
      el.removeEventListener("scroll", updateAffordances);
      window.removeEventListener("resize", updateAffordances);
    };
  }, [updateAffordances]);

  const scrollBy = (delta: number) => {
    scrollerRef.current?.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <div className="relative flex w-full flex-col items-center gap-6 md:static md:items-end">
      <div
        ref={scrollerRef}
        className="-mx-5 flex w-[calc(100%+2.5rem)] snap-x snap-mandatory gap-[18px] overflow-x-auto px-5 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:w-[822px] md:overflow-visible md:px-0 md:pb-0"
      >
        {cards.map((card) => {
          const label =
            card.title === "NMDC Product Highlight"
              ? "NMDC Product\nHighlight"
              : card.title;

          return (
            <Link
              key={card.title}
              href={card.href}
              aria-label={card.title.replace("\n", " ")}
              className="group relative block h-[200px] w-[150px] shrink-0 snap-start overflow-hidden rounded-2xl border-[1.2px] border-white bg-white shadow-[0_12px_32px_-6px_rgba(5,20,31,0.76)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-infra-yellow hover:shadow-[0_0_34px_0_rgba(255,207,0,0.45)] active:translate-y-0 active:scale-[0.98] active:border-infra-yellow active:shadow-[0_0_20px_0_rgba(255,207,0,0.50)] focus-visible:-translate-y-0.5 focus-visible:border-infra-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-infra-yellow focus-visible:shadow-[0_0_34px_0_rgba(255,207,0,0.45)]"
            >
              <Image
                src={card.image}
                alt={card.title.replace("\n", " ")}
                fill
                sizes="150px"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-active:scale-[1.02]"
              />

              <span
                className="pointer-events-none absolute inset-0 bg-transparent transition-colors duration-200 group-hover:bg-infra-yellow/10 group-focus-visible:bg-infra-yellow/10"
                aria-hidden="true"
              />

              <div className="absolute inset-x-0 bottom-0 flex h-12 items-center justify-center rounded-t-lg bg-[rgba(7,28,40,0.82)] px-2 backdrop-blur-[26.5px] transition-colors duration-200 group-hover:bg-infra-yellow group-focus-visible:bg-infra-yellow group-active:bg-infra-yellow">
                {card.logo ? (
                  <Image
                    src={card.logo.src}
                    alt={card.logo.alt}
                    width={96}
                    height={36}
                    className="max-h-[28px] w-[96px] object-contain transition-opacity duration-200 group-hover:opacity-90"
                  />
                ) : (
                  <span className="flex w-full items-center justify-between gap-2 pl-1">
                    <span className="whitespace-pre-line text-left text-xs font-medium leading-[1.25] text-white transition-colors duration-200 group-hover:text-infra-ink group-focus-visible:text-infra-ink group-active:text-infra-ink">
                      {label}
                    </span>
                    <ArrowRight className="mr-1 size-5 shrink-0 text-white transition-colors duration-200 group-hover:text-infra-ink group-focus-visible:text-infra-ink group-active:text-infra-ink" />
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      <div className="absolute left-1/2 top-[224px] z-10 flex -translate-x-1/2 items-center gap-6 md:static md:hidden md:translate-x-0">
        <button
          type="button"
          aria-label="Previous NMDC Infra cards"
          onClick={() => scrollBy(-SCROLL_STEP)}
          disabled={!canPrev}
          className="flex size-10 items-center justify-center rounded-full border border-white/50 bg-white text-infra-navy backdrop-blur-[10px] transition-opacity disabled:opacity-40"
        >
          <ArrowLeft className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Next NMDC Infra cards"
          onClick={() => scrollBy(SCROLL_STEP)}
          disabled={!canNext}
          className="flex size-10 items-center justify-center rounded-full bg-infra-yellow text-infra-ink backdrop-blur-[10px] transition-opacity disabled:opacity-40"
        >
          <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
