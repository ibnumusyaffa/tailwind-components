import React from "react";
import Badge from "../components/Badge";
function Page() {
  // let colors = ['sky', 'red', 'green'];
  return (
    <div className="space-y-5 p-5">
      <div className="flex space-x-5">
        <Badge color="red" variant="light">
          Badge
        </Badge>
        <Badge color="green" variant="light">
          Badge
        </Badge>
        <Badge color="blue" variant="light">
          Badge
        </Badge>
        <Badge color="yellow" variant="light">
          Badge
        </Badge>
        <Badge color="pink" variant="light">
          Badge
        </Badge>
        <Badge color="gray" variant="light">
          Badge
        </Badge>
        <Badge color="purple" variant="light">
          Badge
        </Badge>
      </div>
      <div className="flex space-x-5">
        <Badge color="red" variant="solid">
          Badge
        </Badge>
        <Badge color="green" variant="solid">
          Badge
        </Badge>
        <Badge color="blue" variant="solid">
          Badge
        </Badge>
        <Badge color="yellow" variant="solid">
          Badge
        </Badge>
        <Badge color="pink" variant="solid">
          Badge
        </Badge>
        <Badge color="gray" variant="solid">
          Badge
        </Badge>
        <Badge color="purple" variant="solid">
          Badge
        </Badge>
      </div>
      <div className="flex space-x-5">
        <Badge color="red" variant="outline">
          Badge
        </Badge>
        <Badge color="green" variant="outline">
          Badge
        </Badge>
        <Badge color="blue" variant="outline">
          Badge
        </Badge>
        <Badge color="yellow" variant="outline">
          Badge
        </Badge>
        <Badge color="pink" variant="outline">
          Badge
        </Badge>
        <Badge color="gray" variant="outline">
          Badge
        </Badge>
        <Badge color="purple" variant="outline">
          Badge
        </Badge>
      </div>

      <div className="flex space-x-5">
        <Badge size="xs" variant="light">
          Badge xs
        </Badge>
        <Badge size="sm" variant="light">
          Badge sm
        </Badge>
        <Badge size="md" variant="light">
          Badge md
        </Badge>
        <Badge size="lg" variant="light">
          Badge lg
        </Badge>
        <Badge size="xl" variant="light">
          Badge xl
        </Badge>
      </div>
      <div className="flex space-x-5">
        <Badge rounded="none" variant="outline">
          rounded none
        </Badge>
        <Badge rounded="sm" variant="outline">
          rounded sm
        </Badge>
        <Badge rounded="md" variant="outline">
          rounded md
        </Badge>
        <Badge rounded="lg" variant="outline">
          rounded lg
        </Badge>
        <Badge rounded="xl" variant="outline">
          rounded xl
        </Badge>
        <Badge rounded="full" variant="outline">
          rounded full
        </Badge>
      </div>
    </div>
  );
}

export default Page;
