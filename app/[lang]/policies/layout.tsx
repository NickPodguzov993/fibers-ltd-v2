import { PropsWithChildren } from "react";
import { PropsWithLanguage, getDictionary } from "@/lib/i18n";

export default async function PoliciesLayout({
  children,
  params: { lang },
}: PropsWithChildren & PropsWithLanguage) {
  // const dict = await getDictionary(lang);

  return (
    <div className="container pt-10 lg:pt-0 flex flex-col lg:flex-row-reverse gap-8 lg:gap-16">
      <div className="lg:flex-1">Policies</div>
      <div className="lg:w-[800px] flex-shrink-0">{children}</div>
    </div>
  );
}
