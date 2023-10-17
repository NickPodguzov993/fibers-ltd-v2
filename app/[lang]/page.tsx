import { PropsWithLanguage, getDictionary } from "@/lib/i18n";
import {
  Clients,
  Directions,
  Hero,
  Products,
  Reviews,
  Values,
} from "@/components/home";

export default async function Home({ params: { lang } }: PropsWithLanguage) {
  const dict = await getDictionary(lang, "home");
  const products = await getDictionary(lang, "products");

  return (
    <div className="container pt-10 lg:pt-0 flex flex-col gap-20 lg:gap-40">
      <Hero {...dict.hero} />
      <Products
        {...dict.products}
        products={products.map(({ slug, short }) => ({ slug, ...short }))}
      />
      <Values {...dict.values} />
      <Reviews {...dict.reviews} />
      <Directions {...dict.directions} />
      <Clients {...dict.clients} />
    </div>
  );
}