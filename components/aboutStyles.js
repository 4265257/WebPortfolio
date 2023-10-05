import styled from "styled-components";

export const AboutSection = styled.div`
 // background: linear-gradient(
  //  336deg,
 //   rgba(192, 192, 192, 0.8),
  // rgba(0, 0, 0, 0.7) 70.71%
 // );
  color: #fff;
  width: 100%;
  padding: 20px;
  max-width: 800px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10%;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 650px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 350px;
  }
`;

export const FlexContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
`;
export const TextArea = styled.div`
  width: 100%;
  max-width: 40rem;
  padding: 2rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
`;

export const ImgBox = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
`;
