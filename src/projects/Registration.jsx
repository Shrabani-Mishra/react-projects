
// This is the wrong way
import { useState } from "react";

export const Registration = () => {

    const[firstname,setFirstName]=useState("");
    const[lastname,setLastName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[phone,setPhone]=useState("");


const handleInputChange=(e)=>{
    const{name,value}=e.target
    switch(name){
        case"firstname":
         setFirstName(value);
         break;

         case"lastname":
      setLastName(value)
         break;

         case"email":
          setEmail(value)
         break;

         case"password":
          setPassword(e.target.value)
         break;

         case"phone":
         setPhone(e.target.value)
         break;
    }
  

}

const handleFormSubmit=(e)=>{
e.preventDefault()
const formData={
    firstname,lastname,email,password,phone
};
console.log(formData);
}

  return (
    <section className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-lg">

        <h1 className="mb-2 text-center text-3xl font-bold text-gray-800">
          Sign Up
        </h1>

        <p className="mb-6 text-center text-sm text-gray-500">
          Please fill in this form to create an account.
        </p>

        <form className="space-y-5"
        onSubmit={handleFormSubmit}>

          {/* First Name */}
          <div>
            <label
              htmlFor="firstname"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              First Name
            </label>

            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Enter first name"
              required
              value={firstname}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastname"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Last Name
            </label>

            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Enter last name"
              required
              value={lastname}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              required
              value={email}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              required
              value={password}
             onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Phone
            </label>

            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="7319259922"
              required
              value={phone}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Terms */}
          <p className="text-sm text-gray-500">
            By creating an account you agree to our{" "}
            <a
              href="#"
              className="font-medium text-blue-600 hover:underline"
            >
              Terms & Privacy
            </a>
          </p>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
          >
            Sign Up
          </button>

        </form>
      </div>
    </section>
  );
};