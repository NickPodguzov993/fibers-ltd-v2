import { PropsWithChildren } from "react";
import { PropsWithLanguage, getDictionary } from "@/lib/i18n";

export default async function PoliciesLayout({
  children,
  params: { lang },
}: PropsWithChildren & PropsWithLanguage) {
  // const dict = await getDictionary(lang);

  return (
    <div className="relative container flex gap-8 lg:gap-16">
      <div className="fixed top-16 lg:top-auto lg:right-10 lg:flex-1 flex flex-col gap-4">
        <h2 className="hidden md:inline lg:text-[32px] font-intern font-bold text-dark">
          All policies
        </h2>
        <div>tabs</div>
      </div>
      <div className="lg:w-[800px] flex-shrink-0">
        <h2 className="text-[32px] lg:text-[64px] font-intern font-bold text-dark">
          Policies
        </h2>
        {children}
      </div>
    </div>
  );
}
