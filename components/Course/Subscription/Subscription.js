import { SiGoogleclassroom } from "react-icons/si";
import { motion } from "framer-motion";
import styles from "./subscription.module.css";
import Countdown from "react-countdown";
import Link from "next/link";

// subcription-arrow
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const renderer = ({ hours, minutes, seconds }) => {
  // Render a countdown
  return (
    <div>
      <h6>ENDS IN</h6>
      <div className={styles.time}>
        <h2>
          {hours} <span>Hrs</span>
        </h2>
        :
        <h2>
          {minutes} <span>Mins</span>
        </h2>
        :
        <h2>
          {seconds} <span>Sec</span>
        </h2>
      </div>
    </div>
  );
};
var x = Date.now() + 24 * 60 * 60 * 1000 - 1000;
export default function Subscription() {
  var today = new Date();
  today.setDate(today.getDate() + 1);
  var dd = String(today.getDate()).padStart(1, "0");
  var mm = String(today.getMonth()).padStart(1, "0");
  console.log(mm);
  return (
    <div className="margin" id="subscription">
      <section className={styles["subscription"]}>
        <img
          src="/images/course/subcription-star-1.svg"
          width="140px"
          height="auto"
          alt=""
        />
        <img
          src="/images/course/subcription-star-2.svg"
          width="110px"
          height="auto"
          alt=""
        />
        <div className={styles.container}>
          <div>
            <img
              src="/images/course/subcription-arrow.svg"
              width="140px"
              height="auto"
              alt=""
            />

            <h2>
              Hurry up, the offer ends on {months[mm]} {dd} !!
            </h2>
            <Link href="#EnrollNow">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles["enroll-button"]}
            >
              <SiGoogleclassroom className={styles["enroll-icon"]} />
              <span className={styles["join"]}>Enroll Now</span>
            </motion.button>
            </Link>
          </div>
          <Countdown autoStart={true} date={x} renderer={renderer} />
        </div>
      </section>
    </div>
  );
}

{
  /* <img
className={styles["arrow-2"]}
src="/images/enroll-arrow_1.svg"
width="140px"
height="auto"
alt=""
/> */
}
