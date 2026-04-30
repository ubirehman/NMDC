"use client";

import { useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
} from "../../../app/components/landing/icons";

type SafeenVideoItem = {
  title: string;
  src: string;
  poster: string;
  alt: string;
  playLabel: string;
};

type SafeenVideoCarouselProps = {
  videos: readonly SafeenVideoItem[];
  videoClassName: string;
};

export function SafeenVideoCarousel({
  videos,
  videoClassName,
}: SafeenVideoCarouselProps) {
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
      <div className="relative overflow-hidden rounded-[20px] bg-primary-navy-blue">
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

      <div className="mt-7 flex justify-center gap-6">
        <button
          type="button"
          aria-label="Previous video"
          onClick={showPreviousVideo}
          className="flex size-[48px] items-center justify-center rounded-full border border-content-200 text-primary-blue transition-colors hover:border-primary-sky-blue hover:text-primary-navy-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-sky-blue"
        >
          <ArrowLeft className="size-6" />
        </button>
        <button
          type="button"
          aria-label="Next video"
          onClick={showNextVideo}
          className="flex size-[48px] items-center justify-center rounded-full border border-content-200 text-primary-blue transition-colors hover:border-primary-sky-blue hover:text-primary-navy-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-sky-blue"
        >
          <ArrowRight className="size-6" />
        </button>
      </div>
    </div>
  );
}
