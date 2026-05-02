"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "./icons";

type CarouselImage = {
  readonly src: string;
  readonly alt: string;
};

export function VesselDetailCarousel({
  images,
  vesselName,
}: {
  images: readonly CarouselImage[];
  vesselName: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  if (!activeImage) return null;

  const showPrev = () =>
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const showNext = () =>
    setActiveIndex((i) => (i + 1) % images.length);

  return (
    <>
      <Image
        key={activeImage.src}
        src={activeImage.src}
        alt={activeImage.alt || vesselName}
        width={1240}
        height={560}
        sizes="(min-width: 768px) 1240px, calc(100vw - 40px)"
        className="mt-[19px] h-[360px] w-full rounded-[18px] object-cover md:h-[560px]"
      />
      <div className="mt-[50px] flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Previous image"
          onClick={showPrev}
          className="flex size-8 items-center justify-center rounded-full border border-dm-text/16 text-dm-text/60 transition-colors hover:border-dm-cyan hover:text-dm-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dm-cyan"
        >
          <ArrowLeft className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Next image"
          onClick={showNext}
          className="flex size-8 items-center justify-center rounded-full bg-dm-cyan text-white transition-colors hover:bg-dm-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dm-cyan"
        >
          <ArrowRight className="size-4" />
        </button>
      </div>
    </>
  );
}
