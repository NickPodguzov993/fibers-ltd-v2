"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Modal } from "../shared/modal";
import { PrimaryButton } from "../shared/buttons";

type LoginModalProps = {
  vacancies: { title: string; slug: string }[];
};

export function OtherVacanciesModal({ vacancies }: LoginModalProps) {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  const lang = pathName.split("/")[1];

  return (
    <>
      <PrimaryButton
        className="lg:hidden fixed bottom-4 right-4"
        onClick={() => setOpen(true)}
      >
        Other vacancies
      </PrimaryButton>
      <Modal title="Other vacancies" open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-wrap gap-2 justify-center">
          {vacancies.map(({ title, slug }) => (
            <Link
              key={slug}
              href={`/${lang}/products/${slug}`}
              className="p-4 rounded-sm bg-light-violet text-[12px] font-bold text-dark transition-colors hover:bg-accent-hover/10 active:bg-accent-active/20"
            >
              {title}
            </Link>
          ))}
        </div>
      </Modal>
    </>
  );
}
