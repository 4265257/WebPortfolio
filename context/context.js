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
