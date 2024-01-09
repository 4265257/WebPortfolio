// import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
// import { gql } from "@apollo/client";
// import { getApolloClient } from "../../lib/apollo.js";
import {
    SectionContainer,
    //import {getPageStaticProps} from "../../utils/getPageStaticProps"
    Container,
    EachLink,
  } from "../styles/globals.js";
import MainMenu from "../MainMenu/MainMenu.js";
import { BlockRenderer } from "../BlockRenderer/BlockRenderer.js";
  
 export  const PageArea = ({mappedMenuItems, blocks }, props) => {
   // console.log("Mapp", mappedMenuItems );
    // console.log("page", pages);
    //console.log("block", blocks);
    return (
  
        <Container>
            HELLOO!!!
         <MainMenu 
          mappedMenuItems={mappedMenuItems}
          /> 
          <BlockRenderer 
          blocks={blocks} 
          /> 
          
        </Container>
  
    );
  }
 
  