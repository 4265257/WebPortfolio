import React from "react";
import {
  Container,
  Section,
  SmallerSectionTitle,
} from "../../styles/GlobalComponents/index";
import { projects } from "../../data/projects";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  FlexContainer,
  HeaderThree,
  TitleContent,
  UtilityList,
  Img,
} from "../../components/projectsStyles";

const Projects = () => (
  <Container>
    <Section>
      <FlexContainer>
        <SmallerSectionTitle>Projects</SmallerSectionTitle>
        {projects.map((project, i) => {
          return (
            <BlogCard key={i}>
              <TitleContent>
                <HeaderThree>{project.name}</HeaderThree>
              </TitleContent>
              <CardInfo>{project.description}</CardInfo>
              <UtilityList>
                <ExternalLinks
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
                </ExternalLinks>
              </UtilityList>
              <Img src={project.image} />
            </BlogCard>
          );
        })}
      </FlexContainer>
    </Section>
  </Container>
);

export default Projects;
