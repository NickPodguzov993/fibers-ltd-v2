import { PropsWithChildren } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
