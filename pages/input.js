import React from 'react';
import Input from '../components/Input';
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
     
          leftOutside="@"
          // leftOutside={<MagnifyingGlassIcon className='w-6 h-6'></MagnifyingGlassIcon>}
          variant="outline"
          size="xl"
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
