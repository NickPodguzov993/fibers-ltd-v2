import clsx from "clsx";
import { InputHTMLAttributes, forwardRef, useState } from "react";

type TextAreaProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  rootClass?: string;
  error?: string;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ rootClass, className, error, ...props }, ref) => {
    return (
      <div className={clsx("flex flex-col gap-1 p-px", rootClass)}>
        <textarea
          ref={ref}
          className={clsx(
            "resize-none h-full w-full px-4 py-3 bg-gray rounded-xs leading-paragraph text-dark placeholder:text-dark/50 outline-2 outline-dark",
            error && "border-2 border-error",
            className
          )}
          {...props}
        />
        {error && (
          <span className="text-xs font-bold leading-none text-error">
            {error}
          </span>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
