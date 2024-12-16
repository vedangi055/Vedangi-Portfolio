import About from "./Components/About/About";
import Certifications from "./Components/Certifications/Certifications";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Internships from "./Components/Internships/Internships";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import "../src/style.css";
import TechStack from "./Components/TechStack/TechStack";

function App() {
  return (
    <div className="background h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <TechStack />
      <WorkExperience />
      <Internships />
      <Certifications />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
