import React, { useState } from "react";


export const TodoForm = ({onSubmit}) => {


 const [inputValue,setInputValue] = useState({
    id:"",
    content:"",
    checked:false
 });



 const handleInputChange=(value)=>{

    setInputValue({
        id:Date.now(),
        content:value,
        checked:false
    });

 };



 const handleFormSubmit=(e)=>{

    e.preventDefault();

    onSubmit(inputValue);


    setInputValue({
        id:"",
        content:"",
        checked:false
    });

 };



 return(

<section>

<form
onSubmit={handleFormSubmit}
className="flex gap-3 mb-6"
>


<input

type="text"

placeholder="Enter your task..."

value={inputValue.content}

onChange={(e)=>
handleInputChange(e.target.value)
}

className="flex-1 px-4 py-3 border rounded-lg"

/>



<button
type="submit"
className="px-5 py-3 bg-blue-500 text-white rounded-lg"
>

Add Task

</button>



</form>


</section>

 );

};