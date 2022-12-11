import {
  FaChalkboardTeacher,
  FaPoll,
  FaHistory,
  FaUsers,
} from "react-icons/fa";
import styles from "./community.module.css";

export default function Community() {
  return (
    <div className="margin md:pt-10" id="community">
      <section className={styles["community"]}>
        <img
          className={styles["image"]}
          src="/images/community.webp"
          alt=""
          width="260px"
          height="auto"
        />
        <h2>Free Community access</h2>
        <p>
          Explore what`s new and get updates on the recent treands of trading
          and investing
        </p>
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
      </section>
    </div>
  );
}
