import clsx from "clsx";
import { titleFont } from "@/lib/fonts";

type HeroProps = {
  title: string;
  image: null;
};

export function Hero({ title }: HeroProps) {
  return (
    <div className="flex flex-col lg:flex-row">
      <h1
        className={clsx(
          "flex-1 text-5xl lg:text-8xl font-bold -tracking-title text-dark whitespace-pre-wrap",
          titleFont.className
        )}
      >
        {title}
      </h1>
      <div className="flex-1 aspect-[2/1] bg-filler"></div>
    </div>
  );
}
