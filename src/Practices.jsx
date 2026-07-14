export const Practices=()=>{
    const student=[1,2];
    return(
        <>
        {/* <p>{student.length && "No student found"}</p> */}
     {/* <p>{student.length===0 && "No student found"}</p> */}
        <p>{!student.length && "No student found"}</p>

        <p>Number of students:{student.length}</p>
        </>
    )
};