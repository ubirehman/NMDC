"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "../../../app/components/landing/icons";

type GalleryImage = {
  src: string;
  alt: string;
};

type PeopleCultureGalleryCarouselProps = {
  images: readonly GalleryImage[];
  frameClassName?: string;
  imageClassName: string;
  controlsClassName?: string;
  previousButtonClassName?: string;
  nextButtonClassName?: string;
  iconClassName?: string;
  showDots?: boolean;
};

export function PeopleCultureGalleryCarousel({
  images,
  frameClassName = "rounded-[6px] bg-primary-navy-blue md:rounded-[20px]",
  imageClassName,
  controlsClassName = "mt-4 flex justify-center gap-2 md:my-5 md:gap-6",
  previousButtonClassName = "flex size-8 items-center justify-center rounded-full border border-white/18 text-white/72 transition-colors hover:border-white hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:size-16 md:border-white/80",
  nextButtonClassName = "flex size-8 items-center justify-center rounded-full border border-white/18 text-white/72 transition-colors hover:border-white hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:size-16 md:border-white/80",
  iconClassName = "size-4 md:size-8",
  showDots = false,
}: PeopleCultureGalleryCarouselProps) {
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
    <article>
      <div className={`relative overflow-hidden ${frameClassName}`}>
        <Image
          key={activeImage.src}
          src={activeImage.src}
          alt={activeImage.alt}
          width={1040}
          height={520}
          className={imageClassName}
        />
      </div>
      <div className={controlsClassName}>
        <button
          type="button"
          aria-label="Previous image"
          onClick={showPreviousImage}
          className={previousButtonClassName}
        >
          <ArrowLeft className={iconClassName} />
        </button>
        <button
          type="button"
          aria-label="Next image"
          onClick={showNextImage}
          className={nextButtonClassName}
        >
          <ArrowRight className={iconClassName} />
        </button>
      </div>
      {showDots ? (
        <div className="mt-8 flex justify-center gap-1.5">
          {images.map((image, index) => (
            <span
              key={image.src}
              aria-hidden="true"
              className={
                index === activeIndex
                  ? "h-3 w-10 rounded-full bg-primary-sky-blue"
                  : "size-3 rounded-full bg-white/82"
              }
            />
          ))}
        </div>
      ) : null}
    </article>
  );
}
