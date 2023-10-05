import { getAllPagesWithSlugs, getPageBySlug } from "../lib/api";
import Head from "next/head";
import Link from "next/link";
import {
  Container,
  SmallerSectionTitle,
  SectionContainer,
} from "../styles/GlobalComponents";

function Page(page, pages) {
 //console.log("pages1", page);

  return (
    <div>
      <Head>
        <title>{page.title}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {page.title == "Projects" &&
      <Container>
        <SmallerSectionTitle>{page.projectssection.projectsSections}</SmallerSectionTitle>
        <SectionContainer>
          <div
            dangerouslySetInnerHTML={{
              __html: page.content,
            }}
          />
        </SectionContainer>
      </Container>

      }
            <Container>
        <SmallerSectionTitle>{page.title}</SmallerSectionTitle>
        <SectionContainer>
          <div
            dangerouslySetInnerHTML={{
              __html: page.content,
            }}
          />
        </SectionContainer>
      </Container>
    </div>
  );
}

export async function getStaticPaths() {
  const pagesWithSlugs = await getAllPagesWithSlugs();
  return {
    paths: pagesWithSlugs.edges.map(({ node }) => `/${node.slug}`) || [],
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  const page = await getPageBySlug(params.slug);
  return { props: page };
}

export default Page;

// import { getAllPagesWithSlugs, getPageBySlug } from "../lib/api";
// import { getApolloClient } from "../lib/apollo";
// import Head from "next/head";
// import Link from "next/link";
// import {
//   Container,
//   SmallerSectionTitle,
//   SectionContainer,
// } from "../styles/GlobalComponents";

// function Page(page, pages) {
//  //console.log("pages1", page);

//   return (
//     <div>
//       <Head>
//         <title>{page.title}</title>
//         <link rel="icon" href="/favicon.png" />
//       </Head>
//       {page.title == "Projects" &&
//       <Container>
//         <SmallerSectionTitle>{page.projectssection.projectsSections}</SmallerSectionTitle>
//         <SectionContainer>
//           <div
//             dangerouslySetInnerHTML={{
//               __html: page.content,
//             }}
//           />
//         </SectionContainer>
//       </Container>

//       }
//             <Container>
//         <SmallerSectionTitle>{page.title}</SmallerSectionTitle>
//         <SectionContainer>
//           <div
//             dangerouslySetInnerHTML={{
//               __html: page.content,
//             }}
//           />
//         </SectionContainer>
//       </Container>
//     </div>
//   );
// }

// export async function getStaticPaths() {
//   const pagesWithSlugs = await getAllPagesWithSlugs();
//   return {
//     paths: pagesWithSlugs.edges.map(({ node }) => `/${node.slug}`) || [],
//     fallback: true,
//   };
// }
// export async function getStaticProps({ params }) {
//   const page = await getPageBySlug(params.slug);
//   return { props: page };
// }

// export default Page;
