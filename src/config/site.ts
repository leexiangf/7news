export const siteConfig = {
  name: "7News",
  nameEn: "7News",
  tagline: "AI 实战信号 · 少噪音，快判断",
  taglineEn: "AI signals · less noise, faster picks",
  description:
    "面向工程师与产品负责人的 AI 实战资讯：少噪音，快判断今天该读哪一篇。",
  descriptionEn:
    "AI news for engineers and product leads: less noise, faster pick of what to read today.",
  url: "https://7news.aiaaii.com",
  githubUrl: "https://github.com/leexiangf/7news",
  githubRepo: "leexiangf/7news",
  /**
   * Optional: GSC URL-prefix HTML verification token (meta content=…).
   * Domain property `aiaaii.com` already covers this host; leave empty unless
   * you add a separate https://7news.aiaaii.com/ property.
   */
  googleSiteVerification: "",
  /** Default UI locale; site is bilingual zh + en. */
  locale: "zh-CN",
  locales: ["zh", "en"] as const,
} as const;
