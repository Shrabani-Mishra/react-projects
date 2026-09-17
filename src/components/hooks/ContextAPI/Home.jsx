import {  useBioContext } from "."

export const Home=()=>{
    const {myName,myAge}=useBioContext();
    return(
        <h1>hello context API.My name is{myName} and age is {myAge}</h1>
    )
}