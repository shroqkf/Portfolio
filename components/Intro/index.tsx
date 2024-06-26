import { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, flexCenter, media } from "../../styles/theme";
import Skill from "../Skill";

const Intro = () => {
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector("#intro")!;
      const divs = element.querySelectorAll("div");

      if (window.scrollY > 150) {
        divs.forEach((div, i) => {
          div.classList.add("animation");
          div.style.animationDelay = `${i}s`;
        });
        setShowSkills(true);
      } else {
        divs.forEach((div) => div.classList.remove("animation"));
        setShowSkills(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Wrapper id="intro">
        <div>{`Hello, my name is Noh Chanyoung. I’m a junior developer who wants to deeply strengthen my skills in web development. 
I’m actively expanding my interest in development regardless of field.`}</div>

        <div>{`“ The only way to do great work is to love what you do. - Steve Jobs”`}</div>

        <div>{`Every time, new plans and challenges have been a great stimulus.
I would like to give myself new tasks and create opportunities to continue to grow.`}</div>
      </Wrapper>
      {showSkills && (
        <SkillsContainer>
          <Skill />
        </SkillsContainer>
      )}
    </>
  );
};

const Wrapper = styled(Container)`
  ${flexCenter};
  flex-direction: column;
  padding-top: 18rem;
  padding-bottom: 21rem;
  white-space: pre-line;
  font-weight: 300;
  font-size: 2.4rem;
  line-height: 2.9rem;
  gap: 30rem;

  ${media.mobile} {
    padding-top: 20rem;
    padding-bottom: 20rem;
    font-size: 1.5rem;
    gap: 20rem;
    line-height: 2rem;
  }

  & > div {
    width: 97.1rem;
    opacity: 0;

    ${media.mobile} {
      width: 100%;
    }

    &:nth-child(2) {
      text-align: center;
      font-weight: 500;
    }
  }
  .animation {
    opacity: 1;
    transition: 2s;
    margin-top: -10rem;
  }
`;

const SkillsContainer = styled.div`
  padding: 15rem;
  border-radius: 7%;
  background-color: ${({ theme }) => theme.color.gray};
`;

export default Intro;
