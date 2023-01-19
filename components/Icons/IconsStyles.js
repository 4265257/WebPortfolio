import styled from "styled-components";

export const IconsLayout = styled.div`
margin-right: 10px;
display: flex;
flex-direction: row;
align-items: center;

  &:nth-child(1) {
    margin-right: 10px;
  }
@media ${props => props.theme.breakpoints.md}{
  justify-content: center;
  flex-wrap: wrap;
}

`;

