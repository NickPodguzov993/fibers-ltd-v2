import clsx from "clsx";
import { PropsWithChildren } from "react";

type TabProps = PropsWithChildren & {
  className?: string;
  active?: boolean;
  onClick?: () => void;
};

export function Tab({ className, active, children, onClick }: TabProps) {
  return (
    <button
      className={clsx(
        "px-4 py-2 lg:py-4 font-bold lg:text-xl leading-none lg:leading-none text-dark border border-accent rounded-lg transition-colors",
        active
          ? "bg-accent text-white hover:bg-accent active:bg-accent"
          : "hover:bg-accent/10 active:bg-accent/10",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
