import clsx from "clsx";
import Link from "next/link";
import {titleFont} from "@/lib/fonts";
import {LinkButton} from "../shared/buttons";

type FooterProps = {
    email: string;
    contact: string;
    phone: string;
    navigation: { title: string; links: { title: string; link: string }[] }[];
    licenses: string[];
    copyright: string;
};

export function Footer({
                           email,
                           contact,
                           phone,
                           navigation,
                           licenses,
                           licensesspan,
                           phonenumber,
                           copyright,
                       }: FooterProps) {
    return (
        <div
            className="relative flex flex-col gap-8 lg:gap-12 mt-20 lg:mt-40 px-4 pt-8 pb-16 lg:p-12 bg-light-violet rounded-t lg:rounded-t-xl">
            <div className="flex flex-col gap-8 lg:gap-2">
                <div className="flex flex-col lg:flex-row gap-8 lg:justify-between lg:items-center">
                    <a
                        className={clsx(
                            "text-center text-accent-link text-xl lg:text-[32px] leading-none font-bold",
                            titleFont.className
                        )}
                        href={`mailto:${email}`}
                    >
                        {email}
                    </a>
                    <LinkButton
                        href={`mailto:${email}`}
                        className="lg:px-8 lg:py-6 lg:text-[20px] text-white text-center hover:text-white bg-accent rounded-sm hover:bg-accent-hover active:bg-accent-active transition-colors"
                    >
                        {contact}
                    </LinkButton>
                </div>
                <div className="flex flex-col gap-2 lg:flex-row">
                    <span className="text-dark/50">{phonenumber}:</span>
                    <a
                        className="text-dark font-medium"
                        href={`tel:${phone.replace(" ", "")}`}
                    >
                        {phone}
                    </a>
                </div>
            </div>
            <div className="flex flex-col gap-8 lg:gap-10 lg:flex-row">
                {navigation.map(({title, links}) => (
                    <div key={title} className="flex flex-col gap-2 lg:gap-4 lg:flex-[1]">
                        <span className="text-dark/50">{title}</span>
                        <ul className="flex flex-col">
                            {links.map(({title, link}) => (
                                <li key={title} className="flex">
                                    <Link
                                        className="w-full py-2 rounded-xs font-medium text-dark hover:bg-accent/10 active:bg-accent/20 transition-colors"
                                        href={link}
                                    >
                                        {title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className="flex flex-col gap-4 lg:flex-[2]">
                    <span className="text-dark/50">{licensesspan}</span>
                    <ul className="flex flex-col gap-4">
                        {licenses.map((license, idx) => (
                            <li key={idx} className="text-dark leading-paragraph">
                                {license}
                            </li>
                        ))}
                    </ul>
                    <span className="text-dark leading-paragraph">{copyright}</span>
                </div>
            </div>
        </div>
    );
}
