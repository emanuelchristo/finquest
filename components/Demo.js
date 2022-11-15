import { SiGoogleclassroom } from "react-icons/si";
import { motion } from "framer-motion";

import styles from "./demo.module.css";

export default function Hiring() {
  return (
    <div className="margin" id="consultation">
      <section className={styles["consultation"]}>
        <img
          src="/images/consultation-icon.svg"
          className={styles["suitcase"]}
        />
        <span className={styles["text"]}>DEMO CLASS</span>
        <h2>Book a free live class now!</h2>
        <p>Schedule a 30 minute google meet call with our mentors</p>
        <div className={styles["feature"]}>
          <a
            href="https://calendly.com/finquest"
            target="_blank"
            rel="noreferrer noopener"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles["consultation-button"]}
            >
              <SiGoogleclassroom className={styles["consultation-icon"]} />
              <span className={styles["join"]}>Book Now</span>
            </motion.button>
          </a>
        </div>
        <img
          className={styles["arrow-1"]}
          src="/images/consultation-arrow_1.svg"
          width="140px"
          height="auto"
          alt=""
        />
        <img
          className={styles["arrow-2"]}
          src="/images/consultation-arrow_1.svg"
          width="140px"
          height="auto"
          alt=""
        />
      </section>
    </div>
  );
}
