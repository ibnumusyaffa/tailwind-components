import React from 'react';
import Input from '../components/input';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
function Page() {
  return (
    <div>
      <div className="p-5 space-y-5 w-1/3">
        <Input
          leftIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          variant="outline"
          size="xs"
          placeholder="Test"
          type="text"
        ></Input>
        <Input
          leftIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          variant="outline"
          size="sm"
          placeholder="Test"
          type="text"
        ></Input>
        <Input
          leftOutside={
            <div className="flex items-center justify-center w-10 text-sm  bg-gray-200 rounded-l-sm border border-r-0 border-gray-300">
              @
            </div>
          }
          rightOutside={
            <div className="flex items-center justify-center w-10 text-sm  bg-gray-200 rounded-r-sm border-t border-r border-b border-gray-300">
              @
            </div>
          }
          variant="outline"
          size="md"
          placeholder="Testt"
          type="text"
        ></Input>
        <Input
          leftIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          variant="outline"
          size="lg"
          placeholder="Test"
          type="text"
        ></Input>
        <Input
          leftIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          variant="outline"
          size="xl"
          placeholder="Test"
          type="text"
        ></Input>
      </div>
      <div className="p-5 space-y-5 w-1/3">
        <Input
          leftIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          variant="filled"
          size="xs"
          placeholder="Test"
          type="text"
        ></Input>
        <Input
          leftIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          variant="filled"
          size="sm"
          placeholder="Test"
          type="text"
        ></Input>
        <Input
          leftIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          variant="filled"
          size="md"
          placeholder="Testt"
          type="text"
        ></Input>
        <Input
          leftIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          variant="filled"
          size="lg"
          placeholder="Test"
          type="text"
        ></Input>
        <Input
          leftIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          rightIcon={<ArrowLongRightIcon></ArrowLongRightIcon>}
          variant="filled"
          size="xl"
          placeholder="Test"
          type="text"
        ></Input>
      </div>
    </div>
  );
}

export default Page;
