"use client";

import { useRef, useState } from "react";

type OverviewVideoPlayerProps = {
  poster: string;
  sources: Array<{
    src: string;
    type: string;
  }>;
};

export function OverviewVideoPlayer({
  poster,
  sources,
}: OverviewVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    void videoRef.current?.play();
  };

  return (
    <div className="relative mx-auto w-full max-w-[1040px] overflow-hidden rounded-[6px] bg-primary-navy-blue">
      <video
        ref={videoRef}
        className="aspect-[2.22/1] w-full bg-primary-navy-blue object-cover"
        controls={isPlaying}
        playsInline
        preload="metadata"
        poster={poster}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        {sources.map((source) => (
          <source key={source.src} src={source.src} type={source.type} />
        ))}
        Your browser does not support the video tag.
      </video>

      {!isPlaying ? (
        <button
          type="button"
          aria-label="Play NMDC Group overview video"
          onClick={playVideo}
          className="absolute inset-0 flex items-center justify-center bg-black/28 transition-colors hover:bg-black/18 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-sky-blue"
        >
          <span className="flex size-[58px] items-center justify-center rounded-full bg-[rgba(7,48,59,0.58)] shadow-[0_18px_42px_-18px_rgba(0,0,0,0.8)] backdrop-blur-[8px] md:size-[62px]">
            <span
              aria-hidden="true"
              className="ml-1 h-0 w-0 border-y-[11px] border-l-[18px] border-y-transparent border-l-primary-sky-blue md:border-y-[12px] md:border-l-[19px]"
            />
          </span>
        </button>
      ) : null}
    </div>
  );
}
