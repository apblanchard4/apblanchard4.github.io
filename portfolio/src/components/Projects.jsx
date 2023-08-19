import React from "react";
import Box from "../assets/pinkbox.png";

const Projects = () => {
  return (
    <div className="w-full py-[10rem] bg-white px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Box} alt="/" />
          <h2 className="text-4xl font-bold text-center py-8">Project 1</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 font-bold text-xl">Tools</p>
            <p className="py-2  mx-8">Description</p>
          </div>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Box}
            alt="/"
          />
          <h2 className="text-4xl font-bold text-center py-8">Project 2</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 font-bold text-xl">Tools</p>
            <p className="py-2  mx-8">Description</p>
          </div>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Box} alt="/" />
          <h2 className="text-4xl font-bold text-center py-8">Project 3</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 font-bold text-xl">Tools</p>
            <p className="py-2  mx-8">Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
