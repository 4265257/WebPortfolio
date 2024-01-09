import React from "react";
import { LeftSection } from "./CenterSectionStyles";
import {
  SectionText,
  SectionTitle,
} from "./../../styles/GlobalComponents/index";
import {
  SectionContainer,
  //import {getPageStaticProps} from "../../utils/getPageStaticProps"
  Container,
  EachLink,
} from "../styles/globals.js";
import { BlockRenderer } from "../BlockRenderer/BlockRenderer.js";
import {MainMenu} from "../MainMenu/MainMenu"

const CenterSection = ({posts}) => {
  return (
    <>
    <Container>
            <MainMenu 
          mappedMenuItems={mappedMenuItems}
          />
          <BlockRenderer 
          blocks={blocks} 
          />
        </Container>

  </>


   

    )
};

export default CenterSection;
 {/* <LeftSection>
    {posts &&
          posts.length > 0 &&
          posts.map((post) => {
           // console.log(post);
            if(post.slug === "homepage")
            return (

                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.content,
                    }}
                  />

            );
          })}

        {!posts ||
          (posts.length === 0 && (
            <li>
              <div>Oops, no posts found!</div>
            </li>
          ))}
      {/* <SectionTitle>
        Welcome to <br />
        my personal portfolio.
      </SectionTitle>
      <SectionText>
        My specialties include HTML, CSS, JavaScript, React and Next.js on the
        front end as well as Node.js, MongoDB, RESTful API and Express on the
        back end.
      </SectionText> 
    </LeftSection> */}