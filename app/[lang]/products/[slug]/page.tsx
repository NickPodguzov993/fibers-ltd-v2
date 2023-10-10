import { notFound } from "next/navigation";
import { PropsWithLanguage, getDictionary } from "@/lib/i18n";

export async function generateStaticParams({
  params: { lang },
}: PropsWithLanguage) {
  const dict = await getDictionary(lang);
  //   return dict.policies.docs.map((doc) => ({ policy: doc.slug }));
  return [{ slug: "test" }];
}

type ProductProps = PropsWithLanguage & {
  params: { slug: string };
};

export default async function Policy({ params: { lang, slug } }: ProductProps) {
  //   const dict = await getDictionary(lang);
  //   const policyDict = dict.policies.docs.find((doc) => doc.slug === policy)!;

  if (slug !== "test") {
    notFound();
  }

  return (
    <div className="container pt-10 lg:pt-0 flex flex-col gap-20 lg:gap-40">
      Product page ({slug})
    </div>
  );
}
