import { useEffect, useState } from "react"

export const CleanUp=()=>{
    const[count,setCount]=useState(0);
    // This runs on every render.This runs on every render.creates a new timer.After some seconds.Many timers run simultaneously.
//1.     setInterval(()=>{
// setCount(count+1);
//     },1000)
// Closure Problem.
//2 setInterval(()=>{
//     setCount((prev)=>prev+1);
// },1000)
// 3.
useEffect(()=>{
const timer=setInterval(()=>{
    setCount((prev)=>prev+1);
},1000);
return ()=>clearInterval(timer);
},[]);
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
<div className="bg-white shadow-lg rounded-xl p-8 text-center w-80">
    <p className="text-gray-600 text-lg mb-2">My subscriber on Youtube</p>

    <div className="text-5xl font-bold text-red-600 mb-4">{count}</div>
    <h3 className="text-xl font-semibold mb-6">Subscribers<br/>Realtime Counter</h3>
</div>
        </div>
    )
}