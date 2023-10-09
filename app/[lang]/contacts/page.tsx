import clsx from "clsx";
import { PropsWithLanguage } from "@/lib/i18n";
import { titleFont } from "@/lib/fonts";

const cards = [
  {
    title: "Email adress:",
    value: "info@fibersltd.com",
    cta: "You can write us",
    link: "mailto:info@fibersltd.com",
  },
  {
    title: "Phone number:",
    value: "+85256474293",
    cta: "You can call us",
    link: "tel:+85256474293",
  },
];

export default async function Contacts({
  params: { lang },
}: PropsWithLanguage) {
  // const dict = await getDictionary(lang);

  function getColor(idx: number) {
    return !idx ? "bg-light-violet" : "bg-light-pink";
  }
  return (
    <div className="container max-w-[800px] pt-10 lg:pt-0 flex flex-col gap-8">
      <div className="flex flex-col gap-4 items-center">
        <div className="flex gap-2">
          <div>cat</div>
          <h2
            className={clsx(
              "text-[32px] lg:text-[64px] font-bold text-dark",
              titleFont.className
            )}
          >
            Contacts
          </h2>
        </div>
        <p className="leading-paragraph text-dark text-center">
          We appreciate your interest in reaching out to us. Whether you have a
          question, feedback, or want to explore potential collaborations, we
          {"'"}re here to assist you. Our team is committed to providing
          exceptional customer service and building long-lasting relationships
          with our valued clients
        </p>
      </div>
      <div className="grid gap-y-4 grid-cols-1">
        {cards.map(({ link, ...rest }, idx) => (
          <a key={idx} href={link}>
            <Card className={getColor(idx)} {...rest} />
          </a>
        ))}
      </div>
    </div>
  );
}

type CardProps = {
  className?: string;
  title: string;
  value: string;
  cta?: string;
};

function Card({ title, value, cta, className }: CardProps) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-2 px-2 py-4 items-center rounded-sm lg:p-4",
        cta && "cursor-pointer",
        className
      )}
    >
      <h3 className="text-dark/50 lg:text-lg lg:leading-paragraph">{title}</h3>
      <span
        className={clsx(
          "text-lg lg:text-[32px] leading-paragraph font-bold text-accent lg:pb-2 lg:leading-none",
          titleFont.className
        )}
      >
        {value}
      </span>
      {cta && (
        <span className="font-bold text-dark lg:text-lg lg:leading-paragraph">
          {cta}
        </span>
      )}
    </div>
  );
}
