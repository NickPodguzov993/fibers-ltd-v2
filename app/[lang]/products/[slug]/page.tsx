import clsx from "clsx";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PropsWithLanguage, getDictionary } from "@/lib/i18n";
import { titleFont } from "@/lib/fonts";
import { PrimaryButton } from "@/components/shared/buttons";
import { OtherFormats } from "@/components/products";

export async function generateStaticParams({
  params: { lang },
}: PropsWithLanguage) {
  const dict = await getDictionary(lang, "products");
  return dict.map(({ slug }) => ({ slug }));
}

type ProductProps = PropsWithLanguage & {
  params: { slug: string };
};

export default async function Product({
  params: { lang, slug },
}: ProductProps) {
  const dict = await getDictionary(lang, "products");
  const product = dict.find((product) => product.slug === slug);
  const titleFormats = await getDictionary(lang, "product")
  const findName = titleFormats.containerTitle
  if (!product) {
    notFound();
  }

  return (
    <div className="container pt-10 lg:pt-0 flex flex-col gap-20 lg:gap-40">
      <div className="px-2 flex flex-col gap-8 lg:gap-16 items-center">
        <div className="max-w-[800px] flex flex-col gap-4 text-center">
          <h2
            className={clsx(
              "text-[32px] lg:text-[64px] font-bold text-dark",
              titleFont.className
            )}
          >
            {product.title}
          </h2>
          <div className="flex flex-col gap-2">
            <p
              className={clsx(
                "text-[18px] lg:text-[24px] leading-paragraph lg:leading-none font-bold text-accent",
                titleFont.className
              )}
            >
              {product.detail.cta}
            </p>
            <p className="lg:text-[18px] lg:leading-paragraph text-dark">
              {product.detail.lead}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:gap-16 w-full">
          <div className="flex flex-col lg:flex-row p-2 lg:p-4 bg-light-violet rounded lg:rounded-xl">
            <div
              className={clsx(
                "w-full flex-1 flex items-center justify-center bg-white border-1 lg:border-2 border-violet rounded lg:rounded-lg",
                titleFont.className
              )}
            >
              <Image
                className="h-[240px] w-auto lg:h-[320px] object-contain"
                src={product.image}
                alt={product.title}
                width={320}
                height={320}
                unoptimized
              />
            </div>
            <div className="flex-1 px-2 py-4 lg:p-8 flex flex-col justify-center gap-4 lg:gap-8">
              <h3
                className={clsx(
                  "text-[24px] lg:text-[32px] font-bold text-dark",
                  titleFont.className
                )}
              >
                {product.detail.card.title}
              </h3>
              <p className="leading-paragraph text-dark">
                {product.detail.card.description}
              </p>
              <PrimaryButton className="lg:w-fit lg:py-6 lg:px-8">
                {product.detail.card.cta}
              </PrimaryButton>
            </div>
          </div>
          <div className="p-3 lg:p-8 grid grid-cols-1 lg:grid-cols-4 gap-2 rounded lg:rounded-md bg-light-violet">
            {product.detail.stats.map(({ title, value }) => (
              <div
                key={title}
                className="flex flex-col gap-0.5 lg:gap-1 p-3 lg:px-8 lg:py-4 h-fit rounded lg:rounded-md bg-white border-2 border-violet text-center"
              >
                <h4 className="text-[12px] lg:text-[16px] font-bold text-dark">
                  {title}
                </h4>
                <p
                  className={clsx(
                    "text-[18px] lg:text-[32px] text-accent font-bold leading-paragraph",
                    titleFont.className
                  )}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <OtherFormats titleFormats={ findName} slug={slug} products={dict} />
    </div>
  );
}
