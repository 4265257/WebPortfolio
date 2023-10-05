import "../styles/globals.css";
import Theme from "../components/styles/theme";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function App({ Component, pageProps }) {
    //console.log(pageProps);
    return (
        <>
          <Theme>
              {/* <Header /> */}
              <Component {...pageProps} />
              <Footer />
          </Theme>
        </>
  );
}

// import "../styles/globals.css";
// import Theme from "../components/styles/theme";
// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";
// import Context from "../context/context";

// export default function App({ Component, pageProps }) {
//   console.log(pageProps);
//   return (
//     <>
//       <Theme>
//         <Context>
//           <Header />
//           <Component {...pageProps} />
//           <Footer />
//         </Context>
//       </Theme>
//     </>
//   );
// }