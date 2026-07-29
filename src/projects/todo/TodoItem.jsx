import React from "react";
import { FaCheck } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";


export const TodoItem = ({
    data,
    onDelete,
    onCheck
}) => {


return(

<li
className="flex items-center gap-3 p-3 bg-gray-50 border rounded-lg"
>


<span

className={`flex-1 text-lg ${
    data.checked
    ?
    "line-through text-gray-400"
    :
    "text-gray-700"
}`}

>

{data.content}

</span>




<button

onClick={()=>onCheck(data.id)}

className="w-9 h-9 flex items-center justify-center bg-green-500 text-white rounded-md"

>

<FaCheck/>

</button>




<button

onClick={()=>onDelete(data.id)}

className="w-9 h-9 flex items-center justify-center bg-red-500 text-white rounded-md"

>

<MdAutoDelete/>

</button>



</li>

);

};