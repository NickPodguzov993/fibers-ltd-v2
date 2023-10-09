import "react-responsive-modal/styles.css";
import clsx from "clsx";
import { PropsWithChildren, UIEvent, useState } from "react";
import ReactModal from "react-responsive-modal";

type ModalProps = PropsWithChildren & {
  className?: string;
  title?: string;
  open?: boolean;
  onClose?: () => void;
};

export function Modal({
  className,
  title,
  open,
  children,
  onClose,
}: ModalProps) {
  const [isScrolled, setScrolled] = useState(false);

  function onScroll(e: UIEvent) {
    setScrolled(e.currentTarget.scrollTop > 5);
  }

  const closeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 13.3998L7.10005 18.2998C6.91672 18.4831 6.68338 18.5748 6.40005 18.5748C6.11672 18.5748 5.88338 18.4831 5.70005 18.2998C5.51672 18.1165 5.42505 17.8831 5.42505 17.5998C5.42505 17.3165 5.51672 17.0831 5.70005 16.8998L10.6 11.9998L5.70005 7.0998C5.51672 6.91647 5.42505 6.68314 5.42505 6.3998C5.42505 6.11647 5.51672 5.88314 5.70005 5.6998C5.88338 5.51647 6.11672 5.4248 6.40005 5.4248C6.68338 5.4248 6.91672 5.51647 7.10005 5.6998L12 10.5998L16.9 5.6998C17.0834 5.51647 17.3167 5.4248 17.6 5.4248C17.8834 5.4248 18.1167 5.51647 18.3 5.6998C18.4834 5.88314 18.575 6.11647 18.575 6.3998C18.575 6.68314 18.4834 6.91647 18.3 7.0998L13.4 11.9998L18.3 16.8998C18.4834 17.0831 18.575 17.3165 18.575 17.5998C18.575 17.8831 18.4834 18.1165 18.3 18.2998C18.1167 18.4831 17.8834 18.5748 17.6 18.5748C17.3167 18.5748 17.0834 18.4831 16.9 18.2998L12 13.3998Z"
        fill="#212121"
      />
    </svg>
  );

  return (
    <ReactModal
      classNames={{
        overlay: "!bg-dark/50",
        modalContainer: "flex !overflow-hidden",
        modal: clsx(
          "!p-0 !m-0 !mx-auto !mt-auto lg:!my-auto !flex flex-col w-screen max-h-[90vh] rounded-t-sm lg:rounded !overflow-hidden",
          className
        ),
        closeButton:
          "!top-2.5 lg:!top-2 !right-1.5 lg:!right-2 !p-4 rounded-sm transition-colors hover:bg-accent/10 active:bg-accent/10 outline-none",
      }}
      open={open}
      closeIcon={closeIcon}
      onClose={onClose}
      center
    >
      <div
        className={clsx(
          "py-6 lg:pt-8 lg:pb-7 text-center text-2xl lg:text-[32px] leading-none font-bold text-dark transition-shadow",
          isScrolled && "shadow-modal"
        )}
      >
        {title}
      </div>
      <div className="px-4 lg:px-8 pb-8 overflow-auto" onScroll={onScroll}>
        {children}
      </div>
    </ReactModal>
  );
}
