import clsx from "clsx";
import Image from "next/image";

type ReviewCardProps = {
  className?: string;
  name: string;
  position: string;
  comment: string;
  photo: string;
  color?: string;
};

export function ReviewCard({
  className,
  comment,
  name,
  position,
  photo,
  color,
}: ReviewCardProps) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-8 p-4 lg:p-8 border-2 border-violet bg-white rounded",
        className
      )}
    >
      <div className="flex gap-4">
        <div
          className={clsx(
            "flex-shrink-0 flex items-end justify-center w-16 h-16 rounded-sm overflow-hidden",
            color || "bg-filler"
          )}
        >
          <Image src={photo} alt={name} width={64} height={64} unoptimized />
        </div>
        <div className="flex flex-col gap-2 justify-center text-dark leading-none">
          <span className="font-bold">{name}</span>
          <span>{position}</span>
        </div>
      </div>
      <p className="leading-paragraph text-dark">{comment}</p>
    </div>
  );
}
