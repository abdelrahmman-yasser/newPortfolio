import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2.6rem;
  padding: 1.5rem 2.6rem 0 2.6rem;

  @media (max-width: 768px) {
    padding: 1.5rem 16px;
  }
  @media (max-width: 985px) {
  }
`;
const Links = styled.div`
  display: flex;
  gap: 2rem;

  a {
    color: black;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const ResumeButton = styled.button`
  background-color: black;
  color: white;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  display: flex;
  gap: 5px;
  align-items: center;
  font-weight: 600;

  @media (max-width: 768px) {
    display: none;
  }
`;
const Hamburger = styled.div`
  font-size: 26px;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
const Sidebar = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ $open }) => ($open ? "0" : "-100%")};
    height: 100vh;
    width: 260px;
    background: #222;
    padding: 20px;
    transition: 0.4s ease;
    z-index: 999;
    display: flex;
    flex-direction: column;
  }
`;
const CloseBtn = styled.button`
  display: none;
  @media (max-width: 768px) {
    align-self: flex-end;
    font-size: 26px;
    cursor: pointer;
    color: white;
  }
`;
const SideLinks = styled.div`
  display: none;
  @media (max-width: 768px) {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    a {
      color: white;
      text-decoration: none;
      font-size: 20px;
    }
  }
`;
const Overlay = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 998;
  }
`;
function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Nav>
        <img src="/images/Logo.svg" />
        <Links>
          <a href="#about-me">About Me</a>
          <a href="#Skills">Skills</a>
          <a href="#Project">Project</a>
          <a href="#contact-me">Contact Me</a>
        </Links>
        <ResumeButton>
          Resume
          <FiDownload width={"20px"} height={"20px"} />
        </ResumeButton>

        <Hamburger onClick={() => setOpen(true)}>
          <FaBars />
        </Hamburger>
      </Nav>

      <Sidebar $open={open}>
        <CloseBtn onClick={() => setOpen(false)}>
          <FaTimes />
        </CloseBtn>

        <SideLinks>
          <a onClick={() => setOpen(false)} href="#about-me">
            About Me
          </a>
          <a onClick={() => setOpen(false)} href="#Skills">
            Skills
          </a>
          <a onClick={() => setOpen(false)} href="#Project">
            Project
          </a>
          <a onClick={() => setOpen(false)} href="#contact-me">
            Contact Me
          </a>
        </SideLinks>
      </Sidebar>
      {open && <Overlay onClick={() => setOpen(false)} />}
    </>
  );
}

export default NavBar;
