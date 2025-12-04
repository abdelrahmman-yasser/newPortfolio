import styled from "styled-components";

const ExperienceDiv = styled.div`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: calc(-50vw);
  margin-right: calc(-50vw);
  box-sizing: border-box;
  overflow-x: hidden;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
  gap: 32px;

  @media (max-width: 768px) {
    left: 0;
    margin-left: 0;
    padding-bottom: 40px;
    width: 100%;
  }
`;
const Social = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 30px;
    margin-bottom: 28px;
  }
`;
const DateText = styled.p`
  margin: 0;
  color: #d9d9d9;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

const SocialHeader = styled.div`
  display: flex;
  gap: 30px;
  img {
    @media (max-width: 768px) {
      width: 50px;
    }
  }
`;
const CompanyTitle = styled.h3`
  margin: 0;
`;
const EachExperience = styled.div`
  border: 1px gray solid;
  border-radius: 10px;
  padding: 30px 24px;
  max-width: 68rem;
  width: 100%;

  ${(props) =>
    props.$youtube &&
    `
    border: 1px #27272A solid;
    background-color: #27272A;
    `}
  @media(max-width:768px) {
    max-width: 19rem;
  }
`;
const ExperienceHeader = styled.h1`
  margin-top: 80px;
  margin-bottom: 80px;
  @media (max-width: 768px) {
    margin-top: 60px;
    margin-bottom: 20px;
    font-size: 37px;
  }
`;
const ExperienceDescription = styled.p`
  text-align: start;
  color: #d9d9d9;
  @media (max-width: 768px) {
    margin: 0;
    line-height: 29px;
  }
`;
const Experiences = [
  {
    logo: "./images/google.svg",
    header: "Lead Software Engineer at Google",
    date: "Nov 2019 - Present",
    text: "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
  },
  {
    logo: "./images/youtube.svg",
    header: "Software Engineer at Youtube",
    date: "Jan 2017 - Oct 2019",
    text: "At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
  },
  {
    logo: "./images/Apple.svg",
    header: "Junior Software Engineer at Apple",
    date: "Jan 2016 - Dec 2017",
    text: "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.",
  },
];
function Experience() {
  return (
    <>
      <ExperienceDiv>
        <ExperienceHeader>My Experience</ExperienceHeader>
        {Experiences.map((experience, index) => {
          return (
            <EachExperience key={index} $youtube={index === 1}>
              <Social>
                <SocialHeader>
                  <img src={experience.logo} alt={experience.header} />
                  <CompanyTitle>{experience.header}</CompanyTitle>
                </SocialHeader>
                <DateText>{experience.date}</DateText>
              </Social>
              <ExperienceDescription>{experience.text}</ExperienceDescription>
            </EachExperience>
          );
        })}
      </ExperienceDiv>
    </>
  );
}
export default Experience;
