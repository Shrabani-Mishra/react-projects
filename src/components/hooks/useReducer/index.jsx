
import { useReducer } from "react"
// useReducer is a React Hook used to manage state when state logic becomes more complex.

export const ReducerComp=()=>{
  const reducer=(state,action)=>{
// console.log(state,action);
if(action.type==="INCREMENT"){
  return state+1;
}
if(action.type==="DECREMENT"){
  return state-1;
}
  }
  // const[count,setCount]=useState(0);
  const[count,dispatch]=useReducer(reducer,0);
  // console.log(useReducer(reducer,0));
  return(
    <div className="p-4 h-lvh flex flex-col justify-center items-center">
    <h1>{count}</h1>
    <button onClick={()=>dispatch({type:"INCREMENT"})} className="bg-blue-500 text-white px-4 py-2 rounded m-2">Increment</button>
     <button onClick={()=>dispatch({type:"DECREMENT" })} className="bg-red-500 text-white px-4 py-2 rounded m-2">Decrement</button>
    </div>
  )
}