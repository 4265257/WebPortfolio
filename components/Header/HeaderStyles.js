import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  margin: 30px 50px 0 30px ;
  @media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  margin: 30px 50px 0 30px ;

  }


`;
