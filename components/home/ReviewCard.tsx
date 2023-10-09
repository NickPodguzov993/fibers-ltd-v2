import clsx from "clsx";

type ReviewCardProps = {
  className?: string;
  comment: string;
  name: string;
  position: string;
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
            "flex-shrink-0 w-14 lg:w-16 h-14 lg:h-16 rounded-sm",
            color || "bg-filler"
          )}
        />
        <div className="flex flex-col gap-2 justify-center text-dark leading-none">
          <span className="font-bold">{name}</span>
          <span>{position}</span>
        </div>
      </div>
      <p className="leading-paragraph text-dark">{comment}</p>
    </div>
  );
}
