import React from "react";
import TextArea from "../components/TextArea";
function Page() {
  return (
    <div>
      <div className="w-1/3 space-y-5 p-5">
        <TextArea
          variant="outline"
          size="xs"
          placeholder="xs"
          type="text"
        ></TextArea>
        <TextArea
          variant="outline"
          size="sm"
          placeholder="sm"
          type="text"
        ></TextArea>
        <TextArea
          variant="outline"
          size="md"
          placeholder="md"
          type="text"
        ></TextArea>
        <TextArea
          variant="outline"
          size="lg"
          placeholder="lg"
          type="text"
        ></TextArea>
        <TextArea
          variant="outline"
          size="xl"
          placeholder="xl"
          type="text"
        ></TextArea>
      </div>
      <div className="w-1/3 space-y-5 p-5">
        <TextArea
          variant="filled"
          size="xs"
          placeholder="xs"
          type="text"
        ></TextArea>
        <TextArea
          variant="filled"
          size="sm"
          placeholder="sm"
          type="text"
        ></TextArea>
        <TextArea
          variant="filled"
          size="md"
          placeholder="md"
          type="text"
        ></TextArea>
        <TextArea
          variant="filled"
          size="lg"
          placeholder="lg"
          type="text"
        ></TextArea>
        <TextArea
          variant="filled"
          size="xl"
          placeholder="xl"
          type="text"
        ></TextArea>
      </div>
    </div>
  );
}

export default Page;
