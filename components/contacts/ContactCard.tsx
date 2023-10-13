import clsx from "clsx";
import { titleFont } from "@/lib/fonts";

type ContactCardProps = {
  className?: string;
  title: string;
  value: string;
  cta?: string;
};

export function ContactCard({
  title,
  value,
  cta,
  className,
}: ContactCardProps) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-2 px-2 py-4 items-center rounded-sm lg:p-8",
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
