import React from "react";
import styled from "styled-components";

const Description = styled.h4`
`;

function About() {
  return (
    <div>
      <h1>Hello,</h1>
      <h2>I am Aayush Pal</h2>
      <Description>
        I am a 2nd year CS undergrad student & an indie developer. <br />My passion
        for tech defines my work. I love to keep trying out new stuff.<br /> I am
        particularly active on Twitter.<br /> Apart from programming and writing my
        semester exams, I enjoy watching shows, meeting new people & helping out
        beginners.
      </Description>
    </div>
  );
}

export default About;
