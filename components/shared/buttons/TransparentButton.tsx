import { PropsWithChildren } from "react";
import clsx from "clsx";

type TransparentButtonProps = PropsWithChildren & {
  className?: string;
  onClick?: () => void;
};

export function TransparentButton({
  className,
  children,
  onClick,
}: TransparentButtonProps) {
  return (
    <button
      className={clsx(
        "p-4 font-bold leading-paragraph text-dark hover:text-accent transition-colors",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
