import styled from "styled-components";
import SocialIcons from "./SocialIcons";
import { OutLineText } from "../../App";

const ContactMe = styled.div`
  display: flex;
  padding: 39px;
  margin-top: 120px;
  margin-bottom: 60px;

  div {
    flex: 1;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 25px;
    margin-bottom: 10px;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Input = styled.input`
  padding: 18px 24px;
  width: 100%;
  max-width: 437px;
  border: 1px black solid;
  border-radius: 5px;

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  div {
    display: flex;

    @media (max-width: 768px) {
      display: block;
      text-align: start;
    }
  }

  button {
    padding: 16px 20px;
    margin-right: 12px;
    font-weight: 700;
    border: none;
    background: black;
    color: white;
    border-radius: 5px;
    cursor: pointer;

    @media (max-width: 768px) {
      margin-bottom: 30px;
    }
  }
`;
const Right = styled.div`
  text-align: start;
`;
const RightHeading = styled.h1`
  @media (max-width: 768px) {
    font-size: 33px;
  }
`;
const Paragraph = styled.p`
  font-size: ${(props) => (props.$large ? "20px" : "16px")};
  font-weight: ${(props) => (props.$large ? "600" : "400")};
  color: ${(props) => (props.$color ? "#71717A" : "black")};
`;
function ContactMeSection() {
  return (
    <>
      <ContactMe id="contact-me">
        <Left>
          <Form>
            <Input type="" placeholder="Your name" />
            <Input type="email" placeholder="Email" />
            <Input type="url" placeholder="Your website(if exist)" />
            <Input type="text" placeholder="How can i help?*" />
          </Form>
          <div>
            <button>Get In Touch</button>
            <SocialIcons
              position="relative"
              bottom="0"
              left="0"
              mobileBottom="0"
              mobileLeft="0"
            />
          </div>
        </Left>
        <Right>
          <RightHeading>
            Let’s
            <OutLineText>talk</OutLineText> for <br /> Something special
          </RightHeading>
          <Paragraph $color>
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </Paragraph>
          <Paragraph $large>Youremail@gmail.com</Paragraph>
          <Paragraph $large>01234567891</Paragraph>
        </Right>
      </ContactMe>
    </>
  );
}
export default ContactMeSection;
