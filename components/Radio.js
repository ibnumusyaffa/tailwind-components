import cx from "clsx";
import React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

const starters = [
  { id: "red", title: "Bulbasaur" },
  { id: "green", title: "Charmader" },
  { id: "blue", title: "Squirtle" },
];

const RadioGroup = ({ color = "blue" }) => {
  const [value, setValue] = React.useState(starters[0].title);

  return (
    <form>
      <legend className="text-sm font-medium leading-4 text-gray-900 dark:text-gray-100">
        Choose your starter
      </legend>
      <RadioGroupPrimitive.Root
        aria-label="Pokemon starters"
        defaultValue={"Bulbasaur"}
        onValueChange={setValue}
      >
        <div className="mt-3 space-y-3">
          {starters.map((pokemon) => (
            <div key={pokemon.id} className="flex items-center">
              <RadioGroupPrimitive.Item
                id={pokemon.id}
                value={pokemon.title}
                className={cx(
                  "relative h-5 w-5 rounded-full",
                  "data-[state=unchecked]:border data-[state=unchecked]:border-gray-300",
                  "focus:outline-none focus:ring-0 focus:ring-offset-0",
                  "focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-offset-1 ",
                  {
                    "focus-visible:ring-purple-500 data-[state=checked]:bg-purple-500":
                      color === "purple",
                    "focus-visible:ring-sky-500 data-[state=checked]:bg-sky-500":
                      color === "blue",
                    "focus-visible:ring-yellow-500 data-[state=checked]:bg-yellow-500":
                      color === "yellow",
                  },
                )}
              >
                <RadioGroupPrimitive.Indicator className="leading-0 absolute inset-0 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                </RadioGroupPrimitive.Indicator>
              </RadioGroupPrimitive.Item>
              <label
                htmlFor={pokemon.id}
                className="ml-2 block text-sm font-medium text-gray-700 "
              >
                {pokemon.title}
              </label>
            </div>
          ))}
        </div>
      </RadioGroupPrimitive.Root>
    </form>
  );
};

export default RadioGroup;
