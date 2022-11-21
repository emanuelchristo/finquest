import styles from "./startnow.module.css";
import { motion } from "framer-motion";

export default function StartNow() {
  return (
    <div className="margin" id="startnow">
      <section className={styles["startnow"]}>
        <div>
          <h2>
            140+ Lakh New Traders identified the potential of Stock Market in
            FY21
          </h2>
          <p>Its time for you to grab your opportunity</p>
        </div>
        <div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles["start-button"]}
          >
            <span className={styles["start"]}>Start Now</span>
          </motion.button>
        </div>
      </section>
    </div>
  );
}
