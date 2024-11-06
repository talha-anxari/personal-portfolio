// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Calendar, ArrowRight, ExternalLink } from "lucide-react";

// const ExperienceCard = ({ company, role, period, description, index }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -50 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.2 }}
//       className="relative group"
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//     >
//       <motion.div
//         animate={{
//           scale: isHovered ? 1.02 : 1,
//         }}
//         className="grid grid-cols-12 gap-4 mb-8 relative"
//       >
//         {/* Company Name Column */}
//         <div className="col-span-12 md:col-span-3">
//           <motion.h3 className="text-3xl font-bold text-gray-200">
//             {company}
//           </motion.h3>
//         </div>

//         {/* Experience Details Column */}
//         <div className="col-span-12 md:col-span-9">
//           <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 transition-all duration-300">
//             <div className="flex flex-wrap items-center justify-between mb-4">
//               <h4 className="text-xl font-semibold text-gray-100 mb-2 md:mb-0">
//                 {role}
//               </h4>
//               <div className="flex items-center gap-2 text-gray-400">
//                 <Calendar className="w-4 h-4" />
//                 <span className="text-sm">{period}</span>
//               </div>
//             </div>

//             <p className="text-gray-400 leading-relaxed">{description}</p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
//               className="mt-4 flex items-center gap-4"
//             >
//               <button className="text-sm text-gray-200 flex items-center gap-2 hover:text-red-400 transition-colors">
//                 View Details <ArrowRight className="w-4 h-4" />
//               </button>
//               <button className="text-sm text-gray-200 flex items-center gap-2 hover:text-red-400 transition-colors">
//                 Company Profile <ExternalLink className="w-4 h-4" />
//               </button>
//             </motion.div>
//           </div>
//         </div>

//         {/* Animated Line */}
//         <motion.div
//           className="absolute left-0 top-0 w-1 h-full rounded-full bg-red-500"
//           initial={{ scale: 0 }}
//           animate={{ scale: isHovered ? 1 : 0 }}
//           transition={{ duration: 0.3 }}
//         />
//       </motion.div>
//     </motion.div>
//   );
// };

// const ExperienceSection = () => {
//   const experiences = [
//     {
//       company: "Adobe",
//       role: "Website Development",
//       period: "08/24 - Present",
//       description:
//         "Leading frontend development for enterprise-scale web applications. Implementing responsive designs, optimizing performance, and ensuring cross-browser compatibility. Working with modern frameworks and contributing to design systems.",
//     },
//     {
//       company: "Google",
//       role: "Web Product Designer",
//       period: "02/22 - 01/23",
//       description:
//         "Designed and prototyped user interfaces for web applications. Collaborated with cross-functional teams to define and implement innovative solutions for product direction, visual design, and user experience.",
//     },
//     {
//       company: "Figma",
//       role: "Web Designer",
//       period: "05/23 - 11/23",
//       description:
//         "Created responsive web designs and interactive prototypes. Worked closely with developers to ensure pixel-perfect implementation. Conducted user research and incorporated feedback into design iterations.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-900 py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-16 space-y-4"
//         >
//           <h2 className="text-5xl font-bold pl-2 text-gray-100">
//             EXPERIENCE & WORK
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             A journey through my professional experience and notable projects
//           </p>
//         </motion.div>

//         <div className="space-y-6">
//           {experiences.map((experience, index) => (
//             <ExperienceCard
//               key={experience.company}
//               {...experience}
//               index={index}
//             />
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1 }}
//           className="mt-16 text-center"
//         >
//           <motion.button
//             className="inline-flex items-center gap-2 bg-red-600 px-8 py-4 rounded-full font-medium text-lg text-gray-100 hover:bg-red-500 transition-colors shadow-lg"
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0 0 20px rgba(239, 68, 68, 0.5)",
//             }}
//             whileTap={{ scale: 0.95 }}
//           >
//             View Full Resume <ExternalLink className="w-5 h-5" />
//           </motion.button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ExperienceSection;

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  ArrowRight,
  ExternalLink,
  Briefcase,
  MapPin,
  Clock,
} from "lucide-react";

const ExperienceCard = ({ company, role, period, description, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.02 : 1,
        }}
        className="relative z-10"
      >
        {/* Glass Card */}
        <div className="backdrop-blur-xl bg-gray-800/40 rounded-3xl p-8 border border-gray-700/50 shadow-lg transition-all duration-300 hover:shadow-2xl">
          <div className="grid grid-cols-12 gap-6">
            {/* Company Section */}
            <div className="col-span-12 md:col-span-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ rotate: isHovered ? 360 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center"
                  >
                    <Briefcase className="w-5 h-5 text-blue-400" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white">{company}</h3>
                </div>
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>Remote, Worldwide</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{period}</span>
                </div>
              </div>
            </div>

            {/* Role & Description Section */}
            <div className="col-span-12 md:col-span-8">
              <div className="h-full flex flex-col">
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  {role}
                  <motion.span
                    animate={{ x: isHovered ? 10 : 0 }}
                    className="text-blue-400"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </h4>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {["React", "TypeScript", "Tailwind CSS"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    y: isHovered ? 0 : 20,
                  }}
                  className="flex items-center gap-4 mt-auto"
                >
                  <button className="px-6 py-2 bg-blue-500/20 rounded-xl text-blue-400 flex items-center gap-2 hover:bg-blue-500/30 transition-colors">
                    View Details <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="px-6 py-2 bg-gray-700/50 rounded-xl text-gray-300 flex items-center gap-2 hover:bg-gray-700/70 transition-colors">
                    Company Profile <ExternalLink className="w-4 h-4" />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Border Glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/30 to-blue-600/30 -z-10 blur-xl opacity-30"
          animate={{
            scale: isHovered ? 1.1 : 1,
            opacity: isHovered ? 0.4 : 0.2,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Adobe",
      role: "Website Development",
      period: "08/24 - Present",
      description:
        "Leading frontend development for enterprise-scale web applications. Implementing responsive designs, optimizing performance, and ensuring cross-browser compatibility. Working with modern frameworks and contributing to design systems.",
    },
    {
      company: "Google",
      role: "Web Product Designer",
      period: "02/22 - 01/23",
      description:
        "Designed and prototyped user interfaces for web applications. Collaborated with cross-functional teams to define and implement innovative solutions for product direction, visual design, and user experience.",
    },
    {
      company: "Figma",
      role: "Web Designer",
      period: "05/23 - 11/23",
      description:
        "Created responsive web designs and interactive prototypes. Worked closely with developers to ensure pixel-perfect implementation. Conducted user research and incorporated feedback into design iterations.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 px-4 relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/10 to-blue-600/10 blur-3xl rotate-12 transform scale-150" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-blue-600/10 to-blue-700/10 blur-3xl -rotate-12 transform scale-150" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20 space-y-6"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <h2 className="text-6xl font-bold text-white mb-4">
              EXPERIENCE & WORK
            </h2>
          </motion.div>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
            A journey through my professional experience and notable projects
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.company}
              {...experience}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 text-center"
        >
          <motion.button
            className="inline-flex items-center gap-3 bg-blue-600 px-8 py-4 rounded-xl font-medium text-lg text-white shadow-lg hover:bg-blue-700 transition-all"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(37, 99, 235, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Resume <ExternalLink className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceSection;
