import "../assets/fonts/gilroy/stylesheet.css";
import "../styles/variables.css";
import "../styles/global.css";
import Head from "next/head";
import Footer from "../components/Footer";
import Snackbar from "../components/SnackBar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>
          Finquest - Start learning how to invest &amp; trade in stock market
          easily.
        </title>
        <link rel="icon" type="image/png" href="/favicon.png"></link>
        <meta
          name="google-site-verification"
          content="4Cbyhz8hc0taFGG6F4lucI7JMMXJQe1y_Qa8qKscRnI"
        />
      </Head>
      <Snackbar message=" 🎉  Flat ₹2000 off for beginners! " />
      <Component {...pageProps} />

      <Footer />
    </div>
  );
}

export default MyApp;
