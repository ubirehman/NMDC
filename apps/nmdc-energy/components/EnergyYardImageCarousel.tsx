"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "./icons";

type EnergyYardCarouselImage = {
  src: string;
  alt: string;
};

type EnergyYardImageCarouselProps = {
  images: readonly EnergyYardCarouselImage[];
  previousLabel: string;
  nextLabel: string;
};

export function EnergyYardImageCarousel({
  images,
  previousLabel,
  nextLabel,
}: EnergyYardImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = images[currentIndex];

  if (!currentImage) {
    return null;
  }

  const showPreviousImage = () => {
    setCurrentIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  const showNextImage = () => {
    setCurrentIndex((index) => (index + 1) % images.length);
  };

  const previousClassName =
    "grid size-9 place-items-center rounded-full border border-[#d5e3ea] bg-white text-[#9aacb8] shadow-[0_8px_18px_rgba(6,43,68,0.08)] transition-colors hover:border-energy-green hover:text-energy-green md:size-10";
  const nextClassName =
    "grid size-9 place-items-center rounded-full border border-[#d5e3ea] bg-white text-energy-green shadow-[0_8px_18px_rgba(6,43,68,0.08)] transition-colors hover:border-energy-green hover:bg-energy-green hover:text-white md:size-10";

  const buttons = (
    <>
      <button
        type="button"
        aria-label={previousLabel}
        onClick={showPreviousImage}
        className={previousClassName}
      >
        <ArrowLeft className="size-5" />
      </button>
      <button
        type="button"
        aria-label={nextLabel}
        onClick={showNextImage}
        className={nextClassName}
      >
        <ArrowRight className="size-5" />
      </button>
    </>
  );

  return (
    <div>
      <div className="relative h-[212px] overflow-hidden rounded-[12px] md:h-[576px] md:rounded-[16px]">
        <Image
          key={currentImage.src}
          src={currentImage.src}
          alt={currentImage.alt}
          fill
          loading="eager"
          sizes="(min-width: 768px) 760px, 100vw"
          className="object-cover object-[52%_48%]"
        />
      </div>

      <div className="mt-4 flex items-center justify-center gap-5 md:hidden">{buttons}</div>
      <div className="relative mt-4 hidden h-10 items-center justify-center md:flex">
        <div className="flex items-center justify-center gap-5">{buttons}</div>
        <span className="absolute right-0 text-[13px] font-bold leading-5 text-energy-green">
          ({currentIndex + 1}/{images.length})
        </span>
      </div>
    </div>
  );
}
