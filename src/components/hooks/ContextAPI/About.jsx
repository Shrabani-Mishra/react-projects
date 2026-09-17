import {useBioContext} from ".";
export const About=()=>{
    
    // const {myName,myAge}=useContext(BioContext);
    // const {myName,myAge}=use(BioContext);
    const {myName,myAge}=useBioContext();
    return(
        <h1>hello context API(About).My name is{myName} and age is {myAge}</h1>
    )
}