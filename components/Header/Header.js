import React from "react";
import HeaderLink from "../HeaderLink/HeaderLink";
import LogoYB from "../../public/LogoYB.svg";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../../styles/GlobalComponents";
import { HeaderContainer } from "./HeaderStyles";

import { getFontSizeForHeading, getTextAlign } from "utils/fonts";

const Header = ({ textAlign, content, level = 2 }) => {
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `max-w-5xl mx-auto ${getFontSizeForHeading(
      level
    )} ${getTextAlign(textAlign)}`,
  });

  return tag;
  //<div className="text-center text-2xl">heading</div>;

  // <Container>
  //   <HeaderContainer>
  //     <Link href="/" rel="noopener noreferrer">
  //       <Image
  //         src={LogoYB}
  //         alt="YB Logo"
  //         width={100}
  //         height={74}
  //         priority
  //       />
  //     </Link>
  //     <HeaderLink></HeaderLink>
  //   </HeaderContainer>
  // </Container>
};

export default Header;
