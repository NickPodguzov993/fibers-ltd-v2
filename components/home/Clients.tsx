"use client";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";

import { titleFont } from "@/lib/fonts";
import { AutoPlayPlugin } from "@/lib/slider";

type ClientsProps = {
  title: string;
  clients: string[];
};

export function Clients({ title, clients }: ClientsProps) {
  const [domReady, setDomReady] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderReady, setSliderReady] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 1.4,
        spacing: 8,
        origin: "center",
      },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: {
            perView: 4.5,
            spacing: 8,
          },
        },
      },
      created() {
        setSliderReady(true);
      },
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
    },
    [AutoPlayPlugin]
  );

  useEffect(() => {
    setDomReady(true);
  }, []);

  return (
    <div data-aos="fade-up"
         data-aos-delay="200"
         data-aos-duration="1000"
        className="p-4 lg:p-8 -mx-4 lg:mx-0 flex flex-col gap-6 lg:gap-10 bg-light-violet rounded overflow-hidden">
      <div className="flex gap-2 lg:gap-4 items-center">
        <Image
          className="h-8 w-auto lg:h-14"
          src="/images/emojis/magic-wand.png"
          alt=""
          width={56}
          height={56}
        />
        <h2
          className={clsx(
            "text-[32px] lg:text-[64px] font-bold text-dark",
            titleFont.className
          )}
        >
          {title}
        </h2>
      </div>
      {domReady && (
        <div className="relative flex flex-col gap-4">
          <div ref={sliderRef} className="keen-slider !overflow-visible">
            {[...clients, ...clients].map((image, idx) => (
              <div
                key={idx}
                className="keen-slider__slide p-6 lg:px-12 lg:py-8 bg-white border-2 border-violet rounded"
              >
                <div className="relative h-14 w-auto">
                  <Image
                    className="h-14 w-auto object-contain m-auto"
                    src={image}
                    alt={`partner ${idx}`}
                    width={280}
                    height={56}
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            className="absolute -left-3 lg:-left-6 top-7 lg:top-8 px-2 py-4 bg-accent text-white rounded-sm"
            onClick={() => instanceRef.current?.moveToIdx(currentSlide - 1)}
          >
            <Image
              className="fill-white rotate-180"
              src="/icons/arrow-forward.svg"
              alt=""
              width={24}
              height={24}
            />
          </button>
          <button
            className="absolute -right-3 lg:-right-6 top-7 lg:top-8 px-2 py-4 bg-accent text-white rounded-sm"
            onClick={() => instanceRef.current?.moveToIdx(currentSlide + 1)}
          >
            <Image
              className="fill-white"
              src="/icons/arrow-forward.svg"
              alt=""
              width={24}
              height={24}
            />
          </button>
          {sliderReady && (
            <div className="flex justify-center">
              {clients.map((_, idx) => {
                return (
                  <div
                    key={idx}
                    className={clsx(
                      "m-2 w-2 h-2 rounded-xs bg-accent-light transition-[width_0.3s]",
                      currentSlide % clients.length === idx && "w-8"
                    )}
                  />
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
