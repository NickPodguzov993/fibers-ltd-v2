import { notFound } from "next/navigation";
import { PropsWithLanguage, getDictionary } from "@/lib/i18n";

export async function generateStaticParams({
  params: { lang },
}: PropsWithLanguage) {
  const dict = await getDictionary(lang, "policies");
  return dict.docs.map((doc) => ({ policy: doc.slug }));
}

type PolicyProps = PropsWithLanguage & {
  params: { policy: string };
};

export default async function Policy({
  params: { lang, policy },
}: PolicyProps) {
  const dict = await getDictionary(lang, "policies");
  const policyDict = dict.docs.find((doc) => doc.slug === policy);
  if (!policyDict) {
    notFound();
  }

  return <div>{policyDict.title}</div>;
}
