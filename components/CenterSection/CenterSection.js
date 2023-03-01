import React from "react";
import { LeftSection } from "./CenterSectionStyles";
import {
  SectionText,
  SectionTitle,
} from "./../../styles/GlobalComponents/index";

const CenterSection = ({posts}) => {
  return (
    <>
    <LeftSection>
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
      </SectionText> */}
    </LeftSection>
  </>
    )
};

export default CenterSection;
