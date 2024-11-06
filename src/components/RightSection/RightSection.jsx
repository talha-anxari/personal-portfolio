import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const RightSection = () => {
  return (
    <div className="space-y-6 bg-zinc-900 rounded-3xl p-6">
      {/* Profile Info */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-600 rounded-full" />
          <h2 className="text-white text-xl font-medium">
            Muhammad Talha Naeem Ansari - Web Designer & Developer
          </h2>
        </div>
        <p className="text-gray-400 text-sm">
          Located in Karachi, I have several years of experience in web
          development and design, carrying out several successful projects.
        </p>
      </div>

      <div className="rounded-2xl overflow-hidden">
        <img
          src="https://img.freepik.com/free-photo/picture-elegant-young-fashion-man_158595-579.jpg?t=st=1730463263~exp=1730466863~hmac=9f29a60168fea493a35885e0e79145913522112bd6d667d11cde04a40f299f23&w=996"
          alt="Profile"
          className="w-full aspect-square object-cover"
        />
      </div>

      <p className="text-gray-400 text-sm">
        He doesn't write messages on social networks, send me an email and I'll
        answer you.
      </p>

      <button className="w-full bg-red-600 text-white py-3 rounded-full hover:bg-red-700 transition-colors">
        Contact Me
      </button>

      {/* Contact Info */}
      <div className="space-y-4 pt-4 border-t border-zinc-800">
        <h3 className="text-white text-lg font-medium">Contact Information</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-gray-400">
            <Mail className="w-5 h-5" />
            <span className="text-sm">talhaanxaritn@outlook.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <Phone className="w-5 h-5" />
            <span className="text-sm">+923400262456</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <MapPin className="w-5 h-5" />
            <span className="text-sm">Pakistan, Karachi</span>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-4">
        <a
          href="#"
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <FaLinkedinIn className="w-5 h-5 text-black" />
        </a>
        <a
          href="#"
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <FaGithub className="w-5 h-5 text-black" />
        </a>
        <a
          href="#"
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <FaXTwitter className="w-5 h-5 text-black" />
        </a>
      </div>
    </div>
  );
};

export default RightSection;
