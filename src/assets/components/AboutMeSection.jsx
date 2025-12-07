import styled from "styled-components";

const Section = styled.section`
  display: flex;
  gap: 80px;
  padding: 60px 39px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) and (max-width: 1000px) {
    flex-direction: column;
    padding: 40px 16px;
    align-items: center;
    gap: 40px;
  }
`;
const Img = styled.img`
  @media (max-width: 768px) {
    width: 360px;
  }
`;
const Content = styled.article`
  text-align: start;
  max-width: 650px;
`;
const Paragraph = styled.p`
  margin-bottom: 20px;
  color: #71717a;
`;
const SectionHeading = styled.h1`
  @media (max-width: 768px) {
    font-size: 37px;
  }
`;

function AboutMeSection() {
  return (
    <>
      <Section id="about-me">
        <Img src="./images/aboutMeimg.svg" />
        <Content>
          <SectionHeading>About Me</SectionHeading>
          <Paragraph>
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </Paragraph>
          <Paragraph>
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </Paragraph>
          <Paragraph>
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </Paragraph>
        </Content>
      </Section>
    </>
  );
}
export default AboutMeSection;
