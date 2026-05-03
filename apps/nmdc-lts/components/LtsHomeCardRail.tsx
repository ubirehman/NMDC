"use client";

import Image from "next/image";
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

type LtsHomeCardRailProps = {
  cards: readonly HomeCard[];
};

const SCROLL_STEP = 168;

function getCardId(card: HomeCard) {
  const title = card.title.toLowerCase();

  if (title.includes("dredging")) return "dm";
  if (title.includes("energy")) return "energy";
  if (title.includes("infra")) return "infra";
  if (title.includes("lts")) return "lts";
  if (title.includes("product")) return "product";
  return "group";
}

export function LtsHomeCardRail({ cards }: LtsHomeCardRailProps) {
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
        className="-mx-5 flex w-[calc(100%+2.5rem)] snap-x snap-mandatory gap-[18px] overflow-x-auto px-5 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:w-[832px] md:overflow-visible md:px-0 md:pb-0"
      >
        {cards.map((card) => {
          const cardId = getCardId(card);
          const label =
            card.title === "NMDC Product Highlight"
              ? "NMDC Product\nHighlight"
              : card.title;
          const imagePositionClassName =
            {
              group: "object-[52%_50%]",
              dm: "object-[46%_50%]",
              energy: "object-[46%_50%]",
              infra: "object-[48%_50%]",
              lts: "object-[48%_45%]",
              product: "object-[52%_50%]",
            }[cardId] ?? "object-center";
          const logoFrameClassName =
            {
              group: "h-[32px] w-[102px]",
              dm: "h-[30px] w-[118px]",
              energy: "h-[30px] w-[118px]",
              infra: "h-[30px] w-[96px]",
              lts: "h-[34px] w-[124px]",
            }[cardId] ?? "h-[30px] w-[96px]";
          const logoFrameOverflowClassName =
            cardId === "lts" ? "overflow-visible" : "overflow-hidden";
          const logoFitClassName =
            cardId === "dm" || cardId === "energy" ? "object-cover" : "object-contain";

          return (
            <a
              key={card.title}
              href={card.href}
              aria-label={card.title.replace("\n", " ")}
              className="group relative block h-[200px] w-[150px] shrink-0 snap-start overflow-hidden rounded-2xl border-[1.2px] border-white bg-white shadow-[0_12px_32px_-6px_rgba(5,20,31,0.76)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-lts-tan hover:shadow-[0_0_34px_0_rgba(221,193,156,0.42)] active:translate-y-0 active:scale-[0.98] active:border-lts-tan active:shadow-[0_0_20px_0_rgba(221,193,156,0.46)] focus-visible:-translate-y-0.5 focus-visible:border-lts-tan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lts-tan focus-visible:shadow-[0_0_34px_0_rgba(221,193,156,0.42)] md:w-[150px]"
            >
              <Image
                src={card.image}
                alt={card.title.replace("\n", " ")}
                fill
                sizes="150px"
                className={`object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-active:scale-[1.02] ${imagePositionClassName}`}
              />

              <span
                className="pointer-events-none absolute inset-0 bg-transparent transition-colors duration-200 group-hover:bg-lts-tan/10 group-focus-visible:bg-lts-tan/10"
                aria-hidden="true"
              />

              <div className="absolute inset-x-0 bottom-0 flex h-12 items-center justify-center rounded-t-lg bg-[rgba(7,31,43,0.84)] px-2 backdrop-blur-[26.5px] transition-colors duration-200 group-hover:bg-lts-tan group-focus-visible:bg-lts-tan group-active:bg-lts-tan">
                {card.logo ? (
                  <span className={`relative block shrink-0 ${logoFrameOverflowClassName} ${logoFrameClassName}`}>
                    <Image
                      src={card.logo.src}
                      alt={card.logo.alt}
                      fill
                      sizes={cardId === "lts" ? "124px" : "118px"}
                      className={`${logoFitClassName} transition-transform duration-200 group-hover:scale-[1.03] group-active:scale-100`}
                    />
                  </span>
                ) : (
                  <span className="flex w-full items-center justify-between gap-2 pl-1">
                    <span className="whitespace-pre-line text-left text-xs font-bold leading-[1.35] text-white transition-colors duration-200 group-hover:text-lts-ink group-focus-visible:text-lts-ink group-active:text-lts-ink">
                      {label}
                    </span>
                    <ArrowRight className="mr-1 size-5 shrink-0 text-white transition-colors duration-200 group-hover:text-lts-ink group-focus-visible:text-lts-ink group-active:text-lts-ink" />
                  </span>
                )}
              </div>
            </a>
          );
        })}
      </div>

      <div className="absolute left-1/2 top-[224px] z-10 flex -translate-x-1/2 items-center gap-6 md:static md:hidden md:translate-x-0">
        <button
          type="button"
          aria-label="Previous NMDC LTS cards"
          onClick={() => scrollBy(-SCROLL_STEP)}
          disabled={!canPrev}
          className="flex size-10 items-center justify-center rounded-full border border-white/60 bg-white text-lts-cyan backdrop-blur-[10px] transition-opacity disabled:opacity-40"
        >
          <ArrowLeft className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Next NMDC LTS cards"
          onClick={() => scrollBy(SCROLL_STEP)}
          disabled={!canNext}
          className="flex size-10 items-center justify-center rounded-full bg-white text-lts-cyan backdrop-blur-[10px] transition-opacity disabled:opacity-40"
        >
          <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
