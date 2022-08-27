import React from 'react';
import Badge from '../components/Badge';
function Page() {
  // let colors = ['sky', 'red', 'green'];
  return (
    <div className="p-5 space-y-5">
      <div className="flex space-x-5">
        <Badge color="red" size="xs" variant="light">
          Settings
        </Badge>
        <Badge color="red" size="sm" variant="light">
          Settings
        </Badge>
        <Badge color="red" size="md" variant="light">
          Settings
        </Badge>
        <Badge color="red" size="lg" variant="light">
          Settings
        </Badge>
        <Badge color="red" size="xl" variant="light">
          Settings
        </Badge>
      </div>
      <div className="flex space-x-5">
        <Badge color="red" size="xs" variant="outline">
          Settings
        </Badge>
        <Badge color="red" size="sm" variant="outline">
          Settings
        </Badge>
        <Badge color="red" size="md" variant="outline">
          Settings
        </Badge>
        <Badge color="red" size="lg" variant="outline">
          Settings
        </Badge>
        <Badge color="red" size="xl" variant="outline">
          Settings
        </Badge>
      </div>
      <div className="flex space-x-5">
        <Badge color="red" size="xs" variant="filled">
          Settings
        </Badge>
        <Badge color="red" size="sm" variant="filled">
          Settings
        </Badge>
        <Badge color="red" size="md" variant="filled">
          Settings
        </Badge>
        <Badge color="red" size="lg" variant="filled">
          Settings
        </Badge>
        <Badge color="red" size="xl" variant="filled">
          Settings
        </Badge>
      </div>
      <div className="flex space-x-5">
        <Badge color="red" rounded="none" variant="outline">
          Settings
        </Badge>
        <Badge color="red" rounded="sm" variant="outline">
          Settings
        </Badge>
        <Badge color="red" rounded="md" variant="outline">
          Settings
        </Badge>
        <Badge color="red" rounded="lg" variant="outline">
          Settings
        </Badge>
      </div>
    </div>
  );
}

export default Page;
