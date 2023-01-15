import React from 'react';
import { LeftSection } from './CenterSectionStyles';
import { Section, SectionText, SectionTitle } from './../../styles/GlobalComponents/index';
const CenterSection = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome to <br />
          my personal portfolio.
        </SectionTitle>
        <SectionText>
        My specialties include HTML, CSS, JavaScript, React and Next.js on the front end as well as Node.js, MongoDB, RESTful API and Express on the back end. 
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default CenterSection;