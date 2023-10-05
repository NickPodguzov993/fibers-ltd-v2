"use client";
import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";

import { AutoPlayPlugin } from "@/lib/slider";

type ClientsProps = {
  title: string;
  clients: { title: string; image: string }[];
};

export function Clients({ title, clients }: ClientsProps) {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 1.3,
        spacing: 16,
        origin: "center",
      },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: {
            perView: 5,
            spacing: 16,
          },
        },
      },
    },
    [AutoPlayPlugin]
  );
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-5xl lg:text-8xl font-bold -tracking-title text-dark">
        {title}
      </h2>
      {domReady && (
        <div
          ref={sliderRef}
          className="keen-slider !overflow-visible lg:!overflow-hidden"
        >
          {clients.map(({ title, image }, idx) => (
            <div
              key={title}
              className="keen-slider__slide aspect-[2/1] bg-filler/50 rounded-xs hover:bg-filler transition-colors "
              title={title}
            />
          ))}
        </div>
      )}
    </div>
  );
}
