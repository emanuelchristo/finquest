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
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/>
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

      <Script
        id="pixel-code"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '499046898871948');
fbq('track', 'PageView');`,
        }}
      ></Script>
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NQVZFL4');`,
        }}
      ></Script>

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
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NQVZFL4"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      ></noscript>

      <Component {...pageProps} />

      <Footer />
    </div>
  );
}

export default MyApp;
