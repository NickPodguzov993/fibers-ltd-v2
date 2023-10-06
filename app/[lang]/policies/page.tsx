import { redirect } from "next/navigation";
import { PropsWithLanguage, getDictionary } from "@/lib/i18n";

export default async function Policies({
  params: { lang },
}: PropsWithLanguage) {
  const dict = await getDictionary(lang);
  redirect(`/${lang}/policies/${dict.policies.docs[0].slug}`);
}
