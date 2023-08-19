import React from "react";
import Pic from "../assets/IMG_9586.jpg";
const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-white text-black">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <p className="text-4xl font-bold text-left  border-b-4 border-pink-600">
          About
        </p>
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4m lg:col-span-2"></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-2">
          <div className="sm:text-left  lg:col-span-2 ">
            <p className="text-3xl py-4 font-bold">Hi. I'm Amanda Blanchard.</p>
            <p className="text-xl">
              I am a rising junior attending Worcester Polytechnic Institute,
              pursuing both a bachelor's and master's degree in computer
              science.
              <br /> I have gained valuable experiences in both IT and Software
              Development through my prior internships with R3 and Google. Both
              of these fields allow me to creatively solve problems to impact
              others. <br />
            </p>
          </div>
          <div>
            <img className="mx-auto h-400" src={Pic} alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
