import About1 from "../components/aboutUs/About1";
import About2 from "../components/aboutUs/About2";
import Hiring from "../components/aboutUs/Hiring";
import WhyUs1 from "../components/aboutUs/WhyUs1";
import WhyUs2 from "../components/aboutUs/WhyUs2";
import Navbar from "../components/Navbar";
import styles from "./styles.module.css";
import Script from "next/script";

export default function AboutUs() {
  return (
    <div id="home">
      <Script
        id="gtm-script-about"
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-247600968-1"
      ></Script>
      <Script id="gtm-script-about_2">
        {`
window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);} 
gtag('js', new Date());
gtag('config', 'UA-247600968-1');
`}
      </Script>
      <div id="home" className={styles["nav-spacer"]}></div>
      <Navbar />
      <div id="home" className={styles["about-spacer"]}></div>
      <About1 />
      <div id="home" className={styles["about-spacer"]}></div>
      <About2 />
      <div id="home" className={styles["about-spacer"]}></div>
      <WhyUs1 />
      <WhyUs2 />
      <Hiring />
    </div>
  );
}
