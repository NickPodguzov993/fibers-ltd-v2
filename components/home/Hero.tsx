import clsx from "clsx";
import { titleFont } from "@/lib/fonts";
import { LinkButton, PrimaryButton } from "../shared/buttons";

type HeroProps = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
  about: string;
  metrics: { title: string; value: string }[];
};

export function Hero({
  title,
  subtitle,
  description,
  image,
  cta,
  about,
  metrics,
}: HeroProps) {
  return (
    <div className="relative -mt-[120px] lg:-mt-40 pt-[120px] lg:pt-40 pb-2 lg:pb-8 flex flex-col gap-8">
      <div className="absolute inset-x-0 top-0 h-full w-screen left-1/2 -translate-x-1/2 bg-light-violet rounded-b-md -z-50" />
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="relative flex flex-col gap-6 lg:gap-8 items-center justify-center lg:items-start">
          <div className="flex flex-col gap-4 max-w-[825px] text-center lg:text-start">
            <h1
              className={clsx(
                "inline-flex flex-col text-[32px] lg:text-[64px] font-bold leading-none text-dark",
                titleFont.className
              )}
            >
              <span className="text-accent leading-[1]">{title}</span>
              <span>{subtitle}</span>
            </h1>
            <p className="lg:text-[18px] leading-paragraph text-dark">
              {description}
            </p>
          </div>
          <div className="flex gap-2 justify-center lg:justify-start">
            <PrimaryButton className="lg:w-[240px] lg:px-8 lg:py-6 lg:text-[20px] bg-accent text-white hover:bg-accent/90 active:bg-accent/90">
              {cta}
            </PrimaryButton>
            <LinkButton
              className="lg:w-[240px] lg:px-8 lg:py-6 lg:text-[20px] border-2 text-center !text-accent border-accent hover:bg-accent/10 active:bg-accent/10 rounded-sm"
              href="#"
            >
              {about}
            </LinkButton>
          </div>
        </div>
        <div className="self-center lg:ml-auto w-[260px] h-[320px] lg:w-[400px] lg:h-[480px] bg-filler"></div>
      </div>
      <div className="-mt-16 flex-shrink-0 lg:mt-auto p-3 lg:p-8 grid grid-cols-2 lg:flex gap-2 bg-violet rounded z-10">
        {metrics.map(({ title, value }, idx) => (
          <div
            key={idx}
            className="lg:flex-1 p-3 lg:px-8 lg:py-4 flex flex-col gap-0.5 lg:gap-1 items-center bg-white rounded"
          >
            <h3 className="text-[12px] lg:text-[16px] font-bold text-dark">
              {title}
            </h3>
            <span className="text-[18px] lg:text-[32px] font-bold leading-paragraph lg:leading-none text-accent">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
