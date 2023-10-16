import clsx from "clsx";
import { PropsWithChildren } from "react";
import { PropsWithLanguage, getDictionary } from "@/lib/i18n";
import { titleFont } from "@/lib/fonts";
import { PoliciesNavigation } from "@/components/policies";

export default async function PoliciesLayout({
  children,
  params: { lang },
}: PropsWithChildren & PropsWithLanguage) {
  const dict = await getDictionary(lang, "policies");

  return (
    <div className="relative container flex gap-8 lg:gap-16">
      <div className="fixed inset-x-2 top-24 lg:inset-x-auto lg:top-auto lg:right-10 lg:flex-1 flex flex-col gap-4">
        <h2
          className={clsx(
            "hidden md:inline lg:text-[32px] font-bold text-dark",
            titleFont.className
          )}
        >
          {dict.navigation}
        </h2>
        <PoliciesNavigation docs={dict.docs} />
      </div>
      <div className="pt-12 flex flex-col lg:w-[800px] flex-shrink-0 gap-8 lg:gap-16">
        <h2
          className={clsx(
            "text-[32px] lg:text-[64px] font-bold text-dark",
            titleFont.className
          )}
        >
          {dict.title}
        </h2>
        {children}
      </div>
    </div>
  );
}
