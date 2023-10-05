"use client";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useKeenSlider } from "keen-slider/react";

import { AdaptiveHeightPlugin } from "@/lib/slider";
import { ReviewCard } from "./ReviewCard";
import clsx from "clsx";

type ReviewsProps = {
  title: string;
  description: string;
  reviews: {
    comment: string;
    image: string;
    name: string;
    position: string;
    photo: string;
  }[];
};

export function Reviews({ title, description, reviews }: ReviewsProps) {
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const [domReady, setDomReady] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderReady, setSliderReady] = useState(false);
  const [sliderRef] = useKeenSlider(
    {
      slides: {
        perView: 1,
        spacing: 16,
        origin: "center",
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

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col">
        <h2 className="w-2/3 text-5xl lg:text-8xl font-bold -tracking-title leading-[normal] text-dark">
          {title}
        </h2>
        <p className="font-bold text-dark">{description}</p>
      </div>
      {isMobile && domReady ? (
        <div className="flex flex-col gap-2">
          <div
            ref={sliderRef}
            className="keen-slider transition-[height_0.3s] !overflow-visible"
          >
            {reviews.map((review, idx) => (
              <ReviewCard
                key={idx}
                className="keen-slider__slide !min-h-[auto] h-fit"
                {...review}
              />
            ))}
          </div>
          {sliderReady && (
            <div className="flex justify-center">
              {reviews.map((_, idx) => {
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
      ) : (
        <div className="flex gap-4">
          {reviews.map((review, idx) => (
            <ReviewCard key={idx} className="flex-1" {...review} />
          ))}
        </div>
      )}
    </div>
  );
}
