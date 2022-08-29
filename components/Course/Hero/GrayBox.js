import React from "react";
import styles from "./hero.module.css";

const GrayBox = ({ imagepath, content1, content2 }) => {
  return (
    <div className={styles.greybox}>
      <img src={imagepath} />
      <div>
        <div className={styles.greybox_text}>{content1}</div>
        <div className={styles.greybox_text}>{content2}</div>
      </div>
    </div>
  );
};

export default GrayBox;
