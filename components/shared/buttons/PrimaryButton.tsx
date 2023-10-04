import { PropsWithChildren } from "react";
import clsx from "clsx";

type PrimaryButtonProps = PropsWithChildren & {
  className?: string;
  onClick?: () => void;
};

export function PrimaryButton({
  className,
  children,
  onClick,
}: PrimaryButtonProps) {
  return (
    <button
      className={clsx(
        "p-4 font-bold text-accent border-2 border-accent rounded-sm hover:bg-accent/10 transition-colors",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
