export const EventHandling = () => {

  const handleButtonClick = (e) => {
    console.log(e.target.value);
    //e.target works like normal DOM events in JavaScript. It refers to the element that triggered the event. In this case, it refers to the button that was clicked.
    alert("button clicked");
  };
//   const handleWelcomeuser=(user)=>{
// console.log(`Hey ${user} welcome to react`);
// console.log(user);
//   }

  const handleWelcomeuser = (user, e) => {
  console.log(user);
  console.log(e.target);
};
//Function componet with name functions
//remeber how we have not called this function handleButtonClick as (handleButtonClick()) bcz if you call function here the it will run without event clicking .You just need to pass reference and not call here.
  return (
    <>
    {/* Passing a function reference */}
    <button onClick={handleButtonClick}>
      Click Me
    </button>


    {/* in react ,event handelers receive the event object as an argument by default.However,when you use an arrow function directly in the Onclick attribute with out passing the
    event explicitely,React does not pass the event object to your handle function .This is because the arrow function creates a new function and calls your handler without passing any arguments.  */}
    <br/>
    {/* Arrow function with event=>when you want extra logic,when you want to pass argument. */}
    {/* Passing the event manually */}
    <button onClick={(e)=>handleButtonClick(e)}>
      Click Me2
    </button>


    {/* Inline event handelers -----When you click the button, React passes the event object to event.*/}
    <button onClick={(event)=>console.log(event)}>Inline function</button>


    {/*Inline arrow function--It runs only when you click.--*/}
    <button onClick={()=>alert("Hey i am inline Array function")}>
Inline Arr fun
    </button>
    <br/>


    {/*  <button onClick={handleWelcomeuser("Shrabani")}> =>This calls handleWelcomeuser("Shrabani") immediately while React is rendering the component, instead of waiting for the button click.Why?

React expects onClick to receive a function reference: */}


    {/* Passing an argument to a function-----executes it immediately while rendering. */}
    {/* <button onClick={()=>{handleWelcomeuser("Shrabani")}}>
        Click ME PLEASE
    </button> */}
    

    {/* Need event + argument */}
    <button onClick={(e) => handleWelcomeuser("Shrabani", e)}>
  Click Me
</button>

{/* If you write onClick={() => handleButtonClick()}, the wrapper receives the event but doesn't forward it, so handleButtonClick gets no argument. */}
<button onClick={() => handleButtonClick()}>
  Click Me
</button>
    </>
  );
};