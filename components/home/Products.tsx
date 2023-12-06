"use client";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useKeenSlider } from "keen-slider/react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { titleFont } from "@/lib/fonts";
import { AdaptiveHeightPlugin } from "@/lib/slider";
import { PrimaryButton } from "../shared/buttons";
import { ProductCard } from "./ProductCard";
import { usePathname } from "next/navigation";
import { ProductsModal } from "./ProductsModal";

type ProductsProps = {
  title: string;
  buttonShow:string
  buttonHide:string
  products: {
    title: string;
    volume: string;
    minBid: string;
    slug: string;
    image: string;
  }[];
};

export function Products({ title, products,buttonShow, buttonHide }: ProductsProps) {
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const pathName = usePathname();
  const [domReady, setDomReady] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [sliderRef] = useKeenSlider(
    {
      slides: {
        perView: 1.1,
        spacing: 16,
      },
    },
    [AdaptiveHeightPlugin]
  );

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-quad',
      delay: 100,
    });
  }, []);

  useEffect(() => {
    setDomReady(true);
  }, []);

  return (
    <div data-aos="fade-up"
         data-aos-offset="200"
         data-aos-delay="50"
         data-aos-duration="500"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false"
         data-aos-anchor-placement="top-center"

         className="flex flex-col gap-4 lg:gap-8">
      <div className="flex items-center gap-2 lg:gap-4">
        <Image
          className="h-8 w-auto lg:h-14"
          src="/images/emojis/save.png"
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
      {isMobile && domReady ? (
        <>
          <div className="flex flex-col gap-2">
            <div
              ref={sliderRef}
              className="keen-slider !overflow-visible transition-[height_0.3s]"
            >
              {products.map((product, idx) => (
                <ProductCard
                  className="keen-slider__slide !min-h-[auto] h-fit"
                  key={idx}
                  {...product}
                />
              ))}
            </div>
          </div>
          <ProductsModal
            products={products}
            open={showAll}
            onClose={() => setShowAll(false)}
          />
        </>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {(showAll ? products : products.slice(0, 6)).map(
            ({ slug, ...rest }, idx) => (
              <Link key={idx} href={[pathName, "products", slug].join("/")}>
                <ProductCard {...rest} />
              </Link>
            )
          )}
        </div>
      )}
      <PrimaryButton
        className="lg:px-8 lg:py-6 lg:w-fit lg:self-center lg:text-[20px]"
        onClick={() => setShowAll((v) => !v)}
      >
        {!showAll ? buttonShow : buttonHide}
      </PrimaryButton>
    </div>
  );
}
