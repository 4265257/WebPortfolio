import React from "react";
import styles from "../../styles/Home.module.css";
import { Section, SectionTitle } from "../../styles/GlobalComponents/index";
import { projects } from "../../data/projects";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";

const Projects = () => (
  <main className={styles.main}>
    <Section nopadding id="projects">
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map((project, i) => {
          return (
            <BlogCard key={i}>
              <TitleContent>
                <HeaderThree title>{project.name}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">{project.description}</CardInfo>
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
      </GridContainer>
    </Section>
  </main>
);

export default Projects;
