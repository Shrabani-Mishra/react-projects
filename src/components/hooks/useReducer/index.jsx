import React, { useReducer, useState } from 'react'

export const ReducerComp = () => {
    // const[count,setCount]=useState(0);
    // Insted of uusing useState we use UseReducer hooks for complex state logic
    const[counr,dispatch]=useReducer(ReducerComp,0);

  return (
    <div>
      
      <h1>
{count}
      </h1>
      <button>Increment</button>
      <button>Decrement</button>
    </div>
  )
}

