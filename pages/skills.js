import React from "react";
import { DiFirebase, DiReact } from "react-icons/di";
import {
  Section,
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  Image,
} from "../components/skillsStyles";
import { SmallerSectionTitle } from "../styles/GlobalComponents/index";
import { Container } from "../styles/GlobalComponents/index";
import CarouselSkills from "../components/Carousel/Carousel";
const Skills = () => (
  <Container>
    <Section>
      <SmallerSectionTitle>Technologies</SmallerSectionTitle>
      <List>
        <ListItem>
          <Image>
            <DiReact size="6rem" />
          </Image>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              React.js, HTML, CSS & JavaScript
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <Image>
            <DiFirebase size="6rem" />
          </Image>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Node, RESTful API, Express and MongoDB
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
    <CarouselSkills></CarouselSkills>
  </Container>
);

export default Skills;
