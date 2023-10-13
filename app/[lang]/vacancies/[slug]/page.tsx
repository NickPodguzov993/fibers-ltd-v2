import { notFound } from "next/navigation";
import { PropsWithLanguage, getDictionary } from "@/lib/i18n";

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
    <div className="container pt-10 lg:pt-0 flex flex-col gap-20 lg:gap-40">
      Vacancy page ({slug})
    </div>
  );
}
