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
} from "./skillsStyles";
import {
  SmallerSectionTitle,
} from "../../styles/GlobalComponents/index";
import { Container } from "../../styles/GlobalComponents/index";
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
              Experiece with <br />
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
              Experience with <br />
              Node, RESTful API, Express and MongoDB
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  </Container>
);

export default Skills;
