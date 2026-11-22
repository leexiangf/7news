import {
  publisherBrandColor,
  publisherLogoSrc,
  type Publisher,
} from "@/lib/publishers";

type PublisherLogoProps = {
  publisher: Publisher;
  size?: "sm" | "md";
};

export function PublisherLogo({ publisher, size = "sm" }: PublisherLogoProps) {
  const dim = size === "md" ? 28 : 18;

  return (
    <span
      className={`publisher-logo publisher-logo--${size}`}
      style={{ backgroundColor: publisherBrandColor(publisher.id) }}
      aria-hidden
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- local SVG marks */}
      <img
        src={publisherLogoSrc(publisher.id)}
        alt=""
        width={dim}
        height={dim}
        className="publisher-logo-img"
        loading="lazy"
        decoding="async"
      />
    </span>
  );
}
