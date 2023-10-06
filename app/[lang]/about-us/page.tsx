import { PropsWithLanguage } from "@/lib/i18n";

export default async function AboutUs({ params: { lang } }: PropsWithLanguage) {
  // const dict = await getDictionary(lang);

  return (
    <div className="container pt-10 lg:pt-0 flex flex-col gap-6 lg:gap-40">
      <h2 className="text-[32px] lg:text-[64px] font-bold text-dark text-center">
        About us
      </h2>
    </div>
  );
}
