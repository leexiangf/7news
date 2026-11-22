import Image from "next/image";

type ArticleCoverProps = {
  src?: string;
  alt?: string;
  title: string;
  /** Larger hero on article pages; compact for lists */
  size?: "hero" | "thumb";
  className?: string;
};

export function ArticleCover({
  src,
  alt,
  title,
  size = "hero",
  className = "",
}: ArticleCoverProps) {
  if (!src) return null;

  const label = alt?.trim() || title;
  const isThumb = size === "thumb";

  return (
    <figure className={className}>
      {/* 1200×630 OG ratio; object-contain keeps the full frame (no crop). */}
      <div
        className={
          isThumb
            ? "relative aspect-[1200/630] w-full overflow-hidden border border-rule bg-fog"
            : "relative aspect-[1200/630] w-full overflow-hidden border border-rule bg-fog"
        }
      >
        <Image
          src={src}
          alt={label}
          fill
          className="object-contain object-center"
          sizes={
            isThumb
              ? "(max-width: 640px) 45vw, 14rem"
              : "(max-width: 768px) 100vw, 48rem"
          }
          priority={!isThumb}
        />
      </div>
    </figure>
  );
}
