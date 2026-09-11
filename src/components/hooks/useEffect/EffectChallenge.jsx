// React Hook Challange:Dynamic State Management and Document Title Update with useEffect
// Description:In this Challange ,you will Create component that dynamically manages state using 'usestate' and 'useEffect' hooks.Your component will include:
// 1.A counter that increments when a button is clicked.
// 2.An input field where users can type their name.
// 3.The document title will update to show the current count.
import { useState,useEffect} from "react";
export const Challange=()=>{
    const[count,setCount]=useState(0);
    const[name,setName]=useState("");
    // Order matters !Keep Hooks  in the same order acess renders
    useEffect(()=>{
        document.title=`count:${count}`
    },[count]);
    useEffect(()=>{
console.log(name);
    },[name]);
    return(
        <div>
            <h1>UseEffect Challange</h1>
            <p>
                count:<span>{count}</span>
            </p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <p>
                Name:<span>{name}</span>
            </p>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
    );
};