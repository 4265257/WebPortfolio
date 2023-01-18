import React from 'react';
import { LeftSection } from './CenterSectionStyles';
import { Container, SectionText, SectionTitle } from './../../styles/GlobalComponents/index';
import styles from "../../styles/Home.module.css";

const CenterSection = (props) => (
  <>
    <Container >
      <LeftSection>
        <SectionTitle>
          Welcome to <br />
          my personal portfolio.
        </SectionTitle>
        <SectionText>
        My specialties include HTML, CSS, JavaScript, React and Next.js on the front end as well as Node.js, MongoDB, RESTful API and Express on the back end. 
        </SectionText>
      </LeftSection>
    </Container>
  </>
);

export default CenterSection;