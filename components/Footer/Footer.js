import React from "react";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialIconsContainer,
} from "./FooterStyles";
import Icons from "./../Icons/Icons";
import { Container } from "../../styles/GlobalComponents";

const Footer = () => {
  return (
    <Container>
    <FooterWrapper>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>A motivated web developer you can trust!</Slogan>
        </CompanyContainer>
        <Icons></Icons>
      </SocialIconsContainer>
    </FooterWrapper>
    </Container>
  );
};

export default Footer;
