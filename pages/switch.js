import React from "react";
import Switch from "../components/Switch";

function Demo() {
  let [state, setState] = React.useState(false);
  return (
    <div>
      <div className="flex space-x-5 p-5">
        <Switch
          checked={state}
          disabled
          onCheckedChange={(e) => setState(e)}
          size="xs"
        ></Switch>
        <Switch checked={state} size="sm">
          {/* <option>Test</option> */}
        </Switch>
        <Switch checked={state} size="md"></Switch>
        <Switch checked={state} size="lg"></Switch>
        <Switch checked={state} size="xl"></Switch>
      </div>
      <div className="flex space-x-5 p-5">
        <Switch checked={state} size="xs"></Switch>
        <Switch checked={state} size="sm"></Switch>
        <Switch checked={state} size="md"></Switch>
        <Switch checked={state} size="lg"></Switch>
        <Switch checked={state} size="xl"></Switch>
      </div>
    </div>
  );
}

export default Demo;
