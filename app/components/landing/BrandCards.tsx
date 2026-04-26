"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "./icons";
import { BrandCard } from "./BrandCard";
import type { Brand } from "./types";

type BrandCardsProps = {
  brands: Brand[];
};

const SCROLL_STEP = 168;

export function BrandCards({ brands }: BrandCardsProps) {
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
        {brands.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </div>

      <div className="flex items-center gap-6 md:hidden">
        <button
          type="button"
          aria-label="Previous brands"
          onClick={() => scrollBy(-SCROLL_STEP)}
          disabled={!canPrev}
          className="flex size-10 items-center justify-center rounded-full border border-content-200 bg-white text-brand-navy backdrop-blur-[10px] transition-opacity disabled:opacity-40"
        >
          <ArrowLeft className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Next brands"
          onClick={() => scrollBy(SCROLL_STEP)}
          disabled={!canNext}
          className="flex size-10 items-center justify-center rounded-full border border-content-200 bg-white text-brand-navy backdrop-blur-[10px] transition-opacity disabled:opacity-40"
        >
          <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
