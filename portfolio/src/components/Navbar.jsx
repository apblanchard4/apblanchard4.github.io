import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#e9478d]">REACT</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Projects</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[90%] h-full border-r border-r-gray-900 bg-[#1c051698] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <li className="p-7 text-2xl border-b border-red-600 text-center">
          Home
        </li>
        <li className="p-7 text-2xl border-b border-red-600 text-center">
          About
        </li>
        <li className="p-7 text-2xl border-b border-red-600 text-center">
          Education
        </li>
        <li className="p-7 text-2xl border-b border-red-600 text-center">
          Projects
        </li>
        <li className="p-7 text-2xl border-b border-red-600 text-center">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
