import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import clsx from "clsx";

const CheckboxDemo = ({
  color = "green",
  disabled = false,
  name,
  id,
  label,
  value,
  size = "sm",
  checked,
  defaultChecked,
  onCheckedChange,
}) => {
  let iconStyle = clsx({
    "h-2 w-2": size === "xs",
    "h-3 w-3": size === "sm",
    "h-4 w-4": size === "md",
    "h-5 w-5": size === "lg",
    "h-6 w-6": size === "xl",
  });
  return (
    <div className="flex items-center space-x-3">
      <Checkbox.Root
        disabled={disabled}
        className={clsx(
          "flex items-center justify-center rounded data-[state=unchecked]:border border-gray-300 text-white focus:outline-none focus:ring-2",
          {
            "h-4 w-4": size === "xs",
            "h-5 w-5": size === "sm",
            "h-6 w-6": size === "md",
            "h-7 w-7": size === "lg",
            "h-8 w-8": size === "xl",
          },
          {
            "text-white": !disabled,
            "bg-gray-300 text-gray-800 opacity-50": disabled,
            "focus:ring-blue-300 data-[state=checked]:bg-blue-500 data-[state=indeterminate]:bg-blue-500":
              color === "blue" && !disabled,
            "focus:ring-green-300 data-[state=checked]:bg-green-500 data-[state=indeterminate]:bg-green-500":
              color === "green" && !disabled,
          },
        )}
        id={id}
        checked={checked}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
      >
        <Checkbox.Indicator>
          {checked === "indeterminate" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 32 6"
              className={iconStyle}
            >
              <rect width="32" height="6" fill="currentColor" rx="3"></rect>
            </svg>
          ) : null}
          {checked === true ? (
            <svg
              viewBox="0 0 12 10"
              className={`${iconStyle} fill-none stroke-current stroke-2`}
            >
              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
            </svg>
          ) : null}
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default CheckboxDemo;
