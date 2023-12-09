import clsx from "clsx";
import Image from "next/image";

import { PropsWithLanguage, getDictionary } from "@/lib/i18n";
import { titleFont } from "@/lib/fonts";
import { VacancyCard } from "@/components/vacancies";
import {VacanciesUser} from "@/components/VacanciesUser";

export default async function Vacancies({
  params: { lang },
}: PropsWithLanguage) {
  const { email } = await getDictionary(lang, "layout");
  const { list, vacancies } = await getDictionary(lang, "vacancies");

  return (
   <>
     <VacanciesUser email={email} list={list} vacancies={vacancies} />
   </>
  );
}
