import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfileInfo from "./pages/ProfileInfo/ProfileInfo";
import ProjectDetailPage from "./pages/ProjectDetailPage/ProjectDetailPage";
import AddProject from "./pages/AddProject/AddProject";
import ContactForm from "./components/ContactForm/ContactForm";
import Home from "./pages/Home/Home";
import MyState from "./context/myState";
import About from "./pages/About/About";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import ScrollTop from "./components/scrollTop/ScrollTop";

const App = () => {
  return (
    <MyState>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/addProject" element={<AddProject />} />
          <Route path="/projectDetail/:id" element={<ProjectDetailPage />} />
          <Route path="/profileInfo" element={<ProfileInfo />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectCard />} />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  );
};

export default App;
