import React from 'react';
import Badge from '../components/Badge';
import { ClockIcon, PlusIcon } from '@heroicons/react/24/outline';
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
        <Badge
          leftIcon={<ClockIcon></ClockIcon>}
          color="red"
          size="xs"
          variant="outline"
        >
          Settings
        </Badge>
        <Badge
          leftIcon={<ClockIcon></ClockIcon>}
          color="red"
          size="sm"
          variant="outline"
        >
          Settings
        </Badge>
        <Badge
          leftIcon={<ClockIcon></ClockIcon>}
          color="red"
          size="md"
          variant="outline"
        >
          Settings
        </Badge>
        <Badge
          leftIcon={<ClockIcon></ClockIcon>}
          color="red"
          size="lg"
          variant="outline"
        >
          Settings
        </Badge>
        <Badge
          leftIcon={<ClockIcon></ClockIcon>}
          color="red"
          size="xl"
          variant="outline"
        >
          Settings
        </Badge>
      </div>
      <div className="flex space-x-5">
        <Badge
          leftIcon={<PlusIcon></PlusIcon>}
          color="red"
          size="xs"
          variant="outline"
        >
          Settings
        </Badge>
        <Badge
          leftIcon={<PlusIcon></PlusIcon>}
          color="red"
          size="sm"
          variant="outline"
        >
          Settings
        </Badge>
        <Badge
          leftIcon={<PlusIcon></PlusIcon>}
          color="red"
          size="md"
          variant="outline"
        >
          Settings
        </Badge>
        <Badge
          leftIcon={<PlusIcon></PlusIcon>}
          color="red"
          size="lg"
          variant="outline"
        >
          Settings
        </Badge>
        <Badge
          leftIcon={<PlusIcon></PlusIcon>}
          color="red"
          size="xl"
          variant="outline"
        >
          Settings
        </Badge>
      </div>
      <div className="flex space-x-5">
        <Badge
          leftIcon={<ClockIcon></ClockIcon>}
          color="red"
          size="xs"
          variant="outline"
          rounded='full'
        >
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
        <Badge color="red" rounded="xl" variant="outline">
          Settings
        </Badge>
        <Badge color="red" rounded="full" variant="outline">
          Settings
        </Badge>
      </div>
    </div>
  );
}

export default Page;
