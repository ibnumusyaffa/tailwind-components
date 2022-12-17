import React, { useState } from "react";
import { Button } from "../components/Button";
import * as Tooltip from "../components/Tooltip";

function Page() {
  let [open, setOpen] = useState(false);
  return (
    <div className="flex space-x-5 p-32">
      <Tooltip.Root open={open} onOpenChange={(value) => setOpen(value)}>
        <Tooltip.Trigger>
          <Button>Hover</Button>
        </Tooltip.Trigger>
        <Tooltip.Content color="light">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Tooltip.Content>
      </Tooltip.Root>

      <Tooltip.Root open={open} onOpenChange={(value) => setOpen(value)}>
        <Tooltip.Trigger>
          <Button>Hover</Button>
        </Tooltip.Trigger>
        <Tooltip.Content color="dark">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Tooltip.Content>
      </Tooltip.Root>
    </div>
  );
}
export default Page;
