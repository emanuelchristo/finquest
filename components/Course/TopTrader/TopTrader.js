import { MdCardMembership, MdBolt } from "react-icons/md";
import { motion } from "framer-motion";
import styles from "./toptrader.module.css";
import Link from "next/link";

export default function TopTrader() {
  return (
    <div className="margin">
      <section className={styles["toptrader"]}>
        <img
          src="/images/course/toptrader.svg"
          width="60px"
          height="auto"
          alt=""
        />
        <h2>Ready to be a Top 1% Trader?</h2>
        <div>
			<Link href='#EnrollNow'>
          <motion.button  initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: { type: "spring", mass: 1.15, delay: 1.5 },
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }} className={styles.enroll}>
            <span>
              <MdCardMembership />
            </span>
            Enroll Now
          </motion.button>
			</Link>
          <p>
            <span>
              <MdBolt />
            </span>{" "}
            Limited slots only
          </p>
        </div>
      </section>
    </div>
  );
}
