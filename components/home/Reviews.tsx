"use client";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";

import { AdaptiveHeightPlugin } from "@/lib/slider";
import { ReviewCard } from "./ReviewCard";

type ReviewsProps = {
  title: string;
  reviews: {
    name: string;
    position: string;
    comment: string;
    photo: string;
  }[];
};

export function Reviews({ title, reviews }: ReviewsProps) {
  const [domReady, setDomReady] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderReady, setSliderReady] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides: {
        perView: 1.1,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: {
            perView: 3.2,
            spacing: 16,
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
    [AdaptiveHeightPlugin]
  );

  useEffect(() => {
    setDomReady(true);
  }, []);

  const colors = ["bg-pink", "bg-green", "bg-violet", "bg-green"];

  return (
    <div className="relative flex flex-col gap-6 lg:gap-10 p-6 lg:p-16 -mx-4 lg:-mx-0 bg-light-violet rounded overflow-hidden">
      <div className="flex gap-2 items-center">
        <Image
          className="h-8 w-auto lg:h-14"
          src="/images/emojis/megaphone.png"
          alt=""
          width={56}
          height={56}
        />
        <h2 className="text-[32px] lg:text-[64px] font-bold text-dark">
          {title}
        </h2>
      </div>
      {domReady && (
        <div className="flex flex-col gap-4">
          <div
            ref={sliderRef}
            className="keen-slider transition-[height_0.3s] !overflow-visible"
          >
            {reviews.map((review, idx) => (
              <ReviewCard
                key={idx}
                className="keen-slider__slide !min-h-[auto] h-fit"
                color={colors[idx % colors.length]}
                {...review}
              />
            ))}
          </div>
          <button
            className={clsx(
              "absolute left-4 top-1/2 px-2 py-4 bg-accent text-white rounded-sm transition-opacity",
              !!currentSlide ? "opacity-100" : "opacity-0"
            )}
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
            className={clsx(
              "absolute right-4 top-1/2 px-2 py-4 bg-accent text-white rounded-sm transition-opacity",
              currentSlide + 3 < reviews.length ? "opacity-100" : "opacity-0"
            )}
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
              {reviews.slice(0, -2).map((_, idx) => {
                return (
                  <div
                    key={idx}
                    className={clsx(
                      "m-2 w-2 h-2 rounded-xs bg-accent-light transition-[width_0.3s]",
                      currentSlide === idx && "w-8"
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
