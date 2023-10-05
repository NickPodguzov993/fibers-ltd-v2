import clsx from "clsx";

type ProductCardProps = {
  className?: string;
  idx: number; // TODO: Remove
  title: string;
  image: string;
  volume: string;
  minBid: string;
};

export function ProductCard({
  className,
  title,
  image,
  volume,
  minBid,
  idx, // TODO: Remove
}: ProductCardProps) {
  return (
    <div
      className={clsx(
        "flex flex-col p-4 border-[1.5px] border-primary rounded-lg",
        className
      )}
    >
      <div
        className={clsx(
          "w-full bg-filler rounded-md",
          idx % 2 ? "aspect-video" : "aspect-square" // TODO: remove
        )}
      />
      <div className="py-4 px-6 flex flex-col gap-4">
        <h3 className="text-[32px] leading-none font-bold text-dark">
          {title}
        </h3>
        <div className="flex flex-col gap-2 leading-none text-dark">
          <span>Daily Volume: {volume}</span>
          <span>Min Bid: {minBid}</span>
        </div>
      </div>
    </div>
  );
}
