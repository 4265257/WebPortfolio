import styled from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  max-width: 1200px;
  width: 100%;
 `;

export const EachLink = styled.div`
  color: rgba(60, 60, 60, 0.75);
  transition: 0.3s ease;
  transition: 0.3s ease;
  position: relative;
  left: 0;
  
  &:hover {
    color: #000;
    left: 6px;
  }
`