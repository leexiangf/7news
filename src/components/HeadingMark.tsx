type HeadingMarkProps = {
  /** section = 大目录；topic = 小目录；rail = 侧栏标题 */
  variant?: "section" | "topic" | "rail";
  className?: string;
};

/** Pure CSS geometric accent before headings (decorative only). */
export function HeadingMark({
  variant = "section",
  className = "",
}: HeadingMarkProps) {
  return (
    <span
      className={`heading-mark heading-mark--${variant} ${className}`.trim()}
      aria-hidden="true"
    />
  );
}
