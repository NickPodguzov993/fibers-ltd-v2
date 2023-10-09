"use client";
import clsx from "clsx";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { PrimaryButton, LinkButton } from "../shared/buttons";
import { SignupModal } from "./SignupModal";
import { LoginModal } from "./LoginModal";

type HeaderProps = {
  logo: string;
  links: { title: string; link: string }[];
  signup: string;
  login: string;
};

export function Header({ logo, links, signup, login }: HeaderProps) {
  const [isLoginOpened, setLoginOpened] = useState(false);
  const [isSignupOpened, setSignupOpened] = useState(false);
  const pathName = usePathname();
  const isEng = pathName.startsWith("/en");

  return (
    <>
      <div className="fixed inset-x-2 top-2 lg:top-4 lg:inset-x-4 flex p-0 lg:px-4 z-50">
        <div className="container mx-auto w-full px-4 py-1 lg:p-4 flex justify-between items-center rounded lg:rounded-md shadow-header bg-white">
          <Link href="/">
            <Image
              className="h-8 w-auto lg:h-12"
              src={logo}
              alt="logo"
              width={236}
              height={48}
              priority={true}
            />
          </Link>
          <div className="flex lg:gap-6">
            <nav className="hidden lg:block">
              <ul className="flex items-center">
                {links.map(({ title, link }) => (
                  <li key={title} className="flex">
                    <LinkButton
                      className={clsx(
                        "font-normal leading-paragraph",
                        pathName.startsWith(link) && "!text-accent"
                      )}
                      href={link}
                    >
                      {title}
                    </LinkButton>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex lg:gap-2">
              <PrimaryButton
                className="hidden lg:block leading-[1] text-white bg-accent hover:bg-accent/90 active:bg-accent/90"
                onClick={() => setSignupOpened(true)}
              >
                {signup}
              </PrimaryButton>
              <PrimaryButton
                className="hidden lg:block leading-[1]"
                onClick={() => setLoginOpened(true)}
              >
                {login}
              </PrimaryButton>
              <LinkButton
                className="leading-paragraph"
                href={pathName.replace(
                  isEng ? "/en" : "/zh",
                  isEng ? "/zh" : "/en"
                )}
              >
                {isEng ? "Eng" : "中文"}
              </LinkButton>
              <button className="px-2 py-4 flex lg:hidden justify-center items-center">
                menu
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <MobileMenuModal /> */}
      <SignupModal
        open={isSignupOpened}
        onClose={() => setSignupOpened(false)}
      />
      <LoginModal
        open={isLoginOpened}
        onSignup={() => setSignupOpened(true)}
        onClose={() => setLoginOpened(false)}
      />
    </>
  );
}
