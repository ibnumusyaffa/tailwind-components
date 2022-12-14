import cx from "clsx";
import React, { useId } from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

export function Item({ value, label, size = "md", color = "purple" }) {
  let id = useId();
  return (
    <div className="flex items-center space-x-3">
      <RadioGroupPrimitive.Item
        id={id}
        value={value}
        className={cx(
          "relative rounded-full",
          "data-[state=unchecked]:border data-[state=unchecked]:border-gray-300",
          "focus:outline-none focus:ring-0 focus:ring-offset-0",
          "focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-offset-1 ",
          {
            "h-4 w-4": size === "sm",
            "h-5 w-5": size === "md",
            "h-6 w-6": size === "lg",
            "h-7 w-7": size === "xl",
          },
          {
            "focus-visible:ring-purple-500 data-[state=checked]:bg-purple-500":
              color === "purple",
            "focus-visible:ring-sky-500 data-[state=checked]:bg-sky-500":
              color === "sky",
            "focus-visible:ring-yellow-500 data-[state=checked]:bg-yellow-500":
              color === "yellow",
          },
        )}
      >
        <RadioGroupPrimitive.Indicator
          className={cx(
            "flex items-center justify-center",
            "leading-0 absolute inset-0",
          )}
        >
          <div
            className={cx("rounded-full bg-white", {
              "h-1.5 w-1.5": size === "sm",
              "h-2 w-2": size === "md",
              "h-2.5 w-2.5": size === "lg",
              "h-3 w-3": size === "xl",
            })}
          ></div>
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      <label
        htmlFor={id}
        className={cx("block text-base text-gray-700", {
          "text-sm": size === "sm",
          "text-base": size === "md",
          "text-lg": size === "lg",
          "text-xl": size === "xl",
        })}
      >
        {label}
      </label>
    </div>
  );
}

export function Group({ value, onChange, className, children }) {
  return (
    <RadioGroupPrimitive.Root
      className={className}
      value={value}
      onValueChange={onChange}
    >
      {children}
    </RadioGroupPrimitive.Root>
  );
}
