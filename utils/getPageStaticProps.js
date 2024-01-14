import {
  Container,
} from "../styles/GlobalComponents";
import { gql } from "@apollo/client";
import { getApolloClient } from "../lib/apollo"
import { BlockRenderer } from "./../components/BlockRenderer/BlockRenderer";
import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";
import  mapMainMenuItems  from "./mapMainMenuItems";


export async function getPageStaticProps({ params, locale }, props) {
    console.log("pageData", props );
    const apolloClient = getApolloClient();
    const language = locale.toUpperCase();
    const uri = params?.slug ? `/${params.slug}` : "/" 
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
  
    const pageData = await apolloClient.query({
      query: gql`
        query PageQuery ($uri: String!) {
          nodeByUri(uri: $uri) {
            ... on Page {
              id
              title
              blocks
            }
            ... on Property {
              id
              title
              blocks
            }
          }
          acfOptionsMainMenu {
            menu {
              menuItems {
                menuItem {
                  destination {
                    ... on Page {
                      uri
                    }
                  }
                  label
                }
              }
            }
          }
        }
      `,
          variables: {
            uri,
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
  
    const dataPost = await apolloClient.query({
      query: gql`
        query posts($language: LanguageCodeFilterEnum!) {
          posts(where: { language: $language }) {
            # nodes {
            #   homepagetext {
            #     fieldGroupName
            #     homepageText
            #   }
            # }
  
            edges {
              node {
                id
                excerpt
                title
                slug
                content
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
  
    let posts = dataPost?.data.posts.edges
  
      .map(({ node }) => node)
      .map((post) => {
        return {
          ...post,
          language,
          path: `/${post.slug}`,
        };
      });
  
    const page = {
      ...data?.data.generalSettings,
    };
  
    const blocks = cleanAndTransformBlocks(
      pageData.data.nodeByUri?.blocks || null
    );

    //const menuItems = pageData.acfOptionsMainMenu.menu.menuItems
    // console.log("block", blocks)
    return {
      props: {
        pageData,
        page,
        pages,
        posts,
        mappedMenuItems: mapMainMenuItems(
          pageData.data.acfOptionsMainMenu?.menu?.menuItems
        ),
        blocks,
      },
    };
  }



  
  
  
  function Page({page, blocks, title, pages}) {
   
    return (
      <Container>
       
              <BlockRenderer 
        blocks={blocks}
        /> 
        </Container>
      
    );
  }
  
  export async function getStaticPaths() {
 
    
    const pagesWithSlugs = await getAllPagesWithSlugs();
  
    return {
   
      paths: pagesWithSlugs.edges.map(({ node }) => `/${node.slug}`) || [],
      fallback: true,
    };

    }
    export async function getStaticProps({ params, locale }) {
  
      const page = await getPageBySlug(params.slug);
        const apolloClient = getApolloClient();
        const uri = `/${params.slug}` 
    const  pageData  = await apolloClient.query({
      query: gql`
        query PageQuery($uri: String!) {
          nodeByUri(uri: $uri) {
            ... on Page {
              id
              blocks
              title
            }
          }
        }
      `,
      variables: {
        uri
      }
  });
  
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
  
  const dataPost = await apolloClient.query({
    query: gql`
      query posts($language: LanguageCodeFilterEnum!) {
        posts(where: { language: $language }) {
         
          edges {
            node {
              id
              excerpt
              title
              slug
              content
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
  
  let posts = dataPost?.data.posts.edges
  
    .map(({ node }) => node)
    .map((post) => {
      return {
        ...post,
        language,
        path: `/${post.slug}`,
      };
    });
  
  
     const blocks = cleanAndTransformBlocks(pageData.data.nodeByUri?.blocks || null)
  
      return { 
        props: {
          blocks,
          pages,
          title: pageData.data.nodeByUri?.title || null,
          page }
        }
    }
    
    export default Page;
    
   
     
  
  
  
  
  
  
  
  
  
  
  
  
  






































