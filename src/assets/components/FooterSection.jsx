import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
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
  justify-content: center;
  gap: 894px;
  p {
    text-align: end;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 10px;
    }
  }

  @media (max-width: 1279px) {
    justify-content: space-between;
    padding: 10px;
    gap: 0px;
    left: 0;
    margin-left: 0;
    width: 100%;
  }
`;
const FooterLogo = styled.img`
  @media (max-width: 768px) {
    width: 100px;
  }
`;

function FooterSection() {
  return (
    <Footer>
      <FooterLogo src="/images/WhiteLogo.svg" alt="Logo" />

      <p>
        @ 2019-2023 Personal
        <br /> Made In Figma
      </p>
    </Footer>
  );
}
export default FooterSection;
