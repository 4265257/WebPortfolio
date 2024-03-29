import styled from 'styled-components';
import Link from "next/link";

export const WebLink = styled(Link)`
  font-size: 16px;
 `;
export const WebLinksLayout = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: center;
`;

export const Toggle = styled.div`
  color: black;
  padding-right: 10px;
`;
