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
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:(438)521-1175">(438)521-1175</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:yarabrek@yarabrek.com">
            yarabrek123@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
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
