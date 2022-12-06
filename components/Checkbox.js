import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import cx from "clsx";
// import { CheckIcon } from "@radix-ui/react-icons";

const CheckboxDemo = ({ color = "blue", disabled = true }) => (
  <div className="flex items-center space-x-3">
    <Checkbox.Root
      disabled={disabled}
      className={cx(
        "flex items-center justify-center ",
        "h-5 w-5 rounded border border-gray-300",
        "focus:outline-none ",
        {
          "text-white": !disabled,
          "focus:ring-2 focus:ring-blue-300 data-[state='checked']:bg-blue-500":
            color === "blue" && !disabled,
          "text-gray-500 bg-gray-300 cursor-not-allowed opacity-50": disabled,
        },
      )}
      id="c1"
      checked
    >
      <Checkbox.Indicator>
        <svg
          viewBox="0 0 12 10"
          className="h-3 w-3 fill-none stroke-current stroke-2"
        >
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </svg>
        {/* <svg
          viewBox="0 0 24 24"
          className="h-3 w-3 fill-none stroke-current stroke-2"
        >
          <line x1="21" x2="3" y1="12" y2="12"></line>
        </svg> */}
      </Checkbox.Indicator>
    </Checkbox.Root>
    <label className="Label" htmlFor="c1">
      Accept terms and conditions.
    </label>
  </div>
);

export default CheckboxDemo;
