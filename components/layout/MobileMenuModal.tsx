"use client";
import clsx from "clsx";
import { ReactNode } from "react";
import Image from "next/image";

import CheckIcon from "../../assets/icons/check.svg";
import { Modal } from "../shared/modal";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { PrimaryButton } from "../shared/buttons";

type MobileMenuModalProps = {
  links: { title: string; link: string }[];
  signup: string;
  login: string;
  open?: boolean;
  onClose?: () => void;
  onSignup?: () => void;
  onLogin?: () => void;
};

const content = {
  languages: [
    {
      title: "English",
      icon: "/icons/flag-en.svg",
      code: "en",
    },
    {
      title: "中文(简体)",
      icon: "/icons/flag-zh.svg",
      code: "zh",
    },
  ],
};

export function MobileMenuModal({
  open,
  links,
  signup,
  login,
  onClose,
  onSignup,
  onLogin,
}: MobileMenuModalProps) {
  const pathName = usePathname();
  const router = useRouter();
  const lang = pathName.split("/")[1];

  return (
    <Modal
      title={
        <Image
          className="ml-4"
          src="/images/logo.svg"
          alt="logo"
          width={160}
          height={32}
          priority={true}
        />
      }
      open={open}
      onClose={onClose}
    >
      <div className="flex flex-col gap-6">
        <div className="flex gap-2">
          {content.languages.map(({ title, icon, code }) => (
            <LanguageButton
              key={title}
              title={title}
              icon={<Image src={icon} alt="flag" width={24} height={24} />}
              active={lang === code}
              onClick={() =>
                router.replace(
                  `/${[code, ...pathName.split("/").slice(2)].join("/")}`
                )
              }
            />
          ))}
        </div>
        <div className="flex flex-col">
          {links.map(({ title, link }) => (
            <Link
              key={title}
              href={link}
              className="h-16 p-4 rounded-sm flex items-center font-bold leading-paragraph text-dark hover:bg-accent-hover/10 active:bg-accent-active/20"
              onClick={onClose}
            >
              {title}
            </Link>
          ))}
        </div>
        <div className="flex gap-2">
          <PrimaryButton
            className="leading-none flex-1 text-white bg-accent hover:!bg-accent-hover active:!bg-accent-active"
            onClick={() => {
              onSignup?.();
              onClose?.();
            }}
          >
            {signup}
          </PrimaryButton>
          <PrimaryButton
            className="leading-none flex-1"
            onClick={() => {
              onLogin?.();
              onClose?.();
            }}
          >
            {login}
          </PrimaryButton>
        </div>
      </div>
    </Modal>
  );
}

type LanguageButtonProps = {
  title: string;
  icon: ReactNode;
  active?: boolean;
  onClick?: () => void;
};

function LanguageButton({ title, icon, active, onClick }: LanguageButtonProps) {
  return (
    <button
      className={clsx(
        "flex-grow h-14 p-4 flex items-center justify-between bg-gray rounded-sm border-2 transition-colors hover:bg-accent-hover/10 active:bg-accent-active/20",
        active ? "border-accent" : "border-transparent"
      )}
      onClick={onClick}
    >
      <div className="flex gap-2 items-center">
        {icon}
        <span className="font-bold text-dark">{title}</span>
      </div>
      <CheckIcon
        className={clsx(
          "transition-opacity",
          active ? "opacity-100" : "opacity-0"
        )}
      />
    </button>
  );
}
