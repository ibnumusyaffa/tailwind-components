import React from "react";
import clsx from "clsx";
import { XMarkIcon } from "@heroicons/react/24/solid";
function CloseButton({ variant, color, onClose }) {
  return (
    <div className="ml-5 flex w-6 justify-center py-1">
      <button
        className={clsx("h-5 w-5 rounded transition-all", [
          variant === "solid"
            ? {
                "text-white": true,
                "hover:bg-yellow-500 active:bg-yellow-600": color === "yellow",
                "hover:bg-red-500  active:bg-red-600": color === "red",
                "hover:bg-green-500 active:bg-green-600": color === "green",
                "hover:bg-blue-500 active:bg-blue-600": color === "blue",
                "hover:bg-gray-500 active:bg-gray-600": color === "gray",
              }
            : null,
          variant === "light"
            ? {
                "text-yellow-800 hover:bg-yellow-200 active:bg-yellow-300":
                  color === "yellow",
                "text-red-800 hover:bg-red-200 active:bg-red-300":
                  color === "red",
                "text-green-800 hover:bg-green-200 active:bg-green-300":
                  color === "green",
                "text-blue-800 hover:bg-blue-200 active:bg-blue-300":
                  color === "blue",
                "text-gray-800 hover:bg-gray-200 active:bg-gray-300":
                  color === "gray",
              }
            : null,
        ])}
        onClose={onClose}
      >
        <XMarkIcon></XMarkIcon>
      </button>
    </div>
  );
}

function Icon({ icon, color, variant }) {
  return (
    <div className="w-8 py-1">
      <div
        className={clsx(
          "h-5 w-5",
          variant === "light"
            ? {
                "text-yellow-500": color === "yellow",
                "text-red-500": color === "red",
                "text-green-500": color === "green",
                "text-blue-500": color === "blue",
                "text-gray-500": color === "gray",
              }
            : null,
          variant === "solid" ? "text-white" : null,
        )}
      >
        {icon}
      </div>
    </div>
  );
}

function Alert({
  color = "red",
  title,
  children,
  icon,
  withCloseButton,
  variant = "light",
  show = true,
  onClose,
}) {
  if (!show) {
    return null;
  }

  const rootStyle = clsx("flex rounded p-3", [
    variant === "solid"
      ? {
          "bg-yellow-500": color === "yellow",
          "bg-red-500": color === "red",
          "bg-green-500": color === "green",
          "bg-blue-500": color === "blue",
          "bg-gray-500": color === "gray",
        }
      : null,
    variant === "light"
      ? {
          "bg-yellow-50": color === "yellow",
          "bg-red-50": color === "red",
          "bg-green-50": color === "green",
          "bg-blue-50": color === "blue",
          "bg-gray-50": color === "gray",
        }
      : null,
  ]);

  const textStyle = clsx(
    "flex-1 ",
    variant === "light"
      ? {
          "text-yellow-800": color === "yellow",
          "text-red-800": color === "red",
          "text-green-800": color === "green",
          "text-blue-800": color === "blue",
          "text-gray-800": color === "gray",
        }
      : null,
    variant === "solid" ? "text-white" : null,
  );
  return (
    <div className={rootStyle}>
      {icon ? <Icon icon={icon} variant={variant} color={color}></Icon> : null}

      <div className={textStyle}>
        {title ? <div className="font-semibold">{title}</div> : null}
        {children ? <div className="text-sm">{children}</div> : null}
      </div>
      {withCloseButton ? (
        <CloseButton
          variant={variant}
          color={color}
          onClose={onClose}
        ></CloseButton>
      ) : null}
    </div>
  );
}

export default Alert;
