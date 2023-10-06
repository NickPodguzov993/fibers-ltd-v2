import { PropsWithChildren } from "react";
import clsx from "clsx";

type PrimaryButtonProps = PropsWithChildren & {
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function PrimaryButton({
  className,
  type,
  children,
  onClick,
}: PrimaryButtonProps) {
  return (
    <button
      className={clsx(
        "p-4 font-bold leading-none text-accent border-2 border-accent rounded-sm hover:bg-accent/10 active:bg-accent/10 transition-colors",
        className
      )}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
