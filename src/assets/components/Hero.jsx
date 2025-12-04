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
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-right: -105px;
  margin-left: 40px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;
const Info = styled.p`
  margin-right: -92px;
  opacity: 50%;

  @media (max-width: 768px) {
    margin: 0;
    padding: 20px;
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
`;

function Hero() {
  return (
    <HeroSection>
      <LeftSection>
        <MainHeading>
          Hello I’am<Bold>Boda gomaa. Frontend</Bold>
          <OutLineText>Developer</OutLineText> Based In <Bold>Egypt.</Bold>
        </MainHeading>
        <Info>
          I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to specimen book.
        </Info>
      </LeftSection>
      <div>
        <Img src="/images/boyMain.svg" />
        <SocialIcon mobileBottom="-81px" mobileLeft="10px" />
      </div>
    </HeroSection>
  );
}
export default Hero;
