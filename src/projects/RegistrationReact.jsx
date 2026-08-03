
import { useState } from "react";

export const RegistrationReact = () => {

    const[user,setUser]=useState({
firstname:"",
lastname:"",
email:"",
password:"",
phone:"",
    });
   


const handleInputChange=(e)=>{
    const{name,value}=e.target

  if (name === "phone") {
    // Allow only digits and limit to 10 characters
    if (!/^\d{0,10}$/.test(value)) return;
  }

   setUser((prev)=>({...prev,[name]:value}))
  

}

const handleFormSubmit=(e)=>{
e.preventDefault()

console.log(user);
// If you want the form to clear after submitting,
  setUser({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
  });
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
              value={user.firstname}
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
              value={user.lastname}
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
              value={user.email}
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
              value={user.password}
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
              value={user.phone}
              onChange={handleInputChange}
              maxLength={10}
             pattern="[0-9]{10}"
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
        <section className="mt-6 border-t pt-4">
  <p>
    Hello, my name is{" "}
    <span className="font-semibold">
      {user.firstname} {user.lastname}
    </span>
    . My email address is{" "}
    <span className="font-semibold">{user.email}</span> and my phone number is{" "}
    <span className="font-semibold">{user.phone}</span>.
  </p>
</section>
      </div>
    </section>
  );
};