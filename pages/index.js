import { Container } from "../styles/GlobalComponents";
import { BlockRenderer } from "./../components/BlockRenderer/BlockRenderer";
import MainMenu from "../components/MainMenu/MainMenu";
import { getPageStaticProps } from "./../utils/getPageStaticProps";

export const getStaticProps = getPageStaticProps;

export default function Home({ mappedMenuItems, blocks }, props) {
  return (
    <>
      <Container>
        <MainMenu mappedMenuItems={mappedMenuItems} />
        <BlockRenderer blocks={blocks} />
      </Container>
    </>
  );
}
