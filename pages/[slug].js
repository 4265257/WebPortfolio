// import Head from "next/head";
// import Link from "next/link";
// import {
//   Container,
//   SmallerSectionTitle,
//   SectionContainer,
//   EachLinck
// } from "../styles/GlobalComponents";
// import { getApolloClient } from "../lib/apollo";
// import { gql } from "@apollo/client";
// import { clientTwo } from "../lib/apollo";
// import  {BlockRenderer}  from "./../components/BlockRenderer/BlockRenderer";
// import styles from "../styles/Home.module.css";
// import CenterSection from "../components/CenterSection/CenterSection";
// import {
//   EachLink,
// } from "../styles/GlobalComponents";
// import Image from "next/image";
// import { cleanAndTransformBlocks } from './../utils/cleanAndTransformBlocks';
// //import { cleanAndTransformBlocks } from "./../utils/cleanAndTransformBlocks";
// import Avatar from "../public/AvatarMaker.png";
// import MainMenu from "../components/MainMenu/MainMenu"
import { getAllPagesWithSlugs, getPageBySlug } from "../lib/api";
import { getPageStaticProps } from "./../utils/getPageStaticProps";
import { Page } from "../components/Page/Page";

export default Page;
export const getStaticProps = getPageStaticProps;
export async function getStaticPaths() {
  const pagesWithSlugs = await getAllPagesWithSlugs();
  return {
    paths: pagesWithSlugs.edges.map(({ node }) => `/${node.slug}`) || [],
    fallback: true,
  };
}

//const blocks = cleanAndTransformBlocks(pageData.data.nodeByUri?.blocks || null)
//console.log("pagesWithSlugs", pagesWithSlugs)
// function Page({page, blocks, title, pages}) {
// // console.log("pages1", page);
//  //console.log("blocks", blocks);
//  //console.log("title", title)

//   return (
//     <Container>
//        {/* <SectionContainer>
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
//    {/* <Image src={Avatar} alt="Avatar" priority /> */}

//    {/* <MainMenu mappedMenuItems={mappedMenuItems}/> */}
//         <BlockRenderer
//       blocks={blocks}
//       />
//       </Container>

//   );
// }//   const apolloClient = getApolloClient();
//   const  pageData  = await apolloClient.query({

//     query: gql`
//       query NewQuery {
//         nodeByUri(uri: "/") {
//           ... on Page {
//             id
//             blocks
//           }
//         }
//       }
//     `,
//props: {
//pageData,
// pages : pages.title,
// pages,
//  title,
// blocks,
// },
// const pagesWithSlugs = await getAllPagesWithSlugs();
// return {
//   paths: pagesWithSlugs.edges.map(({ node }) => `/${node.slug}`) || [],
//   fallback: true,
// };
//}
//   export async function getStaticProps({ params, locale }) {

//     const page = await getPageBySlug(params.slug);
//       const apolloClient = getApolloClient();
//       const uri = `/${params.slug}`
//      // console.log("URIIIII", uri)
//   const  pageData  = await apolloClient.query({
//     query: gql`
//       query PageQuery($uri: String!) {
//         nodeByUri(uri: $uri) {
//           ... on Page {
//             id
//             blocks
//             title
//           }
//         }
//       }
//     `,
//     variables: {
//       uri
//     }
// });

// const language = locale.toUpperCase();

// const data = await apolloClient.query({
//   query: gql`
//     query pages($language: LanguageCodeFilterEnum!) {
//       pages(where: { language: $language }) {
//         edges {
//           node {
//             id
//             title
//             slug
//             language {
//               code
//               locale
//             }
//           }
//         }
//       }
//       generalSettings {
//         title
//         description
//       }
//     }
//   `,
//   variables: {
//     language,
//   },
// });

// let pages = data?.data.pages.edges

//   .map(({ node }) => node)
//   .map((page) => {
//     return {
//       ...page,
//       language,
//       path: `${page.slug}`,
//     };
//   });

// const dataPost = await apolloClient.query({
//   query: gql`
//     query posts($language: LanguageCodeFilterEnum!) {
//       posts(where: { language: $language }) {
//         # nodes {
//         #   homepagetext {
//         #     fieldGroupName
//         #     homepageText
//         #   }
//         # }

//         edges {
//           node {
//             id
//             excerpt
//             title
//             slug
//             content
//             language {
//               code
//               locale
//             }
//           }
//         }
//       }
//       generalSettings {
//         title
//         description
//       }
//     }
//   `,
//   variables: {
//     language,
//   },
// });

// let posts = dataPost?.data.posts.edges

//   .map(({ node }) => node)
//   .map((post) => {
//     return {
//       ...post,
//       language,
//       path: `/${post.slug}`,
//     };
//   });

//    //console.log("params.slug", params)
//    const blocks = cleanAndTransformBlocks(pageData.data.nodeByUri?.blocks || null)
//    //console.log("blocks", blocks)

//     return {
//       props: {
//         blocks,
//         pages,
//         title: pageData.data.nodeByUri?.title || null,
//         page }
//       }
//   }

//export default Page;

{
  /* 




      <Head>
        <title>{page.title}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {page.title == "Projects" &&
      <Container>
        <SmallerSectionTitle>{page.projectssection.projectsSections}</SmallerSectionTitle>
        <SectionContainer>
          <div
            dangerouslySetInnerHTML={{
              __html: page.content,
            }}
          />
        </SectionContainer>
      </Container>

      }
            <Container>
        <SmallerSectionTitle>{page.title}</SmallerSectionTitle>
        <SectionContainer>
          <div
            dangerouslySetInnerHTML={{
              __html: page.content,
            }}
          />
        </SectionContainer>
      </Container> */
}

// export default function Home({ pages, posts, pageData, blocks }) {
//   console.log("pageData", pageData);
//   console.log("page", pages);
// //console.log("block", blocks)
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
//         {/* <Image className={styles.img} src={CodePic} alt="CodePic" priority /> */}
//         {/* <Sections></Sections> */}
//     <BlockRenderer blocks={blocks}/>
//         <SectionContainer>
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
//         </SectionContainer>
//       </Container>
//     </>
//   );
// }

// let pages = data?.data.pages.edges

//   .map(({ node }) => node)
//   .map((page) => {
//     return {
//       ...page,
//       language,
//       path: `${page.slug}`,
//     };
//   });

// const dataPost = await apolloClient.query({
//   query: gql`
//     query posts($language: LanguageCodeFilterEnum!) {
//       posts(where: { language: $language }) {
//         # nodes {
//         #   homepagetext {
//         #     fieldGroupName
//         #     homepageText
//         #   }
//         # }

//         edges {
//           node {
//             id
//             excerpt
//             title
//             slug
//             content
//             language {
//               code
//               locale
//             }
//           }
//         }
//       }
//       generalSettings {
//         title
//         description
//       }
//     }
//   `,
//   variables: {
//     language,
//   },
// });

// let posts = dataPost?.data.posts.edges

//   .map(({ node }) => node)
//   .map((post) => {
//     return {
//       ...post,
//       language,
//       path: `/${post.slug}`,
//     };
//   });

// const page = {
//   ...data?.data.generalSettings,
// };

//export async function getStaticProps({ locale }) {
// const language = locale.toUpperCase();

// const data = await apolloClient.query({
//   query: gql`
//     query pages($language: LanguageCodeFilterEnum!) {
//       pages(where: { language: $language }) {
//         edges {
//           node {
//             id
//             title
//             slug
//             language {
//               code
//               locale
//             }
//           }
//         }
//       }
//       generalSettings {
//         title
//         description
//       }
//     }
//   `,
//   variables: {
//     language,
//   },
// });

// import { getAllPagesWithSlugs, getPageBySlug } from "../lib/api";
// import { getApolloClient } from "../lib/apollo";
// import Head from "next/head";
// import Link from "next/link";
// import {
//   Container,
//   SmallerSectionTitle,
//   SectionContainer,
// } from "../styles/GlobalComponents";
// import { gql } from "@apollo/client";
// import { clientTwo } from "../lib/apollo";

// export default function Pages(props) {
//   return(
//   <div>peee!!</div>
//   )
// }
//     async function getStaticPaths() {
//      const { data } = await clientTwo.query({
//         query: gql`
//           query AllPagesQuery {
//             pages {
//               nodes {
//                 uri
//                 slug
//               }
//             }
//           }
//         `,
//       });

//       console.log(data);

//       return {
//         paths: [...data.pages.nodes
//           .filter((page) => page.uri !== "/")
//            .map((page) => ({

//             params: { slug: page.uri.substring(1, page.uri.length-1).split("/") }
//            })),],
//          fallback: "blocking",
//       };
//     };

//   export async function getStaticProps() {

//   }

// import { getAllPagesWithSlugs, getPageBySlug } from "../lib/api";
// import { getApolloClient } from "../lib/apollo";
// import Head from "next/head";
// import Link from "next/link";
// import {
//   Container,
//   SmallerSectionTitle,
//   SectionContainer,
// } from "../styles/GlobalComponents";

// function Page(page, pages) {
//  //console.log("pages1", page);

//   return (
//     <div>
//       <Head>
//         <title>{page.title}</title>
//         <link rel="icon" href="/favicon.png" />
//       </Head>
//       {page.title == "Projects" &&
//       <Container>
//         <SmallerSectionTitle>{page.projectssection.projectsSections}</SmallerSectionTitle>
//         <SectionContainer>
//           <div
//             dangerouslySetInnerHTML={{
//               __html: page.content,
//             }}
//           />
//         </SectionContainer>
//       </Container>

//       }
//             <Container>
//         <SmallerSectionTitle>{page.title}</SmallerSectionTitle>
//         <SectionContainer>
//           <div
//             dangerouslySetInnerHTML={{
//               __html: page.content,
//             }}
//           />
//         </SectionContainer>
//       </Container>
//     </div>
//   );
// }

// export async function getStaticPaths() {
//   const pagesWithSlugs = await getAllPagesWithSlugs();
//   return {
//     paths: pagesWithSlugs.edges.map(({ node }) => `/${node.slug}`) || [],
//     fallback: true,
//   };
// }
// export async function getStaticProps({ params }) {
//   const page = await getPageBySlug(params.slug);
//   return { props: page };
// }

// export default Page;
