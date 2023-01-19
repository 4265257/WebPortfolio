import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  max-width: 800px;
	display: flex;
	flex-direction: column;

	align-items: flex-start;
  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 300px;
    width: 100%;
   
  }
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 600px;
    width: 100%;
    
  }
 `;
