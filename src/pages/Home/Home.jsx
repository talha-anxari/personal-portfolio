import React from "react";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import ServicesSection from "@/components/ServiceSection/ServiceSection";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import ContactForm from "@/components/ContactForm/ContactForm";
import MainLayout from "@/components/MainLayout/MainLayout";

const Home = () => {
  return (
    <div className="bg-black">
      <MainLayout />
      <ProjectCard />
      <ServicesSection />
      <ExperienceSection />
      <ContactForm />
    </div>
  );
};

export default Home;
