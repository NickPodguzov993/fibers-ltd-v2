import { PropsWithChildren } from "react";
import { Locale, getDictionary } from "@/lib/i18n";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileNav } from "./MobileNav";

type LayoutProps = PropsWithChildren & {
  lang: Locale;
};

export async function Layout({ lang, children }: LayoutProps) {
  const dict = await getDictionary(lang);
  return (
    <div className="pt-[120px] lg:pt-40 overflow-hidden">
      <Header {...dict.layout.header} />
      <MobileNav buttons={dict.layout.mobileNav} />
      {children}
      <Footer {...dict.layout.footer} />
    </div>
  );
}
