import clsx from "clsx";
import { PropsWithChildren } from "react";
import { PropsWithLanguage, getDictionary } from "@/lib/i18n";
import { titleFont } from "@/lib/fonts";
import { PoliciesNavigation } from "@/components/policies";
import {PoliciesUser} from "@/components/PoliciesUser";

export default async function PoliciesLayout({
  children,
  params: { lang },
}: PropsWithChildren & PropsWithLanguage) {
  const dict = await getDictionary(lang, "policies");

  return (
    <PoliciesUser dict={dict} child={children}/>
  );
}
