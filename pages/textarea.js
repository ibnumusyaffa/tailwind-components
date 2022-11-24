import React from 'react';
import TextArea from '../components/TextArea';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
function Page() {
  return (
    <div>
      <div className="p-5 space-y-5 w-1/3">
        <TextArea
          variant="outline"
          size="xs"
          placeholder="Test"
          type="text"
        ></TextArea>
        <TextArea
          variant="outline"
          size="sm"
          placeholder="Test"
          type="text"
        ></TextArea>
        <TextArea
          variant="outline"
          size="md"
          placeholder="Testt"
          type="text"
        ></TextArea>
        <TextArea
          variant="outline"
          size="lg"
          placeholder="Test"
          type="text"
        ></TextArea>
        <TextArea
          variant="outline"
          size="xl"
          placeholder="Test"
          type="text"
        ></TextArea>
      </div>
      <div className="p-5 space-y-5 w-1/3">
        <TextArea
          variant="filled"
          size="xs"
          placeholder="Test"
          type="text"
        ></TextArea>
        <TextArea
          variant="filled"
          size="sm"
          placeholder="Test"
          type="text"
        ></TextArea>
        <TextArea
          variant="filled"
          size="md"
          placeholder="Testt"
          type="text"
        ></TextArea>
        <TextArea
          variant="filled"
          size="lg"
          placeholder="Test"
          type="text"
        ></TextArea>
        <TextArea
          variant="filled"
          size="xl"
          placeholder="Test"
          type="text"
        ></TextArea>
      </div>
    </div>
  );
}

export default Page;
