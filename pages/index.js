// import Head from "next/head";
// import styles from "../styles/Home.module.css";
// import CenterSection from "../components/CenterSection/CenterSection";
// import CodePic from "../public/codePic.jpg";

// import Image from "next/image";
// import {
//   SectionContainer,
//   Container,
//   EachLink,
// } from "../styles/GlobalComponents";
// import Link from "next/link";
// import { gql } from "@apollo/client";
// import { getApolloClient } from "../lib/apollo";
// import { BlockRenderer } from "./../components/BlockRenderer/BlockRenderer";
// import { cleanAndTransformBlocks } from "./../utils/cleanAndTransformBlocks";
// import Header from "../components/Header/Header";
// import mapMainMenuItems from "../utils/mapMainMenuItems";
// import MainMenu from "../components/MainMenu/MainMenu";
//import { cleanAndTransformBlocks } from "./../utils/cleanAndTransformBlocks";
import { getPageStaticProps } from "./../utils/getPageStaticProps";
import { Page } from "../components/Page/Page";

export default Page;
export const getStaticProps = getPageStaticProps;

// export default function Home({mappedMenuItems, blocks }, props) {
//   console.log("pr", mappedMenuItems );
//   // console.log("page", pages);
//   //console.log("block", blocks);
//   return (
//     <>
//       <Head>
//         <title>Yara Brek</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.png" />
//       </Head>
//       <>
//       <Container>
//           <MainMenu
//         mappedMenuItems={mappedMenuItems}
//         />
//         <BlockRenderer
//         blocks={blocks}
//         />
//       </Container>
//     </>
//     </>
//   );
// }
// export async function getStaticProps({ locale }) {
//   const apolloClient = getApolloClient();
//   const language = locale.toUpperCase();

//   const data = await apolloClient.query({
//     query: gql`
//       query pages($language: LanguageCodeFilterEnum!) {
//         pages(where: { language: $language }) {
//           edges {
//             node {
//               id
//               title
//               slug
//               language {
//                 code
//                 locale
//               }
//             }
//           }
//         }
//         generalSettings {
//           title
//           description
//         }
//       }
//     `,
//     variables: {
//       language,
//     },
//   });

//   const pageData = await apolloClient.query({
//     query: gql`
//       query PageQuery {
//         nodeByUri(uri: "/") {
//           ... on Page {
//             id
//             blocks
//           }
//         }
//         acfOptionsMainMenu {
//           menu {
//             menuItems {
//               menuItem {
//                 destination {
//                   ... on Page {
//                     uri
//                   }
//                 }
//                 label
//               }
//             }
//           }
//         }
//       }
//     `,
//   });

//   let pages = data?.data.pages.edges

//     .map(({ node }) => node)
//     .map((page) => {
//       return {
//         ...page,
//         language,
//         path: `${page.slug}`,
//       };
//     });

//   const dataPost = await apolloClient.query({
//     query: gql`
//       query posts($language: LanguageCodeFilterEnum!) {
//         posts(where: { language: $language }) {
//           # nodes {
//           #   homepagetext {
//           #     fieldGroupName
//           #     homepageText
//           #   }
//           # }

//           edges {
//             node {
//               id
//               excerpt
//               title
//               slug
//               content
//               language {
//                 code
//                 locale
//               }
//             }
//           }
//         }
//         generalSettings {
//           title
//           description
//         }
//       }
//     `,
//     variables: {
//       language,
//     },
//   });

//   let posts = dataPost?.data.posts.edges

//     .map(({ node }) => node)
//     .map((post) => {
//       return {
//         ...post,
//         language,
//         path: `/${post.slug}`,
//       };
//     });

//   const page = {
//     ...data?.data.generalSettings,
//   };

//   const blocks = cleanAndTransformBlocks(
//     pageData.data.nodeByUri?.blocks || null
//   );
//   //const menuItems = pageData.acfOptionsMainMenu.menu.menuItems
//   // console.log("block", blocks)
//   return {
//     props: {
//       pageData,
//       page,
//       pages,
//       posts,
//       mappedMenuItems: mapMainMenuItems(
//         pageData.data.acfOptionsMainMenu?.menu?.menuItems
//       ),
//       blocks,
//     },
//   };
// }

// query NewQuery {
//   nodeByUri(uri: "/") {
//   ... on Page {
//     id
//     blocks
//   }
// }
// }

//import Head from "next/head";
// import styles from "../styles/Home.module.css";
// import CenterSection from "../components/CenterSection/CenterSection";
// import CodePic from "../public/codePic.jpg";
// import Image from "next/image";
// import {
//   SectionContainer,
//   Container,
//   EachLink,
// } from "../styles/GlobalComponents";
// import Link from "next/link";
// import { Pages_data } from "../context/context";
// import { useContext } from "react";
//import { BlockRenderer } from './../components/BlockRenderer/BlockRenderer';

// export default function Home() {
//   const { } = useContext(Pages_data);

//   return (
//     <>
//       <Head>
//         <title>Yara Brek</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.png" />
//       </Head>
//       <Container>
//         {/* <CenterSection posts={posts}></CenterSection> */}
//         <Image className={styles.img} src={CodePic} alt="CodePic" priority />
//         {/* <Sections></Sections> */}
//         {/* <SectionContainer>
//           {" "}
//           {pages &&
//             pages.length > 0 &&
//             pages.map((page) => {
//               return (
//                 <EachLink key={page.slug}>
//                   <Link href={page.path}>
//                     <h3
//                       dangerouslySetInnerHTML={{
//                         __html: page.title,
//                       }}
//                     />
//                   </Link>
//                 </EachLink>
//               );
//             })}
//           {!pages ||
//             (pages.length === 0 && (
//               <li>
//                 <p>Oops, no pages found!</p>
//               </li>
//             ))}
//         </SectionContainer> */}
//       </Container>
//     </>
//   );
// }
