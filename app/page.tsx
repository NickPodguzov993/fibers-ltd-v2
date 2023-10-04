import content from "@/content/home.json";
import { Hero, Metrics } from "@/components/home";

export default function Home() {
  return (
    <div className="container pt-10 lg:pt-0 flex flex-col gap-20 lg:gap-40">
      <Hero {...content.hero} />
      <Metrics data={content.metrics} />
      <div className="h-[2000px] bg-accent/10">Hello world</div>
    </div>
  );
}
