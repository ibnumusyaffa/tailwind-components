import React, { createContext, useContext } from "react";
import clsx from "clsx";
import { useTheme } from "../context/ThemeProvider";
import Spinner from "./Spinner"

function variantStyles({ variant, color }) {
  switch (variant) {
    case "solid":
      return {
        "focus:ring text-white": true,
        "bg-sky-500 enabled:hover:bg-sky-600 enabled:active:bg-sky-700  focus:ring-sky-300":
          color === "sky",
        "bg-red-500 enabled:hover:bg-red-600 enabled:active:bg-red-700  focus:ring-red-300":
          color === "red",
        "bg-green-500 enabled:hover:bg-green-600 enabled:active:bg-green-700 focus:ring-green-300":
          color === "green",
        "bg-pink-500 enabled:hover:bg-pink-600 enabled:active:bg-pink-700  focus:ring-pink-300":
          color === "pink",
      };
    case "light":
      return {
        "focus:ring-2": true,
        "bg-sky-50 enabled:hover:bg-sky-100 enabled:active:bg-sky-200 focus:ring-sky-300 text-sky-600":
          color === "sky",
        "bg-red-50 enabled:hover:bg-red-100 enabled:active:bg-red-200 focus:ring-red-300 text-red-600":
          color === "red",
        "bg-green-50 enabled:hover:bg-green-100 enabled:active:bg-green-200 focus:ring-green-300 text-green-600":
          color === "green",
        "bg-pink-50 enabled:hover:bg-pink-100 enabled:active:bg-pink-200 focus:ring-pink-300 text-pink-600":
          color === "pink",
      };
    case "outline":
      return {
        "text-white focus:ring-2": true,
        "enabled:hover:bg-sky-50 enabled:active:bg-sky-100 focus:ring-sky-200 text-sky-600 border border-sky-600":
          color === "sky",
        "enabled:hover:bg-red-50 enabled:active:bg-red-100 focus:ring-red-200 text-red-600 border border-red-600":
          color === "red",
        "enabled:hover:bg-green-50 enabled:active:bg-green-100 focus:ring-green-200 text-green-600 border border-green-600":
          color === "green",
        "enabled:hover:bg-pink-50 enabled:active:bg-pink-100 focus:ring-pink-200 text-pink-600 border border-pink-600":
          color === "pink",
      };
    case "subtle":
      return {
        "text-white focus:ring-2": true,
        "enabled:hover:bg-sky-50 enabled:active:bg-sky-100 focus:ring-sky-200 text-sky-600":
          color === "sky",
        "enabled:hover:bg-red-50 enabled:active:bg-red-100 focus:ring-red-200 text-red-600":
          color === "red",
        "enabled:hover:bg-green-50 enabled:active:bg-greeb-100 focus:ring-green-200 text-green-600":
          color === "green",
        "enabled:hover:bg-pink-50 enabled:active:bg-greeb-100 focus:ring-pink-200 text-pink-600":
          color === "pink",
      };
    default:
      return null;
  }
}

const ButtonGroupCtx = createContext(false);

export const Button = React.forwardRef(function Button(
  {
    size = "md",
    variant = "solid",
    color,
    rounded = "sm",
    children,
    leftIcon,
    rightIcon,
    onClick,
    fullWidth = false,
    disabled,
    loading = false,
    ...props
  },
  ref,
) {
  const theme = useTheme();
  const isButtonGroup = useContext(ButtonGroupCtx);

  if (!color) {
    color = theme.defaultColor;
  }
  if (!rounded) {
    rounded = theme.defaultRadius;
  }
  let buttonStyle = clsx(
    // base style
    "transition-all focus:outline-none font-semibold",
    {
      "opacity-50 cursor-not-allowed": disabled,
      "w-full": fullWidth,
    },
    variantStyles({ variant, color }),
    // rounded style
    {
      "rounded-none": rounded === "none",
      "rounded": rounded === "sm",
      "rounded-md": rounded === "md",
      "rounded-lg": rounded === "lg",
      "rounded-xl": rounded === "xl",
      "rounded-full": rounded === "full",
    },
    // size style
    {
      "h-6 text-xs": size === "xs",
      "h-8 text-sm": size === "sm",
      "h-10 text-base": size === "md",
      "h-14 text-lg": size === "lg",
      "h-16 text-xl": size === "xl",
    },
    //button group
    {
      "first-of-type:!rounded-tr-none first-of-type:!rounded-br-none":
        isButtonGroup,
      "last-of-type:!rounded-tl-none last-of-type:!rounded-bl-none":
        isButtonGroup,
      "[&:not(:first-of-type):not(:last-of-type)]:!rounded-none": isButtonGroup,
      "[&:not(:first-of-type):not(:last-of-type)]:!border-r-0 ": isButtonGroup,
      "[&:not(:first-of-type):not(:last-of-type)]:!border-l-0": isButtonGroup,
    },
  );

  let iconStyle = clsx({
    "h-3 w-3": size === "xs",
    "h-4 w-4": size === "sm",
    "h-5 w-5": size === "md",
    "h-6 w-6": size === "lg",
    "h-7 w-7": size === "xl",
  });
  return (
    <button
      ref={ref}
      disabled={disabled}
      className={buttonStyle}
      onClick={onClick}
      {...props}
    >
      <div className="flex h-full items-center justify-center  space-x-1.5 rounded-tr-none px-3">
        {loading ? (
          <div className={iconStyle}>
            <Spinner></Spinner>
          </div>
        ) : null}
        {leftIcon && !loading ? (
          <div className={iconStyle}>{leftIcon}</div>
        ) : null}
        {children ? (
          <div>
            {children}
          </div>
        ) : null}

        {rightIcon ? <div className={iconStyle}>{rightIcon}</div> : null}
      </div>
    </button>
  );
});

export function ButtonGroup({ children }) {
  return (
    <ButtonGroupCtx.Provider value={true}>
      <div className="flex">{children}</div>
    </ButtonGroupCtx.Provider>
  );
}
