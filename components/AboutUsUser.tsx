"use client";
import React, {useEffect} from 'react';
import {titleFont} from "@/lib/fonts";
import clsx from "clsx";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

type DictType = {
    dict: Promise<{ title: string, description: {}, cards: {} }>
    colors: string[]
}

export const AboutUsUser = ({dict, colors}) => {
    useEffect(() => {
        AOS.init({
            disable: false
        });
    }, []);

    return (
        <div data-aos="fade-up">
            <div>
                <div className="flex gap-2 lg:gap-4 items-center justify-center">
                    <Image
                        className="h-8 w-auto lg:h-14"
                        src="/images/emojis/spark.png"
                        alt=""
                        width={56}
                        height={56}
                    />

                    <h2 className={clsx(
                        "text-[32px] lg:text-[64px] font-bold text-dark",
                        titleFont.className
                    )}
                    >
                        {dict.title}
                    </h2>
                </div>
                <p
                    className={clsx(
                        "font-bold leading-paragraph text-dark text-center lg:flex lg:flex-col lg:text-[48px] lg:leading-[1.4]",
                        titleFont.className
                    )}
                >
                    <span className="text-dark/50">{dict.description[0]}</span>
                    <span>{dict.description[1]}</span>
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-4">
                {dict.cards.map(({title, description, image}, idx) => (
                    <div data-aos="fade-up" data-aos-delay={idx * 150}
                         key={idx}
                         className={clsx(
                             "flex flex-col p-2 lg:p-4 rounded lg:rounded-xl",
                             !(idx % 3) ? "lg:flex-row lg:col-span-2" : "",
                             colors[idx % colors.length][0]
                         )}
                    >
                        <div
                            className={clsx(
                                "rounded lg:rounded-lg flex items-center justify-center",
                                !(idx % 2) ? "order-2" : "order-1",
                                !(idx % 3) ? "lg:w-1/2" : "lg:w-full",
                                colors[idx % colors.length][1]
                            )}
                        >
                            <Image
                                className="h-[240px] w-full lg:h-[320px]"
                                src={image}
                                alt={title}
                                width={320}
                                height={320}
                                unoptimized
                            />
                        </div>
                        <div
                            className={clsx(
                                "px-2 py-4 lg:p-8 flex flex-col gap-4 lg:gap-16",
                                !(idx % 2) ? "order-1" : "order-2",
                                !(idx % 3) ? "lg:w-1/2" : "lg:w-full"
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
                            <p className="leading-paragraph text-dark lg:text-[18px]">
                                {description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

