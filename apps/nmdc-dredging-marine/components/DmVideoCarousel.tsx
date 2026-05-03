"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "./icons";

type DmVideoItem = {
  readonly src: string;
  readonly type?: string;
  readonly poster: string;
  readonly playLabel: string;
};

type DmVideoCarouselProps = {
  readonly videos: readonly DmVideoItem[];
};

export function DmVideoCarousel({ videos }: DmVideoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  if (videos.length === 0) {
    return null;
  }

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
      <div className="relative overflow-hidden rounded-[18px] bg-dm-navy shadow-[0_30px_70px_rgba(0,0,0,0.32)] md:rounded-[22px]">
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
                poster={video.poster}
                aria-label={video.playLabel}
                className="h-[245px] w-full bg-dm-navy object-cover object-[50%_43%] md:h-[560px]"
              >
                <source src={video.src} type={video.type ?? "video/mp4"} />
              </video>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-7 md:mt-[72px] md:gap-6">
        <button
          type="button"
          aria-label="Previous video"
          onClick={showPreviousVideo}
          className="grid size-[58px] place-items-center rounded-full border border-dm-cyan text-dm-cyan transition-colors hover:bg-dm-cyan hover:text-dm-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dm-cyan md:size-[64px]"
        >
          <ArrowLeft className="size-7 md:size-6" />
        </button>
        <button
          type="button"
          aria-label="Next video"
          onClick={showNextVideo}
          className="grid size-[58px] place-items-center rounded-full border border-dm-cyan text-dm-cyan transition-colors hover:bg-dm-cyan hover:text-dm-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dm-cyan md:size-[64px]"
        >
          <ArrowRight className="size-7 md:size-6" />
        </button>
      </div>
    </div>
  );
}
