"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "./icons";

type InfraVideoItem = {
  title?: string;
  src: string;
  type: string;
  playLabel: string;
};

type InfraVideoCarouselProps = {
  videos: readonly InfraVideoItem[];
  frameClassName?: string;
  videoClassName?: string;
  controlsClassName?: string;
  buttonClassName?: string;
};

export function InfraVideoCarousel({
  videos,
  frameClassName = "rounded-[12px] shadow-[0_24px_60px_rgba(0,0,0,0.22)] md:rounded-[22px]",
  videoClassName = "h-[407px] w-full bg-infra-deep-navy object-cover object-[44%_50%] md:h-[609px]",
  controlsClassName = "mt-7 flex justify-center gap-4",
  buttonClassName = "grid size-11 place-items-center rounded-full border border-infra-yellow text-infra-yellow transition-colors hover:bg-infra-yellow hover:text-infra-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-infra-yellow",
}: InfraVideoCarouselProps) {
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
      <div className={`relative overflow-hidden bg-infra-deep-navy ${frameClassName}`}>
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
          className={buttonClassName}
        >
          <ArrowLeft className="size-5" />
        </button>
        <button
          type="button"
          aria-label="Next video"
          onClick={showNextVideo}
          className={buttonClassName}
        >
          <ArrowRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
