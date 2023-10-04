import { PropsWithChildren } from "react";
import content from "@/content/layout.json";

import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="pt-[120px] lg:pt-40">
      <Header {...content.header} />
      {children}
      <Footer {...content.footer} />
    </div>
  );
}
