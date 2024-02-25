import React from "react";
import "./Footer.css";
function Footer() {
 

 
  return (
    <div className="w-screen bg-gray-950 text-white border-t-2 border-gray-400 font-sans  flex items-center justify-around flex-col pt-6 pb-2 overflow-hidden">
      <div className="flex items-center justify-around w-screen pb-4">
        <div>
          <p className="text-xl font-bold">MyWeb Solution</p>
          <p>Location</p>
          <p>Email</p>
          <p>Contact</p>
        </div>
        <div>
          <p className="text-xl font-bold">Social Media</p>
          <p>Linkedin</p>
          <p>Github</p>
          <p>Instagram</p>
        </div>
      </div>
      <div>
          <p>copyright <span className="text-blue-500 ">@Arman-Ali</span> 2024 | Policy</p>
      </div>
    </div>
  );
}

export default Footer;