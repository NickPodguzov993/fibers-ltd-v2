"use client";
import clsx from "clsx";
import { MouseEvent } from "react";
import { usePathname, useRouter } from "next/navigation";

import { titleFont } from "@/lib/fonts";

type VacancyCardProps = {
  cta: string;
  email: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
};

export function VacancyCard({
  cta,
  email,
  slug,
  title,
  description,
  tags,
}: VacancyCardProps) {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <div
      className="p-6 lg:p-8 flex flex-col gap-4 lg:gap-6 rounded border-2 border-primary transition-shadow cursor-pointer hover:shadow-card"
      onClick={() =>
        router.push(`/${pathName.split("/")[1]}/vacancies/${slug}`)
      }
    >
      <h3
        className={clsx("text-[32px] font-bold text-dark", titleFont.className)}
      >
        {title}
      </h3>
      <div className="flex flex-col gap-2 lg:gap-4">
        <p className="leading-paragraph text-dark">{description}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="leading-paragraph font-bold text-accent-link"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <a
        className="p-4 font-bold leading-none text-accent border-2 border-accent rounded-sm hover:bg-accent/10 active:bg-accent/20 transition-colors text-center lg:w-fit"
        href={`mailto:${email}`}
        onClick={(e: MouseEvent) => e.stopPropagation()}
      >
        {cta}
      </a>
    </div>
  );
}
