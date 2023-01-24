import "../assets/fonts/gilroy/stylesheet.css";
// import "../assets/fonts/ES-Build/stylesheet.css";
// import "../assets/fonts/matter-font/stylesheet.css";
import "../styles/variables.css";
import "../styles/global.css";
import Head from "next/head";
import Footer from "../components/Footer";
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
      <Script
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
      </Script>


      <Script id="pixel-code" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '499046898871948');
fbq('track', 'PageView');`}}></Script>


      <noscript
        dangerouslySetInnerHTML={{
          __html: ` <img
          height="1"
          width="1"
          style="display:none"
          src="https://www.facebook.com/tr?id=499046898871948&ev=PageView&noscript=1"
          />`,
        }}
        ></noscript>

      <Component {...pageProps} />

      <Footer />
    </div>
  );
}

export default MyApp;
