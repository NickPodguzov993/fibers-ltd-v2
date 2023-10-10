import clsx from "clsx";
import { titleFont } from "@/lib/fonts";

export default function NotFound() {
  return (
    <div
      className={clsx(
        "container pt-10 min-h-[320px] text-[24px] lg:text-[48px] font-bold text-center text-dark",
        titleFont.className
      )}
    >
      Page not found
    </div>
  );
}
