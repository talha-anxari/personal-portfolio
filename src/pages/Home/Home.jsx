import React from "react";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import ContactForm from "@/components/ContactForm/ContactForm";
import MainLayout from "@/components/MainLayout/MainLayout";

const Home = () => {
  return (
    <div className="bg-black">
      <MainLayout />
      <ProjectCard />
      <ContactForm />
    </div>
  );
};

export default Home;
