"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "./icons";

type HomeCard = {
  title: string;
  href: string;
  image: string;
};

type DmHomeCardRailProps = {
  cards: HomeCard[];
};

const SCROLL_STEP = 168;

export function DmHomeCardRail({ cards }: DmHomeCardRailProps) {
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
    <div className="flex w-full flex-col items-center gap-6 md:items-end">
      <div
        ref={scrollerRef}
        className="-mx-5 flex w-[calc(100%+2.5rem)] snap-x snap-mandatory gap-[18px] overflow-x-auto px-5 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:w-[822px] md:overflow-visible md:px-0 md:pb-0"
      >
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            aria-label={card.title}
            className="group relative block h-[184px] w-[150px] shrink-0 snap-start overflow-hidden rounded-2xl border-[1.2px] border-white bg-white shadow-[0_12px_32px_-6px_rgba(5,20,31,0.76)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-dm-cyan hover:shadow-[0_0_34px_0_rgba(41,183,227,0.70)] active:translate-y-0 active:scale-[0.98] active:border-dm-cyan active:shadow-[0_0_20px_0_rgba(41,183,227,0.82)] focus-visible:-translate-y-0.5 focus-visible:border-dm-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dm-cyan focus-visible:shadow-[0_0_34px_0_rgba(41,183,227,0.70)] md:h-[200px]"
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              sizes="150px"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-active:scale-[1.02]"
            />
            <div
              className="absolute inset-0 bg-dm-cyan/0 transition-colors duration-200 group-hover:bg-dm-cyan/12 group-focus-visible:bg-dm-cyan/12 group-active:bg-dm-cyan/20"
              aria-hidden="true"
            />
            <span className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full border border-white/24 bg-dm-navy/78 text-white opacity-0 shadow-[0_10px_24px_rgba(0,0,0,0.25)] backdrop-blur-[12px] transition-[opacity,transform] duration-200 group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-visible:opacity-100">
              <ArrowRight className="size-4" />
            </span>
            <div className="absolute inset-x-0 bottom-0 flex h-12 items-center justify-between gap-2 rounded-t-lg bg-dm-navy/72 px-3 backdrop-blur-[26.5px] transition-colors duration-200 group-hover:bg-dm-cyan group-focus-visible:bg-dm-cyan group-active:bg-dm-blue">
              <span className="text-left text-xs font-medium leading-[1.25] text-white">
                {card.title}
              </span>
              <ArrowRight className="size-4 shrink-0 text-white" />
            </div>
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-6 md:hidden">
        <button
          type="button"
          aria-label="Previous D&M cards"
          onClick={() => scrollBy(-SCROLL_STEP)}
          disabled={!canPrev}
          className="flex size-10 items-center justify-center rounded-full border border-white/50 bg-white text-dm-navy backdrop-blur-[10px] transition-opacity disabled:opacity-40"
        >
          <ArrowLeft className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Next D&M cards"
          onClick={() => scrollBy(SCROLL_STEP)}
          disabled={!canNext}
          className="flex size-10 items-center justify-center rounded-full border border-white/50 bg-white text-dm-navy backdrop-blur-[10px] transition-opacity disabled:opacity-40"
        >
          <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
