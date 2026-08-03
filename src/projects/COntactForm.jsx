// import { useState } from "react";

// function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     password: "",
//     message: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleButtonClick = (e) => {
//     e.preventDefault();

//     console.log(formData);

//     setFormData({
//       name: "",
//       password: "",
//       message: "",
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">

//       <div className="bg-white w-full max-w-lg p-8 rounded-lg shadow-lg">

//         <h1 className="text-3xl font-bold text-center mb-6">
//           Contact Form
//         </h1>

//         <form 
//           onSubmit={handleButtonClick}
//           className="space-y-5"
//         >

//           {/* Name */}
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-gray-700 font-medium mb-2"
//             >
//               Name:
//             </label>

//             <input
//               type="text"
//               id="name"
//               name="name"
//               required
//               value={formData.name}
//               onChange={handleInputChange}
//               autoComplete="name"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md
//               focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>


//           {/* Password */}
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-gray-700 font-medium mb-2"
//             >
//               Password:
//             </label>

//             <input
//               type="password"
//               id="password"
//               name="password"
//               required
//               value={formData.password}
//               onChange={handleInputChange}
//               autoComplete="off"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md
//               focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>


//           {/* Message */}
//           <div>
//             <label
//               htmlFor="message"
//               className="block text-gray-700 font-medium mb-2"
//             >
//               Message:
//             </label>

//             <textarea
//               id="message"
//               name="message"
//               required
//               rows="5"
//               value={formData.message}
//               onChange={handleInputChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md
//               focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
//             />
//           </div>


//           {/* Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-md
//             font-semibold hover:bg-blue-700 transition duration-300"
//           >
//             Send Message
//           </button>


//         </form>

//       </div>

//     </div>
//   );
// }

// export default ContactForm;



import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleButtonClick = (e) => {
    e.preventDefault();

    const formData = {
      name,
      password,
      message,
    };

    console.log(formData);

    // Reset form
    setName("");
    setPassword("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white w-full max-w-lg p-8 rounded-lg shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-6">
          Contact Form
        </h1>


        <form 
          onSubmit={handleButtonClick}
          className="space-y-5"
        >

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name:
            </label>

            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>


          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password:
            </label>

            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="off"
              className="w-full px-4 py-2 border border-gray-300 rounded-md
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>


          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Message:
            </label>

            <textarea
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md
              focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>


          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md
            font-semibold hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>


        </form>

      </div>

    </div>
  );
}

export default ContactForm;