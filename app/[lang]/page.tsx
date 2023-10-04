import { PropsWithLanguage, getDictionary } from "@/lib/i18n";
import { Hero, Metrics } from "@/components/home";

export default async function Home({ params: { lang } }: PropsWithLanguage) {
  const dict = await getDictionary(lang);

  return (
    <div className="container pt-10 lg:pt-0 flex flex-col gap-20 lg:gap-40">
      <Hero {...dict.home.hero} />
      <Metrics data={dict.home.metrics} />
      <div className="h-[100rem] bg-accent/10">Hello world</div>
    </div>
  );
}
