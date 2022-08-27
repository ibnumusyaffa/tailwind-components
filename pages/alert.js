import React from 'react';
import Alert from '../components/Alert';
import {
  ExclamationTriangleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/solid';
function Page() {
  return (
    <div>
      <div className="p-5 grid grid-cols-3 gap-5 border-b border-gray-300">
        <Alert
          icon={<ExclamationTriangleIcon />}
          color="red"
          title="Lorem Ipsum is simply dummy text"
          withCloseButton
        >
          when an unknown printer took a galley of type and scrambled it to make
          a
        </Alert>
        <Alert
          icon={<ExclamationTriangleIcon />}
          color="yellow"
          title="Lorem Ipsum is simply dummy text"
          withCloseButton
        >
          when an unknown printer took a galley of type and scrambled it to make
          a
        </Alert>
        <Alert
          icon={<CheckCircleIcon />}
          color="green"
          title="Lorem Ipsum is simply dummy text"
          withCloseButton
        >
          when an unknown printer took a galley of type and scrambled it to make
          a
        </Alert>
        <Alert
          icon={<InformationCircleIcon />}
          color="blue"
          title="Lorem Ipsum is simply dummy text"
          withCloseButton
        >
          when an unknown printer took a galley of type and scrambled it to make
          a
        </Alert>
        <Alert
          icon={<InformationCircleIcon />}
          color="gray"
          title="Lorem Ipsum is simply dummy text"
          withCloseButton
        >
          when an unknown printer took a galley of type and scrambled it to make
          a
        </Alert>
      </div>

      <div className="p-5 grid grid-cols-3 gap-5 border-b border-gray-300">
        <Alert  color="red">
          when an unknown printer took a galley of type and scrambled it to make
          a
        </Alert>
        <Alert icon={<ExclamationTriangleIcon />} color="yellow">
          when an unknown printer took a galley of type and scrambled it to make
          a
        </Alert>
        <Alert icon={<CheckCircleIcon />} color="green">
          when an unknown printer took a galley of type and scrambled it to make
          a
        </Alert>
        <Alert  icon={<InformationCircleIcon />} color="blue">
          when an unknown printer took a galley of type and scrambled it to make
          a
        </Alert>
        <Alert icon={<InformationCircleIcon />} color="gray">
          when an unknown printer took a galley of type and scrambled it to make
          a
        </Alert>
      </div>

      <div className="p-5 grid grid-cols-3 gap-5 border-b border-gray-300">
        <Alert
          icon={<ExclamationTriangleIcon />}
          color="red"
          title="Lorem Ipsum is simply dummy text"
        ></Alert>
        <Alert
          icon={<ExclamationTriangleIcon />}
          color="yellow"
          title="Lorem Ipsum is simply dummy text"
        ></Alert>
        <Alert
          icon={<CheckCircleIcon />}
          color="green"
          title="Lorem Ipsum is simply dummy text"
        ></Alert>
        <Alert
        icon={<InformationCircleIcon />}
          color="blue"
          title="Lorem Ipsum is simply dummy text"
        ></Alert>
        <Alert
          icon={<InformationCircleIcon />}
          color="gray"
          title="Lorem Ipsum is simply dummy text"
        ></Alert>
      </div>
    </div>
  );
}

export default Page;
