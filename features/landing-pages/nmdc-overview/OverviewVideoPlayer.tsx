type OverviewVideoPlayerProps = {
  poster?: string;
  sources: Array<{
    src: string;
    type: string;
  }>;
};

export function OverviewVideoPlayer({
  poster,
  sources,
}: OverviewVideoPlayerProps) {
  return (
    <div className="relative mx-auto w-full max-w-[1240px] overflow-hidden rounded-[6px] bg-primary-navy-blue">
      <video
        className="aspect-[2.22/1] w-full bg-primary-navy-blue object-cover"
        controls
        playsInline
        preload="metadata"
        poster={poster}
      >
        {sources.map((source) => (
          <source key={source.src} src={source.src} type={source.type} />
        ))}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
