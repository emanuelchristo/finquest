import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import Link from "next/link";
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
          <IoMdClose style={{ fontSize: 20 }} />
        </button>
        <div>
          <div>
            <img
              src="/images/course/icons/snackbar-hourglass.svg"
              width={40}
              alt=""
            />
            <div>
              <h2>
                ₹2399 <s>₹3499</s>
              </h2>
              <p>
                offer ends in <b>0:32:12</b>
              </p>
            </div>
          </div>
          <div>
            <h3>Registration ends on</h3>
            <p>11th Nov 2022</p>
          </div>
          <div>
            <h3>Course duration</h3>
            <p>6 Weeks</p>
          </div>
        </div>
        <div>
          <div>
            <Link href={`course/`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles["enroll-button"]}
              >
                Enroll Now
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
