import React, { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoItem } from "./TodoItem";

export const Todo = () => {

  // Load data from localStorage
  const [task, setTask] = useState(() => {
    const savedTask = localStorage.getItem("todoTask");

    if (savedTask) {
      return JSON.parse(savedTask);
    }

    return [];
  });


  const [datetime, setDateTime] = useState("");



  // Save task to localStorage whenever task changes
  useEffect(() => {

    localStorage.setItem(
      "todoTask",
      JSON.stringify(task)
    );

  }, [task]);



  const handleFormSubmit = (inputValue) => {

    if (!inputValue.content.trim()) return;


    const isExist = task.some(
      (curTask) =>
        curTask.content.toLowerCase() ===
        inputValue.content.toLowerCase()
    );


    if (isExist) return;


    setTask((prev) => [
      ...prev,
      inputValue
    ]);

  };



  // Date and Time
  useEffect(() => {

    const interval = setInterval(() => {

      const now = new Date();

      const formattedDate =
        now.toLocaleDateString();

      const formattedTime =
        now.toLocaleTimeString();


      setDateTime(
        `${formattedDate} - ${formattedTime}`
      );

    },1000);



    return () =>
      clearInterval(interval);


  },[]);




  // Delete task
  const handleDelete = (id)=>{

    const updatedTask = task.filter(
      (curElem)=>curElem.id !== id
    );

    setTask(updatedTask);

  };




  // Check task
  const handleCheck = (id)=>{

    const updatedTask = task.map(
      (curElem)=>{

        if(curElem.id === id){

          return {
            ...curElem,
            checked: !curElem.checked
          };

        }

        return curElem;

      }
    );


    setTask(updatedTask);

  };




  // Clear all tasks
  const handleClear = ()=>{

    setTask([]);

  };



  return (

<div className="min-h-screen bg-gray-100 flex justify-center items-start pt-16">


<div className="w-[500px] bg-white p-8 rounded-xl shadow-lg">


<header className="text-center mb-6">

<h1 className="text-3xl font-bold">
Todo List
</h1>

<h2>{datetime}</h2>

</header>



<TodoForm
onSubmit={handleFormSubmit}
/>



<ul className="space-y-3">

{
task.map((curElem)=>(

<TodoItem

key={curElem.id}

data={curElem}

onDelete={handleDelete}

onCheck={handleCheck}

/>

))
}

</ul>




<button

onClick={handleClear}

className="mt-6 px-5 py-3 bg-blue-500 text-white rounded-lg"

>

Clear All

</button>



</div>


</div>

  );

};