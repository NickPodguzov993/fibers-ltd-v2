import clsx from "clsx";
import { titleFont } from "@/lib/fonts";
import { LinkButton, PrimaryButton } from "../shared/buttons";
import Image from "next/image";
import styles from './Hero.module.scss'

type HeroProps = {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  about: string;
  metrics: { title: string; value: string }[];
};

export function Hero({
  title,
  subtitle,
  description,
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
            <PrimaryButton className="lg:w-[240px] lg:px-8 lg:py-6 lg:text-[20px] bg-accent text-white hover:!bg-accent-hover active:!bg-accent-active">
              {cta}
            </PrimaryButton>
            <LinkButton
              className="lg:w-[240px] lg:px-8 lg:py-6 lg:text-[20px] border-2 text-center !text-accent border-accent hover:bg-accent/10 active:bg-accent/20 rounded-sm"
              href="#"
            >
              {about}
            </LinkButton>
          </div>
        </div>
        <div className="relative self-center lg:ml-auto z-0">
          <Image
            className={styles.divName}
            src="/images/hamster.png"
            alt=""
            width={400}
            height={480}
            style={{ width: "auto" }}
          />
          <Image className={styles.ring1}
            src="/images/hamster-ring-r.png"
            alt=""
            width={380}
            height={380}
          />
          <Image
              className={styles.ring2}
            src="/images/hamster-ring-l.png"
            alt=""
            width={280}
            height={280}
          />
        </div>
      </div>
      <div className="-mt-24 flex-shrink-0 lg:mt-auto p-3 lg:p-8 grid grid-cols-2 lg:flex gap-2 bg-violet rounded z-10">
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
