"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "./icons";

type LandingVideoItem = {
  src: string;
  poster: string;
  playLabel: string;
};

type LandingVideoCarouselProps = {
  videos: readonly LandingVideoItem[];
  frameClassName?: string;
  videoClassName: string;
  controlsClassName?: string;
  previousButtonClassName?: string;
  nextButtonClassName?: string;
};

export function LandingVideoCarousel({
  videos,
  frameClassName = "rounded-[6px] bg-primary-navy-blue md:rounded-[20px]",
  videoClassName,
  controlsClassName = "mt-4 flex justify-center gap-2 md:my-5 md:gap-6",
  previousButtonClassName = "flex size-8 items-center justify-center rounded-full border border-white/18 text-white/72 transition-colors hover:border-white hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:size-16 md:border-white/80",
  nextButtonClassName = "flex size-8 items-center justify-center rounded-full border border-white/18 text-white/72 transition-colors hover:border-white hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:size-16 md:border-white/80",
}: LandingVideoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const showVideo = (nextIndex: number) => {
    videoRefs.current[activeIndex]?.pause();
    setActiveIndex(nextIndex);
  };

  const showPreviousVideo = () => {
    showVideo((activeIndex - 1 + videos.length) % videos.length);
  };

  const showNextVideo = () => {
    showVideo((activeIndex + 1) % videos.length);
  };

  return (
    <div>
      <div className={`relative overflow-hidden ${frameClassName}`}>
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {videos.map((video, index) => (
            <div key={video.src} className="min-w-full">
              <video
                ref={(node) => {
                  videoRefs.current[index] = node;
                }}
                controls
                playsInline
                preload="metadata"
                src={video.src}
                poster={video.poster}
                aria-label={video.playLabel}
                className={videoClassName}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={controlsClassName}>
        <button
          type="button"
          aria-label="Previous video"
          onClick={showPreviousVideo}
          className={previousButtonClassName}
        >
          <ArrowLeft className="size-4 md:size-8" />
        </button>
        <button
          type="button"
          aria-label="Next video"
          onClick={showNextVideo}
          className={nextButtonClassName}
        >
          <ArrowRight className="size-4 md:size-8" />
        </button>
      </div>
    </div>
  );
}
