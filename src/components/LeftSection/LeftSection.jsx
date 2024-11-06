import React from "react";
import CenterSection from "../CenterSection/CenterSection";

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
        {/* Name Card */}
        <div className="bg-zinc-900 rounded-3xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-red-600 rounded-full" />
            <h2 className="text-white font-medium">
              Muhammad Talha Naeem Ansari
            </h2>
          </div>
          <div className="rounded-2xl bg-red-600 overflow-hidden mb-4">
            <img
              src="https://img.freepik.com/free-photo/picture-elegant-young-fashion-man_158595-582.jpg?t=st=1730463868~exp=1730467468~hmac=f7372f814544e9c50202eba6a22420cb22eb2d1cdafe4eefd22a0d3a31ddb28f&w=996"
              alt="Profile"
              className="w-full aspect-square object-cover"
            />
          </div>
          <p className="text-gray-300 text-sm mb-6">
            Passionate about creating and designing websites with the best
            engaging interfaces.
          </p>
          <button className="w-full bg-black text-white py-3 rounded-full hover:bg-zinc-800 transition-colors">
            Download CV
          </button>
        </div>

        {/* Skills Card */}
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
          <p className="text-gray-400 text-sm">
            Visit the projects section to see the work done with these web
            technologies.
          </p>
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
