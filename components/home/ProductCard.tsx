import clsx from "clsx";
import Image from "next/image";
import { titleFont } from "@/lib/fonts";

type ProductCardProps = {
  className?: string;
  title: string;
  volume: string;
  minBid: string;
  image: string;
};

export function ProductCard({
  className,
  title,
  image,
  volume,
  minBid,
  daily,
  bid,
}: ProductCardProps) {
  return (
    <div
      className={clsx(
        "flex flex-col lg:flex-row p-2 lg:p-4 bg-light-violet rounded lg:rounded-md",
        className
      )}
    >
      <div
        className={clsx(
          "flex items-center justify-center bg-white border-violet rounded-md h-[200px]",
          titleFont.className
        )}
      >
        <Image src={image} alt={title} width={290} height={180} unoptimized />
      </div>
      <div className="flex-1 p-4 py-6 flex flex-col justify-center gap-4">
        <h3 className="text-[24px] font-bold text-dark">{title}</h3>
        <div className="flex flex-col gap-2 leading-none text-dark">
          <span>{daily}:  {volume}</span>
          <span>{bid}:  {minBid}</span>
        </div>
      </div>
    </div>
  );
}
