import React from "react";
import Wpi from "../assets/wpi-logo.png";
function About() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Wpi} alt="/" />

        <div className="flex flex-col justify-center">
          <h1 className="text-[#fb7185] font-bold md:text-4xl sm:text-3xl text-2xl">
            About
          </h1>
          <p>My name is Amanda</p>
        </div>
      </div>
    </div>
  );
}

export default About;
