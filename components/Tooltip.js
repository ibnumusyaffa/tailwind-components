import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import React, { createContext, useContext, useState } from "react";
const TooltipCtx = createContext(false);
import { motion, AnimatePresence } from "framer-motion";
import cx from "clsx";

export function Trigger({ children }) {
  return (
    <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
  );
}

export function Root({ children }) {
  let [open, setOpen] = useState(false);
  return (
    <span>
      <TooltipCtx.Provider value={{ open, setOpen }}>
        <TooltipPrimitive.Provider>
          <TooltipPrimitive.Root
            open={open}
            onOpenChange={(value) => setOpen(value)}
          >
            {children}
          </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
      </TooltipCtx.Provider>
    </span>
  );
}

export function Content({ children, color = "light" }) {
  const { open } = useContext(TooltipCtx);
  return (
    <AnimatePresence>
      {open ? (
        <TooltipPrimitive.Content forceMount side="bottom"  sideOffset={4}>
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
            className={cx("relative rounded px-2 py-2", {
              "bg-gray-900  text-white": color === "dark",
              "border border-gray-300 border-opacity-75 bg-white text-gray-700 shadow-sm":
                color === "light",
            })}
          >
            <TooltipPrimitive.Arrow forceMount asChild>
              <div className="relative h-[4px] w-[13px]">
                <div
                  className={cx(
                    "absolute h-2 w-2 rotate-45",
                    " left-0 right-0 ml-auto mr-auto",
                    {
                      "bg-gray-900 top-[-4px]": color === "dark",
                      "border-r top-[-3px] border-b border-gray-300 border-opacity-75 bg-white":
                        color === "light",
                    },
                  )}
                ></div>
              </div>
            </TooltipPrimitive.Arrow>
            <span className="block text-sm  w-40">{children}</span>
          </motion.div>
        </TooltipPrimitive.Content>
      ) : null}
    </AnimatePresence>
  );
}
