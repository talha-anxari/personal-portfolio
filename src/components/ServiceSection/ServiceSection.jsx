// import React from "react";
// import { motion } from "framer-motion";
// import { Code, Paintbrush, Search } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";

// const ServiceCard = ({ icon: Icon, title, description }) => (
//   <motion.div
//     whileHover={{ scale: 1.05 }}
//     transition={{ duration: 0.2 }}
//     className="w-full"
//   >
//     <Card className="h-full bg-gradient-to-br from-gray-900 to-gray-800 border-none shadow-xl">
//       <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
//         <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
//           <Icon className="w-8 h-8 text-white" />
//         </div>
//         <h3 className="text-xl font-bold text-white">{title}</h3>
//         <p className="text-gray-300">{description}</p>
//       </CardContent>
//     </Card>
//   </motion.div>
// );

// const ServicesSection = () => {
//   const services = [
//     {
//       icon: Code,
//       title: "Web Development",
//       description:
//         "Custom web applications built with modern technologies and best practices for optimal performance.",
//     },
//     {
//       icon: Paintbrush,
//       title: "Web Design",
//       description:
//         "Creative and responsive designs that engage users and enhance your brand identity.",
//     },
//     {
//       icon: Search,
//       title: "SEO (Web Pages)",
//       description:
//         "Optimize your web presence for better visibility and higher search engine rankings.",
//     },
//   ];

//   return (
//     <div className="w-full bg-black py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-4xl font-bold text-center text-white mb-12"
//         >
//           SERVICES I OFFER
//         </motion.h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={service.title}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//             >
//               <ServiceCard {...service} />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesSection;
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Paintbrush,
  Search,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServiceCard = ({ icon: Icon, title, description, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
      }}
      className="w-full h-full perspective-1000" // Added h-full here
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          rotateX: isHovered ? 10 : 0,
          rotateY: isHovered ? 10 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="h-full" // Added h-full here
      >
        <Card className="relative h-[500px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-none shadow-2xl overflow-hidden group">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 opacity-0 group-hover:opacity-100"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          <CardContent className="h-full p-8 flex flex-col items-center justify-between text-center relative z-10">
            <motion.div
              className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-red-500 to-pink-600 flex items-center justify-center mt-8"
              animate={{
                rotate: isHovered ? 360 : 0,
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Icon className="w-10 h-10 text-white" />
            </motion.div>

            <div className="flex-1 flex flex-col justify-center space-y-4 my-8">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{description}</p>
            </div>

            <motion.button
              className="flex items-center gap-2 text-white bg-gradient-to-r from-red-500 to-pink-600 px-6 py-3 rounded-full font-medium mb-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </motion.button>
          </CardContent>

          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </Card>
      </motion.div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Building cutting-edge web applications with modern frameworks and cloud-native architecture for scalable, high-performance solutions.",
    },
    {
      icon: Paintbrush,
      title: "Web Design",
      description:
        "Crafting immersive user experiences with stunning visuals and intuitive interfaces that capture your brand's unique identity.",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Boosting your digital presence with data-driven SEO strategies and advanced analytics to dominate search rankings.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500">
            SERVICES I OFFER
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transforming ideas into digital reality with cutting-edge technology
            and creative innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <motion.button
            className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-medium text-lg shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(236, 72, 153, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            View All Services <ExternalLink className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;
