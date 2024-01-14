import "../styles/globals.css";
import Theme from "../components/styles/theme";
import Footer from "../components/Footer/Footer";

export default function App({ Component, pageProps }) {

    return (
        <>
          <Theme>
              <Component {...pageProps} />
              <Footer />
          </Theme>
        </>
  );
}
