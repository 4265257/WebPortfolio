import React from "react";
import { Container } from "../styles/globals.js";
import { BlockRenderer } from "../BlockRenderer/BlockRenderer.js";
import { MainMenu } from "../MainMenu/MainMenu";

const CenterSection = ({ posts }) => {
  return (
    <>
      <Container>
        <MainMenu mappedMenuItems={mappedMenuItems} />
        <BlockRenderer blocks={blocks} />
      </Container>
    </>
  );
};

export default CenterSection;