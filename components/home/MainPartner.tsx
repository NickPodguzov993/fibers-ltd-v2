import clsx from "clsx";
import Image from "next/image";
import {titleFont} from "@/lib/fonts";


type ContentProps = {
    ownPartner: string
    partner: { title: string; description: string; cta: string; link: string; link: string; image: string;owrPartner:string };
};

export function MainPartner({partner}: ContentProps) {
    return (
        <div data-aos="fade-up"
             className="flex flex-col gap-6" >
            <div className="flex gap-2 lg:gap-4 items-center">
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
                    {partner.owrPartner}
                </h2>
            </div>
            <div className="p-2 lg:p-4 flex flex-col lg:flex-row rounded lg:rounded-xl bg-[#FFEDDB]">
                <div className="flex-1 px-2 py-4 lg:p-8 flex flex-col gap-4">
                    <h3
                        className={clsx(
                            "text-[24px] lg:text-[32px] font-bold text-dark",
                            titleFont.className
                        )}
                    >
                        {partner.title}
                    </h3>
                    <p className="text-[18px] leading-paragraph text-dark whitespace-pre-wrap">
                        {partner.description}
                    </p>
                    <a
                        href={partner.link}
                        className="p-4 lg:px-8 lg:py-6 lg:w-fit font-bold leading-none text-accent border-2 border-accent rounded-sm hover:bg-accent/10 active:bg-accent/20 transition-colors text-center"
                    >
                        {partner.cta}
                    </a>
                </div>
                <div className="flex-1 flex bg-white rounded lg:rounded-lg items-center justify-center">
                    <Image
                        className="h-[240px] w-auto lg:h-[320px] object-cover"
                        src={partner.image}
                        alt={partner.title}
                        width={320}
                        height={320}
                        unoptimized
                    />
                </div>
            </div>
        </div>
    );
}
