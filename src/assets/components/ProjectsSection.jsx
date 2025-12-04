import styled from "styled-components";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    projectImg: "./images/project01.svg",
    projectName: "Crypto Screener Application",
    projectInfo:
      "I'm Boda gomaa Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    projectLink: ExternalLink,
  },
  {
    projectImg: "./images/project02.svg",
    projectName: "Euphoria - Ecommerce (Apparels) Website Template",
    projectInfo:
      "I'm Boda gomaa Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    projectLink: ExternalLink,
  },
  {
    projectImg: "./images/project03.svg",
    projectName: "Blog Website Template",
    projectInfo:
      "I'm Boda gomaa Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    projectLink: ExternalLink,
  },
];

const MyProjectsSection = styled.section`
  background-color: black;
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: calc(-50vw);
  margin-right: calc(-50vw);
  box-sizing: border-box;
  overflow-x: hidden;
  color: white;

  @media (max-width: 768px) {
    left: 0;
    margin-left: 0;
    width: 100%;
  }
`;
const ProjectsHeading = styled.h1`
  padding-top: 80px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    margin-bottom: 35px;
    font-size: 37px;
  }
`;
const EachProject = styled.article`
  display: flex;
  padding: 0 120px 60px 120px;
  gap: 70px;
  flex-direction: ${(props) => (props.$reverse ? "row-reverse" : "row")};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 0 40px 0;
    gap: 10px;
  }
`;
const Img = styled.img`
  padding: 0;
  @media (max-width: 768px) {
    padding: 0 ${(props) => (props.$Right ? "25px" : 0)} 0
      ${(props) => (props.$Right ? 0 : "25px")};
  }
`;
const ProjectContent = styled.div`
  text-align: start;

  @media (max-width: 768px) {
    padding: 0 25px;
    line-height: 30px;
  }

  h1 {
    @media (max-width: 768px) {
      margin: 0 0 40px 0;
    }
  }
  p {
    opacity: 50%;
    margin-bottom: 25px;
    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
`;

function ProjectsSection() {
  return (
    <>
      <MyProjectsSection id="Project">
        <ProjectsHeading>My projects</ProjectsHeading>
        {projects.map((project, index) => {
          return (
            <EachProject key={index} $reverse={index === 1}>
              <Img
                $Right={index === 1}
                src={project.projectImg}
                alt={project.projectName}
              />
              <ProjectContent>
                <h1>0{index + 1}</h1>
                <h2>{project.projectName}</h2>
                <p>{project.projectInfo}</p>
                <ExternalLink />
              </ProjectContent>
            </EachProject>
          );
        })}
      </MyProjectsSection>
    </>
  );
}
export default ProjectsSection;
