import { HiPhone } from "react-icons/hi";
import { MdMail } from "react-icons/md";
import { motion } from "framer-motion";
import styles from "./features.module.css";

export default function Features() {
  return (
    <div id="contact" className="margin">
      <section className={styles["features"]}>
        <div className={styles["heading-wrapper"]}>
          <h6>2400+ Hours of tutoring resulted in</h6>
        </div>
        <div className={styles["content-wrapper"]}>
          <div className={styles["features-content"]}>
            <div>
              <img src="/images/features-icon-1.svg" alt="" />
              <h3>600+</h3>
              <p>students & growing</p>
            </div>
            <div>
              <img src="/images/features-icon-2.svg" alt="" />
              <h3>94%</h3>
              <p>satisfaction rate</p>
            </div>
            <div>
              <img src="/images/features-icon-3.svg" alt="" />
              <h3>27+</h3>
              <p>cities worldwide</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
