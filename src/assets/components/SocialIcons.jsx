import { FaFacebook, FaReddit, FaTwitter, FaDiscord } from "react-icons/fa";
import styled from "styled-components";
const Icon = styled.div`
  font-size: 24px;
  border: 2px solid black;
  padding: 13px;
  border-radius: 4px;
  margin: 0 12px;
  cursor: pointer;
  transition: all ease 0.5s;

  &:hover {
    color: white;
    background-color: black;
  }
`;

const Icons = styled.div`
  position: ${(props) => props.position || "absolute"};
  bottom: ${(props) => props.bottom || "-24px"};
  left: ${(props) => props.left || "28px"};
  @media (max-width: 768px) {
    bottom: ${(props) => props.mobileBottom || props.bottom};
    left: ${(props) => props.mobileLeft || props.left};

    margin-left: ${(props) => (props.position === "relative" ? "-12px" : 0)};
  }
`;
function SocialIcons({ position, bottom, left, mobileBottom, mobileLeft }) {
  return (
    <Icons
      position={position}
      bottom={bottom}
      left={left}
      mobileBottom={mobileBottom}
      mobileLeft={mobileLeft}
    >
      <Icon as={FaFacebook} />
      <Icon as={FaReddit} />
      <Icon as={FaTwitter} />
      <Icon as={FaDiscord} />
    </Icons>
  );
}

export default SocialIcons;
