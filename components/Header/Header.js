import React from "react";
import HeaderLink from "../HeaderLink/HeaderLink";
import LogoYB from "../../public/LogoYB.svg";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../../styles/GlobalComponents";
import { HeaderContainer } from "./HeaderStyles";

const Header = () => (
  <Container>
    <HeaderContainer>
      <Link href="/" rel="noopener noreferrer">
        <Image
          src={LogoYB}
          alt="YB Logo"
          width={100}
          height={74}
          priority
        />
      </Link>
      <HeaderLink></HeaderLink>
    </HeaderContainer>
  </Container>
);

export default Header;
