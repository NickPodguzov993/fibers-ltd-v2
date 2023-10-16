import { notFound } from "next/navigation";
import { PropsWithLanguage, getDictionary } from "@/lib/i18n";
import clsx from "clsx";
import { titleFont } from "@/lib/fonts";

export async function generateStaticParams({
  params: { lang },
}: PropsWithLanguage) {
  const dict = await getDictionary(lang, "policies");
  return dict.docs.map((doc) => ({ policy: doc.slug }));
}

type PolicyProps = PropsWithLanguage & {
  params: { policy: string };
};

export default async function Policy({
  params: { lang, policy },
}: PolicyProps) {
  const dict = await getDictionary(lang, "policies");
  const policyDict = dict.docs.find((doc) => doc.slug === policy);
  if (!policyDict) {
    notFound();
  }
  const { title, blocks } = policyDict;

  function renderContent(content: string | (string | string[])[]) {
    const textStyles =
      "lg:text-[18px] leading-paragraph text-dark whitespace-pre-wrap";
    if (typeof content === "string") {
      return <p className={textStyles}>{content}</p>;
    }

    return content?.map((content, idx) =>
      content instanceof Array ? (
        <ul key={idx} className={clsx("list-disc list-inside", textStyles)}>
          {content.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      ) : (
        <p key={idx} className={textStyles}>
          {content}
        </p>
      )
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <h3
        className={clsx(
          "text-[24px] lg:text-[32px] font-bold text-dark",
          titleFont.className
        )}
      >
        {title}
      </h3>
      {blocks.map(({ title, content }, idx) => (
        <div key={idx} className="flex flex-col gap-4">
          {title && (
            <h4
              className={clsx(
                "text-[20px] lg:text-[24px] font-bold text-dark",
                titleFont.className
              )}
            >
              {title}
            </h4>
          )}
          <div>{renderContent(content)}</div>
        </div>
      ))}
    </div>
  );
}
