import React from "react";
import { cva } from "cva";
import clsx from "clsx";
function Spinner() {
  return (
    <div role="status">
      <svg
        aria-hidden="true"
        className="animate-spin"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          opacity="0.25"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentColor"
          opacity="0.75"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
export default React.forwardRef(function Button({
  size = "md",
  variant = "solid",
  color,
  rounded,
  children,
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled,
  loading = false,
  ...props
}) {
  const buttonStyle = cva("transition-all focus:outline-none font-semibold", {
    variants: {
      variant: {
        solid: "text-white focus:ring",
        light: "focus:ring-2",
        outline: "text-white focus:ring-2",
        subtle: "text-white focus:ring-2",
      },
      size: {
        xs: "h-6 text-xs",
        sm: "h-8 text-sm",
        md: "h-10 text-base",
        lg: "h-14 text-lg",
        xl: "h-16 text-xl",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    compoundVariants: [
      //blue
      {
        variant: "solid",
        color: "sky",
        class:
          "bg-sky-500 enabled:hover:bg-sky-600 enabled:active:bg-sky-700  focus:ring-sky-300",
      },
      {
        variant: "light",
        color: "sky",
        class:
          "bg-sky-50 enabled:hover:bg-sky-100 enabled:active:bg-sky-200 focus:ring-sky-300 text-sky-600",
      },
      {
        variant: "outline",
        color: "sky",
        class:
          "enabled:hover:bg-sky-50 enabled:active:bg-sky-100 focus:ring-sky-200 text-sky-600 border border-sky-600",
      },
      {
        variant: "subtle",
        color: "sky",
        className:
          "enabled:hover:bg-sky-50 enabled:active:bg-sky-100 focus:ring-sky-200 text-sky-600",
      },
      //red
      {
        variant: "solid",
        color: "red",
        class:
          "bg-red-500 enabled:hover:bg-red-600 enabled:active:bg-red-700  focus:ring-red-300",
      },
      {
        variant: "light",
        color: "red",
        class:
          "bg-red-50 enabled:hover:bg-red-100 enabled:active:bg-red-200 focus:ring-red-300 text-red-600",
      },
      {
        variant: "outline",
        color: "red",
        class:
          "enabled:hover:bg-red-50 enabled:active:bg-red-100 focus:ring-red-200 text-red-600 border border-red-600",
      },
      {
        variant: "subtle",
        color: "red",
        className:
          "enabled:hover:bg-red-50 enabled:active:bg-red-100 focus:ring-red-200 text-red-600",
      },
      //green
      {
        variant: "solid",
        color: "green",
        class:
          "bg-green-500 enabled:hover:bg-green-600 enabled:active:bg-green-700  focus:ring-green-300",
      },
      {
        variant: "light",
        color: "green",
        class:
          "bg-green-50 enabled:hover:bg-green-100 enabled:active:bg-green-200 focus:ring-green-300 text-green-600",
      },
      {
        variant: "outline",
        color: "green",
        class:
          "enabled:hover:bg-green-50 enabled:active:bg-green-100 focus:ring-green-200 text-green-600 border border-green-600",
      },
      {
        variant: "subtle",
        color: "green",
        className:
          "enabled:hover:bg-green-50 enabled:active:bg-green-100 focus:ring-green-200 text-green-600",
      },
      //pink
      {
        variant: "solid",
        color: "pink",
        class:
          "bg-pink-500 enabled:hover:bg-pink-600 enabled:active:bg-pink-700 focus:ring-pink-300",
      },
      {
        variant: "light",
        color: "pink",
        class:
          "bg-pink-50 enabled:hover:bg-pink-100 enabled:active:bg-pink-200 focus:ring-pink-300 text-pink-600",
      },
      {
        variant: "outline",
        color: "pink",
        class:
          "enabled:hover:bg-pink-50 enabled:active:bg-pink-100 focus:ring-pink-200 text-pink-600 border border-pink-600",
      },
      {
        variant: "subtle",
        color: "pink",
        className:
          "enabled:hover:bg-pink-50 enabled:active:bg-pink-100 focus:ring-pink-200 text-pink-600",
      },
    ],
    defaultVariants: {
      variant: "solid",
      color: "red",
      fullWidth: false,
      disabled: false,
      size: "md",
      rounded: "sm",
    },
  });

  let iconStyle = clsx({
    "h-3 w-3": size === "xs",
    "h-4 w-4": size === "sm",
    "h-5 w-5": size === "md",
    "h-6 w-6": size === "lg",
    "h-7 w-7": size === "xl",
  });
  return (
    <button
      className={buttonStyle({
        variant,
        color,
        fullWidth,
        disabled,
        size,
        rounded,
      })}
      disabled={disabled || loading}
      {...props}
    >
      <div className="flex h-full items-center justify-center  space-x-1.5 px-3">
        {loading ? (
          <div className={iconStyle}>
            <Spinner></Spinner>
          </div>
        ) : null}
        {leftIcon && !loading ? (
          <div className={iconStyle}>{leftIcon}</div>
        ) : null}
        {children ? <div>{children}</div> : null}

        {rightIcon ? <div className={iconStyle}>{rightIcon}</div> : null}
      </div>
    </button>
  );
});
