import { PropsWithLanguage } from "@/lib/i18n";

export default async function Vacancies({
  params: { lang },
}: PropsWithLanguage) {
  // const dict = await getDictionary(lang);

  return (
    <div className="container pt-10 lg:pt-0 flex flex-col lg:flex-row gap-8 lg:gap-16">
      <div className="lg:w-[800px] flex-shrink-0">
        <h2 className="text-[32px] lg:text-[64px] font-bold text-dark">
          Join our team
        </h2>
      </div>
      <div className="flex-1">contact us</div>
    </div>
  );
}
