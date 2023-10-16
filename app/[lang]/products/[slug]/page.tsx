import { notFound } from "next/navigation";
import { PropsWithLanguage, getDictionary } from "@/lib/i18n";

export async function generateStaticParams({
  params: { lang },
}: PropsWithLanguage) {
  const dict = await getDictionary(lang, "products");
  return dict.map(({ slug }) => ({ slug }));
}

type ProductProps = PropsWithLanguage & {
  params: { slug: string };
};

export default async function Product({
  params: { lang, slug },
}: ProductProps) {
  const dict = await getDictionary(lang, "products");
  const productDict = dict.find((product) => product.slug === slug);

  if (!productDict) {
    notFound();
  }

  return (
    <div className="container pt-10 lg:pt-0 flex flex-col gap-20 lg:gap-40">
      Product page ({slug})
    </div>
  );
}
