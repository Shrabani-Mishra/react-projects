import { useState } from "react";
// bubbling phase ex:

export const EventPropagation = () => {

 

  const handleGrandParentClick = () => {
    console.log("grand parant component");
  };

  const handleParentClick = () => {
 console.log("parent component");
  };

  const handleChildClick = (e) => {
//    console.log(e);
 //e.stopPropagation(); // stop event propagation
   console.log("child component");
   
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="w-full max-w-2xl">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Event Propagation
          </h1>

          <p className="text-gray-600 mt-2">
            Click the Child button and check the browser console
          </p>
        </div>


        {/* Grand Parent */}
        <div
          onClickCapture={handleGrandParentClick}
          className="bg-purple-600 p-12 rounded-3xl shadow-xl"
        >

          <h2 className="text-white text-xl font-bold text-center mb-6">
            Grand Parent
          </h2>


          {/* Parent */}
          <div
            onClickCapture={handleParentClick}
            className="bg-blue-600 p-10 rounded-3xl shadow-lg"
          >

            <h2 className="text-white text-xl font-bold text-center mb-6">
              Parent
            </h2>


            {/* Child */}
            <div >

              

              <button
                onClickCapture={handleChildClick}
                className="block mx-auto bg-white text-green-700 px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-gray-100 active:scale-95 transition"
              >
                Click Child
              </button>

            </div>

          </div>

        </div>


        
        

      </div>

    </section>
  );
};

// onClickCapture is used when you want to handle a click event during the capturing phase, before the event reaches the actual clicked element.
// "onClickCapture is used to handle an event during the capturing phase. In the capturing phase, the event travels from the outermost ancestor toward the target element. It executes before the normal onClick bubbling phase."