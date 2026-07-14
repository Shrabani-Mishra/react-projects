export const EventHandling = () => {
  const handleButtonClick = (e) => {
    console.log(e.target.value);
    //e.target works like normal DOM events in JavaScript. It refers to the element that triggered the event. In this case, it refers to the button that was clicked.
    alert("button clicked");
  };
  const handleWelcomeuser=(user)=>{
console.log(`Hey ${user} welcome to react`);
console.log(user);
  }
//Function componet with name functions
//remeber how we have not called this function handleButtonClick as (handleButtonClick()) bcz if you call function here the it will run without event clicking .You just need to pass reference and not call here.
  return (
    <>
    <button onClick={handleButtonClick}>
      Click Me
    </button>
    <br/>
    {/* Arrow function with event=>when you want extra logic,when you want to pass argument. */}
    <button onClick={(e)=>handleButtonClick(e)}>
      Click Me2
    </button>
    {/* Function component with Inline Arrow function */}
    <button onClick={()=>alert("Hey i am inline event function")}>
Inline Arr gfun
    </button>
    <br/>
    {/*  <button onClick={handleWelcomeuser("Shrabani")}> =>runs immediately but i want when clicking */}
    <button onClick={()=>{handleWelcomeuser("Shrabani")}}>
        Click ME PLEASE
    </button>
    
    </>
  );
};