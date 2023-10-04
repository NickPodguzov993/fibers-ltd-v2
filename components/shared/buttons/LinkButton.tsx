import Link from "next/link";
import { PropsWithChildren } from "react";

type LinkButtonProps = PropsWithChildren & {
  href: string;
};

export function LinkButton({ href, children }: LinkButtonProps) {
  return (
    <Link
      className="p-4 font-bold leading-paragraph text-dark hover:text-accent transition-colors"
      href={href}
    >
      {children}
    </Link>
  );
}
