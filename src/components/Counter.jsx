import { useState } from "react";
export const Counter=()=>{
    // let Counter=Math.random();
    // / let Counter=15;
    let [counter,setCounter]=useState(15);

    const addValue=()=>{
        // console.log("svalue added", Math.random());
        // console.log("clicked:",counter);
        // counter=counter+1;
                // setCounter(counter);

        setCounter(counter+1);

    }
    const decreaseValue=()=>{
        if(counter>0){
        setCounter(counter-1);
        }
      
        
    }
    
    return(
        <>
        <h1>Hello i am counter</h1>
        <h2>Counter value:{counter}</h2>
        <button onClick={addValue}>Add Value</button>
        <br/>
        <br/>
        <button onClick={decreaseValue}>Decrease Value</button>

        </>
    )
}