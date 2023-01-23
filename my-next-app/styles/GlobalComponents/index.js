import styled from "styled-components";
import Image from "next/image";
export const Container = styled.section`
  max-width: 1200px;
  display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2%;
  margin-top: 2%;
  
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 1120px;
  }
  @media (max-width:${(props) => props.theme.breakpoints.md}) {
    max-width: 700px;
  }
`;

export const Section = styled.section`
  display: flex;
  max-width: 1040px;
  position: relative;
  overflow: hidden;
  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
  }
`;
export const SmallerSectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => (props.main ? "65px" : "56px")};
  line-height: ${(props) => (props.main ? "72px" : "56px")};
  width: fit-content;
  max-width: 100%;
  padding-bottom: 30px;
  margin: 0 auto;
  background: linear-gradient(
    121.57deg,
    #000 18.77%,
    rgba(60, 60, 60, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? "46px" : "38px")};
    line-height: ${(props) => (props.main ? "56px" : "48px")};
    padding-bottom: 30px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => (props.main ? "28px" : "32px")};
    line-height: ${(props) => (props.main ? "32px" : "40px")};
    padding-bottom: 30px;
  }
`;
export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => (props.main ? "65px" : "56px")};
  line-height: ${(props) => (props.main ? "72px" : "56px")};
  width: fit-content;
  max-width: 100%;
  padding-bottom: 30px;
  background: linear-gradient(
    121.57deg,
    #000 18.77%,
    rgba(60, 60, 60, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? "56px" : "48px")};
    line-height: ${(props) => (props.main ? "56px" : "48px")};
    padding-bottom: 10px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => (props.main ? "28px" : "32px")};
    line-height: ${(props) => (props.main ? "32px" : "40px")};
    padding-bottom: 30px;
  }
`;

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  color: rgba(60, 60, 60, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
  }
`
 