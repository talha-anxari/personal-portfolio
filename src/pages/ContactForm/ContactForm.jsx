// // import React, { useState } from "react";
// // import { motion } from "framer-motion";
// // import {
// //   Send,
// //   Home,
// //   Mail,
// //   Phone,
// //   Instagram,
// //   Twitter,
// //   Facebook,
// //   ArrowRight,
// // } from "lucide-react";

// // const ContactForm = () => {
// //   const [formState, setFormState] = useState({
// //     name: "",
// //     email: "",
// //     message: "",
// //   });

// //   const [isFocused, setIsFocused] = useState({
// //     name: false,
// //     email: false,
// //     message: false,
// //   });

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Handle form submission
// //   };

// //   const inputClasses =
// //     "w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 backdrop-blur-sm";

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4">
// //       <div className="max-w-6xl mx-auto">
// //         <motion.div
// //           initial={{ opacity: 0, y: -20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           className="text-center mb-16 space-y-4"
// //         >
// //           <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
// //             CONTACT ME
// //           </h2>
// //           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
// //             Let's create something amazing together
// //           </p>
// //         </motion.div>

// //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
// //           {/* Contact Information */}
// //           <div className="space-y-8">
// //             <motion.div
// //               initial={{ opacity: 0, x: -50 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               className="space-y-6"
// //             >
// //               <div className="bg-gray-900/50 p-6 rounded-2xl backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300">
// //                 <h3 className="text-xl font-semibold text-white mb-6">
// //                   Get in Touch
// //                 </h3>
// //                 <div className="space-y-4">
// //                   <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
// //                     <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
// //                       <Mail className="w-5 h-5" />
// //                     </div>
// //                     <div>
// //                       <p className="text-sm text-gray-500">Email</p>
// //                       <p className="text-white">hello@example.com</p>
// //                     </div>
// //                   </div>
// //                   <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
// //                     <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
// //                       <Phone className="w-5 h-5" />
// //                     </div>
// //                     <div>
// //                       <p className="text-sm text-gray-500">Phone</p>
// //                       <p className="text-white">+1 (555) 000-0000</p>
// //                     </div>
// //                   </div>
// //                   <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
// //                     <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
// //                       <Home className="w-5 h-5" />
// //                     </div>
// //                     <div>
// //                       <p className="text-sm text-gray-500">Location</p>
// //                       <p className="text-white">New York, USA</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Social Links */}
// //               <div className="bg-gray-900/50 p-6 rounded-2xl backdrop-blur-sm border border-gray-800">
// //                 <h3 className="text-xl font-semibold text-white mb-6">
// //                   Follow Me
// //                 </h3>
// //                 <div className="flex items-center gap-4">
// //                   {[Instagram, Twitter, Facebook].map((Icon, index) => (
// //                     <motion.a
// //                       key={index}
// //                       href="#"
// //                       whileHover={{ scale: 1.1 }}
// //                       whileTap={{ scale: 0.9 }}
// //                       className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300"
// //                     >
// //                       <Icon className="w-5 h-5" />
// //                     </motion.a>
// //                   ))}
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </div>

// //           {/* Contact Form */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             className="lg:col-span-2"
// //           >
// //             <form
// //               onSubmit={handleSubmit}
// //               className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-800"
// //             >
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
// //                 <div className="relative">
// //                   <input
// //                     type="text"
// //                     placeholder="Your Name"
// //                     className={inputClasses}
// //                     onFocus={() => setIsFocused({ ...isFocused, name: true })}
// //                     onBlur={() => setIsFocused({ ...isFocused, name: false })}
// //                     onChange={(e) =>
// //                       setFormState({ ...formState, name: e.target.value })
// //                     }
// //                   />
// //                   <motion.div
// //                     className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500"
// //                     initial={{ width: 0 }}
// //                     animate={{ width: isFocused.name ? "100%" : "0%" }}
// //                     transition={{ duration: 0.3 }}
// //                   />
// //                 </div>
// //                 <div className="relative">
// //                   <input
// //                     type="email"
// //                     placeholder="Your Email"
// //                     className={inputClasses}
// //                     onFocus={() => setIsFocused({ ...isFocused, email: true })}
// //                     onBlur={() => setIsFocused({ ...isFocused, email: false })}
// //                     onChange={(e) =>
// //                       setFormState({ ...formState, email: e.target.value })
// //                     }
// //                   />
// //                   <motion.div
// //                     className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500"
// //                     initial={{ width: 0 }}
// //                     animate={{ width: isFocused.email ? "100%" : "0%" }}
// //                     transition={{ duration: 0.3 }}
// //                   />
// //                 </div>
// //               </div>
// //               <div className="relative mb-6">
// //                 <textarea
// //                   placeholder="Your Message"
// //                   rows="6"
// //                   className={inputClasses}
// //                   onFocus={() => setIsFocused({ ...isFocused, message: true })}
// //                   onBlur={() => setIsFocused({ ...isFocused, message: false })}
// //                   onChange={(e) =>
// //                     setFormState({ ...formState, message: e.target.value })
// //                   }
// //                 />
// //                 <motion.div
// //                   className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500"
// //                   initial={{ width: 0 }}
// //                   animate={{ width: isFocused.message ? "100%" : "0%" }}
// //                   transition={{ duration: 0.3 }}
// //                 />
// //               </div>
// //               <motion.button
// //                 whileHover={{ scale: 1.02 }}
// //                 whileTap={{ scale: 0.98 }}
// //                 className="w-full bg-gradient-to-r bg-red-600  text-white py-4 px-8 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg  transition-shadow"
// //               >
// //                 Send Message
// //                 <Send className="w-5 h-5" />
// //               </motion.button>
// //             </form>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ContactForm;
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Send,
//   Home,
//   Mail,
//   Phone,
//   Instagram,
//   Twitter,
//   Facebook,
// } from "lucide-react";

// const ContactForm = () => {
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [isFocused, setIsFocused] = useState({
//     name: false,
//     email: false,
//     message: false,
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//   };

//   const inputClasses =
//     "w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 backdrop-blur-sm";

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-16 space-y-4"
//         >
//           <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700">
//             CONTACT ME
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Let's create something amazing together
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           <div className="space-y-8">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="space-y-6"
//             >
//               <div className="bg-gray-900/50 p-6 rounded-2xl backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300">
//                 <h3 className="text-xl font-semibold text-white mb-6">
//                   Get in Touch
//                 </h3>
//                 <div className="space-y-4">
//                   <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
//                     <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
//                       <Mail className="w-5 h-5" />
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Email</p>
//                       <p className="text-white">hello@example.com</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
//                     <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
//                       <Phone className="w-5 h-5" />
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Phone</p>
//                       <p className="text-white">+1 (555) 000-0000</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
//                     <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
//                       <Home className="w-5 h-5" />
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Location</p>
//                       <p className="text-white">New York, USA</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-gray-900/50 p-6 rounded-2xl backdrop-blur-sm border border-gray-800">
//                 <h3 className="text-xl font-semibold text-white mb-6">
//                   Follow Me
//                 </h3>
//                 <div className="flex items-center gap-4">
//                   {[Instagram, Twitter, Facebook].map((Icon, index) => (
//                     <motion.a
//                       key={index}
//                       href="#"
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                       className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r from-red-500 to-red-700 transition-all duration-300"
//                     >
//                       <Icon className="w-5 h-5" />
//                     </motion.a>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="lg:col-span-2"
//           >
//             <form
//               onSubmit={handleSubmit}
//               className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-800"
//             >
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder="Your Name"
//                     className={inputClasses}
//                     onFocus={() => setIsFocused({ ...isFocused, name: true })}
//                     onBlur={() => setIsFocused({ ...isFocused, name: false })}
//                     onChange={(e) =>
//                       setFormState({ ...formState, name: e.target.value })
//                     }
//                   />
//                   <motion.div
//                     className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-500 to-red-700"
//                     initial={{ width: 0 }}
//                     animate={{ width: isFocused.name ? "100%" : "0%" }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 </div>
//                 <div className="relative">
//                   <input
//                     type="email"
//                     placeholder="Your Email"
//                     className={inputClasses}
//                     onFocus={() => setIsFocused({ ...isFocused, email: true })}
//                     onBlur={() => setIsFocused({ ...isFocused, email: false })}
//                     onChange={(e) =>
//                       setFormState({ ...formState, email: e.target.value })
//                     }
//                   />
//                   <motion.div
//                     className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-500 to-red-700"
//                     initial={{ width: 0 }}
//                     animate={{ width: isFocused.email ? "100%" : "0%" }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 </div>
//               </div>
//               <div className="relative mb-6">
//                 <textarea
//                   placeholder="Your Message"
//                   rows="6"
//                   className={inputClasses}
//                   onFocus={() => setIsFocused({ ...isFocused, message: true })}
//                   onBlur={() => setIsFocused({ ...isFocused, message: false })}
//                   onChange={(e) =>
//                     setFormState({ ...formState, message: e.target.value })
//                   }
//                 />
//                 <motion.div
//                   className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-500 to-red-700"
//                   initial={{ width: 0 }}
//                   animate={{ width: isFocused.message ? "100%" : "0%" }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </div>
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white py-4 px-8 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
//               >
//                 Send Message
//                 <Send className="w-5 h-5" />
//               </motion.button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
