import "./App.css";
import Hero from "./assets/components/Hero";
import NavBar from "./assets/components/NavBar";
import Skills from "./assets/components/Skills";
import Experience from "./assets/components/Experience";
import AboutMeSection from "./assets/components/AboutMeSection";
import ProjectsSection from "./assets/components/ProjectsSection";
import TesitmoinalSection from "./assets/components/TesitmoinalSection";
import ContactMeSection from "./assets/components/ContactMeSection";
import FooterSection from "./assets/components/FooterSection";
import styled from "styled-components";

export const OutLineText = styled.span`
  font-family: "poppins", sans-serif;
  font-weight: 800;
  font-size: 48px;
  color: white;
  -webkit-text-stroke: 2px black;
  -webkit-font-smoothing: antialiased;
  margin-left: 10px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
  @media (min-width: 768px) and (max-width: 1000px) {
    font-size: 36px;
  }
`;
function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Skills />
      <Experience />
      <AboutMeSection />
      <ProjectsSection />
      <TesitmoinalSection />
      <ContactMeSection />
      <FooterSection />
    </>
  );
}

export default App;
