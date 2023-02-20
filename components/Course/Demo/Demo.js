import styles from "./demo.module.css";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import CoursePageData from "../data/CoursePageData";

function waLink(msg) {
  let url = "https://api.whatsapp.com/send?";
  let params = new URLSearchParams("");
  params.append("phone", "918075145434");
  params.append("text", msg);
  return url + params.toString();
}

export default function Demo() {
  const router = useRouter();
  const { courseid } = router.query;
  const [data, setdata] = useState({});
  const [redirecturl, setredirecturl] = useState("");
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
  useEffect(() => {
    setredirecturl(waLink(data.message));
  }, [data]);
  return (
    <div className="margin" id="demo">
      <section className={styles["demo"]}>
        <div className={styles.content}>
          <img src="/images/course/phone.svg" alt="" />
          <p>
            99.99% convinced? Take the .01 leap by attending a demo class with
            our star instructor Noel George Book a demo Talk to us
          </p>
        </div>
        <div className={styles.buttons}>
          <a
            href="https://calendly.com/finquest"
            target="_blank"
            rel="noreferrer noopener"
            className={styles["button"]}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={styles["button-text"]}>Book a free class</span>
            </motion.button>
          </a>
          <a
            href={redirecturl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles["button"]}
          >
           
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={styles["button-text"]}> <BsWhatsapp className={styles["icon"]} /> WhatsApp us</span>
            </motion.button>
          </a>
        </div>
      </section>
    </div>
  );
}
