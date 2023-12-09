import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { PropsWithLanguage, getDictionary } from "@/lib/i18n";
import { titleFont } from "@/lib/fonts";
import { PrimaryButton } from "@/components/shared/buttons";
import { OtherVacanciesModal } from "@/components/vacancies";
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
  const vacancy = vacancies.find((vacancy) => vacancy.slug === slug);

  if (!vacancy) {
    notFound();
  }

  return (
    <>
    <VacanciesShareUser vacancies={vacancies} vacancy={vacancy} lang={lang} slug={slug}/>
    </>
  );
}
