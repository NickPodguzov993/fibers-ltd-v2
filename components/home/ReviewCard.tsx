import clsx from "clsx";

type ReviewCardProps = {
  className?: string;
  comment: string;
  image: string;
  name: string;
  position: string;
  photo: string;
};

export function ReviewCard({
  className,
  image,
  comment,
  name,
  position,
  photo,
}: ReviewCardProps) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-4 p-4 border border-primary rounded",
        className
      )}
    >
      <div className="w-full aspect-video bg-filler rounded-sm" />
      <p className="leading-paragraph text-dark">{comment}</p>
      <div className="flex gap-4">
        <div className="flex-shrink-0 w-16 h-16 bg-filler rounded-sm" />
        <div className="flex flex-col gap-2 justify-center text-dark leading-none">
          <span className="font-bold">{name}</span>
          <span>{position}</span>
        </div>
      </div>
    </div>
  );
}
