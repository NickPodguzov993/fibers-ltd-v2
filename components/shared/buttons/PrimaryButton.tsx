import { MouseEventHandler, PropsWithChildren } from "react";
import clsx from "clsx";

type PrimaryButtonProps = PropsWithChildren & {
  className?: string;
  type?: "button" | "submit";
  href?: string;
  onClick?: MouseEventHandler;
  tabIndex?: number;
};

export function PrimaryButton({
  className,
  type,
  children,
  tabIndex,
  onClick,
}: PrimaryButtonProps) {
  return (
    <button
      className={clsx(
        "p-4 font-bold leading-none text-accent border-2 border-accent rounded-sm hover:bg-accent/10 active:bg-accent/20 transition-colors",
        className
      )}
      type={type}
      tabIndex={tabIndex}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
