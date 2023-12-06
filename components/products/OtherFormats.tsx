"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useKeenSlider } from "keen-slider/react";
import { titleFont } from "@/lib/fonts";

type OtherFormatsProps = {
  titleFormats:string
  slug: string;
  products: {
    title: string;
    slug: string;
    image: string;
  }[];
};

export function OtherFormats({ slug, products,titleFormats }: OtherFormatsProps) {
  const pathName = usePathname();
  const [domReady, setDomReady] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderReady, setSliderReady] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 1.5,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slides: {
          perView: 6.1,
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
  });

  useEffect(() => {
    setDomReady(true);
  }, []);

  return (
    <div className="relative flex flex-col gap-10 py-6 px-3 lg:p-16 -mx-4 lg:-mx-0 bg-light-violet rounded overflow-hidden">
      <div className="flex gap-2 lg:gap-4 items-center justify-center">
        <Image
          className="h-8 w-auto lg:h-14"
          src="/images/emojis/bubles.png"
          alt="bubles"
          width={56}
          height={56}
        />
        <h2
          className={clsx(
            "text-[20px] lg:text-[32px] font-bold text-dark",
            titleFont.className
          )}
        >
          {titleFormats}
        </h2>
      </div>
      {domReady && (
        <div className="flex flex-col gap-10">
          <div ref={sliderRef} className="keen-slider !overflow-visible">
            {products
              .filter((p) => p.slug !== slug)
              .map(({ title, image, slug }) => (
                <Link
                  key={slug}
                  href={`/${pathName.split("/")[1]}/products/${slug}`}
                  className="group keen-slider__slide flex flex-col gap-3 lg:gap-4"
                >
                  <div className="min-h-[120px] flex justify-center items-center rounded-md bg-white border-2 border-violet transition-shadow group-hover:shadow-card">
                    <Image
                      className="h-[120px] w-auto"
                      src={image}
                      alt={title}
                      width={120}
                      height={120}
                      unoptimized
                    />
                  </div>
                  <h3 className="text-[18px] lg:text-[20px] leading-paragraph lg:leading-none font-bold text-dark text-center">
                    {title}
                  </h3>
                </Link>
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
              currentSlide + 7 < products.length ? "opacity-100" : "opacity-0"
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
              {products.slice(0, -6).map((_, idx) => {
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
