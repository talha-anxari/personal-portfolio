import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import RightSection from "../RightSection/RightSection";
import LeftSection from "../LeftSection/LeftSection";

const MainLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen py-6 bg-black">
      {/* Left Column */}
      <div className="flex-1 p-4 lg:pl-8 lg:pr-4">
        <LeftSection />
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-96  lg:pr-8 lg:pt-4 lg:mr-16 md:mr-10">
        <RightSection />
      </div>

      {/* Navigation Bar */}
      <div className="fixed z-20 bottom-0 left-0 right-2 lg:bottom-auto lg:right-3 lg:left-auto lg:top-1/2 lg:-translate-y-1/2 bg-zinc-900 p-3 lg:rounded-full rounded-full md:py-3 sm:py-2 mx-auto w-fit py-5 flex flex-row lg:flex-col justify-around lg:justify-start gap-6">
        <Navbar />
      </div>
    </div>
  );
};

export default MainLayout;
