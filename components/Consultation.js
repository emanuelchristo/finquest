import { SiGoogleclassroom } from "react-icons/si";
import { motion } from "framer-motion";

import styles from "./consultation.module.css";

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
        <p>We&apos;re looking for people who want make stock</p>
        <div className={styles["feature"]}>
          <a
            href={waLink("Book me a free live class now!")}
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
function waLink(msg) {
  let url = "https://api.whatsapp.com/send?";
  let params = new URLSearchParams("");
  params.append("phone", "918075145434");
  params.append("text", msg);
  return url + params.toString();
}
