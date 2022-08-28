import React from 'react';
import Button from '../components/button';
import { PlusIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid';

function Page() {
  let colors = ['sky', 'red', 'green'];
  return (
    <React.Fragment>
      {colors.map((item, index) => {
        return (
          <div className="p-5 space-x-5" key={index}>
            <Button color={item} variant="filled">
              Settings
            </Button>
            <Button color={item} variant="light">
              Settings
            </Button>
            <Button color={item} variant="outline">
              Settings
            </Button>
            <Button color={item} variant="subtle">
              Settings
            </Button>
          </div>
        );
      })}

      {colors.map((item, index) => {
        return (
          <div className="p-5 space-x-5" key={index}>
            <Button color={item} disabled variant="filled">
              Settings
            </Button>
            <Button color={item} disabled variant="light">
              Settings
            </Button>
            <Button color={item} disabled variant="outline">
              Settings
            </Button>
            <Button color={item} disabled variant="subtle">
              Settings
            </Button>
          </div>
        );
      })}

      <div className="p-5 space-x-3">
        <Button color="red" size="xs" variant="light">
          Button xs
        </Button>
        <Button color="red" size="sm" variant="light">
          Button sm
        </Button>
        <Button color="red" size="md" variant="light">
          Button md
        </Button>
        <Button color="red" size="lg" variant="light">
          Button lg
        </Button>
        <Button color="red" size="xl" variant="light">
          Button xl
        </Button>
      </div>

      <div className="p-5 space-x-3">
        <Button
          color="red"
          size="xs"
          variant="filled"
          leftIcon={<PlusIcon></PlusIcon>}
        >
          Button xs
        </Button>
        <Button
          color="red"
          size="sm"
          variant="filled"
          leftIcon={<PlusIcon></PlusIcon>}
        >
          Button sm
        </Button>
        <Button
          color="red"
          size="md"
          variant="filled"
          leftIcon={<PlusIcon></PlusIcon>}
        >
          Button md
        </Button>
        <Button
          color="red"
          size="lg"
          variant="filled"
          leftIcon={<PlusIcon></PlusIcon>}
        >
          Button lg
        </Button>
        <Button
          color="red"
          size="xl"
          variant="filled"
          leftIcon={<PlusIcon></PlusIcon>}
        >
          Button xl
        </Button>
      </div>
      <div className="p-5 space-x-3">
        <Button
          color="red"
          size="xs"
          variant="filled"
          rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
        >
          Button xs
        </Button>
        <Button
          color="red"
          size="sm"
          variant="filled"
          rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
        >
          Button sm
        </Button>
        <Button
          color="red"
          size="md"
          variant="filled"
          rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
        >
          Button md
        </Button>
        <Button
          color="red"
          size="lg"
          variant="filled"
          rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
        >
          Button lg
        </Button>
        <Button
          color="red"
          size="xl"
          variant="filled"
          rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
        >
          Button xl
        </Button>
      </div>
    </React.Fragment>
  );
}

export default Page;
