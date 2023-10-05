"use client";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useKeenSlider } from "keen-slider/react";

type DirectionsProps = {
  title: string;
  description: string;
  directions: { title: string; image: string }[];
};

export function Directions({
  title,
  description,
  directions,
}: DirectionsProps) {
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const [domReady, setDomReady] = useState(false);
  const [sliderRef] = useKeenSlider({
    loop: true,
    initial: ~~(directions.length / 2),
    slides: {
      perView: 1.7,
      spacing: 16,
      origin: "center",
    },
  });

  useEffect(() => {
    setDomReady(true);
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col items-center ">
        <h2 className="text-5xl lg:text-8xl font-bold -tracking-title text-dark">
          {title}
        </h2>
        <p className="text-xl font-bold text-dark">{description}</p>
      </div>
      {isMobile && domReady ? (
        <div ref={sliderRef} className="keen-slider !overflow-visible">
          {directions.map(({ title, image }, idx) => (
            <div
              key={idx}
              className="keen-slider__slide flex flex-col gap-2 items-center"
            >
              <div className="h-20 w-20 rounded-sm bg-filler" />
              <h3 className="text-xl font-bold text-dark whitespace-nowrap">
                {title}
              </h3>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex gap-20 justify-center">
          {directions.map(({ title, image }, idx) => (
            <div key={idx} className="flex flex-col gap-2 items-center">
              <div className="h-20 w-20 rounded-sm bg-filler" />
              <h3 className="text-xl font-bold text-dark">{title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
