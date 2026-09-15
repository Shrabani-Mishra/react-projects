import React, { useId, useState } from 'react'

export const UseID = () => {
//   const usernameid=  useId();
//   const emailId=useId();
//   return (
//     <>
//       <form>
//         <div>
//         <lable htmlFor={usernameid}>UserName:</lable>
//         <input type='text' id='username' name='name'/>
//         </div>
//         <div>
//             <lable htmlFor={emailId}>Email</lable>
//             <input type="email"id='email' name='email' />
//         </div>
//         <button type='submit'>Submit</button>
//       </form>
//     </>
//   )

// =============================
// this let's you avoid calling useId for every single element that needs a unique ID.
const id= useId();
return (
    <>
       <form>
        <div>
          <label htmlFor={`${id}-username`}>
            UserName:
          </label>
          <input
            type="text"
            id={`${id}-username`}
            name="name"
          />
        </div>

        <div>
          <label htmlFor={`${id}-email`}>
            Email:
          </label>
          <input
            type="email"
            id={`${id}-email`}
            name="email"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  )

}


