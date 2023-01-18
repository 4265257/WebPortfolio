import "../styles/globals.css";
import Theme from "../components/styles/theme";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Theme>
    </>
  );
}
