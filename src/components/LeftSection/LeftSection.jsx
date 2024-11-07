import React from "react";
import CenterSection from "../CenterSection/CenterSection";
import { MdWork } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";

const skills = [
  {
    name: "HTML5",
    icon: "https://cdn-icons-png.freepik.com/256/1051/1051277.png?ga=GA1.1.45291887.1719125585&semt=ais_hybrid",
  },
  {
    name: "CSS3",
    icon: "https://cdn-icons-png.freepik.com/256/11516/11516361.png?ga=GA1.1.45291887.1719125585&semt=ais_hybrid",
  },
  {
    name: "Sass",
    icon: "https://cdn-icons-png.freepik.com/256/5968/5968358.png?ga=GA1.1.45291887.1719125585&semt=ais_hybrid",
  },
  {
    name: "JavaScript",
    icon: "https://cdn-icons-png.freepik.com/256/5968/5968292.png?ga=GA1.1.45291887.1719125585&semt=ais_hybrid",
  },
  {
    name: "React",
    icon: "https://cdn-icons-png.freepik.com/256/13101/13101870.png?ga=GA1.1.45291887.1719125585&semt=ais_hybrid",
  },
  {
    name: "Next Js",
    icon: "https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png",
  },
  {
    name: "Git",
    icon: "https://cdn-icons-png.freepik.com/256/9443/9443946.png?ga=GA1.1.45291887.1719125585&semt=ais_hybrid",
  },
  { name: "GitHub", icon: "github.png" },
  { name: "Canva", icon: "canva.png" },
];

const LeftSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Profile Section */}
      <div className="space-y-6">
        <div className="bg-zinc-900 rounded-3xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-red-600 rounded-full" />
            <h2 className="text-white font-medium">
              Muhammad Talha Naeem Ansari
            </h2>
          </div>
          <div className="text-gray-300 space-y-6">
            {/* Introduction */}
            <p className="text-gray-300 text-sm leading-relaxed">
              Hi, I'm Talha Ansari. I'm currently studying Full Stack Web and
              Mobile App Development at Saylani Mass IT Training (SMIT). I have
              a deep passion for technology and love creating websites and
              mobile apps that are both useful and user-friendly. My main focus
              right now is front-end development, and I work with tools like
              Tailwind CSS, JavaScript, React.js, and Next.js to build
              attractive and functional websites that offer a great user
              experience.
            </p>
          </div>

          {/* Work Experience Section */}
          <div className="mt-3">
            <h3 className="text-white font-bold mb-3">WORK EXPERIENCE</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MdWork className="text-gray-400 mt-1" size={24} />
                <div>
                  <p className="text-sm text-gray-400">2020</p>
                  <p className="font-medium text-gray-300">
                    6 Month Remote Job
                  </p>
                  <p className="text-sm text-gray-300">Front end WordPress</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 my-1">
                <FaChalkboardTeacher className="text-gray-400 mt-1" size={24} />
                <div>
                  <p className="text-sm text-gray-400">2024</p>
                  <p className="font-medium text-gray-300">6 Month Training</p>
                  <p className="text-sm text-gray-300">
                    Full Stack Web and Mobile App Development at SMIT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-zinc-900 rounded-3xl p-6">
          <h2 className="text-white text-xl mb-6">Skills</h2>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="aspect-square bg-black rounded-xl flex items-center justify-center p-3 hover:bg-zinc-800 transition-colors"
              >
                <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Center Main Content */}
      <div className="lg:col-span-2 md:w-full">
        <CenterSection />
      </div>
    </div>
  );
};

export default LeftSection;
