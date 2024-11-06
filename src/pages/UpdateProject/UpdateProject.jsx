import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Save } from "lucide-react";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import toast from "react-hot-toast";
import myContext from "@/context/myContext";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "@/firebase/FIrebaseConfig";
import Loader from "@/components/loader/Loader";

const UpdateProject = () => {
  const context = useContext(myContext);
  const { loading, setLoading, getAllProjectFunction } = context;
  const navigate = useNavigate();
  const { id } = useParams();

  const [addProject, setAddProject] = useState({
    title: "",
    description: "",
    imageUrl: "",
    date: "",
    duration: "",
    client: "",
    role: "",
    time: Timestamp.now(),
    technologies: [""],
    features: [""],
    links: [{ name: "", url: "" }],
    challenges: [""],
    screenshots: [{ imageUrl: "", caption: "" }],
  });

  // Handle text input changes
  const handleInputChange = (e, field) => {
    setAddProject({
      ...addProject,
      [field]: e.target.value,
    });
  };

  // Handle array field changes
  const handleArrayChange = (index, value, field) => {
    const newArray = [...addProject[field]];
    newArray[index] = value;
    setAddProject({
      ...addProject,
      [field]: newArray,
    });
  };

  // Handle link changes
  const handleLinkChange = (index, key, value) => {
    const updatedLinks = addProject.links.map((link, idx) =>
      idx === index ? { ...link, [key]: value } : link
    );
    setAddProject({ ...addProject, links: updatedLinks });
  };

  // Add new item to array fields
  const handleAddItem = (field) => {
    if (field === "links") {
      setAddProject({
        ...addProject,
        [field]: [...addProject[field], { name: "", url: "" }],
      });
    } else if (field === "screenshots") {
      setAddProject({
        ...addProject,
        [field]: [...addProject[field], { imageUrl: "", caption: "" }],
      });
    } else {
      setAddProject({
        ...addProject,
        [field]: [...addProject[field], ""],
      });
    }
  };

  // Remove item from array fields
  const handleRemoveItem = (field, index) => {
    const newArray = addProject[field].filter((_, i) => i !== index);
    setAddProject({
      ...addProject,
      [field]: newArray,
    });
  };

  // const getSingleProjectFunction = async () => {
  //   setLoading(true);

  //   try {
  //     const projectTemp = await getDoc(doc(db, "projects", id));
  //     const project = projectTemp.data();

  //     setAddProject({
  //       title: project?.title || "",
  //       role: project?.role || "",
  //       imageUrl: project?.imageUrl || "",
  //       client: project?.client || "",
  //       description: project?.description || "",
  //       date: project?.date || "",
  //       duration: project?.duration || "",
  //       time: project?.time || Timestamp.now(),
  //       technologies: project?.technologies || [""],
  //       features: project?.features || [""],
  //       links: project?.links || [{ name: "", url: "" }],
  //       challenges: project?.challenges || [""],
  //       screenshots: project?.screenshots || [{ imageUrl: "", caption: "" }],
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const getSingleProjectFunction = async () => {
    setLoading(true);
    try {
      const projectTemp = await getDoc(doc(db, "projects", id));
      if (projectTemp.exists()) {
        const project = projectTemp.data();
        setAddProject({
          title: project.title || "",
          role: project.role || "",
          imageUrl: project.imageUrl || "",
          client: project.client || "",
          description: project.description || "",
          date: project.date || "",
          duration: project.duration || "",
          time: project.time || Timestamp.now(),
          technologies: project.technologies || [""],
          features: project.features || [""],
          links: project.links || [{ name: "", url: "" }],
          challenges: project.challenges || [""],
          screenshots: project.screenshots || [{ imageUrl: "", caption: "" }],
        });
      } else {
        console.error("Project not found!");
      }
    } catch (error) {
      console.error("Error fetching project:", error);
    } finally {
      setLoading(false);
    }
  };

  // const updateProduct = async () => {
  //   setLoading(true);

  //   try {
  //     await setDoc(doc(db, "projects", id), addProject);
  //     toast.success("Product Updated successfully");
  //     getSingleProjectFunction();
  //     setLoading(false);
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

  const updateProduct = async () => {
    setLoading(true);
    try {
      await setDoc(doc(db, "projects", id), addProject);
      toast.success("Product Updated successfully");
      await getSingleProjectFunction();
      navigate("/");
    } catch (error) {
      console.error("Error updating product:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getSingleProjectFunction();
  }, [id]);
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-8">
      {loading && (
        <Loader className="fixed inset-0 flex items-center justify-center z-50" />
      )}
      <div className="max-w-4xl mx-auto px-4">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-100">
              Add New Project
            </CardTitle>
            <CardDescription className="text-gray-400">
              Fill in the details about your project
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={updateProduct} className="space-y-8">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-200">
                  Basic Information
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="title">Project Title</Label>
                  <Input
                    id="title"
                    value={addProject.title}
                    onChange={(e) => handleInputChange(e, "title")}
                    className="bg-gray-700 border-gray-600 text-gray-100"
                    placeholder="Enter project title"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={addProject.description}
                    onChange={(e) => handleInputChange(e, "description")}
                    className="bg-gray-700 border-gray-600 text-gray-100 min-h-[100px]"
                    placeholder="Describe your project"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="imageUrl">Main Project Image URL</Label>
                  <Input
                    id="imageUrl"
                    value={addProject.imageUrl}
                    onChange={(e) => handleInputChange(e, "imageUrl")}
                    className="bg-gray-700 border-gray-600 text-gray-100"
                    placeholder="Enter image URL"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-200">
                  Project Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={addProject.date}
                      onChange={(e) => handleInputChange(e, "date")}
                      className="bg-gray-700 border-gray-600 text-gray-100"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration</Label>
                    <Input
                      id="duration"
                      value={addProject.duration}
                      onChange={(e) => handleInputChange(e, "duration")}
                      className="bg-gray-700 border-gray-600 text-gray-100"
                      placeholder="e.g., 3 months"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="client">Client</Label>
                    <Input
                      id="client"
                      value={addProject.client}
                      onChange={(e) => handleInputChange(e, "client")}
                      className="bg-gray-700 border-gray-600 text-gray-100"
                      placeholder="Client name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role</Label>
                    <Input
                      id="role"
                      value={addProject.role}
                      onChange={(e) => handleInputChange(e, "role")}
                      className="bg-gray-700 border-gray-600 text-gray-100"
                      placeholder="e.g., Lead Developer"
                    />
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-200">
                  Technologies
                </h3>
                {addProject.technologies.map((tech, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={tech}
                      onChange={(e) =>
                        handleArrayChange(index, e.target.value, "technologies")
                      }
                      className="bg-gray-700 border-gray-600 text-gray-100"
                      placeholder="e.g., React.js"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      onClick={() => handleRemoveItem("technologies", index)}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleAddItem("technologies")}
                  className="bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Technology
                </Button>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-200">
                  Features
                </h3>
                {addProject.features.map((feature, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={feature}
                      onChange={(e) =>
                        handleArrayChange(index, e.target.value, "features")
                      }
                      className="bg-gray-700 border-gray-600 text-gray-100"
                      placeholder="Enter project feature"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      onClick={() => handleRemoveItem("features", index)}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleAddItem("features")}
                  className="bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Feature
                </Button>
              </div>

              {/* Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-200">
                  Project Links
                </h3>
                {addProject.links.map((link, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={link.name}
                      onChange={(e) =>
                        handleLinkChange(index, "name", e.target.value)
                      }
                      className="bg-gray-700 border-gray-600 text-gray-100"
                      placeholder="Link name"
                    />
                    <Input
                      value={link.url}
                      onChange={(e) =>
                        handleLinkChange(index, "url", e.target.value)
                      }
                      className="bg-gray-700 border-gray-600 text-gray-100"
                      placeholder="URL"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      onClick={() => handleRemoveItem("links", index)}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleAddItem("links")}
                  className="bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Link
                </Button>
              </div>

              {/* Challenges */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-200">
                  Technical Challenges
                </h3>
                {addProject.challenges.map((challenge, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={challenge}
                      onChange={(e) =>
                        handleArrayChange(index, e.target.value, "challenges")
                      }
                      className="bg-gray-700 border-gray-600 text-gray-100"
                      placeholder="Describe a technical challenge"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      onClick={() => handleRemoveItem("challenges", index)}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleAddItem("challenges")}
                  className="bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Challenge
                </Button>
              </div>

              {/* Screenshots */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-200">
                  Screenshots
                </h3>
                {addProject.screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className="space-y-2 border border-gray-700 p-4 rounded-lg"
                  >
                    <Input
                      value={screenshot.imageUrl}
                      onChange={(e) => {
                        const newScreenshots = [...addProject.screenshots];
                        newScreenshots[index].imageUrl = e.target.value;
                        setAddProject({
                          ...addProject,
                          screenshots: newScreenshots,
                        });
                      }}
                      className="bg-gray-700 border-gray-600 text-gray-100"
                      placeholder="Screenshot image URL"
                    />
                    <Input
                      value={screenshot.caption}
                      onChange={(e) => {
                        const newScreenshots = [...addProject.screenshots];
                        newScreenshots[index].caption = e.target.value;
                        setAddProject({
                          ...addProject,
                          screenshots: newScreenshots,
                        });
                      }}
                      className="bg-gray-700 border-gray-600 text-gray-100"
                      placeholder="Screenshot caption"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      onClick={() => handleRemoveItem("screenshots", index)}
                      className="bg-red-600 hover:bg-red-700 mt-2"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Remove Screenshot
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleAddItem("screenshots")}
                  className="bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Screenshot
                </Button>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Project
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UpdateProject;
