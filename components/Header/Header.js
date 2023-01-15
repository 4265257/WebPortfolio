import React from "react";
import { Container } from "./HeaderStyles";
import HeaderLink from "../HeaderLink/HeaderLink";
import LogoYB from "../../public/LogoYB.svg";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

const Header = () => (
  <Container>
    <Link href="/" rel="noopener noreferrer">
      <Image
        src={LogoYB}
        alt="YB Logo"
        className={styles.vercelLogo}
        width={100}
        height={74}
        priority
      />
    </Link>

    <HeaderLink></HeaderLink>
  </Container>
);

export default Header;
