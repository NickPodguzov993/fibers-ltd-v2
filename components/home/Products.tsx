"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { useMediaQuery } from "usehooks-ts";

import { AdaptiveHeightPlugin } from "@/lib/slider";
import { Tab } from "../shared/tab";
import { ProductCard } from "./ProductCard";
import { Masonry } from "react-plock";

type ProductsProps = {
  title: string;
  description: string;
  categories: string[];
  products: {
    title: string;
    volume: string;
    minBid: string;
    category: string;
    image: string;
  }[];
};

export function Products({
  title,
  description,
  categories,
  products,
}: ProductsProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [domReady, setDomReady] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderReady, setSliderReady] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides: {
        perView: 1,
        spacing: 20,
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
  useEffect(() => {
    setTimeout(() => {
      instanceRef.current?.moveToIdx(0);
    });
  }, [instanceRef, filteredProducts]);

  function onCategoryChange(category: string) {
    const next = activeCategory !== category ? category : null;
    setActiveCategory(next);
    setFilteredProducts(
      !next ? products : products.filter((p) => p.category === next)
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-5xl lg:text-8xl font-bold text-dark lg:-tracking-title">
          {title}
        </h2>
        <p className="font-bold text-dark">{description}</p>
      </div>
      <div className="flex gap-2 overflow-x-auto">
        {categories.map((cat) => (
          <Tab
            className="flex-shrink-0"
            key={cat}
            active={activeCategory === cat}
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
          </Tab>
        ))}
      </div>
      {isMobile && domReady ? (
        <div className="flex flex-col gap-2">
          <div
            ref={sliderRef}
            className="keen-slider transition-[height_0.3s] z-0"
          >
            {filteredProducts.map((product, idx) => (
              <ProductCard
                className="keen-slider__slide !min-h-[auto] h-fit"
                key={idx}
                idx={idx}
                {...product}
              />
            ))}
          </div>
          {sliderReady && instanceRef.current && (
            <div className="flex justify-center">
              {filteredProducts.map((_, idx) => {
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
        <Masonry
          items={filteredProducts}
          config={{
            columns: 3,
            gap: 16,
          }}
          render={(product, idx) => {
            return (
              <ProductCard
                className=""
                key={idx}
                idx={filteredProducts.findIndex(
                  (p) => p.title === product.title
                )}
                {...product}
              />
            );
          }}
        />
      )}
    </div>
  );
}
