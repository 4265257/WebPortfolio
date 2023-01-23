import React from "react";
import { SmallerSectionTitle } from "../styles/GlobalComponents/index";
import { AboutSection, FlexContainer, TextArea, ImgBox } from "../components/aboutStyles";
import { Container } from "../styles/GlobalComponents/index";
import Image from "next/image";
import AvatarYB from "../public/AvatarYB.svg";
const About = () => (
  <Container>
    <FlexContainer>
      <SmallerSectionTitle>About</SmallerSectionTitle>
      <AboutSection>
        <ImgBox>
        <Image
          src={AvatarYB}
          alt="AvatarYB"
          height={200}
          width={200}
          priority
           />
          </ImgBox>
        <TextArea>
          My main goal is to work in the tech/environmental industry where I can
          be given opportunity to use all my creativity and my skills that I
          have obtained from my education and previous job experiences while
          also being able to enhance these skills for the future. I have over 7
          years of experience in customer service. This training equipped me
          with many importants assets such as patience, attentiveness,
          communication skills and time management.

          I am a highly motivated person who enjoys learning about new concepts
          about coding and who is always looking for a new challenge. I thrive
          under pressure while working with a creative group of people.
        </TextArea>

         </AboutSection>
    </FlexContainer>
  </Container>
);

export default About;
