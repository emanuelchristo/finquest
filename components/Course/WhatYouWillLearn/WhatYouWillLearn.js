import React from "react";
import FeaturesLayout from "../common/FeatureLayout/FeaturesLayout";
import { motion, AnimatePresence } from "framer-motion";
import ContactPopUp from "../PopUp/Contact";
import styles from "./whatyouwill.module.css";
import { BsBookHalf } from "react-icons/bs";
import CoursePageData from "../data/CoursePageData";
import { useState } from "react";
import { useRouter } from "next/router";

const WhatYouWillLearn = () => {
  
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
      <div className="margin">
        <h2 style={{ margin: "3rem 0" }} className="md:text-center mb-2 ">
          What You will Learn
        </h2>
        <div className="flex">
          <motion.button
            className={styles["curriculum-button"]}
            onClick={() => (modalOpen ? close() : open())}
          >
            <BsBookHalf />
            Curriculum
          </motion.button>
        </div>
        <FeaturesLayout indicator="whatyouwilllearn" />
        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {modalOpen && (
            <ContactPopUp modalOpen={modalOpen} handleClose={close} courseid={courseid}/>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default WhatYouWillLearn;
