import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/ab.png";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <div>
        <img className="w-[80px]  my-0" src={logo} alt="/" />
      </div>

      <ul className="hidden md:flex">
        <li className="p-4 text-xl ">
          <Link to="hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="p-4 text-xl">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="p-4 text-xl">Skills</li>
        <li className="p-4 text-xl">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="p-4 text-xl">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="block md:hidden z-10">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed flex flex-col justify-center items-center' left-0 top-0 w-[90%] h-full  bg-black ease-in-out duration-00"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <li
          onClick={handleClick}
          className="p-7 py-4 text-2xl border-b border-red-600 text-center"
        >
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
