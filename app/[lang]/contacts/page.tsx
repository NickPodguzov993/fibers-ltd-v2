import { PropsWithLanguage } from "@/lib/i18n";
import clsx from "clsx";

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
  { title: "Company number:", value: "1205540" },
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
          <h2 className="text-[32px] lg:text-[64px] font-intern font-bold text-dark">
            Contacts
          </h2>
        </div>
        <p className="leading-paragraph text-dark text-center">description</p>
      </div>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        {cards.map(({ link, ...rest }, idx) =>
          link ? (
            <a className={clsx(!idx && "lg:col-span-2")} key={idx} href={link}>
              <Card className={getColor(idx)} {...rest} />
            </a>
          ) : (
            <Card
              className={clsx(!idx && "lg:col-span-2", getColor(idx))}
              key={idx}
              {...rest}
            />
          )
        )}
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
      <span className="text-lg lg:text-[32px] leading-paragraph font-inter font-bold text-accent lg:pb-2 lg:leading-none">
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
