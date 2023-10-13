"use client";
import { getCookie, setCookie } from "cookies-next";
import { PrimaryButton } from "../shared/buttons";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const COOKIE_TOKEN = "cookie-accepted";

type CookieInformationProps = {
  cta: string;
  description: string;
  policy: {
    title: string;
    slug: string;
  };
};

export function CookieInformation({
  cta,
  description,
  policy,
}: CookieInformationProps) {
  const pathname = usePathname();
  const [isShown, setShown] = useState(false);

  function onAccept() {
    setCookie(COOKIE_TOKEN, true);
    setShown(false);
  }

  useEffect(() => {
    setShown(!getCookie(COOKIE_TOKEN));
  }, []);

  return (
    <div
      className={clsx(
        "fixed container inset-x-4 lg:inset-x-0 mx-auto w-fit bottom-4 p-4 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 bg-white shadow-cookies rounded z-50 transition-transform",
        isShown ? "translate-y-0" : "translate-y-32"
      )}
    >
      <p className="text-[12px] lg:text-[16px] font-bold text-black text-center">
        {description}{" "}
        <Link
          className="text-accent-link hover:underline active:underline"
          href={`/${pathname.split("/")[1]}/policies/${policy.slug}`}
        >
          {policy.title}
        </Link>
      </p>
      <PrimaryButton className="!leading-[1]" onClick={onAccept}>
        {cta}
      </PrimaryButton>
    </div>
  );
}
