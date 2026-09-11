import { useEffect, useState } from "react"
// Example1
// export const ReactUseEffect=()=>{
//     const[count,setCount]=useState(0);
//     useEffect(()=>{
//         console.log("count value",count);
//     },[count])
//     return(
//         <div>
//             <h1>useEffect! Hook</h1>
//             <p>Count:{count}</p>
//             <button onClick={()=>{setCount(count+1)}}>Increment</button>

//         </div>
//     )
// }

// Example2:
export const ReactUseEffect=()=>{
    const[date,setDate]=useState("");
    // Runs after the component is rendered.
    useEffect(()=>{
        // Runs the function every 1000 ms (1 second).
        const timer=setInterval(()=>{
            // Creates a new Date object containing the current date and time.
                    const updatedDate=new Date();
                    // Converts the time to a readable format like:
        setDate(updatedDate.toLocaleTimeString());
        },1000)
        return ()=>clearInterval(timer);

    },[])
    return(
        <div>
            <h1>Date:{date}</h1>
        </div>
    );
};

// Interview Questions on this Code
// What is useEffect?
// =>A React Hook used to perform side effects such as API calls, timers, event listeners, etc.
// Why is the dependency array [] empty?
// =>So the effect runs only once after the initial render.
// Why do we use setInterval?
//=> To execute code repeatedly after a fixed time interval.
// Why do we use clearInterval?
// =>To stop the interval and prevent memory leaks.
// What happens if we remove clearInterval?
// =>The interval keeps running even after the component is unmounted.
// Why do we use new Date()?
// =>To get the current date and time.
// What does toLocaleTimeString() do?
//=> Converts the time into a readable string based on the user's locale.
// What will happen if we remove [] from useEffect?
//=> A new interval will be created on every render, causing multiple intervals and performance issues.