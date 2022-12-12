import React from "react";
import { Button, ButtonGroup } from "../components/Button";
import {
  ArrowLongRightIcon,
  ArrowLongLeftIcon,
} from "@heroicons/react/24/solid";

function Page() {
  return (
    <React.Fragment>
      <div className="px-4 py-3">
        <div className="text-lg">Variant</div>
        <div className="mt-2 flex space-x-5">
          <Button variant="solid">Filled</Button>
          <Button variant="light">Light</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="subtle">Subtle</Button>
        </div>
      </div>
      <div className="px-4 py-3">
        <div className="text-lg">State</div>
        <div className="mt-2 flex space-x-5">
          <Button>default</Button>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>

      <div className="px-4 py-3">
        <div className="text-lg">Size</div>
        <div className="mt-2 flex space-x-5">
          <Button size="xs" variant="light">
            Button xs
          </Button>
          <Button size="sm" variant="light">
            Button sm
          </Button>
          <Button size="md" variant="light">
            Button md
          </Button>
          <Button size="lg" variant="light">
            Button lg
          </Button>
          <Button size="xl" variant="light">
            Button xl
          </Button>
        </div>
      </div>
      <div className="px-4 py-3">
        <div className="text-lg">With Icon</div>
        <div className="mt-2 flex space-x-5">
          <Button
            variant="light"
            leftIcon={<ArrowLongLeftIcon></ArrowLongLeftIcon>}
          >
            Left Icon
          </Button>
          <Button
            variant="light"
            leftIcon={<ArrowLongLeftIcon></ArrowLongLeftIcon>}
            rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          >
            Left Right Icon
          </Button>
          <Button
            variant="light"
            rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          >
            Right icon
          </Button>
        </div>
        <div className="first-of-type:rad mt-4 flex space-x-5 bg-gray-100">
          <Button
            variant="outline"
            leftIcon={<ArrowLongLeftIcon></ArrowLongLeftIcon>}
          >
            Left Icon
          </Button>
          <Button
            variant="outline"
            leftIcon={<ArrowLongLeftIcon></ArrowLongLeftIcon>}
            rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          >
            Left Right Icon
          </Button>
          <Button
            variant="outline"
            rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          >
            Right icon
          </Button>
        </div>
        <div className="mt-4 flex space-x-5">
          <Button
            variant="solid"
            leftIcon={<ArrowLongLeftIcon></ArrowLongLeftIcon>}
          >
            Left Icon
          </Button>
          <Button
            variant="solid"
            leftIcon={<ArrowLongLeftIcon></ArrowLongLeftIcon>}
            rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          >
            Left Right Icon
          </Button>
          <Button
            variant="solid"
            rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          >
            Right icon
          </Button>
        </div>
        <div className="mt-4 flex space-x-5">
          <Button
            variant="subtle"
            leftIcon={<ArrowLongLeftIcon></ArrowLongLeftIcon>}
          >
            Left Icon
          </Button>
          <Button
            variant="subtle"
            leftIcon={<ArrowLongLeftIcon></ArrowLongLeftIcon>}
            rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          >
            Left Right Icon
          </Button>
          <Button
            variant="subtle"
            rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          >
            Right icon
          </Button>
        </div>
      </div>

      <div className="px-4 py-3">
        <div className="text-lg">Colors</div>
        <div className="mt-2 flex w-1/2 space-x-5">
          <Button fullWidth color="sky">
            Sky
          </Button>
          <Button fullWidth color="red">
            Red
          </Button>
          <Button fullWidth color="green">
            Green
          </Button>
          <Button fullWidth color="pink">
            Pink
          </Button>
        </div>
      </div>

      <div className="p-10 ">
        <ButtonGroup>
          <Button
            
            variant="outline"
            leftIcon={<ArrowLongLeftIcon></ArrowLongLeftIcon>}
          >
            Left Icon
          </Button>
          <Button
            variant="outline"
            leftIcon={<ArrowLongLeftIcon></ArrowLongLeftIcon>}
            rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          >
            Left Right Icon
          </Button>
          <Button
            variant="outline"
            rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          >
            Right icon
          </Button>
        </ButtonGroup>
      </div>
    </React.Fragment>
  );
}

export default Page;
