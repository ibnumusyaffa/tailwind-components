import React from "react";
import clsx from "clsx";

function variantStyles({ variant, color }) {
  switch (variant) {
    case "solid":
      return {
        "bg-blue-500 text-white": color === "blue",
        "bg-red-500 text-white": color === "red",
        "bg-green-500 text-white": color === "green",
        "bg-yellow-500 text-white": color === "yellow",
        "bg-pink-500 text-white": color === "pink",
        "bg-gray-500 text-white": color === "gray",
        "bg-purple-500 text-white": color === "purple",
      };
    case "light":
      return {
        "bg-blue-100 text-blue-700": color === "blue",
        "bg-red-100 text-red-700": color === "red",
        "bg-green-100 text-green-700": color === "green",
        "bg-yellow-100 text-yellow-700": color === "yellow",
        "bg-pink-100 text-pink-700": color === "pink",
        "bg-gray-100 text-gray-700": color === "gray",
        "bg-purple-100 text-purple-700": color === "purple",
      };
    case "outline":
      return {
        "text-blue-600 border border-blue-600": color === "blue",
        "text-red-600 border border-red-600": color === "red",
        "text-green-600 border border-green-600": color === "green",

        "text-yellow-600 border border-yellow-600": color === "yellow",
        "text-pink-600 border border-pink-600": color === "pink",
        "text-gray-600 border border-gray-600": color === "gray",
        "text-purple-600 border border-purple-600": color === "purple",
      };
    default:
      return null;
  }
}

function dotStyles({ variant, color }) {
  switch (variant) {
    case "solid":
      return {
        "bg-white": true,
      };
    case "light":
    case "outline":
      return {
        "bg-blue-500": color === "blue",
        "bg-red-500": color === "red",
        "bg-green-500": color === "green",
        "bg-yellow-500": color === "yellow",
        "bg-pink-500": color === "pink",
        "bg-gray-500": color === "gray",
        "bg-purple-500": color === "purple",
      };
    default:
      return null;
  }
}

function Badge({
  size = "sm",
  variant = "filled",
  color = "blue",
  rounded = "sm",
  children,
  fullWidth = false,
  withDot = false,
  ...props
}) {
  let style = clsx(
    `transition-all duration-200 ease-out focus:outline-none font-semibold px-1.5 flex items-center justify-center space-x-1.5`,
    variantStyles({ variant, color }),
    {
      "rounded-none": rounded === "none",
      "rounded": rounded === "sm",
      "rounded-md": rounded === "md",
      "rounded-lg": rounded === "lg",
      "rounded-xl": rounded === "xl",
      "rounded-full": rounded === "full",
    },
    {
      "h-[18px] text-[11px]": size === "xs",
      "h-[20px] text-[12px]": size === "sm",
      "h-[24px] text-[13px]": size === "md",
      "h-[28px] text-[14px]": size === "lg",
      "h-[34px] text-[15px]": size === "xl",
    },
    {
      "w-full": fullWidth,
    },
  );

  return (
    <span cl className={style} {...props}>
      {withDot ? (
        <div
          className={clsx(
            "rounded-full",
            "h-1.5 w-1.5",
            dotStyles({ variant, color }),
          )}
        ></div>
      ) : null}

      <div>{children}</div>
    </span>
  );
}

export default Badge;
