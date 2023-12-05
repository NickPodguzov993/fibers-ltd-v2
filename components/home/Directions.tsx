"use client";
import clsx from "clsx";
import Image from "next/image";
import {useState} from "react";

import {titleFont} from "@/lib/fonts";
import {Tab} from "../shared/tab";

type DirectionsProps = {
    title: string;
    description: string;
    directions: { title: string; description: string }[];
};

export function Directions({
                               title,
                               secondTitle,
                               description,
                               directions,
                           }: DirectionsProps) {
    const [currentDir, setCurrentDir] = useState(0);

    return (
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-0">
            <div className="flex flex-col gap-4 lg:flex-1 lg:pr-8 lg:justify-center">
                <div className="flex gap-2 items-center">
                    <Image
                        className="h-8 w-auto lg:h-14"
                        src="/images/emojis/folder.png"
                        alt=""
                        width={56}
                        height={56}
                    />
                    <h2 className="text-[32px] lg:text-[64px] font-bold text-dark">
                        {title}
                    </h2>
                </div>
                <p className="lg:text-[18px] leading-paragraph text-dark">
                    {description}
                </p>
            </div>
            <div className="lg:flex-1 p-8 lg:p-16 -mx-4 lg:mx-0 bg-light-violet flex flex-col rounded gap-4 lg:gap-8">
                <div className="flex flex-col gap-2 text-center">
                    <h3
                        className={clsx(
                            "text-[24px] font-bold text-dark",
                            titleFont.className
                        )}
                    >
                        {secondTitle}
                    </h3>
                    <p className="text-[18px] leading-paragraph text-dark">

                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                    {directions.map(({title, description}, idx) => (
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
