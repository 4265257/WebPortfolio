import React from "react";
import { WebLink, WebLinksLayout } from "./HeaderLinkStyles";
import Icons from "../Icons/Icons";
// import Resume from "../../public/CV.pdf";
// import { Document, Page } from "react-pdf";

const HeaderLink = () => (
  <WebLinksLayout>
    <Icons></Icons>
    <WebLink href="/">Resume</WebLink>
    {/* <Document file={Resume}>
      <Page pageNumber={1} />
    </Document> */}
  </WebLinksLayout>
);

export default HeaderLink;

