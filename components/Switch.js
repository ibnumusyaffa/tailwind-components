import React from "react";
import clsx from "clsx";
function Switch({ color = "blue", size = "lg", disabled, ...props }) {
  let [selected, setSelected] = React.useState(false);
  return (
    <label
      className={clsx(
        "relative flex h-8 w-[62px] cursor-pointer items-center rounded-full",
        {
          "bg-red-500": selected,
          "bg-gray-200": !selected,
        },
      )}
    >
      <input
        type="checkbox"
        className="peer sr-only"
        disabled={disabled}
        onChange={(e) => setSelected(e.target.checked)}
        {...props}
      />
      <div className="relative flex h-8 w-[62px] items-center justify-start rounded-full bg-blue-200 transition-all hover:justify-end">
        <div
          className={clsx(
            "relative h-6 w-6  rounded-full bg-white",
          )}
        ></div>
      </div>
    </label>
  );
}

export default Switch;
