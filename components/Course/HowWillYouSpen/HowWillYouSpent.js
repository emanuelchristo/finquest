import React from "react";
import Container from "./Container";
import Image from "next/image";
import CoursePageData from "../data/CoursePageData";
import { useRouter } from "next/router";
import { useState } from "react";
import ContactPopUp from "../PopUp/Contact";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../PopUp/popup.module.css";
import { HiOutlineBookOpen } from "react-icons/hi";
const HowWillYouSpent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  
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
      <div
        className="container flex flex-col items-center justify-center gap-6 margin"
        style={{ marginTop: "4rem", marginBottom: "3rem" }}
      >
        <Image src="/images/hourglass.png" alt="" width="62px" height="62px" />
        <h2 className="text-center">How Will You spend Your Time</h2>
        <div className="grid grid-cols-2 gap-5 justify-center items-center sm:grid-cols-1">
          {data["howwillyouspendyourtime"]?.map((item, index) => {
            return (
              <Container
                key={index}
                duration={item.duration}
                title={item.title}
                content={item.content}
                color={item.color}
              />
            );
          })}
        </div>

        <motion.button
          className={styles["curriculam-button"]}
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: { type: "spring", mass: 1.15, delay: 1.5 },
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (modalOpen ? close() : open())}
        >
          <HiOutlineBookOpen className={styles["curriculam-button-icon"]} />
          <span>Full Course Structure</span>
        </motion.button>
        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {modalOpen && (
            <ContactPopUp
              modalOpen={modalOpen}
              handleClose={close}
              courseid={courseid}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default HowWillYouSpent;
