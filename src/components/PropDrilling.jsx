import React from 'react'
// good example of Prop Drilling in React.
export const PropDrilling = () => {
  return (
    <section className='p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-gray-900 text-white'>
        <h1>Componet A</h1>
        <ChildComponent data="React JS"/>
    </section>

  );
};


const ChildComponent=(props)=>{
    return(
        <>
        <h1>Hello,I am component B</h1>
        <GrandChildComponent data={props.data}/>
        </>
    )

}
const GrandChildComponent=(props)=>{
    return(
        <>
        <h1>Hello,I am component C</h1>
        <GrandGrandChildComponent data={props.data}/>
        </>
    )

}

const GrandGrandChildComponent=(props)=>{
    return(
        <>
        <h1>Hello,I am love {props.data}</h1>
        </>
    )

}


