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
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Navbar = () => {
  // const user = JSON.parse(localStorage.getItem("users"));
  const user = JSON.parse(localStorage.getItem("users")) || {};

  console.log(user);

  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem("users");
    navigate("/");
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex lg:flex-col md:flex-row md:w-fit sm:flex-row items-center gap-6">
      <Link to="/" className="p-3 rounded-full bg-red-600 text-white">
        <Home className="w-5 h-5" />
      </Link>
      <Link
        to="/contact-form"
        className="p-3 rounded-full hover:bg-zinc-800 text-gray-400 hover:text-white transition-colors"
      >
        <Layout className="w-5 h-5" />
      </Link>
      <Link
        to="/services"
        className="p-3 rounded-full hover:bg-zinc-800 text-gray-400 hover:text-white transition-colors"
      >
        <Share className="w-5 h-5" />
      </Link>
      <button className="p-3 rounded-full hover:bg-zinc-800 text-gray-400 hover:text-white transition-colors">
        <Code className="w-5 h-5" />
      </button>
      <div className="relative" ref={menuRef}>
        <button
          onClick={toggleMenu}
          className="flex items-center p-2 rounded-full hover:bg-zinc-800 transition-colors"
        >
          <Avatar className="w-10 h-10">
            <AvatarImage src={user.avatar} alt={user.fname} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </button>
        {isMenuOpen && (
          <div className="absolute lg:-top-16 mt-0 lg:right-[76px] -top-[155px] right-0 lg:mt-2 min-w-fit bg-zinc-800 border border-gray-200 rounded-lg shadow-lg p-4 z-10">
            <div className="flex items-center gap-3">
              <Link to={"/profileInfo"}>
                <Avatar className="w-10 h-10">
                  <AvatarImage src={user.avatar} alt={user.fname} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Link>
              <div>
                <Link to={"/profileInfo"}>
                  <p className="font-medium text-gray-100">
                    {user.fname || "John Deo"}
                  </p>
                </Link>
                <p className="text-sm text-gray-500">
                  {user.email || "example@outlook.com"}
                </p>
              </div>
            </div>
            <hr className="my-2 border-gray-300" />
            {user.fname ? ( // Change this line
              <button
                onClick={handleSignOut}
                className="inline-flex justify-center w-full px-4 py-2 text-sm text-white bg-red-600 font-medium hover:bg-red-500 rounded-lg text-center"
              >
                Sign Out
              </button>
            ) : (
              <Link
                to={"/signIn"}
                className="inline-flex justify-center w-full px-4 py-2 text-sm text-white bg-red-600 font-medium hover:bg-red-500 rounded-lg text-center"
              >
                Sign In
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
