import React from "react";
import * as DropdownMenu from "../components/DropdownMenu";
import { Button } from "../components/Button";
import {
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
function Page() {
  return (
    <div className="p-20">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Button>Test</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Group>
            <DropdownMenu.Label>Application</DropdownMenu.Label>
            <DropdownMenu.Item icon={<Cog6ToothIcon />}>
              Account Settings
            </DropdownMenu.Item>
            <DropdownMenu.Item icon={<Cog6ToothIcon />}>Support</DropdownMenu.Item>
          </DropdownMenu.Group>

          <DropdownMenu.Separator></DropdownMenu.Separator>
          <DropdownMenu.Group>
            <DropdownMenu.Label>Danger Zone</DropdownMenu.Label>
            <DropdownMenu.Item icon={<Cog6ToothIcon />}>License</DropdownMenu.Item>
            <DropdownMenu.Item
              color="red"
              icon={<ArrowLeftOnRectangleIcon></ArrowLeftOnRectangleIcon>}
            >
              Sign out
            </DropdownMenu.Item>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      
    </div>
  );
}

export default Page;
