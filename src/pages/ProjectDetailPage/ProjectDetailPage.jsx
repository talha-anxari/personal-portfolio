// import React, { useContext, useEffect, useState } from "react";
// import { ArrowLeft, Github, ExternalLink } from "lucide-react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import myContext from "@/context/myContext";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "@/Firebase/Firebase";

// const ProjectDetailPage = () => {
//   const context = useContext(myContext);
//   const { loading, setLoading, getAllProject } = context;
//   const navigate = useNavigate();

//   console.log(getAllProject[0]);

//   // const [project, setProject] = useState("");
//   console.log(project);
//   const { id } = useParams();

//   const getProjectData = async () => {
//     setLoading(true);
//     try {
//       const projectTemp = await getDoc(doc(db, "projects", id));
//       setProject(projectTemp.data());
//       console.log(projectTemp.data());
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   };

//   console.log(project);
//   useEffect(() => {
//     getProjectData();
//   }, [id]);
//   return (
//     <div className="min-h-screen bg-zinc-950">
//       {/* Navigation - Matching exact styling */}
//       <nav className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
//         <div className="max-w-6xl mx-auto px-6 py-5">
//           <Link
//             to={"/"}
//             className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors text-sm"
//           >
//             <ArrowLeft className="w-4 h-4" />
//             Back to Projects
//           </Link>
//         </div>
//       </nav>

//       {/* Hero Section with Full Width Image */}
//       <div className="relative h-96 w-full overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950">
//           <img
//             src={project?.imageUrl}
//             alt="Project Cover"
//             className="w-full h-full object-cover opacity-40"
//           />
//         </div>
//         <div className="absolute bottom-0 left-0 right-0 p-6 max-w-6xl mx-auto">
//           <h1 className="text-5xl font-bold text-white mb-4">
//             {project.title}
//           </h1>
//           <p className="text-zinc-300 text-lg max-w-2xl">
//             {project.description}
//           </p>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-16">
//             {/* Features Section */}
//             <section>
//               <h2 className="text-2xl font-semibold text-white mb-8">
//                 Key Features
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {project?.features.map((feature, index) => (
//                   <div key={index} className="flex items-start gap-3">
//                     <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0"></div>
//                     <p className="text-zinc-300">{feature}</p>
//                   </div>
//                 ))}
//               </div>
//             </section>

//             {/* Challenges Section */}
//             <section>
//               <h2 className="text-2xl font-semibold text-white mb-6">
//                 Challenges & Solutions
//               </h2>
//               <p className="text-zinc-300 leading-relaxed">
//                 {project.challenges}
//               </p>
//             </section>

//             {/* Gallery Section */}
//             <section>
//               <h2 className="text-2xl font-semibold text-white mb-8">
//                 Project Gallery
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {project.screenshots.map((image, index) => (
//                   <div key={index} className="space-y-3">
//                     <img
//                       src={image.imageUrl}
//                       alt={`Project screenshot ${index + 1}`}
//                       className="w-full rounded-lg shadow-lg bg-zinc-800"
//                     />
//                     <p className="text-zinc-400 text-sm">{image.caption}</p>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           </div>

//           {/* Sidebar - Matching exact styling */}
//           <div className="lg:sticky lg:top-24 h-fit">
//             <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 space-y-8 border border-zinc-800/50">
//               {/* Project Details */}
//               <div className="space-y-4 border-b border-zinc-800 pb-6">
//                 <div className="flex items-center justify-between">
//                   <span className="text-zinc-400">Date</span>
//                   <span className="text-white font-medium">{project.date}</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-zinc-400">Duration</span>
//                   <span className="text-white font-medium">
//                     {project.duration}
//                   </span>
//                 </div>
//               </div>

//               <div className="space-y-6 border-b border-zinc-800 pb-6">
//                 <div>
//                   <p className="text-zinc-400 mb-2">Client</p>
//                   <p className="text-white font-medium">{project.client}</p>
//                 </div>
//                 <div>
//                   <p className="text-zinc-400 mb-2">Role</p>
//                   <p className="text-white font-medium">{project.role}</p>
//                 </div>
//               </div>

//               <div className="border-b border-zinc-800 pb-6">
//                 <p className="text-zinc-400 mb-4">Technologies Used</p>
//                 <div className="flex flex-wrap gap-2">
//                   {project.technologies.map((tech, index) => (
//                     <span
//                       key={index}
//                       className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-300"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 <Link
//                   to={project.links.url}
//                   className="flex items-center gap-2.5 text-zinc-300 hover:text-white transition-colors"
//                 >
//                   <ExternalLink className="w-5 h-5" />
//                   Visit Live Site
//                 </Link>
//                 <Link
//                   to={project.links.url}
//                   className="flex items-center gap-2.5 text-zinc-300 hover:text-white transition-colors"
//                 >
//                   <Github className="w-5 h-5" />
//                   View Source Code
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetailPage;

import React, { useContext, useEffect, useState } from "react";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import myContext from "@/context/myContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/Firebase/Firebase";

const ProjectDetailPage = () => {
  const context = useContext(myContext);
  const { loading, setLoading, getAllProject } = context;
  const navigate = useNavigate();

  // State initialization for project
  const [project, setProject] = useState(null); // Set to null initially

  const { id } = useParams();

  const getProjectData = async () => {
    setLoading(true);
    try {
      const projectTemp = await getDoc(doc(db, "projects", id));
      setProject(projectTemp.data());
      console.log(projectTemp.data());
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProjectData();
  }, [id]);

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <Link
            to={"/"}
            className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-96 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950">
          <img
            src={project?.mainImageUrl || ""}
            alt="Project Cover"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">
            {project?.title || "Project Title"}
          </h1>
          <p className="text-zinc-300 text-lg max-w-2xl">
            {project?.description || "Project description goes here."}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-8">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project?.features?.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0"></div>
                    <p className="text-zinc-300">{feature}</p>
                  </div>
                )) || <p className="text-zinc-400">No features available.</p>}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-6">
                Challenges & Solutions
              </h2>
              <p className="text-zinc-300 leading-relaxed">
                {project?.technicalChallenges || "No challenges provided."}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-8">
                Project Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project?.screenshots?.map((image, index) => (
                  <div key={index} className="space-y-3">
                    <img
                      src={image}
                      alt={`Project screenshot ${index + 1}`}
                      className="w-full rounded-lg shadow-lg bg-zinc-800"
                    />
                    <p className="text-zinc-400 text-sm">{image.caption}</p>
                  </div>
                )) || (
                  <p className="text-zinc-400">No screenshots available.</p>
                )}
              </div>
            </section>
          </div>

          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 space-y-8 border border-zinc-800/50">
              <div className="space-y-4 border-b border-zinc-800 pb-6">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Date</span>
                  <span className="text-white font-medium">
                    {project?.date || "N/A"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Duration</span>
                  <span className="text-white font-medium">
                    {project?.duration || "N/A"}
                  </span>
                </div>
              </div>

              <div className="space-y-6 border-b border-zinc-800 pb-6">
                <div>
                  <p className="text-zinc-400 mb-2">Client</p>
                  <p className="text-white font-medium">
                    {project?.client || "N/A"}
                  </p>
                </div>
                <div>
                  <p className="text-zinc-400 mb-2">Role</p>
                  <p className="text-white font-medium">
                    {project?.role || "N/A"}
                  </p>
                </div>
              </div>

              <div className="border-b border-zinc-800 pb-6">
                <p className="text-zinc-400 mb-4">Technologies Used</p>
                <div className="flex flex-wrap gap-2">
                  {project?.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-300"
                    >
                      {tech}
                    </span>
                  )) || (
                    <p className="text-zinc-400">No technologies listed.</p>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  to={project?.demoUrl || "#"}
                  className="flex items-center gap-2.5 text-zinc-300 hover:text-white transition-colors"
                  target="_blank"
                >
                  <ExternalLink className="w-5 h-5" />
                  Visit Live Site
                </Link>
                <Link
                  to={project?.githubUrl || "#"}
                  className="flex items-center gap-2.5 text-zinc-300 hover:text-white transition-colors"
                  target="_blank"
                >
                  <Github className="w-5 h-5" />
                  View Source Code
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
