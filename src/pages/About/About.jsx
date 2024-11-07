// import React from "react";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Linkedin,
//   Github,
//   BookOpen,
//   ChefHat,
//   Globe,
//   Plane,
//   Dumbbell,
// } from "lucide-react";
// import { FaTree } from "react-icons/fa6";

// const About = () => {
//   return (
//     <div className="min-h-screen bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
//         {/* Header Section */}
//         <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-12">
//           <h1 className="text-4xl font-bold mb-2 text-indigo-300">
//             MUHAMMAD TALHA NAEEM ANSARI
//           </h1>
//           <h2 className="text-xl font-semibold mb-6 text-indigo-400">
//             WEB DEVELOPER
//           </h2>
//           <p className="text-gray-300 leading-relaxed">
//             Hi, I'm Talha Ansari. I'm currently studying Full Stack Web and
//             Mobile App Development at Saylani Mass IT Training (SMIT). I have a
//             deep passion for technology and love creating websites and mobile
//             apps that are both useful and user-friendly. My main focus right now
//             is front-end development, and I work with tools like Tailwind CSS,
//             JavaScript, React.js, and Next.js to build attractive and functional
//             websites that offer a great user experience.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8 p-8">
//           {/* Left Column */}
//           <div>
//             {/* Education Section */}
//             <div className="mb-8">
//               <h3 className="text-2xl font-bold text-indigo-400 mb-4 border-b-2 border-indigo-700 pb-2">
//                 EDUCATION
//               </h3>
//               <div className="space-y-4">
//                 <div>
//                   <p className="text-indigo-500">2006 - 2017</p>
//                   <h4 className="font-semibold text-gray-200">
//                     KAMRAN GRAMMAR SCHOOL
//                   </h4>
//                   <p className="text-gray-400">Matric (Science)</p>
//                 </div>
//                 <div>
//                   <p className="text-indigo-500">2021 - 2023</p>
//                   <h4 className="font-semibold text-gray-200">
//                     ALLAMA IQBAL OPEN UNIVERSITY
//                   </h4>
//                   <p className="text-gray-400">Intermediate (Commerce)</p>
//                 </div>
//               </div>
//             </div>

//             {/* Work Experience */}
//             <div className="mb-8">
//               <h3 className="text-2xl font-bold text-indigo-400 mb-4 border-b-2 border-indigo-700 pb-2">
//                 WORK EXPERIENCE
//               </h3>
//               <div className="space-y-4">
//                 <div>
//                   <p className="text-indigo-500">2020</p>
//                   <p className="font-semibold text-gray-200">
//                     6 Month Remote Job
//                   </p>
//                   <p className="text-gray-400">Front end WordPress</p>
//                 </div>
//                 <div>
//                   <p className="text-indigo-500">2024</p>
//                   <p className="font-semibold text-gray-200">
//                     6 Month Training
//                   </p>
//                   <p className="text-gray-400">
//                     Full Stack Web and Mobile App Development at SMIT
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Languages */}
//             <div>
//               <h3 className="text-2xl font-bold text-indigo-400 mb-4 border-b-2 border-indigo-700 pb-2">
//                 LANGUAGES
//               </h3>
//               <ul className="space-y-2">
//                 <li className="text-gray-200">Native Urdu</li>
//                 <li className="text-gray-200">Basic English</li>
//               </ul>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div>
//             {/* Contact Information */}
//             <div className="mb-8">
//               <h3 className="text-2xl font-bold text-indigo-400 mb-4 border-b-2 border-indigo-700 pb-2">
//                 CONTACT
//               </h3>
//               <div className="space-y-3">
//                 <div className="flex items-center space-x-2">
//                   <Phone className="w-5 h-5 text-indigo-500" />
//                   <p className="text-gray-200">+923400262456</p>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Mail className="w-5 h-5 text-indigo-500" />
//                   <p className="text-gray-200">talhaanxaritn@gmail.com</p>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Linkedin className="w-5 h-5 text-indigo-500" />
//                   <a
//                     href="https://www.linkedin.com"
//                     className="text-indigo-300 hover:text-indigo-200 transition-colors"
//                   >
//                     LinkedIn Profile
//                   </a>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Github className="w-5 h-5 text-indigo-500" />
//                   <a
//                     href="https://github.com/talha-anxari"
//                     className="text-indigo-300 hover:text-indigo-200 transition-colors"
//                   >
//                     GitHub Profile
//                   </a>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <MapPin className="w-5 h-5 text-indigo-500" />
//                   <p className="text-gray-200">Orangi Town Karachi</p>
//                 </div>
//               </div>
//             </div>

//             {/* Hobbies */}
//             <div>
//               <h3 className="text-2xl font-bold text-indigo-400 mb-4 border-b-2 border-indigo-700 pb-2">
//                 HOBBIES
//               </h3>
//               <div className="grid grid-cols-2 gap-3">
//                 <div className="flex items-center space-x-2">
//                   <BookOpen className="w-5 h-5 text-indigo-500" />
//                   <span className="text-gray-200">Reading Books</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <FaTree className="w-5 h-5 text-indigo-500" />
//                   <span className="text-gray-200">Gardening</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <ChefHat className="w-5 h-5 text-indigo-500" />
//                   <span className="text-gray-200">Cooking</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Globe className="w-5 h-5 text-indigo-500" />
//                   <span className="text-gray-200">Universe</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Plane className="w-5 h-5 text-indigo-500" />
//                   <span className="text-gray-200">Traveling</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Dumbbell className="w-5 h-5 text-indigo-500" />
//                   <span className="text-gray-200">Fitness</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  BookOpen,
  ChefHat,
  Globe,
  Plane,
  Dumbbell,
} from "lucide-react";
import { FaTree } from "react-icons/fa6";

const About = () => {
  const pdfRef = useRef(); // Reference to capture the component content

  const downloadPDF = async () => {
    const element = pdfRef.current;

    // Temporarily add a background color for PDF capture
    element.style.backgroundColor = "#1f2937"; // Set the same background color as your Tailwind class (bg-gray-800)

    // Capture the component as an image
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    // Reset the background color after capturing
    element.style.backgroundColor = "";

    // Create a new PDF and add the image
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("About_Talha_Ansari.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
        {/* Button to Download PDF */}
        <div className="flex justify-end p-4">
          <button
            onClick={downloadPDF}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Download PDF
          </button>
        </div>

        {/* Content to Capture */}
        <div ref={pdfRef}>
          {/* Header Section */}
          <div className="bg-gradient-to-r from-gray-900 to-black text-white px-8 py-12">
            <h1 className="text-4xl font-bold mb-2">
              MUHAMMAD TALHA NAEEM ANSARI
            </h1>
            <h2 className="text-xl font-semibold mb-6 text-blue-200">
              WEB DEVELOPER
            </h2>
            <p className="text-gray-200 leading-relaxed">
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

          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Left Column */}
            <div>
              {/* Education Section */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-blue-300 mb-4 border-b-2 border-blue-700 pb-2">
                  EDUCATION
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-blue-400">2006 - 2017</p>
                    <h4 className="font-semibold text-gray-200">
                      Matriculation (Karachi Board)
                    </h4>
                    <p className="text-gray-400">
                      Matric (Science) From Karachi Board
                    </p>
                  </div>
                  <div>
                    <p className="text-blue-400">2021 - 2023</p>
                    <h4 className="font-semibold text-gray-200">
                      ALLAMA IQBAL OPEN UNIVERSITY
                    </h4>
                    <p className="text-gray-400">Intermediate (Commerce)</p>
                  </div>
                </div>
              </div>

              {/* Work Experience */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-blue-300 mb-4 border-b-2 border-blue-700 pb-2">
                  WORK EXPERIENCE
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-blue-400">2020</p>
                    <p className="font-semibold text-gray-200">
                      6 Month Remote Job
                    </p>
                    <p className="text-gray-400">Front end WordPress</p>
                  </div>
                  <div>
                    <p className="text-blue-400">2024</p>
                    <p className="font-semibold text-gray-200">
                      6 Month Training
                    </p>
                    <p className="text-gray-400">
                      Full Stack Web and Mobile App Development at SMIT
                    </p>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-2xl font-bold text-blue-300 mb-4 border-b-2 border-blue-700 pb-2">
                  LANGUAGES
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-200">Native Urdu</li>
                  <li className="text-gray-200">Basic English</li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* Contact Information */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-blue-300 mb-4 border-b-2 border-blue-700 pb-2">
                  CONTACT
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <p className="text-gray-200">+923400262456</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <p className="text-gray-200">talhaanxaritn@gmail.com</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Linkedin className="w-5 h-5 text-blue-400" />
                    <a
                      href="https://www.linkedin.com"
                      className="text-blue-300 hover:text-blue-200 transition-colors"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Github className="w-5 h-5 text-blue-400" />
                    <a
                      href="https://github.com/talha-anxari"
                      className="text-blue-300 hover:text-blue-200 transition-colors"
                    >
                      GitHub Profile
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <p className="text-gray-200">Orangi Town Karachi</p>
                  </div>
                </div>
              </div>

              {/* Hobbies */}
              <div>
                <h3 className="text-2xl font-bold text-blue-300 mb-4 border-b-2 border-blue-700 pb-2">
                  HOBBIES
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-200">Reading Books</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaTree className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-200">Gardening</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ChefHat className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-200">Cooking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-200">Universe</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Plane className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-200">Traveling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Dumbbell className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-200">Fitness</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
