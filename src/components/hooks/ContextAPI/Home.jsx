import { useContext } from "react"
import { BioContext } from "."

export const Home=()=>{
    const {myName,myAge}=useContext(BioContext);
    return(
        <h1>hello context API.My name is{myName} and age is {myAge}</h1>
    )
}