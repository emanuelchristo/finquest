import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import CoursePageData, { months, nth } from "../data/CoursePageData";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import styles from "./snackbar.module.css";
import Countdown from "react-countdown";
import { WaButton } from "../common/Buttons/Button";

const timer = Date.now() + 2940000;
const renderer = ({ hours, minutes, seconds }) => {
  // Render a countdown
  return (
    <b>
      {hours}:{minutes}:{seconds}
    </b>
  );
};

export default function Snackbar({ trigger, sheetdata }) {
  const router = useRouter();
  const { courseid } = router.query;
  const [hidden, setHidden] = useState(false);
  const [data, setdata] = useState({});
  useEffect(() => {
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

  var deadline = new Date(sheetdata.start_date ?? data.deadline);
  deadline.setDate(deadline.getDate() - 1);
  var ddd = String(deadline.getDate()).padStart(1, "0");
  var dmm = String(deadline.getMonth()).padStart(1, "0");
  var dyy = String(deadline.getFullYear()).padStart(4, "0");
  return (
    <div
      className={styles["wrapper"]}
      style={{ display: hidden ? "none" : "block" }}
    >
      <motion.div
        initial={{ y: 100 }}
        animate={{
          y: trigger ? 0 : 150,
        }}
        transition={{
          duration: 1,
        }}
        className={styles["main"]}
      >
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
                {data.newprice} <s>{data.oldprice}</s>
              </h2>
              <p>
                offer ends in&nbsp;
                <Countdown autoStart={true} date={timer} renderer={renderer} />
              </p>
            </div>
          </div>
          <div>
            <h3>Registration ends on</h3>
            <p>
              {ddd + nth(ddd)} {months[dmm]} {dyy}
            </p>
          </div>
          <div>
            <h3>Course duration</h3>
            <p>{data.duration}</p>
          </div>
        </div>
        <div>
          <div>
            <WaButton
              ButtonText={"Enroll Now"}
              ClassName={styles["enroll-button"]}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
