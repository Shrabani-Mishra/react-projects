import { useState } from "react"

export const ShortCircuit=()=>{
    const[isLoggedin,setLogedIn]=useState(true);
    const[user,setUser]=useState("");
   return(
   <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
  <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
    
    <h1 className="mb-4 text-3xl font-bold text-gray-800">
      Welcome to ShortCircuit Evaluation
    </h1>
{/* Conditional rendering using Short Circuit Evalution */}
    {isLoggedin &&<p className="mb-6 text-lg text-green-600 font-medium"> You are logged in </p>}
{/* Another Example of Short circuit Evalution */}
{user ?`Hello ${user}`:"plz logged in!"}
    <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
      <button className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
      onClick={()=>setLogedIn(!isLoggedin)}>
        Toggle login state
      </button>

      <button className="rounded-lg bg-green-600 px-5 py-2.5 font-medium text-white transition hover:bg-green-700"
      onClick={()=>setUser("Shrabani Mishra")}>
        Set User
      </button>

      <button className="rounded-lg bg-red-600 px-5 py-2.5 font-medium text-white transition hover:bg-red-700"
      onClick={()=>setUser("")}>
        Clear User
      </button>
    </div>

  </div>
</section>
   ) 
}