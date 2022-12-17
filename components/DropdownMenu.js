import React, { createContext, useContext, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import cx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const DropdownCtx = createContext(false);

export const Trigger = DropdownMenu.Trigger;
export const Group = DropdownMenu.Group;

function Arrow() {
  return (
    <DropdownMenu.Arrow asChild>
      <div className="relative h-[7px] w-[13px]">
        <div
          className={cx(
            "absolute h-2 w-2 rotate-45 bg-white",
            "border-r border-b border-gray-300 border-opacity-50",
            "top-[-3px] left-0 right-0 ml-auto mr-auto",
          )}
        ></div>
      </div>
    </DropdownMenu.Arrow>
  );
}

export function Root(props) {
  let [open, setOpen] = useState(false);
  return (
    <DropdownCtx.Provider value={{ open, setOpen }}>
      <DropdownMenu.Root open={open} onOpenChange={(value) => setOpen(value)}>
        {props.children}
      </DropdownMenu.Root>
    </DropdownCtx.Provider>
  );
}

export const Content = React.forwardRef(function Button(props, forwardedRef) {
  const { open } = useContext(DropdownCtx);
  return (
    <AnimatePresence>
      {open ? (
        <DropdownMenu.Portal forceMount className="relative">
          <DropdownMenu.Content
            asChild
            {...props}
            align="start"
            ref={forwardedRef}
            className="rounded bg-white px-0.5 py-0.5 shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.15, ease: "easeOut" },
              }}
              exit={{
                opacity: 0,
                scale: 0.97,
                transition: { duration: 0.1, ease: "easeIn" },
              }}
            >
              {props.children}
              <Arrow></Arrow>
            </motion.div>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      ) : null}
    </AnimatePresence>
  );
});
export function Item({ disabled, icon, color = "default", ...props }) {
  return (
    <DropdownMenu.Item
      forceMount
      disabled={disabled}
      className={cx(
        "flex items-center space-x-2 rounded-sm px-3 py-2",
        "cursor-pointer  text-sm focus:outline-none",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        color === "default" && [
          "text-gray-900",
          "data-[highlighted]:bg-sky-500 data-[highlighted]:text-white",
        ],
        color === "red" && [
          "text-red-600",
          "data-[highlighted]:bg-red-500 data-[highlighted]:text-white",
        ],
      )}
    >
      {icon ? <div className="h-4 w-4 ">{icon}</div> : null}

      <div>{props.children}</div>
    </DropdownMenu.Item>
  );
}

export function Label(props) {
  return (
    <DropdownMenu.Label forceMount className="mt-1.5 mb-2 flex items-center px-3 text-xs font-semibold text-gray-500 ">
      {props.children}
    </DropdownMenu.Label>
  );
}

export function Separator() {
  return (
    <DropdownMenu.Separator forceMount className="-mx-1 my-2 h-[1px] bg-gray-300"></DropdownMenu.Separator>
  );
}
