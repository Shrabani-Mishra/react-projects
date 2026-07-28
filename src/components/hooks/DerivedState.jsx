import React, { useState } from "react";

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
//   { name: "Angles", age: 45 },
// ];

export const DerivedState = () => {
    const[users,setUser]=useState([
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "Angles", age: 45 },
    ]);

    // derived state: count of users
    console.log(users)
    const userCount=users.length
    // derived state-average age of users
    const  averageAge=(users.reduce((accum,curElem)=>accum+curElem.age,0))/userCount;
  return (
    <div>
      <h1>Users list</h1>

      <ul>
        {users.map((curElem, index) => {
          return (
            <li key={index}>
              {curElem.name} - {curElem.age} years old
            </li>
          );
        })}
      </ul>
      <p>total list-{userCount}</p>
      <p>Average Age-{averageAge}</p>
    </div>
  );
};