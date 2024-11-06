// import React, { useContext, useState } from "react";
// import {
//   PlusCircle,
//   MinusCircle,
//   Github,
//   Globe,
//   Image as ImageIcon,
// } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { addDoc, collection, Timestamp } from "firebase/firestore";
// import toast from "react-hot-toast";
// import myContext from "@/context/myContext";
// import { db } from "@/Firebase/Firebase";
// import { useNavigate } from "react-router";
// import Loader from "@/components/loader/Loader";

// const AddProject = () => {
//   const context = useContext(myContext);
//   const { loading, setLoading } = context;
//   const navigate = useNavigate();
//   const [addProject, setAddProject] = useState({
//     title: "",
//     description: "",
//     mainImageUrl: "",
//     date: "",
//     duration: "",
//     client: "",
//     role: "",
//     technologies: [""],
//     time: Timestamp.now(),
//     features: [""],
//     githubUrl: "",
//     demoUrl: "",
//     technicalChallenges: [""],
//     screenshots: [""],
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAddProject((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleArrayChange = (index, field, value) => {
//     setAddProject((prev) => {
//       const newArray = [...prev[field]];
//       newArray[index] = value;
//       return {
//         ...prev,
//         [field]: newArray,
//       };
//     });
//   };

//   const addField = (field) => {
//     setAddProject((prev) => ({
//       ...prev,
//       [field]: [...prev[field], ""],
//     }));
//   };

//   const removeField = (field, index) => {
//     setAddProject((prev) => ({
//       ...prev,
//       [field]: prev[field].filter((_, i) => i !== index),
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (
//       !addProject.title ||
//       !addProject.role ||
//       !addProject.mainImageUrl ||
//       !addProject.client ||
//       !addProject.description ||
//       !addProject.technicalChallenges ||
//       !addProject.duration ||
//       !addProject.features ||
//       !addProject.screenshots ||
//       !addProject.technologies ||
//       !addProject.date ||
//       !addProject.githubUrl ||
//       !addProject.demoUrl
//     ) {
//       return toast.error("Please fill in all fields");
//     }
//     setLoading(true);
//     try {
//       const projectRef = collection(db, "projects");
//       await addDoc(projectRef, addProject);
//       toast.success("Project Added Successfully");
//       navigate("/");
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   };

//   const renderArrayField = (field, title, placeholder) => (
//     <div className="space-y-2">
//       <label className="block text-sm font-medium text-gray-200">{title}</label>
//       {addProject[field].map((item, index) => (
//         <div key={index} className="flex gap-2">
//           <Input
//             value={item}
//             onChange={(e) => handleArrayChange(index, field, e.target.value)}
//             placeholder={placeholder}
//             className="flex-1 bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-400"
//           />
//           <Button
//             type="button"
//             variant="outline"
//             size="icon"
//             onClick={() => removeField(field, index)}
//             className="border-gray-700 hover:bg-gray-700"
//           >
//             <MinusCircle className="h-4 w-4 text-gray-200" />
//           </Button>
//         </div>
//       ))}
//       <Button
//         type="button"
//         variant="outline"
//         className="w-full border-gray-700 hover:bg-gray-700 text-gray-200"
//         onClick={() => addField(field)}
//       >
//         <PlusCircle className="h-4 w-4 mr-2" />
//         Add {title}
//       </Button>
//     </div>
//   );

//   return (
//     <div className="w-full min-h-screen bg-slate-800 py-8 px-4">
//       {loading && (
//         <Loader className="fixed inset-0 flex items-center justify-center z-50" />
//       )}
//       <Card className="w-full max-w-4xl mx-auto bg-gray-900 border-gray-800">
//         <CardHeader>
//           <CardTitle className="text-gray-200">Project Details Form</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">
//                   Project Title
//                 </label>
//                 <Input
//                   name="title"
//                   value={addProject.title}
//                   onChange={handleChange}
//                   placeholder="Enter project title"
//                   className="bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-400"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-200">
//                   Description
//                 </label>
//                 <Textarea
//                   name="description"
//                   value={addProject.description}
//                   onChange={handleChange}
//                   placeholder="Enter project description"
//                   rows={4}
//                   className="bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-400"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-200">
//                   Main Project Image URL
//                 </label>
//                 <div className="flex gap-2">
//                   <Input
//                     name="mainImageUrl"
//                     value={addProject.mainImageUrl}
//                     onChange={handleChange}
//                     placeholder="Enter image URL"
//                     className="bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-400"
//                   />
//                   <Button
//                     type="button"
//                     variant="outline"
//                     size="icon"
//                     className="border-gray-700 hover:bg-gray-700"
//                   >
//                     <ImageIcon className="h-4 w-4 text-gray-200" />
//                   </Button>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-200">
//                     Date
//                   </label>
//                   <Input
//                     type="date"
//                     name="date"
//                     value={addProject.date}
//                     onChange={handleChange}
//                     className="bg-gray-800 border-gray-700 text-gray-200"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-200">
//                     Duration
//                   </label>
//                   <Input
//                     name="duration"
//                     value={addProject.duration}
//                     onChange={handleChange}
//                     placeholder="e.g., 3 months"
//                     className="bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-400"
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-200">
//                     Client
//                   </label>
//                   <Input
//                     name="client"
//                     value={addProject.client}
//                     onChange={handleChange}
//                     placeholder="Enter client name"
//                     className="bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-400"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-200">
//                     Your Role
//                   </label>
//                   <Input
//                     name="role"
//                     value={addProject.role}
//                     onChange={handleChange}
//                     placeholder="Enter your role"
//                     className="bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-400"
//                   />
//                 </div>
//               </div>

//               {renderArrayField(
//                 "technologies",
//                 "Technologies",
//                 "Enter technology"
//               )}
//               {renderArrayField("features", "Features", "Enter feature")}
//               {renderArrayField(
//                 "technicalChallenges",
//                 "Technical Challenges",
//                 "Enter challenge"
//               )}
//               {renderArrayField(
//                 "screenshots",
//                 "Screenshots",
//                 "Enter screenshot URL"
//               )}

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-200">
//                     GitHub URL
//                   </label>
//                   <div className="flex gap-2">
//                     <Input
//                       name="githubUrl"
//                       value={addProject.githubUrl}
//                       onChange={handleChange}
//                       placeholder="Enter GitHub URL"
//                       className="bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-400"
//                     />
//                     <Button
//                       type="button"
//                       variant="outline"
//                       size="icon"
//                       className="border-gray-700 hover:bg-gray-700"
//                     >
//                       <Github className="h-4 w-4 text-gray-200" />
//                     </Button>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-200">
//                     Live Demo URL
//                   </label>
//                   <div className="flex gap-2">
//                     <Input
//                       name="demoUrl"
//                       value={addProject.demoUrl}
//                       onChange={handleChange}
//                       placeholder="Enter demo URL"
//                       className="bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-400"
//                     />
//                     <Button
//                       type="button"
//                       variant="outline"
//                       size="icon"
//                       className="border-gray-700 hover:bg-gray-700"
//                     >
//                       <Globe className="h-4 w-4 text-gray-200" />
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <Button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white"
//               disabled={loading}
//             >
//               {loading ? "Saving..." : "Save Project"}
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default AddProject;

import React, { useContext, useState } from "react";
import {
  PlusCircle,
  MinusCircle,
  Github,
  Globe,
  Image as ImageIcon,
  CalendarIcon,
} from "lucide-react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import toast from "react-hot-toast";
import myContext from "@/context/myContext";
import { db } from "@/Firebase/Firebase";
import { useNavigate } from "react-router";
import Loader from "@/components/loader/Loader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const AddProject = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;
  const navigate = useNavigate();
  const [date, setDate] = useState();
  const [addProject, setAddProject] = useState({
    title: "",
    description: "",
    mainImageUrl: "",
    date: "",
    duration: "",
    client: "",
    role: "",
    technologies: [""],
    time: Timestamp.now(),
    features: [""],
    githubUrl: "",
    demoUrl: "",
    technicalChallenges: [""],
    screenshots: [""],
  });

  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate);
    setAddProject((prev) => ({
      ...prev,
      date: format(selectedDate, "yyyy-MM-dd"),
    }));
  };

  // ... (rest of the handlers remain same)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleArrayChange = (index, field, value) => {
    setAddProject((prev) => {
      const newArray = [...prev[field]];
      newArray[index] = value;
      return {
        ...prev,
        [field]: newArray,
      };
    });
  };

  const addField = (field) => {
    setAddProject((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  };

  const removeField = (field, index) => {
    setAddProject((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !addProject.title ||
      !addProject.role ||
      !addProject.mainImageUrl ||
      !addProject.client ||
      !addProject.description ||
      !addProject.technicalChallenges ||
      !addProject.duration ||
      !addProject.features ||
      !addProject.screenshots ||
      !addProject.technologies ||
      !addProject.date ||
      !addProject.githubUrl ||
      !addProject.demoUrl
    ) {
      return toast.error("Please fill in all fields");
    }
    setLoading(true);
    try {
      const projectRef = collection(db, "projects");
      await addDoc(projectRef, addProject);
      toast.success("Project Added Successfully");
      navigate("/");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const renderArrayField = (field, title, placeholder) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-300">{title}</label>
      {addProject[field].map((item, index) => (
        <div key={index} className="flex gap-2">
          <Input
            value={item}
            onChange={(e) => handleArrayChange(index, field, e.target.value)}
            placeholder={placeholder}
            className="flex-1 bg-gray-800/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
          />
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => removeField(field, index)}
            className="border-gray-600 hover:bg-red-500/20 hover:border-red-500 transition-colors duration-200"
          >
            <MinusCircle className="h-4 w-4 text-gray-600" />
          </Button>
        </div>
      ))}
      <Button
        type="button"
        variant="outline"
        className="w-full border-gray-600 bg-gray-800/50 hover:bg-blue-500/20 hover:border-blue-500 transition-colors duration-200 text-gray-200"
        onClick={() => addField(field)}
      >
        <PlusCircle className="h-4 w-4 mr-2" />
        Add {title}
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-8 px-4">
      {loading && (
        <Loader className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm" />
      )}
      <Card className="w-full max-w-7xl mx-auto bg-gray-900/50 border-gray-700 backdrop-blur-sm shadow-xl">
        <CardHeader className="border-b border-gray-700/50">
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Project Details Form
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Project Title
                </label>
                <Input
                  name="title"
                  value={addProject.title}
                  onChange={handleChange}
                  placeholder="Enter project title"
                  className="bg-gray-800/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Description
                </label>
                <Textarea
                  name="description"
                  value={addProject.description}
                  onChange={handleChange}
                  placeholder="Enter project description"
                  rows={4}
                  className="bg-gray-800/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Main Project Image URL
                </label>
                <div className="flex gap-2">
                  <Input
                    name="mainImageUrl"
                    value={addProject.mainImageUrl}
                    onChange={handleChange}
                    placeholder="Enter image URL"
                    className="bg-gray-800/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  />
                  {/* <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="border-gray-600 hover:bg-blue-500/20 hover:border-blue-500 transition-colors duration-200"
                  >
                    <ImageIcon className="h-4 w-4 text-gray-200" />
                  </Button> */}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal bg-gray-800/50 border-gray-600 hover:bg-gray-700/50",
                          !date && "text-gray-400"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={handleDateSelect}
                        initialFocus
                        className="bg-gray-800 text-white"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Duration
                  </label>
                  <Input
                    name="duration"
                    value={addProject.duration}
                    onChange={handleChange}
                    placeholder="e.g., 3 months"
                    className="bg-gray-800/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Client
                  </label>
                  <Input
                    name="client"
                    value={addProject.client}
                    onChange={handleChange}
                    placeholder="Enter client name"
                    className="bg-gray-800/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Your Role
                  </label>
                  <Input
                    name="role"
                    value={addProject.role}
                    onChange={handleChange}
                    placeholder="Enter your role"
                    className="bg-gray-800/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              {renderArrayField(
                "technologies",
                "Technologies",
                "Enter technology"
              )}
              {renderArrayField("features", "Features", "Enter feature")}
              {renderArrayField(
                "technicalChallenges",
                "Technical Challenges",
                "Enter challenge"
              )}
              {renderArrayField(
                "screenshots",
                "Screenshots",
                "Enter screenshot URL"
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    GitHub URL
                  </label>
                  <div className="flex gap-2">
                    <Input
                      name="githubUrl"
                      value={addProject.githubUrl}
                      onChange={handleChange}
                      placeholder="Enter GitHub URL"
                      className="bg-gray-800/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="border-gray-600 hover:bg-purple-500/20 hover:border-purple-500 transition-colors duration-200"
                    >
                      <Github className="h-4 w-4 text-gray-600" />
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Live Demo URL
                  </label>
                  <div className="flex gap-2">
                    <Input
                      name="demoUrl"
                      value={addProject.demoUrl}
                      onChange={handleChange}
                      placeholder="Enter demo URL"
                      className="bg-gray-800/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="border-gray-600 hover:bg-green-500/20 hover:border-green-500 transition-colors duration-200"
                    >
                      <Globe className="h-4 w-4 text-gray-600" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg shadow-lg transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Saving...
                </span>
              ) : (
                "Save Project"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddProject;
