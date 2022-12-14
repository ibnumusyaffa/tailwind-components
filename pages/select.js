import React from "react";
import Select from "../components/Select";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
function Page() {
  return (
    <div>
      <div className="w-1/3 space-y-5 p-5">
        <Select
          leftIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          variant="outline"
          size="xs"
          placeholder="Test"
          type="text"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>Test</option>
        </Select>
        <Select
          leftIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          variant="outline"
          size="sm"
          placeholder="Test"
          type="text"
        >
          <option>Test</option>
        </Select>
        <Select
          leftOutside="@"
          rightOutside="@"
          variant="filled"
          size="xl"
          placeholder="Testt"
          type="text"
        >
          <option>Test</option>
        </Select>
        <Select
          leftIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          variant="outline"
          size="lg"
          placeholder="Test"
          type="text"
        >
          <option>Test</option>
        </Select>
        <Select
          leftIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          variant="outline"
          size="xl"
          placeholder="Test"
          type="text"
        >
          <option>Test</option>
        </Select>
      </div>
      <div className="w-1/3 space-y-5 p-5">
        <Select
          leftIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          variant="filled"
          size="xs"
          placeholder="Test"
          type="text"
        >
          <option>Test</option>
        </Select>
        <Select
          leftIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          variant="filled"
          size="sm"
          placeholder="Test"
          type="text"
        >
          <option>Test</option>
        </Select>
        <Select
          leftIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          variant="filled"
          size="md"
          placeholder="Testt"
          type="text"
        >
          <option>Test</option>
        </Select>
        <Select
          leftIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          variant="filled"
          size="lg"
          placeholder="Test"
          type="text"
        >
          <option>Test</option>
        </Select>
        <Select
          leftIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          variant="filled"
          size="xl"
          placeholder="Test"
          type="text"
        >
          <option>Test</option>
        </Select>
      </div>
    </div>
  );
}

export default Page;
