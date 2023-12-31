"use client"

import clsx from "clsx";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { titleFont } from "@/lib/fonts";
import {useEffect} from "react";

type ValuesProps = {
  title: string;
  values: { title: string; image: string; description: string }[];
};

export function Values({ title, values }: ValuesProps) {
  const colors = [
    ["bg-light-violet", "bg-violet"],
    ["bg-light-pink", "bg-pink"],
    ["bg-light-green", "bg-green"],
  ];

    useEffect(() => {
        AOS.init({
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        });
    }, []);

  return (
    <div data-aos="fade-up"
        className="flex flex-col gap-6 lg:gap-10">
      <div className="flex gap-2 lg:gap-4 items-center">
        <Image
          className="h-8 w-auto lg:h-14"
          src="/images/emojis/spark.png"
          alt=""
          width={56}
          height={56}
        />
        <h2 className="text-[32px] lg:text-[64px] font-bold text-dark">
          {title}
        </h2>
      </div>
      <div className="flex flex-col gap-4 lg:grid grid-cols-2">
        {values.map(({ title, description, image }, idx) => (
          <div
              data-aos="fade-up"
              data-aos-delay="200"
            key={title}
            className={clsx(
              "flex flex-col p-2 lg:p-4 rounded",
              idx % 3 == 2 && "col-span-2 lg:flex-row",
              colors[idx % colors.length][0]
            )}
          >
            <div
              className={clsx(
                "rounded w-full lg:h-[380px]",
                idx % 2 ? "order-1" : "order-2",
                idx % 3 == 2 && "lg:flex-1 lg:h-full",
                colors[idx % colors.length][1]
              )}
            >
              <Image
                className="h-full w-auto"
                src={image}
                alt={title}
                height={320}
                width={640}
                unoptimized
              />
            </div>
            <div
              className={clsx(
                "px-2 py-4 flex flex-col gap-4 lg:p-8 lg:gap-16",
                idx % 3 == 2 && "lg:flex-1",
                idx % 2 ? "order-2" : "order-1"
              )}
            >
              <h3
                className={clsx(
                  "text-[24px] lg:text-[32px] font-bold text-dark",
                  titleFont.className
                )}
              >
                {title}
              </h3>
              <p className="leading-paragraph text-dark">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
