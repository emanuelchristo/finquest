import styles from "./demo.module.css";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

export default function Demo() {
  return (
    <div className="margin" id="demo">
      <section className={styles["demo"]}>
        <div className={styles.content}>
          <img src="/images/course/phone.svg" alt="" />
          <p>
            99.99% convinced? Take the .01 leap by attending a demo class with
            our star instructor Mudit Goel Book a demo Talk to us
          </p>
        </div>
        <div className={styles.buttons}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles["button"]}
          >
            <span className={styles["button-text"]}>Book a demo</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles["button"]}
          >
            <FaPhoneAlt className={styles["icon"]} />
            <span className={styles["button-text"]}>Talk to us</span>
          </motion.button>
        </div>
      </section>
    </div>
  );
}
