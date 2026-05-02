"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "./icons";

type CarouselImage = {
  readonly src: string;
  readonly alt: string;
};

export function CaissonImageCarousel({
  images,
}: {
  images: readonly CarouselImage[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  if (!activeImage) return null;

  const showPrev = () =>
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const showNext = () =>
    setActiveIndex((i) => (i + 1) % images.length);

  return (
    <figure className="mx-1 mt-[56px] md:mx-0 md:mt-[32px]">
      <Image
        key={activeImage.src}
        src={activeImage.src}
        alt={activeImage.alt}
        width={1240}
        height={560}
        sizes="(min-width: 768px) 1240px, 312px"
        className="h-[312px] w-full rounded-[20px] object-cover object-center md:h-[560px] md:rounded-[14px]"
      />
      <div className="mt-8 flex items-center justify-center gap-7 md:mt-5 md:gap-3">
        <button
          type="button"
          aria-label="Previous image"
          onClick={showPrev}
          className="flex size-[58px] items-center justify-center rounded-full border border-dm-text/16 text-dm-text/60 transition-colors hover:border-dm-cyan hover:text-dm-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dm-cyan md:size-8"
        >
          <ArrowLeft className="size-7 md:size-4" />
        </button>
        <button
          type="button"
          aria-label="Next image"
          onClick={showNext}
          className="flex size-[58px] items-center justify-center rounded-full bg-dm-cyan text-white transition-colors hover:bg-dm-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dm-cyan md:size-8"
        >
          <ArrowRight className="size-7 md:size-4" />
        </button>
      </div>
    </figure>
  );
}
