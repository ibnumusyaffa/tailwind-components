import React from "react";
import * as Radio from "../components/Radio";
function Checkbox() {
  const [value, setValue] = React.useState("3");
  return (
    <div className="p-10 space-y-5">
      <Radio.Group className="flex space-x-5" value={value} onChange={setValue}>
        <Radio.Item size="md" color="sky" label="option 1" value="1"></Radio.Item>
        <Radio.Item size="md" color="sky" label="option 2" value="2"></Radio.Item>
        <Radio.Item size="md" color="sky" label="option 3" value="3"></Radio.Item>
      </Radio.Group>
      <Radio.Group className="flex space-x-5" value={value} onChange={setValue}>
        <Radio.Item size="md" color="sky" label="option 1" value="1"></Radio.Item>
        <Radio.Item size="md" color="sky" label="option 2" value="2"></Radio.Item>
        <Radio.Item size="md" color="sky" label="option 3" value="3"></Radio.Item>
      </Radio.Group>
      <Radio.Group className="flex space-x-5" value={value} onChange={setValue}>
        <Radio.Item size="md" color="sky" label="option 1" value="1"></Radio.Item>
        <Radio.Item size="md" color="sky" label="option 2" value="2"></Radio.Item>
        <Radio.Item size="md" color="sky" label="option 3" value="3"></Radio.Item>
      </Radio.Group>
      <Radio.Group className="flex space-x-5" value={value} onChange={setValue}>
        <Radio.Item size="md" color="sky" label="option 1" value="1"></Radio.Item>
        <Radio.Item size="md" color="sky" label="option 2" value="2"></Radio.Item>
        <Radio.Item size="md" color="sky" label="option 3" value="3"></Radio.Item>
      </Radio.Group>
      
    </div>
  );
}

export default Checkbox;
