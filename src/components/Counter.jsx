import { useState } from "react";
export const Counter=()=>{
    // let Counter=Math.random();
    // / let Counter=15;
    let [counter,setCounter]=useState(15);
 const addValue=()=>{
        // console.log("value added", Math.random());
        // console.log("clicked:",counter);
        // counter=counter+1;
        // setCounter(counter);

        // setCounter(counter+1);
        // setCounter(counter+1);
        // setCounter(counter+1);
        // setCounter(counter+1);
        // setCounter(counter+1);l
        //react batches state updates.all 5 lines use the old value of counter so 15=>26
        // correct way to use  functional update
        setCounter((counter)=>counter+1)
        setCounter((counter)=>counter+1)

        setCounter((counter)=>counter+1)

        setCounter((counter)=>counter+1)


        // setCounter(()=>{prevCounter=>prevCounter+1})

        
    }
    const decreaseValue=()=>{
        if(counter>0){
        // setCounter(counter-1);
                setCounter((counter)=>counter-1)
                                setCounter((counter)=>counter-1)


        }
      
        
    }
return(
        <>
        <h1 className="bg-green-400 text-white w-50 p-2 rounded-xl ">Hello i am counter</h1>
        <h2>Counter value:{counter}</h2>
        <button onClick={addValue}>Add Value</button>
        <br/>
        <br/>
        <button onClick={decreaseValue}>Decrease Value</button>

        </>
    )
}