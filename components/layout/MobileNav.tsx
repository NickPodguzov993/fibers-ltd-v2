import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type MobileNavProps = {
  buttons: { title: string; icon: string; activeIcon: string; link: string }[];
};

export function MobileNav({ buttons }: MobileNavProps) {
  return (
    <div className="lg:hidden flex fixed bottom-0 inset-x-0 bg-white/50 rounded-t-sm z-50">
      {buttons.map(({ title, icon, activeIcon, link }, idx) => {
        const isActive = idx === 0;
        return (
          <Link
            className={clsx(
              "flex-1 py-2 flex flex-col gap-1 items-center text-[10px] text-dark",
              isActive && "font-bold text-accent"
            )}
            key={title}
            href={link}
          >
            {isActive ? (
              <div className="px-4 bg-accent rounded">
                <Image
                  className="fill-white"
                  src={activeIcon}
                  alt={title}
                  width={24}
                  height={24}
                />
              </div>
            ) : (
              <Image src={icon} alt={title} width={24} height={24} />
            )}
            <span>{title}</span>
          </Link>
        );
      })}
    </div>
  );
}
