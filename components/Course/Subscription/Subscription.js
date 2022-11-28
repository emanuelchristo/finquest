import { SiGoogleclassroom } from "react-icons/si";
import { motion } from "framer-motion";
import styles from "./subscription.module.css";
import Countdown from "react-countdown";

// subcription-arrow
export default function Subscription() {
  var today = new Date();
  var dd = String(today.getDate() + 1);
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

            <h2>Hurry up, the offer ends on Nov {dd}!!</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles["enroll-button"]}
            >
              <SiGoogleclassroom className={styles["enroll-icon"]} />
              <span className={styles["join"]}>Enroll Now</span>
            </motion.button>
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
