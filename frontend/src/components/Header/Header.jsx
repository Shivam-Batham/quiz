import React, { useState } from "react";

function Header() {
  const [username, setUsername] = useState("Shivam Batham");
  const [time, setTImer] = useState(100);
  
  const submitbutton = (
    <div className=" sm:col-span-2 ">
      <button
        onClick={() => navigate("/contest")}
        type="submit"
        className="border w-[100%] p-5 rounded-md border-emerald-400 text-4xl text-center   font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-green-500"
      >
        Submit
      </button>
    </div>
  );
  return (
    <header className="fixed bg-gray-950 shadow-lg shadow-neutral-300  sm:min-h-[100px] overflow-hidden p-5  w-[100%] ">
      <nav className="grid sm:grid-cols-12 grid-cols-6  gap-5 ">
        <div className="sm:col-span-2 col-span-2">
          <h1 className="text-4xl text-center   font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-green-500">
            {username}
          </h1>
        </div>

        <div className="sm:col-span-8 col-span-4">
          <h1 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-green-500">
            {time} Time Left
          </h1>
        </div>
      </nav>
    </header>
  );
}

export default Header;
