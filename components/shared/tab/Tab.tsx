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
        "px-4 py-3 lg:py-4 lg:text-[20px] font-bold text-dark bg-white border-2 border-accent rounded-lg transition-colors",
        active
          ? "!bg-accent !text-white hover:bg-accent-hover active:bg-accent-active"
          : "hover:bg-accent/10 active:bg-accent/20",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
