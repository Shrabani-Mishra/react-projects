// create a color changer with many buttons
import { useState } from "react";

export const BackgroundChanger = () => {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 inset-x-0 flex justify-center px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-lg">

          <button
            onClick={() => setColor("red")}
            className="px-4 py-2 rounded-full text-white"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="px-4 py-2 rounded-full text-white"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("blue")}
            className="px-4 py-2 rounded-full text-white"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="px-4 py-2 rounded-full text-black"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("orange")}
            className="px-4 py-2 rounded-full text-white"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>

          <button
            onClick={() => setColor("purple")}
            className="px-4 py-2 rounded-full text-white"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>

          <button
            onClick={() => setColor("pink")}
            className="px-4 py-2 rounded-full text-white"
            style={{ backgroundColor: "hotpink" }}
          >
            Pink
          </button>

          <button
            onClick={() => setColor("black")}
            className="px-4 py-2 rounded-full text-white"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>

          <button
            onClick={() => setColor("gray")}
            className="px-4 py-2 rounded-full text-white"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>

          <button
            onClick={() => setColor("white")}
            className="px-4 py-2 rounded-full text-black border"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>

          <button
            onClick={() => setColor("brown")}
            className="px-4 py-2 rounded-full text-white"
            style={{ backgroundColor: "brown" }}
          >
            Brown
          </button>

          <button
            onClick={() => setColor("teal")}
            className="px-4 py-2 rounded-full text-white"
            style={{ backgroundColor: "teal" }}
          >
            Teal
          </button>

        </div>
      </div>
    </div>
  );
};