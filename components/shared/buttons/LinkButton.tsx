import clsx from "clsx";
import Link from "next/link";
import { PropsWithChildren } from "react";

type LinkButtonProps = PropsWithChildren & {
  className?: string;
  href: string;
};

export function LinkButton({ className, href, children }: LinkButtonProps) {
  return (
    <Link
      className={clsx(
        "p-4 font-bold leading-none text-dark hover:text-accent transition-colors",
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
