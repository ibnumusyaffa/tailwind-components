import React from "react";
import cx from "clsx";
import * as SwitchPrimitive from "@radix-ui/react-switch";

function Switch({
  size = "md",
  color = "blue",
  defaultChecked,
  checked,
  onCheckedChange,
  disabled,
  required,
  name,
  value,
}) {
  return (
    <SwitchPrimitive.Root
      defaultChecked={defaultChecked}
      checked={checked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      required={required}
      name={name}
      value={value}
      className={cx(
        "relative",
        "rounded-full",
        {
          "opacity-50 cursor-not-allowed": disabled,
        },
        {
          "h-[16px] w-[26px]": size === "xs",
          "h-[20px] w-[34px]": size === "sm",
          "h-[24px] w-[43px]": size === "md",
          "h-[29px] w-[53px]": size === "lg",
          "h-[34px] w-[62px]": size === "xl",
        },
        {
          "focus:outline-none focus:ring-2 focus:ring-blue-300 data-[state='unchecked']:bg-gray-300 data-[state='checked']:bg-blue-500":
            color === "blue",
        },
      )}
    >
      <SwitchPrimitive.Thumb
        className={cx(
          "block transition-transform ",
          "rounded-full bg-white",

          {
            "h-[11px] w-[11px] translate-x-[2px] data-[state='checked']:translate-x-[13px]":
              size === "xs",
            "h-[15px] w-[15px] translate-x-[2px] data-[state='checked']:translate-x-[17px]":
              size === "sm",
            "h-[18px] w-[18px] translate-x-[3px] data-[state='checked']:translate-x-[22px]":
              size === "md",
            "h-[22px] w-[22px] translate-x-[4px] data-[state='checked']:translate-x-[27px]":
              size === "lg",
            "h-[26px] w-[26px] translate-x-[3px] data-[state='checked']:translate-x-[32px]":
              size === "xl",
          },
        )}
      />
    </SwitchPrimitive.Root>
  );
}



export default Switch;
