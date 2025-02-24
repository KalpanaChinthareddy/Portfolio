import NavBar from "./Components/Navbar";
import Aboutme from "./Components/Aboutme"
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Certifications from "./Components/Certifications";
import Achievements from "./Components/Achievements";
import Contactme from "./Components/Contactme";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="">
    <NavBar/>
    <Aboutme/>   
    <Education/> 
    <Skills/>
    <Experience/>
    <Projects/>
    <Certifications/>
    <Achievements/>
    <Contactme/>
    <Footer/>
    </div>
  );
}
