// import React, { useContext } from "react";
// import { Card, CardHeader, CardContent } from "@/components/ui/card";
// import { Link, useNavigate } from "react-router-dom";
// import myContext from "@/context/myContext";
// import { PlusCircle } from "lucide-react";

// const ProjectCard = () => {
//   const user = JSON.parse(localStorage.getItem("users") || "null");
//   const context = useContext(myContext);
//   const { loading, setLoading, getAllProject } = context;
//   const navigate = useNavigate();

//   return (
//     <div className="w-full max-w-7xl mx-auto px-4 py-8 bg-black">
//       <h1 className="text-4xl font-bold text-center mb-12 text-white">
//         RECENT PROJECTS
//       </h1>
//       {user ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {getAllProject?.map((project, index) => (
//             <Card
//               key={index}
//               className="bg-zinc-900 text-white overflow-hidden rounded-3xl p-4"
//             >
//               <div className="relative h-60 overflow-hidden rounded-2xl">
//                 <img
//                   onClick={() => navigate(`/projectDetail/${project.id}`)}
//                   src={project.mainImageUrl}
//                   alt={project.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               <CardHeader>
//                 <h3 className="text-xl font-semibold">{project.title}</h3>
//               </CardHeader>

//               <CardContent>
//                 <p className="text-gray-400 mb-4">
//                   {project.description.slice(0, 100)}...
//                 </p>

//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.technologies?.map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="px-3 py-1 bg-zinc-800 rounded-full text-sm"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 <Link
//                   to={project.demoUrl || "#"}
//                   className="inline-flex items-center text-white hover:text-blue-400 transition-colors"
//                   target="_blank"
//                 >
//                   <span className="mr-2">Visit Project</span>
//                   <svg
//                     className="w-4 h-4"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M14 5l7 7m0 0l-7 7m7-7H3"
//                     />
//                   </svg>
//                 </Link>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       ) : (
//         <div className="min-h-[300px] flex flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-500 to-gray-900">
//           <div className="text-center max-w-xl mx-auto">
//             <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-rose-600">
//               Create Your Account
//             </h1>
//             <div className="space-y-4">
//               <p className="text-lg text-white">
//                 Welcome to our community! Let's get started on your journey with
//                 us.
//               </p>
//               <p className="text-white pb-4">
//                 Join thousands of users who have already discovered the benefits
//                 of being a member.
//               </p>
//               <Link
//                 to={"/signUp"}
//                 className="mt-10 px-8 py-3 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition duration-200"
//               >
//                 Get Started
//               </Link>
//               <p className="text-sm text-white mt-4">
//                 Already have an account?{" "}
//                 <Link
//                   to={"/signIn"}
//                   className="text-red-600 hover:text-red-700 cursor-pointer"
//                 >
//                   Sign in
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       )}

//       {user ? (
//         <Link
//           to="/addProject"
//           className="flex items-center gap-2 mt-5 w-40 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white rounded-lg px-4 py-2 transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
//         >
//           <PlusCircle className="w-5 h-5" />
//           <span>Add Project</span>
//         </Link>
//       ) : (
//         <Link to="/signIn">Go To Sign In</Link>
//       )}
//     </div>
//   );
// };

// export default ProjectCard;

import React, { useContext } from "react";
// import { Card, CardHeader, CardContent, Button } from "@shadcn/ui";
import { Link, useNavigate } from "react-router-dom";
import myContext from "@/context/myContext";
import { PlusCircle, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";

const ProjectCard = () => {
  const context = useContext(myContext);
  const { loading, setLoading, getAllProject } = context;
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-500 dark:text-white">
        Recent Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {getAllProject?.map((project, index) => (
          <Card
            key={index}
            className="bg-gray-800 dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden"
          >
            <div className="relative h-52 w-full">
              <img
                onClick={() => navigate(`/projectDetail/${project.id}`)}
                src={project.mainImageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <CardHeader className="px-6 pt-4">
              <h3 className="text-xl font-bold text-gray-500 dark:text-white">
                {project.title}
              </h3>
            </CardHeader>

            <CardContent className="px-6 pb-4">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description.slice(0, 100)}...
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies?.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <Link
                  to={project.demoUrl || "#"}
                  className="inline-flex items-center text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 transition-colors"
                  target="_blank"
                >
                  <span className="mr-2">Visit Project</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>

                <Button
                  variant="secondary"
                  className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                  onClick={() => navigate(`/projectDetail/${project.id}`)}
                >
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="min-h-[300px] flex flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-rose-600">
            Create Your Account
          </h1>
          <div className="space-y-4">
            <p className="text-lg text-gray-800 dark:text-gray-300">
              Welcome to our community! Let's get started on your journey with
              us.
            </p>
            <p className="text-gray-800 dark:text-gray-300 pb-4">
              Join thousands of users who have already discovered the benefits
              of being a member.
            </p>
            <Link
              to={"/signUp"}
              className="mt-10 px-8 py-3 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition duration-200"
            >
              Get Started
            </Link>
            <p className="text-sm text-gray-800 dark:text-gray-300 mt-4">
              Already have an account?{" "}
              <Link
                to={"/signIn"}
                className="text-red-600 hover:text-red-700 cursor-pointer"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* <Link
        to="/addProject"
        className="flex items-center gap-2 mt-8 w-40 bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
      >
        <PlusCircle className="w-5 h-5" />
        <span>Add Project</span>
      </Link> */}
    </div>
  );
};

export default ProjectCard;
