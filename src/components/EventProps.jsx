 export const EventProps=()=>{
    const HandleWelcomeUser=(user)=>{
alert (`Hey,${user}`);
    };
       const handleHover=(user)=>{
alert (`Hey,thanks for hovering me`);
    };
    return(
        <>
        {/* child component and  two event as a props i pass */}
        <WelcomeUser
         onClick={()=>HandleWelcomeUser("Shrabani")}
            onMouseEnetr={handleHover}/>
        </>
    )
}
const WelcomeUser=(props)=>{
const{onClick,onMouseEnetr}=props;
const handleGreeting=()=>{
    alert(`hey user welcome`);
    // props.onClick();
};
return(
    <>
    <button onClick={onClick}>click me</button>
    <button onMouseEnter={onMouseEnetr}>Hover ME</button>
    <button onClick={handleGreeting}>Greeting</button>
    </>
)
}