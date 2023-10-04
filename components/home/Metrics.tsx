type MetricsProps = {
  data: { title: string; value: string }[];
};

export function Metrics({ data }: MetricsProps) {
  return (
    <div className="p-4 border border-primary rounded overflow-hidden overflow-x-auto lg:overflow-x-hidden">
      <ul className="flex">
        {data.map(({ title, value }) => (
          <li key={title} className="flex-1 flex flex-col min-w-[256px]">
            <span className="text-xl leading-none font-bold">{title}</span>
            <span className="text-5xl font-bold -tracking-title">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
