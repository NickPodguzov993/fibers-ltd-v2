import clsx from "clsx";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PropsWithLanguage, getDictionary } from "@/lib/i18n";
import { titleFont } from "@/lib/fonts";
import { PrimaryButton } from "@/components/shared/buttons";
import Image from "next/image";

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
    <div className="container pt-10 lg:pt-0 flex flex-col lg:flex-row gap-20 lg:gap-16">
      <div className="flex flex-col gap-8 lg:gap-12 max-w-[800px]">
        <h2
          className={clsx(
            "text-[32px] lg:text-[64px] font-bold text-dark",
            titleFont.className
          )}
        >
          {vacancy.title}
        </h2>
        {vacancy.blocks.map(({ title, content }, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            <h3 className="text-[20px] font-bold text-dark">{title}</h3>
            <ul className="lg:text-[18px] text-dark leading-paragraph list-disc pl-6">
              {content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col gap-4">
          <PrimaryButton className="lg:w-fit lg:px-8 lg:py-6">
            Send CV
          </PrimaryButton>
          <div className="flex gap-2.5 items-center p-4 bg-light-violet rounded-[16px]">
            <div>img</div>
            <p className="font-bold leading-paragraph text-black">
              We will get in touch with you within the next 3-4 business days
            </p>
          </div>
        </div>
      </div>
      <div className="lg:fixed lg:w-[496px] flex-1 lg:right-10 h-fit flex flex-col rounded bg-light-violet">
        <div className="hidden lg:flex flex-col">
          <h2
            className={clsx(
              "p-8 text-[24px] font-bold text-dark",
              titleFont.className
            )}
          >
            Other vacancies
          </h2>
          <div className="flex flex-col px-2">
            {vacancies
              .filter((v) => v.slug !== slug)
              .map(({ title, slug }) => (
                <Link
                  key={title}
                  href={`/${lang}/vacancies/${slug}`}
                  className="group flex gap-4 justify-between items-center px-8 py-4 text-[18px] font-bold leading-paragraph text-dark rounded-xs transition-all border-2 border-[transparent] duration-300 hover:bg-white hover:border-violet hover:shadow-header active:bg-white active:border-violet active:shadow-header"
                >
                  <h3>{title}</h3>
                  <Image
                    src="/icons/open-in-new.svg"
                    alt=""
                    className="opacity-0 group-hover:opacity-100 font-normal text-sm transition-opacity duration-300"
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
          </div>
        </div>
        <div className="p-4 flex flex-col gap-4 text-center">
          <p className="lg:text-[18px] font-bold leading-paragraph text-dark">
            Did we miss something? Write to us
          </p>
          <PrimaryButton>Contact us</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
