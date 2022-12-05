import {
  FaChalkboardTeacher,
  FaPoll,
  FaHistory,
  FaUsers,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./community.module.css";
import { useState } from "react";
import Modal from "./Modal";

export default function Community() {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className="margin" id="community">
      <section className={styles["community"]}>
        <img
          className={styles["image"]}
          src="/images/community.webp"
          alt=""
          width="260px"
          height="auto"
        />
        <h2>Join the community</h2>
        <p>
          Become a part of the fastest-growing community of stock market
          traders.
        </p>
        <div className={styles["pills-wrapper"]}>
          <div className={` ${styles["pill-dotted"]}`}>
            Free unlimited access for enrolled members
          </div>
          <div className={styles["pill"]}>
            <span style={{ fontWeight: 600 }}>₹199</span> per year for others
          </div>
        </div>
        <motion.button
          className={styles["community-join-button"]}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={() => (modalOpen ? close() : open())}
        >
          <FaUsers className={styles["community-join-icon"]} />
          <span>Join Now</span>
        </motion.button>
        <div className={styles["features-wrapper"]}>
          <div className={styles["feature"]}>
            <div className={styles["icon-wrapper"]}>
              <FaChalkboardTeacher className={styles["icon"]} />
            </div>
            <span>Expert mentorship</span>
          </div>
          <div className={styles["feature"]}>
            <div className={styles["icon-wrapper"]}>
              <FaPoll className={styles["icon"]} />
            </div>
            <span>Daily analysis</span>
          </div>
          <div className={styles["feature"]}>
            <div className={styles["icon-wrapper"]}>
              <FaHistory className={styles["icon"]} />
            </div>
            <span>Daily updates</span>
          </div>
          <div className={styles["feature"]}>
            <div className={styles["icon-wrapper"]}>
              <FaUsers className={styles["icon"]} />
            </div>
            <span>Like minded people</span>
          </div>
        </div>
        <img
          className={styles["arrow-1"]}
          src="/images/community-arrow.svg"
          width="140px"
          height="auto"
          alt=""
        />
        <img
          className={styles["arrow-2"]}
          src="/images/community-arrow.svg"
          width="140px"
          height="auto"
          alt=""
        />
        <div className={styles["footer-bar"]}></div>
        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
        </AnimatePresence>
      </section>
    </div>
  );
}
