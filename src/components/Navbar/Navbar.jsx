// import React from "react";
// import { Home, Layout, Share, Code, ChevronRight } from "lucide-react";
// import { Link } from "react-router-dom";
// import { FiUser } from "react-icons/fi";
// import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

// const Navbar = () => {
//   return (
//     <>
//       <Link to={"/"} className="p-3 rounded-xl bg-red-600 text-white">
//         <Home className="w-5 h-5" />
//       </Link>
//       <Link
//         to={"/contact-form"}
//         className="p-3 rounded-xl hover:bg-zinc-800 text-gray-400 hover:text-white transition-colors"
//       >
//         <Layout className="w-5 h-5" />
//       </Link>
//       <Link
//         to={"/services"}
//         className="p-3 rounded-xl hover:bg-zinc-800 text-gray-400 hover:text-white transition-colors"
//       >
//         <Share className="w-5 h-5" />
//       </Link>
//       <button className="p-3 rounded-xl hover:bg-zinc-800 text-gray-400 hover:text-white transition-colors">
//         <Code className="w-5 h-5" />
//       </button>
//       <Link
//         to={"/signIn"}
//         className=" rounded-xl hover:bg-zinc-800 text-gray-400 hover:text-white transition-colors"
//       >
//         <Avatar>
//           <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
//           <AvatarFallback>CN</AvatarFallback>
//         </Avatar>
//         {/* <FiUser className="w-5 h-5" /> */}
//       </Link>
//     </>
//   );
// };

// export default Navbar;

import React, { useState, useRef, useEffect } from "react";
import { Home, Layout, Share, Code } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { IoInformationCircleOutline } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FaInfoCircle } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex lg:flex-col md:flex-row md:w-fit sm:flex-row items-center gap-6">
      <Link to="/" className="p-3 rounded-full bg-red-600 text-white">
        <Home className="w-5 h-5" />
      </Link>
      <Link
        to="/about"
        className="p-3 rounded-full hover:bg-zinc-800 text-gray-400 hover:text-white transition-colors"
      >
        <IoInformationCircleOutline className="w-5 h-5" />
      </Link>
    </div>
  );
};

export default Navbar;
