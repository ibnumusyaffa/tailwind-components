import React, { useState } from "react";
import CheckboxDemo from "../components/Checkbox";
function Checkbox() {
  let [checked, setChecked] = useState("indeterminate");
  return (
    <div className="p-10">
      <div className="space-y-3">
        <CheckboxDemo
          label="ibnu"
          name="name"
          id="name"
          value="1"
          checked={checked}
          onCheckedChange={(e) => {
            setChecked(e);
          }}
        ></CheckboxDemo>
        <CheckboxDemo
          label="ibnu"
          name="name"
          id="name"
          value="1"
          checked={checked}
          onCheckedChange={(e) => {
            setChecked(e);
          }}
        ></CheckboxDemo>
        <CheckboxDemo
          label="ibnu"
          name="name"
          id="name"
          value="1"
          checked={checked}
          onCheckedChange={(e) => {
            setChecked(e);
          }}
        ></CheckboxDemo>
      </div>
      <div className="space-y-3 mt-10">
        <CheckboxDemo
          label="ibnu"
          name="name"
          id="name"
          value="1"
          checked={checked}
          onCheckedChange={(e) => {
            setChecked(e);
          }}
          size="xs"
        ></CheckboxDemo>
        <CheckboxDemo
          label="ibnu"
          name="name"
          id="name"
          value="1"
          checked={checked}
          onCheckedChange={(e) => {
            setChecked(e);
          }}
          size="sm"
        ></CheckboxDemo>
        <CheckboxDemo
          label="ibnu"
          name="name"
          id="name"
          value="1"
          checked={checked}
          onCheckedChange={(e) => {
            setChecked(e);
          }}
          size="md"
        ></CheckboxDemo>
        <CheckboxDemo
          label="ibnu"
          name="name"
          id="name"
          value="1"
          checked={checked}
          onCheckedChange={(e) => {
            setChecked(e);
          }}
          size="lg"
        ></CheckboxDemo>
        <CheckboxDemo
          label="ibnu"
          name="name"
          id="name"
          value="1"
          checked={checked}
          onCheckedChange={(e) => {
            setChecked(e);
          }}
          size="xl"
        ></CheckboxDemo>
      </div>

      <button onClick={() => setChecked("indeterminate")}>test</button>
      <button onClick={() => setChecked(true)}>test</button>
    </div>
  );
}

export default Checkbox;
