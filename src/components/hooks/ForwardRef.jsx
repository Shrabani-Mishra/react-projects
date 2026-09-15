import React, { useId, useRef } from "react";

export const ForwardRef = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log("Username:", username.current.value);
    console.log("Password:", password.current.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleFormSubmit}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Login Form
        </h2>

        <InputField label="Username" ref={username} />

        <InputField label="Password" ref={password} />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

// React 19+
const InputField = (props) => {
  const id = useId();

  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {props.label}
      </label>

      <input
        id={id}
        type="text"
        ref={props.ref}
        className="w-full border border-gray-300 rounded-lg px-3 py-2
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};