import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 1120px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
