import styled from 'styled-components'


export const List = styled.ul`
  list-style-type: none;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: center;
	align-content: center;
  
  @media ${props => props.theme.breakpoints.lg}{
    margin: 64px 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    margin: 64px 0;
    gap: 24px
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: rgba(60, 60, 60, 0.75);
  margin-bottom: 8px;

@media ${props => props.theme.breakpoints.md}{
  font-size: 24px;
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
`

export const ListParagraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(60, 60, 60, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 14px;
    line-height: 22px;
  }
`

export const ListItem = styled.li`
  max-width: 320px;
  height: 200px;
  display: flex;
  flex-direction: column;

@media ${props => props.theme.breakpoints.md}{
  max-width: 203px;
}

@media ${props => props.theme.breakpoints.sm}{
  margin-bottom: 14px;
  max-width: 320px;
  flex-direction: row;
}
`

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  
  @media ${props => props.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`

export const Image = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
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