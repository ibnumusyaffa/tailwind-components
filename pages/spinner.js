import React from "react";
import Spinner from "../components/Spinner";

function Page() {
  return (
    <div className="flex space-x-10">
      <div className="h-5 w-5">
        <Spinner></Spinner>
      </div>
    </div>
  );
}

export default Page;
