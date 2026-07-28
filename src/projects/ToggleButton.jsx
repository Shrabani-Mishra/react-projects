import React, { useState } from "react";
import { FaToggleOff } from "react-icons/fa6";
export const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn((prevIsOn) => !prevIsOn);
    // We use this because the new state depends on the previous state.
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div
        onClick={handleToggleSwitch}
        className={`relative w-20 h-10 rounded-full p-1 cursor-pointer 
        transition-all duration-300 ease-in-out
        ${isOn ? "bg-green-500" : "bg-gray-300"}`}
      >
        {/* Toggle Circle */}
        <div
          className={`w-8 h-8 bg-white rounded-full shadow-lg
          transition-transform duration-300 ease-in-out
          ${isOn ? "translate-x-10" : "translate-x-0"}`}
         
        ></div>

        {/* ON / OFF Text */}
        <span
          className={`absolute top-1/2 -translate-y-1/2 text-xs font-bold
          transition-all duration-300
          ${isOn ? "left-3 text-white" : "right-3 text-gray-600"}`}
        >
         <FaToggleOff /> {isOn ? "ON" : "OFF"}
        </span>
      </div>
    </div>
  );
};


// Main concept: This is a good example of using useState + event handling + conditional rendering in React.




//this is my practice
// import React, { useState } from 'react'

// export const ToggleButton=()=> {
//   const[onButton,setOnbutton]=useState(false);
//   const handleButtonClick=(e)=>{
//     setOnbutton(!onButton)
//   }
//   return (
//     <div onClick={handleButtonClick}>
//       <div>
//         <span>{onButton?"on":"off"}</span>
//       </div>
//     </div>
//   )
// }

// export default ToggleButton
