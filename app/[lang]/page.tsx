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
  const dict = await getDictionary(lang);

  return (
    <div className="container pt-10 lg:pt-0 flex flex-col gap-20 lg:gap-40">
      <Hero {...dict.home.hero} />
      <Products {...dict.home.products} />
      <Values {...dict.home.values} />
      <Reviews {...dict.home.reviews} />
      <Directions {...dict.home.directions} />
      <Clients {...dict.home.clients} />
    </div>
  );
}
