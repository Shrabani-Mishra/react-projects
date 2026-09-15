import { createContext } from "react";
// 1st step:
export const BioContext =createContext();//returns context component  not variable.
// 2nd step:
export const BioProvider=({children})=>{
    const myName="shrabani";
    const myAge=24;
    return <BioContext.Provider value={{myName,myAge}}>{children}</BioContext.Provider>
}