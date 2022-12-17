import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import cx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

function Button1() {
  let [open, setOpen] = useState(false);
  return (
    <div className="p-10">
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <button
            className="h-10 border border-gray-300 px-3"
            size="large"
            onClick={() => setOpen(!open)}
          >
            Edit profile
          </button>
        </Dialog.Trigger>
        <AnimatePresence>
          {open ? (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild forceMount>
                <motion.div
                  key="modal"
                  className="fixed inset-0 bg-black bg-opacity-50"
                  initial={{
                    opacity: 0,
                  
                  }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, ease: "easeIn" },
                  }}
                ></motion.div>
              </Dialog.Overlay>

              <Dialog.Content asChild forceMount>
                <motion.div
                  key="content"
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.97,
                    transition: { duration: 0.15, ease: "easeIn" },
                  }}
                  className={cx(
                    "fixed z-50",
                    "h-[500px] w-[600px]",
                    "top-[190px] left-[50%] -ml-[300px] -mt-[120px]",
                    "h-40 rounded-lg bg-white p-5",
                    "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
                  )}
                >
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          ) : null}
        </AnimatePresence>
      </Dialog.Root>
    </div>
  );
}

function Page() {
  return (
    <div>
      <Button1></Button1>
    </div>
  );
}

export default Page;
