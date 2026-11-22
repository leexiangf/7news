/** Top utility links (not duplicated in the channel bar). */
export const utilityNav = [
  { href: "/about/", label: "关于", labelEn: "About" },
] as const;

/** Extra destinations shown at the end of the channel bar. */
export const channelExtraNav = [
  { href: "/flash/", label: "快讯", labelEn: "Flash" },
  { href: "/publishers/", label: "厂商", labelEn: "Publishers" },
  { href: "/columns/", label: "专栏", labelEn: "Columns" },
  { href: "/tools/", label: "工具", labelEn: "Tools" },
] as const;

/** Footer / legal links (browse destinations live in the left rail). */
export const footerNav = [
  { href: "/about/", label: "关于", labelEn: "About" },
  { href: "/update-log/", label: "更新日志", labelEn: "Updates" },
  { href: "/privacy/", label: "隐私", labelEn: "Privacy" },
  { href: "/terms/", label: "条款", labelEn: "Terms" },
  { href: "/open-source/", label: "开源", labelEn: "Open source" },
] as const;
