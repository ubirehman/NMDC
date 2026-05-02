"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "./icons";

type WhipstockDiagramImage = {
  src: string;
  alt: string;
};

type WhipstockDiagramCarouselProps = {
  images: readonly WhipstockDiagramImage[];
  specificationsHref?: string | null;
  specificationsLabel?: string | null;
};

export function WhipstockDiagramCarousel({
  images,
  specificationsHref,
  specificationsLabel,
}: WhipstockDiagramCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  if (!activeImage) {
    return null;
  }

  const progressWidth = `${((activeIndex + 1) / images.length) * 100}%`;

  const showPreviousImage = () => {
    setActiveIndex((index) => (index - 1 + images.length) % images.length);
  };

  const showNextImage = () => {
    setActiveIndex((index) => (index + 1) % images.length);
  };

  return (
    <>
      <div className="relative h-[318px] overflow-hidden rounded-[32px] bg-lts-navy md:h-[624px] md:rounded-[28px]">
        <Image
          key={activeImage.src}
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          sizes="(min-width: 768px) 1000px, calc(100vw - 80px)"
          className="object-cover object-center"
        />
      </div>

      <div className="mt-[25px] flex flex-col items-center gap-[17px] md:mt-[32px] md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
        {specificationsHref && specificationsLabel ? (
          <p
            href={specificationsHref}
            className="order-2 cursor-default inline-flex text-white items-center gap-[10px] text-[23px] font-bold leading-7 text-lts-ink transition-colors md:order-1 md:justify-self-start md:text-[18px] md:leading-6"
          >
            {specificationsLabel}
            <ArrowUpRight className="cursor-default text-white size-6 md:size-5" />
          </p>
        ) : (
          <span className="order-2 hidden md:order-1 md:block" aria-hidden="true" />
        )}

        <div className="order-1 flex items-center justify-center gap-[24px] md:order-2">
          <button
            type="button"
            aria-label="Previous whipstock specification"
            onClick={showPreviousImage}
            className="flex size-[52px] items-center justify-center rounded-full border border-[#c7d4e4] text-[#8aa0b8] transition-colors hover:border-lts-tan  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lts-tan md:size-[64px]"
          >
            <ArrowLeft className="size-6 md:size-7" />
          </button>
          <button
            type="button"
            aria-label="Next whipstock specification"
            onClick={showNextImage}
            className="flex size-[52px] items-center justify-center rounded-full bg-lts-tan text-lts-ink transition-colors hover:bg-lts-ink hover:text-lts-tan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lts-tan md:size-[64px]"
          >
            <ArrowRight className="size-6 md:size-7" />
          </button>
        </div>

        <div className="order-3 hidden h-[7px] w-full max-w-[506px] overflow-hidden rounded-full bg-[#dedede] md:block md:justify-self-end">
          <span
            className="block h-full rounded-full bg-lts-tan transition-[width] duration-300"
            style={{ width: progressWidth }}
          />
        </div>
      </div>
    </>
  );
}
