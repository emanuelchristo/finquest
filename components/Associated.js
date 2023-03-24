import { BsFillStarFill } from "react-icons/bs";

import styles from "./associated.module.css";

export default function Associated() {
  return (
    <div className="margin">
      <div className="flex flex-col items-center">
        <div className={styles["trusted-wrapper"]}>
          Trusted by&nbsp;<span className=" font-semibold">800+</span>
          &nbsp;learners{" "}
          <span className={styles["rating"]}>
            <BsFillStarFill className={styles["star-icon"]} /> 4.7/5
          </span>
        </div>
        <div className={styles["associated"]}>
          <img
            src="/images/upstox.svg"
            alt="Upstox"
            height="38px"
            width="auto"
          />
          <img
            src="/images/trading-view.svg"
            alt="Trading View"
            height="38px"
            width="auto"
          />
          <img
            src="/images/zerodha.svg"
            alt="Zerodha"
            height="38px"
            width="auto"
          />
        </div>
      </div>
    </div>
  );
}
