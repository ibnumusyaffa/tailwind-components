import React from "react";
import cx from "clsx";

function ActionButton({ children, color = "gray" }) {
  return (
    <button
      className={cx(
        "h-7 w-7 rounded p-1 outline-none transition-all",
        "focus:outline-none focus-visible:ring-2 ",
        {
          "text-gray-600 hover:bg-gray-100 focus-visible:ring-gray-300 active:bg-gray-200":
            color === "gray",
          "text-red-600 hover:bg-red-100 focus-visible:ring-red-300 active:bg-red-200":
            color === "red",
          "text-green-600 hover:bg-green-100 focus-visible:ring-green-300 active:bg-green-200":
            color === "green",
        },
      )}
    >
      {children}
    </button>
  );
}

export default ActionButton;
