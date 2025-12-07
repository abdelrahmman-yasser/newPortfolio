import styled from "styled-components";
import {
  FaSass,
  FaGitAlt,
  FaReact,
  FaNodeJs,
  FaCss3,
  FaHtml5,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiStorybook,
  SiAngular,
  SiVite,
  SiSocketdotio,
} from "react-icons/si";
const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 0fr);
  grid-template-rows: repeat(2, 150px);
  gap: 51px;
  padding: 39px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 160px);
    padding: 0;
    gap: 20px;
  }
  @media (min-width: 1058px) and (max-width: 1250px) {
    grid-template-columns: repeat(5, 0fr);
  }
  @media (min-width: 768px) and (max-width: 1058px) {
    grid-template-columns: repeat(4, 0fr);
  }
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border: 3px solid black;
  padding: 40px;
  border-radius: 5px;
  width: 70px;
  transition: all ease 0.3s;
  &:hover {
    color: white;
    background-color: black;
  }
`;
const SkillsHeading = styled.h1`
  @media (max-width: 768px) {
    font-size: 37px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

const Icon = styled.div`
  font-size: 40px;
`;
const SkillsSection = styled.div`
  margin-top: 8rem;
  margin-bottom: 35px;
  @media (max-width: 768px) {
    margin-top: 13rem;
    margin-bottom: 40px;
  }
`;

function Skills() {
  const Skills = [
    { img: FaSass, text: "Sass" },
    { img: FaGitAlt, text: "Git" },
    { img: FaReact, text: "React" },
    { img: FaNodeJs, text: "Node.js" },
    { img: FaCss3, text: "Css" },
    { img: FaHtml5, text: "HTML" },
    { img: SiNextdotjs, text: "Next.js" },
    { img: SiJavascript, text: "JavaScript" },
    { img: SiStorybook, text: "Storybook" },
    { img: SiAngular, text: "Angular" },
    { img: SiVite, text: "Vite" },
    { img: SiSocketdotio, text: "Socket.Io" },
  ];

  return (
    <>
      <SkillsSection id="Skills">
        <SkillsHeading>My Skills </SkillsHeading>
        <SkillsWrapper>
          {Skills.map((skill, index) => {
            const IconComponent = skill.img;
            return (
              <Skill key={index}>
                <Icon as={IconComponent} />
                <span>{skill.text}</span>
              </Skill>
            );
          })}
        </SkillsWrapper>
      </SkillsSection>
    </>
  );
}
export default Skills;
