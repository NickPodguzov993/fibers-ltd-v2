import { titleFont } from "@/lib/fonts";
import clsx from "clsx";

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
          "flex-1 bg-white border-violet aspect-video rounded-md",
          titleFont.className
        )}
      />
      <div className="flex-1 p-4 py-6 flex flex-col justify-center gap-4">
        <h3 className="text-[24px] font-bold text-dark">{title}</h3>
        <div className="flex flex-col gap-2 leading-none text-dark">
          <span>Daily Volume: {volume}</span>
          <span>Min Bid: {minBid}</span>
        </div>
      </div>
    </div>
  );
}
