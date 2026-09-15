import { useContext } from "react"
import { BioContext } from "."

export const About=()=>{
    const {myName,myAge}=useContext(BioContext);
    return(
        <h1>hello context API(About).My name is{myName} and age is {myAge}</h1>
    )
}