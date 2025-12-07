import styled from "styled-components";
import SocialIcon from "./SocialIcons";
import { OutLineText } from "../../App";

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const MainHeading = styled.p`
  font-size: 48px;
  max-width: 568px;
  margin-right: -82px;
  z-index: 2;
  letter-spacing: -2px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 33px;
    margin: 0;
    padding: 20px;
  }

  @media (min-width: 768px) and (max-width: 1000px) {
    font-size: 36px;
  }
`;

const LeftSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-right: -105px;
  margin-left: 40px;

  @media (max-width: 768px) {
    margin: 0;
  }
  @media (min-width: 768px) and (max-width: 923px) {
    margin-right: -51px;
  }
`;

const Info = styled.p`
  margin-right: -92px;
  opacity: 50%;

  @media (max-width: 768px) {
    margin: 0;
    padding: 20px;
  }
  @media (min-width: 1000px) and (max-width: 1246px) {
    margin-right: -14px;
  }
  @media (min-width: 768px) and (max-width: 1000px) {
    margin-right: 20px;
    margin-right: -48px;
    padding-bottom: 60px;
    font-size: 14px;
  }
`;

const Bold = styled.span`
  font-weight: 800;
  margin-left: 10px;
`;

const Img = styled.img`
  margin-right: 49px;

  @media (max-width: 768px) {
    width: 355px;
    margin: 0;
    height: 273px;
  }

  @media (min-width: 768px) and (max-width: 1250px) {
    height: auto;
    width: 525px;
    margin-right: 41px;
  }
`;

function Hero() {
  return (
    <HeroSection>
      <LeftSection>
        <MainHeading>
          Hello I am<Bold>Boda Gomaa. Frontend</Bold>
          <OutLineText small={"small"}>Developer</OutLineText> Based In{" "}
          <Bold>Egypt.</Bold>
        </MainHeading>
        <Info>
          I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to specimen book.
        </Info>
        <SocialIcon mobileBottom="-81px" mobileLeft="10px" />
      </LeftSection>
      <div>
        <Img src="/images/boyMain.svg" />
      </div>
    </HeroSection>
  );
}
export default Hero;
