import React from "react";
import CoursePageData from "../data/CoursePageData";
import { useRouter } from "next/router";
import styles from "./hero.module.css";
import {motion} from "framer-motion"
import {MdCardMembership} from "react-icons/md"
import Link from "next/link";
const ButtonAndDiscount = () => {
  const router = useRouter();
  const { courseid } = router.query;
  const [data, setdata] = React.useState({});
  React.useEffect(() => {
    switch (courseid) {
      case "forex":
        setdata(CoursePageData.forex);
        break;
      case "professional":
        setdata(CoursePageData.professional);
        break;
      case "starter":
        setdata(CoursePageData.starter);
    }
  }, [courseid]);
  return (
    <>
      <div className={styles.buttons_and_discount}>
      <Link href="#EnrollNow">
         <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles["enroll-button"]}
            >
              <MdCardMembership className={styles["enroll-icon"]} />
              <span className={styles["join"]}>{`Enroll for  ${data["newprice"]}`}</span>
            </motion.button>
            </Link>
        <div>
          <span className={styles.strikethrough}>{data["oldprice"]}</span>
        </div>
        <div className={styles.offprice}>
          <img src="/images/course/offprice.svg" alt="" />
          <span>{data.offprice}% off</span>
        </div>
      </div>
    </>
  );
};

export default ButtonAndDiscount;
