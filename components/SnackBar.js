import { useState } from "react";
import { IoMdClose } from "react-icons/io";

import styles from "./snackbar.module.css";

export default function Snackbar(props) {
  const [hidden, setHidden] = useState(false);
  return (
    <div
      className={styles["wrapper"]}
      style={{ display: hidden ? "none" : "block" }}
    >
      <div className={styles["main"]}>
        <p className={styles["snack-text"]}>{props.message} </p>
        <button
          className={styles["snack-close"]}
          onClick={(e) => {
            setHidden(!hidden);
          }}
        >
          <IoMdClose />
        </button>
      </div>
    </div>
  );
}
