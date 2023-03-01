import { createContext } from "react";
import { gql } from "@apollo/client";
import { getApolloClient } from "../lib/apollo"

export const Pages_data = createContext(null);

function Context({ children }) {
  async function getStaticProps({ locale }) {
    const apolloClient = getApolloClient();
    const language = locale.toUpperCase();
      const data = await apolloClient.query({
      query: gql`
        query pages($language: LanguageCodeFilterEnum!) {
          pages(where: { language: $language }) {
            edges {
              node {
                id
                title
                slug
                language {
                  code
                  locale
                }
              }
            }
          }
          generalSettings {
            title
            description
          }
        }
      `,
      variables: {
        language,
      },
    });
  
    let pages = data?.data.pages.edges
  
      .map(({ node }) => node)
      .map((page) => {
        return {
          ...page,
          language,
          path: `${page.slug}`,
        };
      });
  
    // const dataPost = await apolloClient.query({
    //   query: gql`
    //     query posts($language: LanguageCodeFilterEnum!) {
    //       posts(where: { language: $language }) {
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
  
      // .map(({ node }) => node)
      // .map((post) => {
      //   return {
      //     ...post,
      //     language,
      //     path: `/${post.slug}`,
      //   };
      // });
  
    const page = {
      ...data?.data.generalSettings,
    };
  
    return {
      props: {
        page,
        pages,
       // posts,
      },
    };
  }
    return (
      <Pages_data.Provider value={{ 
        page,
        pages,
       }}>
        {children}
      </Pages_data.Provider>
    );
  }
  async function getStaticProps({ locale }) {
    const apolloClient = getApolloClient();
    const language = locale.toUpperCase();
  
    const data = await apolloClient.query({
      query: gql`
        query pages($language: LanguageCodeFilterEnum!) {
          pages(where: { language: $language }) {
            edges {
              node {
                id
                title
                slug
                language {
                  code
                  locale
                }
              }
            }
          }
          generalSettings {
            title
            description
          }
        }
      `,
      variables: {
        language,
      },
    });
  
    let pages = data?.data.pages.edges
  
      .map(({ node }) => node)
      .map((page) => {
        return {
          ...page,
          language,
          path: `${page.slug}`,
        };
      });
  
    // const dataPost = await apolloClient.query({
    //   query: gql`
    //     query posts($language: LanguageCodeFilterEnum!) {
    //       posts(where: { language: $language }) {
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
  
      // .map(({ node }) => node)
      // .map((post) => {
      //   return {
      //     ...post,
      //     language,
      //     path: `/${post.slug}`,
      //   };
      // });
  
    const page = {
      ...data?.data.generalSettings,
    };
  
    return {
      props: {
        page,
        pages,
       // posts,
      },
    };
  }

  export default Context

//   import Head from "next/head";
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


// export default function Home({ pages, posts }) {
//   console.log("pages", pages);
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
