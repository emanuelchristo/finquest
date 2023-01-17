import { FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import styles from "./rightplace.module.css";
import Link from "next/link";

export default function RightPlace() {

  return (
    <div className="margin">
      <section className={styles["toptrader"]}>
        <img
          src="/images/course/toptrader.svg"
          width="60px"
          height="auto"
          alt=""
        />
        <h2>Then you are at the right place </h2>
        <div>
			<Link href='/#membershipscards'>
          <motion.button  initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: { type: "spring", mass: 1.15, delay: 1.5 },
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }} className={styles.enroll}>
            Join the Cohort
            <span>
            <FiChevronRight/>
            </span>
          </motion.button>
			</Link>
          <p>
            Don&apos;t miss out on this opportunity
          </p>
        </div>
      </section>
    </div>
  );
}
