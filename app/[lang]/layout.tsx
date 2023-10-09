import "./globals.css";
import { PropsWithChildren } from "react";
import type { Metadata } from "next";

import { PropsWithLanguage, i18n } from "@/lib/i18n";
import { textFont } from "@/lib/fonts";
import { Layout } from "@/components/layout";

export const metadata: Metadata = {
  title: "Fibers LTD",
  description: "Make advertisements great again",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

type RootLayoutProps = PropsWithChildren & PropsWithLanguage;

export default function RootLayout({
  children,
  params: { lang },
}: RootLayoutProps) {
  return (
    <html lang={lang}>
      <body className={textFont.className}>
        <Layout lang={lang}>{children}</Layout>
      </body>
    </html>
  );
}
