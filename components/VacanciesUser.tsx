"use client";
import React, {useEffect} from 'react';
import clsx from "clsx";
import {titleFont} from "@/lib/fonts";
import {VacancyCard} from "@/components/vacancies";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const VacanciesUser = ({email,list,vacancies}) => {

    useEffect(() => {
        AOS.init({
            disable: false
        });
    }, []);

    return (
        <div data-aos="fade-up" className="relative container pt-10 lg:pt-0 flex flex-col lg:flex-row gap-20 lg:gap-16">
            <div className="lg:w-[800px] flex-shrink-0 flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 lg:gap-4 items-center">
                        <Image
                            className="h-8 w-auto lg:h-14"
                            src="/images/emojis/woman.png"
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
                            {list.title}
                        </h2>
                    </div>
                    <p className="text-lg leading-paragraph text-dark/50">
                        {list.subtitle}
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    {vacancies.map((vacancy) => (
                        <VacancyCard
                            key={vacancy.title}
                            email={email}
                            cta={list.cardCta}
                            {...vacancy}
                        />
                    ))}
                </div>
            </div>
            <div className="lg:fixed lg:w-[496px] flex-1 lg:right-10 p-4 h-fit flex flex-col gap-4 rounded bg-light-violet">
        <span className="font-bold text-dark leading-paragraph text-center">
          {list.missedTitle}
        </span>
                <a
                    href={`mailto:${email}`}
                    className="p-4 font-bold leading-none text-accent border-2 border-accent rounded-sm hover:bg-accent/10 active:bg-accent/20 transition-colors text-center"
                >
                    {list.missedCta}
                </a>
            </div>
        </div>
    );
};


