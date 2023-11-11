import React from "react";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialIconsContainer,
} from "../Footer/FooterStyles";
import Icons from "./../Icons/Icons";
import { Container } from "../../styles/GlobalComponents";
import Link from "next/link";


export default function MainMenu({ mappedMenuItems }) {
  //  console.log(props)

  return (
    <div className="bg-slate-800 text-white  rounded-[12px] w-screen sticky top-0 z-20 flex justify-between">
      <div className=" text-white flex ">
        {(mappedMenuItems || []).map((item) => (
          <div
            key={item.id}
            className="hover:bg-slate-700  text-white cursor-pinter relative group"
          >
            <Link href={item.destination} className="p-5 block">{item.label}</Link>
          </div>
        ))}
      </div>

      <SocialIconsContainer>
        <Icons></Icons>
      </SocialIconsContainer>
    </div>
  );
}

// const Footer = () => {
//   return (
//     <Container>
//     <FooterWrapper>
//       <SocialIconsContainer>
//         <CompanyContainer>
//           <Slogan>A motivated web developer you can trust!</Slogan>
//         </CompanyContainer>
//         <Icons></Icons>
//       </SocialIconsContainer>
//     </FooterWrapper>
//     </Container>
//   );
// };

// export default Footer;
