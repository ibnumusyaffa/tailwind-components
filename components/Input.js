import React from "react";
import clsx from "clsx";

function Input({
  error,
  disabled,
  leftOutside,
  leftIcon,
  rightOutside,
  rightIcon,
  size = "md",
  color = "sky",
  rounded = "sm",
  variant = "outline",
  ...props
}) {
  return (
    <div className="relative  flex">
      {leftOutside ? (
        <div
          className={clsx(
            "flex items-center justify-center text-gray-700",
            {
              "border-t border-l border-b border-gray-300 bg-gray-200":
                variant === "outline",
              "bg-gray-100": variant === "filled",
            },
            {
              "px-1.5 text-xs": size === "xs",
              "px-2 text-sm": size === "sm",
              "px-3 text-base": size === "md",
              "px-3.5 text-lg": size === "lg",
              "px-4 text-xl": size === "xl",
            },
            {
              "rounded-none": rounded === "none",
              "rounded-l": rounded === "sm",
              "rounded-l-md": rounded === "md",
              "rounded-l-lg": rounded === "lg",
              "rounded-l-xl": rounded === "xl",
              "rounded-l-full": rounded === "full",
            },
          )}
        >
          {leftOutside}
        </div>
      ) : null}
      {leftIcon ? (
        <div className="absolute left-0 top-0 z-20 flex h-full items-center justify-center px-2 text-gray-700">
          <div
            className={clsx({
              "h-3 w-3": size === "xs",
              "h-4 w-4": size === "sm",
              "h-5 w-5": size === "md",
              "h-6 w-6": size === "lg",
              "h-7 w-7": size === "xl",
            })}
          >
            {leftIcon}
          </div>
        </div>
      ) : null}

      <input
        disabled={disabled}
        className={clsx(
          // base style
          "z-10 w-full flex-1 text-gray-800 outline-none transition-all duration-200 ease-in-out",
          // variant style
          {
            "border-0 bg-gray-100 focus:bg-white focus:ring-2":
              variant === "filled",
            "bg-white-100 border border-gray-300 focus:ring-1":
              variant === "outline",
            "!border border-red-500 ": error,
            "cursor-not-allowed bg-gray-100 opacity-75": disabled,
          },
          //color style
          {
            "focus:ring-blue-500 ": color === "blue",
            "focus:ring-sky-500 ": color === "sky",
          },
          //size style
          {
            "h-8 text-xs": size === "xs",
            "h-9 text-sm": size === "sm",
            "h-10 text-base": size === "md",
            "h-12 text-lg": size === "lg",
            "h-14 text-xl": size === "xl",
          },
          {
            // rounded all side when leftOutside and rightOutside is false
            "rounded-none": rounded === "none",
            "rounded": rounded === "sm",
            "rounded-md": rounded === "md",
            "rounded-lg": rounded === "lg",
            "rounded-xl": rounded === "xl",
            "rounded-full": rounded === "full",

            "!rounded-r-none": rightOutside,
            "!rounded-l-none": leftOutside,

            //add padding to left side when leftIcon is true
            "pl-3": !leftIcon,
            "pl-7": size === "xs" && leftIcon,
            "pl-8": size === "sm" && leftIcon,
            "pl-9": size === "md" && leftIcon,
            "pl-10": size === "lg" && leftIcon,
            "pl-11": size === "xl" && leftIcon,

            //add padding to right side when righticon is true
            "pr-3": !leftIcon,
            "pr-7": size === "xs" && rightIcon,
            "pr-8": size === "sm" && rightIcon,
            "pr-9": size === "md" && rightIcon,
            "pr-10": size === "lg" && rightIcon,
            "pr-11": size === "xl" && rightIcon,
          },
        )}
        {...props}
      />

      {rightIcon ? (
        <div className="absolute right-0 top-0 z-20 flex h-full items-center justify-center px-2 text-gray-700">
          <div
            className={clsx({
              "h-3 w-3": size === "xs",
              "h-4 w-4": size === "sm",
              "h-5 w-5": size === "md",
              "h-6 w-6": size === "lg",
              "h-7 w-7": size === "xl",
            })}
          >
            {rightIcon}
          </div>
        </div>
      ) : null}

      {rightOutside ? (
        <div
          className={clsx(
            "flex items-center justify-center text-gray-700",
            {
              "border-t border-r border-b border-gray-300 bg-gray-200":
                variant === "outline",
              "bg-gray-100": variant === "filled",
            },
            {
              "px-1.5 text-xs": size === "xs",
              "px-2 text-sm": size === "sm",
              "px-3 text-base": size === "md",
              "px-3.5 text-lg": size === "lg",
              "px-4 text-xl": size === "xl",
            },
            {
              "rounded-none": rounded === "none",
              "rounded-r": rounded === "sm",
              "rounded-r-md": rounded === "md",
              "rounded-r-lg": rounded === "lg",
              "rounded-r-xl": rounded === "xl",
              "rounded-r-full": rounded === "full",
            },
          )}
        >
          {rightOutside}
        </div>
      ) : null}
    </div>
  );
}

export default Input;
