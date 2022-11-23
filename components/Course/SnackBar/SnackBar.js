import { useState } from "react";
import { IoMdClose } from "react-icons/io";

import styles from "./snackbar.module.css";

const data = {
  newprice: 2399,
  oldprice: 3499,
  endtime: "0:32:12",
  enddate: "11th Nov 2022",
  duration: "6 Weeks",
};

export default function Snackbar(props) {
  const [hidden, setHidden] = useState(false);
  return (
    <div
      className={styles["wrapper"]}
      style={{ display: hidden ? "none" : "block" }}
    >
      <div className={styles["main"]}>
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
