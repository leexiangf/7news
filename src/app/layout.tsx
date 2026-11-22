import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { siteConfig } from "@/config/site";
import { absoluteUrl, createMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...(siteConfig.googleSiteVerification
    ? { verification: { google: siteConfig.googleSiteVerification } }
    : {}),
  ...createMetadata({
    title: siteConfig.name,
    description: siteConfig.description,
    path: "/",
    locale: "zh",
    languages: {
      "zh-CN": absoluteUrl("/"),
      en: absoluteUrl("/en/"),
      "x-default": absoluteUrl("/"),
    },
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
