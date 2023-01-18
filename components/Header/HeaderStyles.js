import styled from "styled-components";

export const HeaderContainer  = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
	justify-content: space-between;
  max-width: 1200px;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
	justify-content: space-between;
  }


`;
