import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import CoursePageData from "../data/CoursePageData";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import styles from "./snackbar.module.css";
import Countdown from "react-countdown";
import { WaButton } from "../common/Buttons/Button";

var months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
var tommorow = new Date();
tommorow.setDate(tommorow.getDate() + 1);

const tmw = {
  dd: String(tommorow.getDate()).padStart(1, "0"),
  mm: months[String(tommorow.getMonth()).padStart(2, "0")],
  yy: String(tommorow.getFullYear()).padStart(2, "0"),
};

const renderer = ({ hours, minutes, seconds }) => {
  // Render a countdown
  return (
    <b>
      {hours}:{minutes}:{seconds}
    </b>
  );
};

export default function Snackbar(props) {
  const router = useRouter();
  const [hidden, setHidden] = useState(false);
  const [data, setdata] = useState({});
  const { courseid } = router.query;
  const [date, setdate] = useState();
  useEffect(() => {
    switch (courseid) {
      case "options":
        setdata(CoursePageData.options);
        break;
      case "professional":
        setdata(CoursePageData.professional);
        break;
      case "starter":
        setdata(CoursePageData.starter);
    }
  }, [courseid]);
  return (
    <div
      className={styles["wrapper"]}
      style={{ display: hidden ? "none" : "block" }}
    >
      <motion.div
        initial={{ y: 100 }}
        animate={{
          y: props.trigger ? 0 : 150,
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
                <Countdown
                  autoStart={true}
                  date={Date.now() + 2940000}
                  renderer={renderer}
                />
              </p>
            </div>
          </div>
          <div>
            <h3>Registration ends on</h3>
            <p>
              {tmw.dd}th {tmw.mm} {tmw.yy}
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
