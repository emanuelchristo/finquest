import "../assets/fonts/gilroy/stylesheet.css";
import "../styles/variables.css";
import "../styles/global.css";
import Head from "next/head";
import Footer from "../components/Footer";
import Snackbar from "../components/SnackBar";
import Script from "next/script";

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
      {/* <Script
        id="gtm-script"
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-247600968-1"
      ></Script>
      <Script id="gtm-script-2">
        {`
        window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);} 
        gtag('js', new Date());
        gtag('config', 'UA-247600968-1');
        `}
      </Script> */}
      <Snackbar
        message={[
          "🎉 Flat ",
          <span id="offprice">₹2000 off for beginners!</span>,
          " (First 100 learners only) 🎉",
        ]}
      />
      {/* <Snackbar message="🎉 Flat&nbsp;
          <span className={styles["offprice"]}>₹2000 off for beginners!</span>
          &nbsp; (First 100 learners only) 🎉" /> */}
      <Component {...pageProps} />

      <Footer />
    </div>
  );
}

export default MyApp;
