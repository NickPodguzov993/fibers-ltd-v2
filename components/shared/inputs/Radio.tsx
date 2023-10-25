import { InputHTMLAttributes, forwardRef, useState } from "react";

import RadioOn from "../../../assets/icons/radio-on.svg";
import RadioOff from "../../../assets/icons/radio-off.svg";
import clsx from "clsx";

type RadioInputProps = InputHTMLAttributes<HTMLInputElement>;

export const RadioInput = forwardRef<HTMLInputElement, RadioInputProps>(
  ({ children, className, onClick, ...props }, ref) => {
    return (
      <label
        htmlFor={props.value?.toString()}
        className={clsx(
          "px-2 flex gap-2 items-center cursor-pointer",
          className
        )}
      >
        <input
          ref={ref}
          className="hidden"
          type="radio"
          id={props.value?.toString()}
          {...props}
        />
        <div className="relative w-6 h-6">
          <div
            className={clsx(
              "absolute fill-accent transition-opacity",
              props.checked ? "opacity-100" : "opacity-0"
            )}
          >
            <RadioOn />
          </div>
          <div
            className={clsx(
              "absolute transition-opacity",
              props.checked ? "opacity-0" : "opacity-100"
            )}
          >
            <RadioOff />
          </div>
        </div>
        {children}
      </label>
    );
  }
);

RadioInput.displayName = "RadioInput";
