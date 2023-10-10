import { PropsWithChildren } from "react";
import { Locale, getDictionary } from "@/lib/i18n";
import { Header } from "./Header";
import { Footer } from "./Footer";

type LayoutProps = PropsWithChildren & {
  lang: Locale;
};

export async function Layout({ lang, children }: LayoutProps) {
  const dict = await getDictionary(lang, "layout");
  return (
    <div className="pt-[120px] lg:pt-40 overflow-hidden">
      <Header {...dict.header} />
      {children}
      <Footer {...dict.footer} />
    </div>
  );
}
