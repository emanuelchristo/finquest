import About1 from "../components/aboutUs/About1";
import About2 from "../components/aboutUs/About2";
import Hiring from "../components/aboutUs/Hiring";
import WhyUs1 from "../components/aboutUs/WhyUs1";
import WhyUs2 from "../components/aboutUs/WhyUs2";
import Navbar from "../components/Navbar";
import styles from "./styles.module.css";
import Snackbar from "../components/SnackBar";
import Link from "next/link";
export default function AboutUs() {
  return (
    <div id="home">
        <Snackbar
        message={[
          "New batch on forex trading starting soon ‼️ ",
          <Link
                  target="_blank"
                  href="/course/forex/"
                  rel="noopener noreferrer" key={1}
                >
          <a  id="offprice">
              REGISTER NOW
          </a>
                </Link>,
          " ‼️",
        ]}
      />
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
