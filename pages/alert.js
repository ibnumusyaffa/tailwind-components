import React from "react";
import Alert from "../components/Alert";
import {
  ExclamationTriangleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
function Page() {
  return (
    <React.Fragment>
      <div>
        <div className="grid grid-cols-3 gap-5 border-b border-gray-300 p-5">
          <Alert
            icon={<ExclamationTriangleIcon />}
            color="red"
            title="Lorem Ipsum is simply dummy text"
            withCloseButton
          >
            when an unknown printer took a galley of type and scrambled it to
            make a
          </Alert>
          <Alert
            icon={<ExclamationTriangleIcon />}
            color="yellow"
            title="Lorem Ipsum is simply dummy text"
            withCloseButton
            actionSlot={
              <div className="flex space-x-3 text-sm font-semibold">
                <div>Generate</div>
                <div>Skip</div>
              </div>
            }
          >
            when an unknown printer took a galley of type and scrambled it to
            make a
          </Alert>
          <Alert
            icon={<CheckCircleIcon />}
            color="green"
            title="Lorem Ipsum is simply dummy text"
            withCloseButton
          >
            when an unknown printer took a galley of type and scrambled it to
            make a
          </Alert>
          <Alert
            icon={<InformationCircleIcon />}
            color="blue"
            title="Lorem Ipsum is simply dummy text"
            withCloseButton
          >
            when an unknown printer took a galley of type and scrambled it to
            make a
          </Alert>
          <Alert
            icon={<InformationCircleIcon />}
            color="gray"
            title="Lorem Ipsum is simply dummy text"
            withCloseButton
          >
            when an unknown printer took a galley of type and scrambled it to
            make a
          </Alert>
        </div>

        <div className="grid grid-cols-3 gap-5 border-b border-gray-300 p-5">
          <Alert color="red">
            when an unknown printer took a galley of type and scrambled it to
            make a
          </Alert>
          <Alert icon={<ExclamationTriangleIcon />} color="yellow">
            when an unknown printer took a galley of type and scrambled it to
            make a
          </Alert>
          <Alert icon={<CheckCircleIcon />} color="green">
            when an unknown printer took a galley of type and scrambled it to
            make a
          </Alert>
          <Alert icon={<InformationCircleIcon />} color="blue">
            when an unknown printer took a galley of type and scrambled it to
            make a
          </Alert>
          <Alert icon={<InformationCircleIcon />} color="gray">
            when an unknown printer took a galley of type and scrambled it to
            make a
          </Alert>
        </div>

        <div className="grid grid-cols-3 gap-5 border-b border-gray-300 p-5">
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
      <div>
        <div className="grid grid-cols-3 gap-5 border-b border-gray-300 p-5">
          <Alert
            variant="solid"
            icon={<ExclamationTriangleIcon />}
            color="red"
            title="Lorem Ipsum is simply dummy text"
            withCloseButton
          >
            when an unknown printer took a galley of type and scrambled it to
            make a
          </Alert>
          <Alert
            variant="solid"
            icon={<ExclamationTriangleIcon />}
            color="yellow"
            title="Lorem Ipsum is simply dummy text"
            withCloseButton
            actionSlot={
              <div className="flex space-x-3 text-sm font-semibold">
                <div>Generate</div>
                <div>Skip</div>
              </div>
            }
          >
            when an unknown printer took a galley of type and scrambled it to
            make a
          </Alert>
          <Alert
            variant="solid"
            icon={<CheckCircleIcon />}
            color="green"
            title="Lorem Ipsum is simply dummy text"
            withCloseButton
          >
            when an unknown printer took a galley of type and scrambled it to
            make a
          </Alert>
          <Alert
            variant="solid"
            icon={<InformationCircleIcon />}
            color="blue"
            title="Lorem Ipsum is simply dummy text"
            withCloseButton
          >
            when an unknown printer took a galley of type and scrambled it to
            make a
          </Alert>
          <Alert
            variant="solid"
            icon={<InformationCircleIcon />}
            color="gray"
            title="Lorem Ipsum is simply dummy text"
            withCloseButton
          >
            when an unknown printer took a galley of type and scrambled it to
            make a
          </Alert>
        </div>

        <div className="grid grid-cols-3 gap-5 border-b border-gray-300 p-5">
          <Alert variant="solid" color="red">
            when an unknown printer took a galley of type and scrambled it to
            make a
          </Alert>
          <Alert
            variant="solid"
            icon={<ExclamationTriangleIcon />}
            color="yellow"
          >
            when an unknown printer took a galley of type and scrambled it to
            make a
          </Alert>
          <Alert variant="solid" icon={<CheckCircleIcon />} color="green">
            when an unknown printer took a galley of type and scrambled it to
            make a
          </Alert>
          <Alert variant="solid" icon={<InformationCircleIcon />} color="blue">
            when an unknown printer took a galley of type and scrambled it to
            make a
          </Alert>
          <Alert variant="solid" icon={<InformationCircleIcon />} color="gray">
            when an unknown printer took a galley of type and scrambled it to
            make a
          </Alert>
        </div>

        <div className="grid grid-cols-3 gap-5 border-b border-gray-300 p-5">
          <Alert
            variant="solid"
            icon={<ExclamationTriangleIcon />}
            color="red"
            title="Lorem Ipsum is simply dummy text"
          ></Alert>
          <Alert
            variant="solid"
            icon={<ExclamationTriangleIcon />}
            color="yellow"
            title="Lorem Ipsum is simply dummy text"
          ></Alert>
          <Alert
            variant="solid"
            icon={<CheckCircleIcon />}
            color="green"
            title="Lorem Ipsum is simply dummy text"
          ></Alert>
          <Alert
            variant="solid"
            icon={<InformationCircleIcon />}
            color="blue"
            title="Lorem Ipsum is simply dummy text"
          ></Alert>
          <Alert
            variant="solid"
            icon={<InformationCircleIcon />}
            color="gray"
            title="Lorem Ipsum is simply dummy text"
          ></Alert>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Page;
