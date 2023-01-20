import styled from "styled-components";
import Link from "next/link";

export const Img = styled.img`
  max-width: 400px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: visible;
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 250px;

  }
  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 150px;
  }
`;

export const FlexContainer = styled.section`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  height: fit-content;
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 350px;

  }
  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 250px;

  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 80, 80, 0.5);
  text-align: center;
  max-width: 400px;
  width: 100%;
  margin-bottom: 5%;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  height: fit-content;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: rgb(8, 8, 8, 0.5);
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #000;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 0.5rem 0;
`;

export const ExternalLinks = styled(Link)`
  color: #fff;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #801414;
  }
`;
