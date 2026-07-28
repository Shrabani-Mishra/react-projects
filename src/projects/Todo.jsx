
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }

    setTask((prev) => [...prev, inputValue]);
    setInputValue("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-16">
      {/* Main Container */}
      <div className="w-[500px] bg-white p-8 rounded-xl shadow-lg">

        {/* Header */}
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Todo List
          </h1>
        </header>

        {/* Form */}
        <section>
          <form
            onSubmit={handleFormSubmit}
            className="flex gap-3 mb-6"
          >
            <input
              type="text"
              placeholder="Enter your task..."
              autoComplete="off"
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="px-5 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
            >
              Add Task
            </button>
          </form>
        </section>

        {/* Task List */}
        <section>
          <ul className="space-y-3">
            {task.map((curElem, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg"
                >
                  {/* Task */}
                  <span className="flex-1 text-gray-700 text-lg">
                    {curElem}
                  </span>

                  {/* Check Button */}
                  <button
                    className="w-9 h-9 flex items-center justify-center bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                  >
                    <FaCheck />
                  </button>

                  {/* Delete Button */}
                  <button
                    className="w-9 h-9 flex items-center justify-center bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                  >
                    <MdAutoDelete />
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

      </div>
    </div>
  );
};