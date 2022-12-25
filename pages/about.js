import About1 from "../components/aboutUs/About1";
import About2 from "../components/aboutUs/About2";
import Hiring from "../components/aboutUs/Hiring";
import WhyUs1 from "../components/aboutUs/WhyUs1";
import WhyUs2 from "../components/aboutUs/WhyUs2";
import Navbar from "../components/Navbar";
import styles from "./styles.module.css";
import Snackbar from "../components/SnackBar";
export default function AboutUs() {
  return (
    <div id="home">
      <Snackbar
        message={[
          "🎉 Flat ",
          <span id="offprice" key={1}>
            ₹7500 off for beginners!
          </span>,
          " (First 100 learners only) 🎉",
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
