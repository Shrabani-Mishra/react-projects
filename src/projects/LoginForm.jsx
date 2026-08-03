
// method-1
// import { useState } from "react";

// function LoginForm() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleButtonClick = (e) => {
//     e.preventDefault();

//     const loginData = {
//       username,
//       password,
//     };

//     console.log(loginData);

//     // Reset the form
//     setUsername("");
//     setPassword("");
//   };

//   return (
//     <div>
//       <h1>Login Form</h1>

//       <form onSubmit={handleButtonClick}>
//         <label>Username:</label>
//         <input
//           type="text"
//           name="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//           autoComplete="off"
//         />

//         <br />
//         <br />

//         <label>Password:</label>
//         <input
//           type="password"
//           name="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           autoComplete="off"
//         />

//         <br />
//         <br />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default LoginForm;


// method2:
import { useState } from "react";

function LoginForm() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleButtonClick = (e) => {
    e.preventDefault();

    console.log(user);

    setUser({
      username: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        
        <h1 className="text-3xl font-bold text-center mb-6">
          Login Form
        </h1>

        <form onSubmit={handleButtonClick} className="space-y-4">

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Username:
            </label>

            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleInputChange}
              autoComplete="off"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>


          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password:
            </label>

            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
              autoComplete="off"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>


          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md 
            hover:bg-blue-600 transition duration-300 font-semibold"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default LoginForm;