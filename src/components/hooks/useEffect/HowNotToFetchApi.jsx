// Hoe not to fetch API
// const App = () => {
//   const [data, setData] = useState([]);

// import { useState } from "react"

//   fetch("https://api.example.com/users")
//     .then(res => res.json())
//     .then(result => setData(result));

//   return <div>...</div>;
// };
// Why?bcz infinite loop
// Render
//  ↓
// fetch()
//  ↓
// setData()
//  ↓
// Render
//  ↓
// fetch()
//  ↓
// setData()
//  ↓
// Render
//  ↓
// fetch()
//  ↓
// ∞


import { useEffect, useState } from "react";

export const HowFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};


