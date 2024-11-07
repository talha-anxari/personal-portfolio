import { Mail, MapIcon, MapPin, Phone } from "lucide-react";
import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaBook,
  FaSeedling,
  FaUtensils,
  FaRocket,
  FaSuitcase,
  FaDumbbell,
  FaLanguage,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGraduationCap,
} from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const RightSection = () => {
  return (
    <div className="space-y-6 bg-zinc-900 rounded-3xl p-6">
      {/* Profile Info */}
      <div className="space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-2">
          <h2 className="text-red-600 font-medium text-lg">WEB DEVELOPER</h2>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-white font-bold mb-3">EDUCATION</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MdSchool className="text-gray-400 mt-1" size={24} />
              <div>
                <p className="text-sm text-gray-400">2006 - 2017</p>
                <p className="font-medium text-gray-300">
                  Matriculation (Karachi Board)
                </p>
                <p className="text-sm text-gray-300">
                  Matric (Science) From Karachi Board
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <FaGraduationCap className="text-gray-400 mt-1" size={24} />
              <div>
                <p className="text-sm text-gray-400">2021 - 2023</p>
                <p className="font-medium text-gray-300">
                  ALLAMA IQBAL OPEN UNIVERSITY
                </p>
                <p className="text-sm text-gray-300">Intermediate (Commerce)</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold mb-3">CONTACT</h3>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-center text-sm">
              <FaPhoneAlt className="mr-2" />
              +923400262456
            </div>
            <div className="flex items-center text-sm">
              <FaEnvelope className="mr-2" />
              talhaanxaritn@gmail.com
            </div>
            <div className="flex items-center text-sm">
              <FaLinkedin className="mr-2" />
              LinkedIn Profile
            </div>
            <div className="flex items-center text-sm">
              <FaGithub className="mr-2" />
              GitHub Profile
            </div>
            <div className="flex items-center text-sm">
              <MapIcon className="mr-2" />
              Orangi Town Karachi
            </div>
          </div>
        </div>

        {/* Hobbies */}
        <div>
          <h3 className="text-white font-bold mb-3">HOBBIES</h3>
          <div className="grid grid-cols-2 gap-4 text-gray-300">
            <div className="flex items-center">
              <FaBook className="mr-2" />
              <p className="text-sm">Reading Books</p>
            </div>
            <div className="flex items-center">
              <FaSeedling className="mr-2" />
              <p className="text-sm">Gardening</p>
            </div>
            <div className="flex items-center">
              <FaUtensils className="mr-2" />
              <p className="text-sm">Cooking</p>
            </div>
            <div className="flex items-center">
              <FaRocket className="mr-2" />
              <p className="text-sm">Universe</p>
            </div>
            <div className="flex items-center">
              <FaSuitcase className="mr-2" />
              <p className="text-sm">Traveling</p>
            </div>
            <div className="flex items-center">
              <FaDumbbell className="mr-2" />
              <p className="text-sm">Fitness</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold mb-3">LANGUAGES</h3>
          <div className="text-gray-300 text-sm space-y-5">
            <div className="flex items-center">
              <FaLanguage className="mr-2" />
              Native Urdu
            </div>
            <div className="flex items-center">
              <FaLanguage className="mr-2" />
              Basic English
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-4">
        <Link
          to="https://www.linkedin.com/in/talha-ansari-894841281/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <FaLinkedinIn className="w-5 h-5 text-black" />
        </Link>
        <Link
          to="https://github.com/talha-anxari"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <FaGithub className="w-5 h-5 text-black" />
        </Link>
        <Link
          to="https://x.com/talhaanxaritn"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <FaXTwitter className="w-5 h-5 text-black" />
        </Link>
      </div>
    </div>
  );
};

export default RightSection;
