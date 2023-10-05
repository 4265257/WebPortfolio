import { getAllPagesWithSlugs, getPageBySlug } from "../lib/api";
import { getApolloClient } from "../lib/apollo";
import Head from "next/head";
import Link from "next/link";
import {
  Container,
  SmallerSectionTitle,
  SectionContainer,
} from "../styles/GlobalComponents";
import { gql } from "@apollo/client";
import { clientTwo } from "../lib/apollo";


export default function Pages(props) {
  return(
  <div>peee!!</div>
  )
}
    async function getStaticPaths() {
     const { data } = await clientTwo.query({
        query: gql`
          query AllPagesQuery {
            pages {
              nodes {
                uri
                slug
              }
            }
          }
        `,
      });
    
      console.log(data);
    
      return {
        paths: [data.pages.nodes
          .filter((page) => page.uri !== "/")
          .map((page) => ({
           
            params: {slug :[`${page.uri.substring(1, page.uri.length-1).split("/")}`]}
          })),],
        fallback: "blocking",
      };
    };
   
    
  export async function getStaticProps() {
  
  }




















//params: slug  | { slug: [`${page.uri.substring(1, page.uri.length-1).split("/")}`] }, // Make sure `slug` is an array of strings

//export default function Page(props) {
//   console.log("props", props);

//   return (
//     <div>
//      hii
//     </div>
//   );
// }

// export const getStaticPaths = async () => {
//   const {data} = await getApolloClient({
//     query: gql`
//       query AllPagesQuery {
//         pages {
//           nodes {
//             uri
//             slug
//           }
//         }
//       }
//     `,
//   });
//   console.log(data, "paths)")
//   return    {
  
//     paths: data?.pages?.nodes.filter(page => page.uri !="/").map(page =>({
//       params :{
//         slug: page.uri.substring(1, page.uri.length-1).split("/")
//       }
//     }) ), 
//     fallback: 'blocking'
//   };
// //    {
// //     paths: [{
// //         params: {
// //           slug: '1'
// //         }
// //       }],
// //     fallback: false
// //   }

// }
// export async function getStaticProps({ params }) {
//   const page = await getPageBySlug(params.slug);
//   return { props: page };
// }








// export const getStaticPaths = async () => {
//     const {data} = await getApolloClient({
//       query: gql`
//         query AllPagesQuery {
//           pages {
//             nodes {
//               uri
//               slug
//             }
//           }
//         }
//       `,
//     });
//     console.log(data, "paths)")
//     return    {
    
//       paths: data?.pages?.nodes.fliter(page => page.uri !="/").map(page =>({
//         params :{
//           slug: page.uri.substring(1, page.uri.length-1).split("/")
//         }
//       }) ), 
//       fallback: 'blocking'
//     };
// }