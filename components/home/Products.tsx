"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";
import { useKeenSlider } from "keen-slider/react";

import { titleFont } from "@/lib/fonts";
import { AdaptiveHeightPlugin } from "@/lib/slider";
import { PrimaryButton } from "../shared/buttons";
import { ProductCard } from "./ProductCard";
import { usePathname } from "next/navigation";
import { ProductsModal } from "./ProductsModal";

type ProductsProps = {
  title: string;
  image: string;
  products: {
    title: string;
    volume: string;
    minBid: string;
    slug: string;
    image: string;
  }[];
};

export function Products({ title, image, products }: ProductsProps) {
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
    setDomReady(true);
  }, []);

  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <div className="flex items-center gap-2 lg:gap-4">
        <div>image</div>
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
          <ProductsModal open={showAll} onClose={() => setShowAll(false)} />
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
        Show all
      </PrimaryButton>
    </div>
  );
}
