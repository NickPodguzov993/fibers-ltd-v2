import { PropsWithChildren } from "react";
import clsx from "clsx";

type TransparentButtonProps = PropsWithChildren & {
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function TransparentButton({
  className,
  type,
  children,
  onClick,
}: TransparentButtonProps) {
  return (
    <button
      type={type}
      className={clsx(
        "p-4 font-bold leading-none text-dark hover:text-accent transition-colors",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
