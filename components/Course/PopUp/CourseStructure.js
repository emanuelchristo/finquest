import { motion } from "framer-motion";
import styles from "./popup.module.css";
import { BsBookHalf } from "react-icons/bs";
import "react-toastify/dist/ReactToastify.css";
import PopUp from "./PopUp";
import React from "react";

const CourseStructurePopUp = ({ handleClose, data }) => {
  return (
    <>
      <PopUp className={styles["modal"]}>
        <section className={styles["popup"]}>
          <div className={styles["header"]}>
            <div>
              <div className={styles["heading-wrapper"]}>
                <img
                  className={styles["image"]}
                  src="/images/books.png"
                  width="50px"
                  height="auto"
                  alt=""
                />
                <h2>Course structure</h2>
              </div>
              <div className={styles.subtitle}>
                <h6>
                  {data.curriculum.title} <span>{data.toughness}</span>
                </h6>
                <p>{data.curriculum.description}</p>
              </div>
            </div>
            <div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles["enroll-button"]}
              >
                <BsBookHalf className={styles["enroll-icon"]} />
                <span>Enroll for {data.newprice}</span>
              </motion.button>
              <p>*All times in IST</p>
            </div>
          </div>
          <div className={styles.content}>
            <div>
              <p>
                <span>{data.curriculum.duration1.title[0]} : </span>
                {data.curriculum.duration1.title[1]}
              </p>
              <ul>
                {data.curriculum.duration1.points?.map((item, index) => {
                  return (
                    <li key={index}>
                      {item.title}
                      <ul>
                        <li>{item.description}</li>
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <p>
                <span>{data.curriculum.duration2.title[0]} : </span>
                {data.curriculum.duration2.title[1]}
              </p>
              <ul>
                {data.curriculum.duration2.points?.map((item, index) => {
                  return <li key={index}>{item.title} </li>;
                })}
              </ul>
            </div>
          </div>
          <button className={styles.modal_close} onClick={handleClose}>
            <img src="/images/course/icons/popup-close.svg" alt="" />
          </button>
        </section>
      </PopUp>
    </>
  );
};

export default CourseStructurePopUp;
