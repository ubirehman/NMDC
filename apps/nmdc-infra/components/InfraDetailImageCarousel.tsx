"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "./icons";

type InfraDetailGalleryImage = {
  src: string;
  alt: string;
  objectPosition?: string;
};

type InfraDetailImageCarouselProps = {
  images: readonly InfraDetailGalleryImage[];
  frameClassName?: string;
  imageClassName?: string;
  controlsClassName?: string;
  previousButtonClassName?: string;
  nextButtonClassName?: string;
  dataAttribute?: "detail" | "gallery";
};

export function InfraDetailImageCarousel({
  images,
  frameClassName = "relative mt-[26px] h-[321px] overflow-hidden rounded-[14px] md:mt-[78px] md:h-[625px] md:rounded-[24px]",
  imageClassName = "object-cover object-[52%_50%]",
  controlsClassName = "mt-[28px] flex justify-center gap-[21px] md:mt-[72px] md:gap-6",
  previousButtonClassName = "grid size-[51px] place-items-center rounded-full border border-[#c6d2df] text-[#8ca0b8] transition-colors hover:border-infra-yellow hover:text-infra-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-infra-yellow md:size-[64px]",
  nextButtonClassName = "grid size-[51px] place-items-center rounded-full bg-white text-infra-yellow shadow-[0_8px_24px_rgba(7,28,40,0.10)] transition-colors hover:bg-infra-yellow hover:text-infra-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-infra-yellow md:size-[64px]",
  dataAttribute = "detail",
}: InfraDetailImageCarouselProps) {
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
      <div
        data-detail-image={dataAttribute === "detail" ? true : undefined}
        data-product-detail-gallery={dataAttribute === "gallery" ? true : undefined}
        className={frameClassName}
      >
        <Image
          key={activeImage.src}
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          sizes="(min-width: 768px) 1240px, 320px"
          className={imageClassName}
          style={{ objectPosition: activeImage.objectPosition }}
        />
      </div>

      <div className={controlsClassName}>
        <button
          type="button"
          aria-label="Previous product media"
          onClick={showPreviousImage}
          className={previousButtonClassName}
        >
          <ArrowLeft className="size-6 md:size-7" />
        </button>
        <button
          type="button"
          aria-label="Next product media"
          onClick={showNextImage}
          className={nextButtonClassName}
        >
          <ArrowRight className="size-6 md:size-7" />
        </button>
      </div>
    </>
  );
}
