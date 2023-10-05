"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  PrimaryButton,
  LinkButton,
  TransparentButton,
} from "../shared/buttons";

type HeaderProps = {
  logo: string;
  links: { title: string; link: string }[];
  signup: string;
  login: string;
};

export function Header({ logo, links, signup, login }: HeaderProps) {
  const pathName = usePathname();
  const isEng = pathName.startsWith("/en");

  return (
    <div className="fixed inset-x-0 top-0 lg:top-4 flex p-0 lg:px-4 z-50">
      <div className="container mx-auto w-full px-4 py-2 lg:p-4 flex justify-between items-center rounded-b lg:rounded bg-white/50 lg:bg-white/70 backdrop-blur lg:border lg:border-dashed lg:border-primary">
        <Link href="/">
          <Image
            className="h-10 w-auto lg:h-12"
            src={logo}
            alt="logo"
            width={236}
            height={48}
            priority={true}
            unoptimized
          />
        </Link>
        <div className="flex">
          <nav className="hidden lg:block">
            <ul className="h-full flex items-center">
              {links.map(({ title, link }) => (
                <li key={title}>
                  <LinkButton href={link}>{title}</LinkButton>
                </li>
              ))}
            </ul>
          </nav>
          <TransparentButton className="hidden lg:block">
            {signup}
          </TransparentButton>
          <PrimaryButton className="hidden lg:block">{login}</PrimaryButton>
          {/* <TransparentButton onClick={() => {}}>Eng</TransparentButton> */}
          <LinkButton
            href={pathName.replace(
              isEng ? "/en" : "/zh",
              isEng ? "/zh" : "/en"
            )}
          >
            {isEng ? "Eng" : "中文"}
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
