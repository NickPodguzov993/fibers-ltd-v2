import clsx from "clsx";

type ValuesProps = {
  title: string;
  values: { title: string; image: string; description: string }[];
};

export function Values({ title, values }: ValuesProps) {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-5xl lg:text-8xl font-bold lg:-tracking-title text-dark">
        {title}
      </h2>
      {values.map(({ title, description, image }, idx) => (
        <div
          key={title}
          className="flex flex-col lg:flex-row border border-primary rounded overflow-hidden"
        >
          <div
            className={clsx(
              "p-8 flex flex-col gap-4 order-1 lg:w-1/2",
              idx % 2 ? "order-2" : "order-1"
            )}
          >
            <h3 className="text-[32px] lg:text-5xl font-bold text-dark">
              {title}
            </h3>
            <p className="leading-paragraph text-dark">{description}</p>
          </div>
          <div
            className={clsx(
              "bg-filler rounded aspect-[2/1]  lg:w-1/2 lg:aspect-[5/2]",
              idx % 2 ? "order-1" : "order-2"
            )}
          />
        </div>
      ))}
    </div>
  );
}
