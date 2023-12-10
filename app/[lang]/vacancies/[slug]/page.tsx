import { notFound } from "next/navigation";
import { PropsWithLanguage, getDictionary } from "@/lib/i18n";
import {VacanciesShareUser} from "@/components/VacanciesShareUser";

export async function generateStaticParams({
  params: { lang },
}: PropsWithLanguage) {
  const { vacancies } = await getDictionary(lang, "vacancies");
  return vacancies.map(({ slug }) => ({ slug }));
}

type ProductProps = PropsWithLanguage & {
  params: { slug: string };
};

export default async function Vacancy({
  params: { lang, slug },
}: ProductProps) {
  const { vacancies } = await getDictionary(lang, "vacancies");
  const  vacanciesShared  = await getDictionary(lang, "product");
  const sendCV = (await vacanciesShared).sendCV
  const other = (await vacanciesShared).other
  const messages = (await vacanciesShared).messages
  const contactUs = (await vacanciesShared).contactUs
  const touchWithYou = (await vacanciesShared).touchWithYou

  const vacancy = vacancies.find((vacancy) => vacancy.slug === slug);

  if (!vacancy) {
    notFound();
  }

  return (
    <>
    <VacanciesShareUser sendCV={sendCV}
                        touchWithYou={touchWithYou}
                        other={other}
                        messages={messages}
                        contactUs={contactUs}
                        vacancies={vacancies}
                        vacancy={vacancy}
                        lang={lang}
                        slug={slug}/>
    </>
  );
}
