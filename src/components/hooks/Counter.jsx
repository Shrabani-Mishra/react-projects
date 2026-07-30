import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-lg">
        
        <h1 className="mb-6 text-3xl font-bold text-gray-800">
          useState Hook
        </h1>

        <p className="mb-6 text-5xl font-bold text-blue-600">
          {count}
        </p>

        <button
          onClick={() => setCount(count + 1)}
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
        >
          Increment
        </button>

      </div>
    </div>
  );
};