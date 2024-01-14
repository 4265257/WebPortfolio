import { Container } from "../styles/GlobalComponents";
import { gql } from "@apollo/client";
import { clientTwo } from "../lib/apollo";
import { BlockRenderer } from "../components/BlockRenderer/BlockRenderer";
import MainMenu from "../components/MainMenu/MainMenu";
import { getPageStaticProps } from "../utils/getPageStaticProps";

export const getStaticProps = getPageStaticProps;

export const getStaticPaths = async () => {
  try {
    const { data } = await clientTwo.query({
      query: gql`
        query AllPagesQuery {
          pages {
            nodes {
              uri
            }
          }
          properties {
            nodes {
              uri
            }
          }
        }
      `,
    });

    console.log("data", data);

    const paths = [...data?.pages?.nodes, ...data?.properties?.nodes]
      .filter((page) => page.uri !== "/")
      .map((page) => ({
        params: {
          slug: page.uri.substring(1, page.uri.length - 1).split("/"),
        },
      }));

    console.log("paths", paths);

    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      paths: [],
      fallback: "blocking",
    };
  }
};

export default function Home({ mappedMenuItems, blocks, data }) {
  return (
    <>
      <Container>
        <MainMenu mappedMenuItems={mappedMenuItems} />
        <BlockRenderer blocks={blocks} />
      </Container>
    </>
  );
}
