import { PropsWithChildren } from "react";
import { Locale, getDictionary } from "@/lib/i18n";
import { Header } from "./Header";
import { Footer } from "./Footer";

type LayoutProps = PropsWithChildren & {
  lang: Locale;
};

export async function Layout({ lang, children }: LayoutProps) {
  const dict = await getDictionary(lang);
  return (
    <div className="pt-[120px] lg:pt-40">
      <Header {...dict.layout.header} />
      {children}
      <Footer {...dict.layout.footer} />
    </div>
  );
}
