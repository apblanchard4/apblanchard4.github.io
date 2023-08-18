import React from "react";
import Typed from "react-typed";
const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="text-[#fb7185] md:text-7xl sm:text-5xl text-4xl font-bold md:py-6">
          Amanda Blanchard
        </h1>
        <div>
          {" "}
          <Typed
            className="md:5xl sm:text-4xl text-xl font-bold"
            strings={["Computer Science Student", "WPI Class of 2025"]}
            typeSpeed={100}
            backSpeed={70}
            loop
          />
        </div>
        <button className="bg-gradient-to-r from-[#fb7185] via-[#de6477] to-[#de3e56] hover:bg-gradient-to-br w-[150px] rounded-sm font-medium my-8 mx-auto py-3">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Hero;
