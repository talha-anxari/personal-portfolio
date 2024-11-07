import React from "react";
import { Link } from "react-router-dom";

const CenterSection = () => {
  return (
    <div className="bg-red-600 rounded-3xl h-full relative min-h-[400px] lg:min-h-[600px]">
      <img
        src="https://github.com/talha-anxari/website-images/blob/main/images/talha.jpg?raw=true"
        alt="Main Profile"
        className="w-full h-full object-cover rounded-2xl"
      />
      <div className="absolute bottom-10 left-10 right-10">
        <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl">
          <h1 className="text-3xl text-white mb-6">
            Muhammad Talha Naeem Ansari
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to={"/projects"}
              className="bg-red-500 text-white px-8 py-2 rounded-full hover:bg-red-600 transition-colors"
            >
              Projects
            </Link>
            <Link
              to={"/about"}
              className="bg-black text-white px-8 py-2 rounded-full hover:bg-zinc-800 transition-colors"
            >
              Curriculum Vitae
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterSection;
