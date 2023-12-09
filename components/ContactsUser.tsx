"use client";
import React, {useEffect} from 'react';
import clsx from "clsx";
import {titleFont} from "@/lib/fonts";
import {ContactCard} from "@/components/contacts";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

type ContactsUserType = {
    dict:  Promise<{title: string, description: string, cards: {}}>
}


export const ContactsUser = ({dict}) => {
    function getColor(idx: number) {
        return !idx ? "bg-light-violet" : "bg-light-pink";
    }

    useEffect(() => {
        AOS.init({
            disable: false
        });
    }, []);

    return (
        <div  data-aos="fade-up" className="container max-w-[800px] pt-10 lg:pt-0 flex flex-col gap-8">
            <div className="flex flex-col gap-4 items-center">
                <div className="flex gap-2 items-center">
                    <Image
                        className="h-8 w-auto lg:h-14"
                        src="/images/emojis/cat.png"
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
                        {dict.title}
                    </h2>
                </div>
                <p className="leading-paragraph text-dark text-center">
                    {dict.description}
                </p>
            </div>
            <div className="grid gap-y-4 grid-cols-1">
                {dict.cards.map(({ link, ...rest }, idx) => (
                    <a  key={idx} href={link}>
                        <ContactCard className={getColor(idx)} {...rest} />
                    </a>
                ))}
            </div>
        </div>
    );
};
