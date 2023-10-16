"use client";
import { usePathname } from "next/navigation";
import { Tab } from "../shared/tab";
import Link from "next/link";

type PoliciesNavigationProps = {
  docs: {
    title: string;
    slug: string;
  }[];
};

export function PoliciesNavigation({ docs }: PoliciesNavigationProps) {
  const pathName = usePathname();

  return (
    <div className="max-w-[560px] p-3 bg-white rounded overflow-x-auto shadow-header lg:p-0 lg:bg-none lg:rounded-none lg:shadow-none">
      <div className="flex gap-2 flex-nowrap lg:flex-wrap">
        {docs.map(({ title, slug }) => (
          <Link
            className="whitespace-nowrap"
            key={slug}
            href={`/${pathName.split("/")[1]}/policies/${slug}`}
          >
            <Tab active={pathName.includes(slug)}>{title}</Tab>
          </Link>
        ))}
      </div>
    </div>
  );
}
