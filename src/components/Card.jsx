import React from 'react'

function Card(props) {
    console.log("props:",props.username);
  return (
    <div>

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white rounded-2xl shadow-xl p-6 w-80 text-center">

    {/* <!-- Profile Image --> */}
    <img
      src="./images/crown.jpg"
      alt="Profile"
      className="w-28 h-28 rounded-full mx-auto border-4 border-blue-500"
    />

    {/* <!-- Name --> */}
    <h2 className="text-2xl font-bold mt-4">{props.username}</h2>

    {/* <!-- Profession --> */}
    <p className="text-gray-500">Frontend Developer</p>

    {/* <!-- Description --> */}
    <p className="text-gray-600 mt-3 text-sm">
      Passionate about React, JavaScript, and Tailwind CSS.
      Always learning new technologies.
    </p>

    {/* <!-- Stats --> */}
    <div className="flex justify-around mt-6 border-t pt-4">
      <div>
        <h3 className="text-xl font-bold">120</h3>
        <p className="text-gray-500 text-sm">Posts</p>
      </div>

      <div>
        <h3 className="text-xl font-bold">5.2K</h3>
        <p className="text-gray-500 text-sm">Followers</p>
      </div>

      <div>
        <h3 className="text-xl font-bold">350</h3>
        <p className="text-gray-500 text-sm">Following</p>
      </div>
    </div>

    {/* <!-- Buttons --> */}
    <div className="flex justify-center gap-4 mt-6">
      <button
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Follow
      </button>

      <button
        className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
      >
        {props.btnText || "visit me"}
      </button>
    </div>

  </div>
</div>


    </div>
  )
}

export default Card;
