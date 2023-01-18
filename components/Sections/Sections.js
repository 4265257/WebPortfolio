import React from "react";
import Link from "next/link";
import { sections } from "./../../data/sections";
import { SectionContainer } from './SectionsStyles';
import { Container } from "../../styles/GlobalComponents";


const Sections = () => {
  return (
    <Container>
      <SectionContainer>
      {sections.map((section, i) => {
        return (
          <div key={i}>
            <Link href={section.href} rel="noopener noreferrer">
              <h2>{section.name}</h2>
            </Link>
          </div>
        );
      })}
      </SectionContainer>
    </Container>
  );
};

export default Sections;


