type DmVideoPlayerProps = {
  src: string;
  ariaLabel: string;
  className: string;
  poster?: string;
};

export function DmVideoPlayer({
  src,
  ariaLabel,
  className,
  poster,
}: DmVideoPlayerProps) {
  return (
    <video
      controls
      playsInline
      preload="metadata"
      src={src}
      poster={poster}
      aria-label={ariaLabel}
      className={className}
    />
  );
}
