import styled from "styled-components";

export const CarouselArea = styled.div`
  max-width: 600px; 
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 500px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 400px;
  }
`;
export const ItemDots = styled.div`
margin-top: 50px;
`

export const SwipItem = styled.div`
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ImgBox = styled.div`
  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 350px;
  }  
`