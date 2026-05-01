"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "./icons";

type HydraulicFacilityGalleryImage = {
  src: string;
  alt: string;
};

type HydraulicFacilityImageCarouselProps = {
  images: readonly HydraulicFacilityGalleryImage[];
};

export function HydraulicFacilityImageCarousel({
  images,
}: HydraulicFacilityImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  if (!activeImage) {
    return null;
  }

  const showPreviousImage = () => {
    setActiveIndex((index) => (index - 1 + images.length) % images.length);
  };

  const showNextImage = () => {
    setActiveIndex((index) => (index + 1) % images.length);
  };

  return (
    <>
      <Image
        key={activeImage.src}
        src={activeImage.src}
        alt={activeImage.alt}
        width={1240}
        height={650}
        className="mt-5 h-[232px] w-full rounded-[14px] object-cover object-center md:mt-6 md:h-[560px]"
      />
      <div className="mt-5 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Previous image"
          onClick={showPreviousImage}
          className="flex size-8 items-center justify-center rounded-full border border-dm-text/16 text-dm-text/60 transition-colors hover:border-dm-cyan hover:text-dm-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dm-cyan"
        >
          <ArrowLeft className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Next image"
          onClick={showNextImage}
          className="flex size-8 items-center justify-center rounded-full bg-dm-cyan text-white transition-colors hover:bg-dm-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dm-cyan"
        >
          <ArrowRight className="size-4" />
        </button>
      </div>
    </>
  );
}
