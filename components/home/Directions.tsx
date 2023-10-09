"use client";
import clsx from "clsx";
import { useState } from "react";

import { titleFont } from "@/lib/fonts";
import { Tab } from "../shared/tab";

type DirectionsProps = {
  title: string;
  description: string;
  directions: { title: string; description: string }[];
};

export function Directions({
  title,
  description,
  directions,
}: DirectionsProps) {
  const [currentDir, setCurrentDir] = useState(0);

  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="flex flex-col gap-4 lg:flex-1">
        <div className="flex gap-2 items-center">
          <div>image</div>
          <h2 className="text-[32px] font-bold text-dark">{title}</h2>
        </div>
        <p className="leading-paragraph text-dark">{description}</p>
      </div>
      <div className="lg:flex-1 p-8 lg:p-16 -mx-4 lg:mx-0  bg-light-violet flex flex-col rounded gap-4 lg:gap-8">
        <div className="flex flex-col gap-2 text-center">
          <h3
            className={clsx(
              "text-[24px] font-bold text-dark",
              titleFont.className
            )}
          >
            App downloads
          </h3>
          <p className="text-[18px] leading-paragraph text-dark">
            Getting your app into the hands of users is crucial, and we excel at
            it. Our app download campaigns have a proven track record of
            boosting downloads and user engagement. Let us take your app to the
            top of the charts.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {directions.map(({ title }, idx) => (
            <Tab
              key={idx}
              active={idx === currentDir}
              onClick={() => setCurrentDir(idx)}
            >
              {title}
            </Tab>
          ))}
        </div>
      </div>
    </div>
  );
}
