"use client";
import clsx from "clsx";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import MenuIcon from "../../assets/icons/menu.svg";
import { PrimaryButton, LinkButton } from "../shared/buttons";
import { SignupModal } from "./SignupModal";
import { LoginModal } from "./LoginModal";
import { MobileMenuModal } from "./MobileMenuModal";
import { SignupConfirmModal } from "./SignupConfirm";

type HeaderProps = {
  links: { title: string; link: string }[];
  signup: string;
  login: string;
};

export function Header({ links, signup, login }: HeaderProps) {
  const [isLoginOpened, setLoginOpened] = useState(false);
  const [isSignupOpened, setSignupOpened] = useState(false);
  const [isConfirmOpened, setConfirmOpened] = useState(false);
  const [isMenuOpened, setMenuOpened] = useState(false);
  const pathName = usePathname();
  const isEng = pathName.startsWith("/en");



  return (
    <>
      <div className="fixed inset-x-2 top-2 lg:top-4 lg:inset-x-4 flex p-0 lg:px-4 z-50">
        <div className="container mx-auto w-full px-4 py-1 lg:p-4 flex justify-between items-center rounded lg:rounded-md shadow-header bg-white">
          <Link href="/">
            <Image
              className="h-8 w-auto lg:h-12"
              src="/images/logo.svg"
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
                        pathName.startsWith(link) && "!text-accent !font-bold"
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
                className="hidden lg:block leading-[1] text-white bg-accent hover:!bg-accent-hover active:!bg-accent-active"
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
                className="hidden lg:block leading-paragraph"
                href={pathName.replace(
                  isEng ? "/en" : "/zh",
                  isEng ? "/zh" : "/en"
                )}
              >
                {isEng ? "Eng" : "中文"}
              </LinkButton>
              <button
                className="px-2 py-4 flex lg:hidden justify-center items-center"
                onClick={() => setMenuOpened(true)}
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <PrimaryButton
        className={clsx(
          "fixed right-4 bottom-4 lg:hidden text-white bg-accent hover:bg-accent/90 active:bg-accent/90 rounded-sm z-40",
          pathName.split("/").length > 2 && "hidden"
        )}
        onClick={() => setSignupOpened(true)}
      >
        {signup}
      </PrimaryButton>
      <MobileMenuModal
        links={links}
        signup={signup}
        login={login}
        open={isMenuOpened}
        onSignup={() => setSignupOpened(true)}
        onLogin={() => setLoginOpened(true)}
        onClose={() => setMenuOpened(false)}
      />
      <SignupModal
        open={isSignupOpened}
        onLogin={() => setLoginOpened(true)}
        onRegistered={() => setConfirmOpened(true)}
        onClose={() => setSignupOpened(false)}
      />
      <SignupConfirmModal
        open={isConfirmOpened}
        onClose={() => setConfirmOpened(false)}
      />
      <LoginModal
        open={isLoginOpened}
        onSignup={() => setSignupOpened(true)}
        onClose={() => setLoginOpened(false)}
      />
    </>
  );
}
