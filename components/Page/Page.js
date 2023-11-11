// import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
// import { gql } from "@apollo/client";
// import { getApolloClient } from "../../lib/apollo.js";
//import {getPageStaticProps} from "../../utils/getPageStaticProps"
import { SectionContainer, Container, EachLink } from "../styles/globals.js";
import { BlockRenderer } from "../BlockRenderer/BlockRenderer.js";
import { MainMenu } from "../MainMenu/MainMenu";

export const Page = ({ mappedMenuItems, blocks }, props) => {
  console.log("Mapp", mappedMenuItems);
  // console.log("page", pages);
  //console.log("block", blocks);
  return (
    <Container>
      <MainMenu mappedMenuItems={mappedMenuItems} />
      <BlockRenderer blocks={blocks} />
    </Container>
  );
};
