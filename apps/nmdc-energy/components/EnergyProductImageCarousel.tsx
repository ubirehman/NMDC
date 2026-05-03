"use client";

import Image from "next/image";
import type { MouseEvent } from "react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "./icons";

type EnergyProductCarouselImage = {
  src: string;
  alt: string;
  objectPosition?: string;
};

type EnergyProductImageCarouselProps = {
  images: readonly EnergyProductCarouselImage[];
  label: string;
};

export function EnergyProductImageCarousel({
  images,
  label,
}: EnergyProductImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = images[currentIndex];

  if (!currentImage) {
    return null;
  }

  const showPreviousMediaImage = () => {
    setCurrentIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  const showNextMediaImage = () => {
    setCurrentIndex((index) => (index + 1) % images.length);
  };

  const showMediaImageAtProgress = (event: MouseEvent<HTMLButtonElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const clickedPosition = (event.clientX - bounds.left) / bounds.width;
    const boundedPosition = Math.max(0, Math.min(clickedPosition, 0.999));

    setCurrentIndex(Math.floor(boundedPosition * images.length));
  };

  return (
    <section className="mt-8 md:mt-[72px]">
      <div className="relative h-[320px] overflow-hidden rounded-[12px] md:h-[620px] md:rounded-[16px]">
        <Image
          key={currentImage.src}
          src={currentImage.src}
          alt={currentImage.alt}
          fill
          sizes="(min-width: 768px) 1240px, 100vw"
          className="object-cover"
          style={{ objectPosition: currentImage.objectPosition }}
        />
      </div>

      <div className="mt-6 mr-auto flex items-center justify-end gap-6 md:mt-8">
        <button
          type="button"
          aria-label="Previous product image"
          onClick={showPreviousMediaImage}
          className="grid size-12 place-items-center rounded-full border border-[#c5d0dc] text-[#8ca0b5] transition-colors hover:border-energy-green hover:text-energy-green"
        >
          <ArrowLeft className="-translate-x-0.5 size-6" />
        </button>
        <button
          type="button"
          aria-label="Next product image"
          onClick={showNextMediaImage}
          className="grid size-12 place-items-center rounded-full border border-[#d9e2ea] text-energy-green transition-colors hover:border-energy-green hover:bg-energy-green hover:text-white"
        >
          <ArrowRight className="translate-x-0.5 size-6" />
        </button>
        <button
          type="button"
          aria-label={`Image ${currentIndex + 1} of ${images.length}; click to jump through product images`}
          onClick={showMediaImageAtProgress}
          className="h-[18px] w-[180px] rounded-full py-[6px] md:w-[504px]"
        >
          <span className="block h-[6px] rounded-full bg-[#d8d8d8]">
            <span
              className="block h-full rounded-full bg-energy-green transition-[width] duration-200"
              style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
            />
          </span>
        </button>
      </div>
    </section>
  );
}
