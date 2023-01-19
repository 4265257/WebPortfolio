import React from "react";
import { LeftSection } from "./CenterSectionStyles";
import {
  SectionText,
  SectionTitle,
} from "./../../styles/GlobalComponents/index";

const CenterSection = (props) => (
  <>
    <LeftSection>
      <SectionTitle>
        Welcome to <br />
        my personal portfolio.
      </SectionTitle>
      <SectionText>
        My specialties include HTML, CSS, JavaScript, React and Next.js on the
        front end as well as Node.js, MongoDB, RESTful API and Express on the
        back end.
      </SectionText>
    </LeftSection>
  </>
);

export default CenterSection;
