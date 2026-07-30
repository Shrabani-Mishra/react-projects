//useState challange:
// Create a simple react components that allows users to increment and decrement a counter using two buttons.
// Reset button:Add a button to reset the count to zero
// Limitations:Set a maximum and minimum limi for the counter and diable the buttons when those limits are reached.
// step inrement:Add an input  field to allow users to set the step value by which the counter should increment or decrement.

import { useState } from "react";

export const CounterChallenge = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const handleIncrement = () => {
    setCount(Math.min(count + inputValue,100));
  };

  const handleDecrement = () => {
    setCount(Math.max(count - inputValue,0));
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">

        <h1 className="mb-6 text-3xl font-bold text-gray-800">
          useState Challenge
        </h1>

        <p className="mb-6 text-xl font-semibold text-gray-700">
          Count:
          <span className="ml-2 text-4xl font-bold text-blue-600">
            {count}
          </span>
        </p>

        <div className="mb-6">
          <label className="flex flex-col items-center gap-2 text-lg font-medium text-gray-700">
            Step:

            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(Number(e.target.value))}
              className="w-32 rounded-lg border border-gray-300 px-4 py-2 text-center text-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </label>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">

          <button
            onClick={handleIncrement}
            // disabled={count >= 100}
            className="rounded-lg bg-green-600 px-5 py-2.5 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            Increment
          </button>

          <button
            onClick={handleDecrement}
            // disabled={count <= 0}
            className="rounded-lg bg-red-600 px-5 py-2.5 font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            Decrement
          </button>

          <button
            onClick={handleReset}
            className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700"
          >
            Reset
          </button>

        </div>

        <p className="mt-6 text-sm text-gray-500">
          Minimum: 0 | Maximum: 100
        </p>

      </div>
    </section>
  );
};