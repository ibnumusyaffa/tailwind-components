import React, { useState } from "react";
import CheckboxDemo from "../components/Checkbox";
function Checkbox() {
  let [checked, setChecked] = useState('indeterminate');
  return (
    <div className="p-10">
      <CheckboxDemo
        label="ibnu"
        name="name"
        id="name"
        value="1"
        checked={checked}
        onCheckedChange={(e) => {
          setChecked(e)
        }}
      ></CheckboxDemo>
      <button onClick={()=> setChecked('indeterminate')}>test</button>
      <button onClick={()=> setChecked(true)}>test</button>
      {/* <CheckboxDemo label="ibnu" name="name" id="name" value="2"></CheckboxDemo>
      <CheckboxDemo label="ibnu" name="name" id="name" value="3"></CheckboxDemo>
      <CheckboxDemo label="ibnu" name="name" id="name" value="4"></CheckboxDemo> */}
    </div>
  );
}

export default Checkbox;
