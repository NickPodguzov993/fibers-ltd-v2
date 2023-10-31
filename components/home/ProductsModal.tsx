"use client";
import Link from "next/link";
import { Modal } from "../shared/modal";
import { usePathname } from "next/navigation";

type ProductsModalProps = {
  products: { title: string; slug: string }[];
  open?: boolean;
  onClose?: () => void;
};

export function ProductsModal({ products, open, onClose }: ProductsModalProps) {
  const pathName = usePathname();
  const lang = pathName.split("/")[1];

  return (
    <Modal title="All formats" open={open} onClose={onClose}>
      <div className="flex flex-wrap gap-2 justify-center">
        {products.map(({ title, slug }) => (
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
  );
}
