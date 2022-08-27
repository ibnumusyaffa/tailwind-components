import React from 'react';
import Button from '../components/button';
function Page() {
  let colors = ['sky', 'red', 'green'];
  return (
    <React.Fragment>
      {colors.map((item, index) => {
        return (
          <div className="p-5 grid grid-cols-10 gap-5" key={index}>
            <Button color={item} variant="filled">
              Settings
            </Button>
            <Button color={item} variant="light">
              Settings
            </Button>
            <Button color={item} variant="outline">
              Settings
            </Button>
            <Button color={item} variant="subtle">
              Settings
            </Button>
          </div>
        );
      })}

      {colors.map((item, index) => {
        return (
          <div className="p-5 grid grid-cols-10 gap-5" key={index}>
            <Button color={item} disabled variant="filled">
              Settings
            </Button>
            <Button color={item} disabled variant="light">
              Settings
            </Button>
            <Button color={item} disabled variant="outline">
              Settings
            </Button>
            <Button color={item} disabled variant="subtle">
              Settings
            </Button>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default Page;
