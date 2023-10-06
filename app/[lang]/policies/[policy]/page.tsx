import { PropsWithLanguage, getDictionary } from "@/lib/i18n";

export async function generateStaticParams({
  params: { lang },
}: PropsWithLanguage) {
  const dict = await getDictionary(lang);
  return dict.policies.docs.map((doc) => ({ policy: doc.slug }));
}

type PolicyProps = PropsWithLanguage & {
  params: { policy: string };
};

export default async function Policy({
  params: { lang, policy },
}: PolicyProps) {
  const dict = await getDictionary(lang);
  const policyDict = dict.policies.docs.find((doc) => doc.slug === policy)!;

  return <div>{policyDict.title}</div>;
}
