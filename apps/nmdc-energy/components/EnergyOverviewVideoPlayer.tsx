"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "./icons";

type EnergyOverviewVideo = {
  title: string;
  src: string;
  type: string;
  poster: string;
  playLabel: string;
};

type EnergyOverviewVideoPlayerProps = {
  videos: EnergyOverviewVideo[];
  frameClassName?: string;
  videoClassName?: string;
  controlsClassName?: string;
  label?: string;
  labelClassName?: string;
};

export function EnergyOverviewVideoPlayer({
  videos,
  frameClassName = "rounded-[18px] bg-energy-deep-navy md:rounded-[22px]",
  videoClassName = "h-[571px] w-full bg-energy-deep-navy object-cover object-[52%_50%] md:h-[609px]",
  controlsClassName = "mt-9 flex justify-center gap-6 md:mt-8",
  label,
  labelClassName = "absolute left-4 top-4 z-10 rounded-[8px] bg-energy-green px-7 py-4 text-[20px] font-bold leading-6 text-white md:left-6 md:top-6 md:min-w-[214px] md:text-center md:text-[24px] md:leading-8",
}: EnergyOverviewVideoPlayerProps) {
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
        {label ? <div className={labelClassName}>{label}</div> : null}
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
          className="flex size-[48px] items-center justify-center rounded-full border border-[#c5d0dc] text-[#8ca0b5] transition-colors hover:border-energy-green hover:text-energy-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-energy-green"
        >
          <ArrowLeft className="size-6" />
        </button>
        <button
          type="button"
          aria-label="Next video"
          onClick={showNextVideo}
          className="flex size-[48px] items-center justify-center rounded-full border border-[#c5d0dc] text-energy-green transition-colors hover:border-energy-green hover:text-energy-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-energy-green"
        >
          <ArrowRight className="size-6" />
        </button>
      </div>
    </div>
  );
}
