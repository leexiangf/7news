import Link from "next/link";

type MoreDividerLinkProps = {
  href: string;
  label: string;
};

type MoreDividerButtonProps = {
  label: string;
  onClick: () => void;
};

/** Outlined control — navigate elsewhere for more items. */
export function MoreDividerLink({ href, label }: MoreDividerLinkProps) {
  return (
    <div className="load-more-wrap">
      <Link href={href} className="load-more-btn">
        {label}
      </Link>
    </div>
  );
}

/** Outlined control — reveal the next page of rows in place. */
export function MoreDividerButton({ label, onClick }: MoreDividerButtonProps) {
  return (
    <div className="load-more-wrap">
      <button type="button" className="load-more-btn" onClick={onClick}>
        {label}
      </button>
    </div>
  );
}
