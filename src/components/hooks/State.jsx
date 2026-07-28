import React, { useState } from "react";

export const State = () => {
  const [value, setValue] = useState(0);

  const handleButtonClick = () => {
    console.log("parent component");

    setValue((prevValue) => prevValue + 1);
  };

  return (
    <>
      <h1>{value}</h1>

      <button
        onClick={handleButtonClick}
        className="bg-indigo-600 text-white text-xs font-semibold py-1.5 px-4 rounded-md shadow hover:bg-indigo-700 active:scale-95 transition-all duration-200"
      >
        Increment
      </button>

      <ChildComponent value={value} />

    </>
  );
};

export function ChildComponent({ value }) {
  console.log("Child component rendered");

  return (
    <>
      <div className="mt-6 p-4 bg-gray-100 rounded-lg text-gray-600 font-medium">
        Child Component
      </div>

      <h2>Child Component - {value}</h2>
    </>
  );
}

export function SiblingComponent() {
  console.log("Sibling component rendered");

  return <h2>Sibling Component</h2>;
}





// Dynamic UI Updates:  State allows your components to update dynamically is response to user input or other events .

// For example,in a form, the state might hold the current value of the input fields,updating in real-times as the user types.



// Interactivity:State makes your application interactive .By maintaining state,you can crete components that respond to user actions,such as clicks ,form submission,or keyboard inputs.



// Data management:State helps manage data with in a component.Foe insstance ,you  can fetch  data from an api and store it in the state which will then be used to render the ui.



// Copmonent Communication:State can be lifted up to parent component to manage state across multiple child components ,ensuring consistent data flow and synchronization.

// In development mode, React Strict Mode intentionally renders components more than once to help detect unexpected side effects.