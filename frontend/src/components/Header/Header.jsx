import React, { useState } from "react";

function Header() {
  const [username, setUsername] = useState("Shivam");
  const [time, setTImer] = useState(100);
  return ( 
    <header  className=" fixed min-w-[100%] h-[90px] bg-red-300 ">

    
    <nav className="grid sm:grid-cols-12 grid-cols-12  pt-[15px]  gap-5  text-white place-content-center ">

      <div className="border   rounded-xl  col-span-2  border-white min-h-[60px] ">
        {username}
      </div>
      <div className="border  rounded-xl  col-span-8  border-white min-h-[60px]">
        {time} Time Left
      </div>
      <div className="border   rounded-xl col-span-2  border-white min-h-[60px]">
        <button className=" " onClick={() => setCount(count + 1)}>
          submit contest
        </button>
      </div>
    </nav>
    </header>
  );
}

export default Header;
