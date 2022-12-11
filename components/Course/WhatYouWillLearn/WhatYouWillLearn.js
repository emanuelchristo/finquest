import React from "react";
import FeaturesLayout from "../common/FeatureLayout/FeaturesLayout";
import { motion, AnimatePresence } from "framer-motion";
import ContactPopUp from "../PopUp/Contact";
import styles from "./whatyouwill.module.css";
import { BsBookHalf } from "react-icons/bs";

import { useState } from "react";

const WhatYouWillLearn = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  return (
    <>
      <div className="margin">
        <h2 style={{ margin: "3rem 0" }} className="md:text-center mb-2 ">
          What You will Learn
        </h2>
        <div className="flex">
          <button
            className={styles["curriculum-button"]}
            onClick={() => (modalOpen ? close() : open())}
          >
            <BsBookHalf />
            Curriculum
          </button>
        </div>
        <FeaturesLayout indicator="whatyouwilllearn" />
        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {modalOpen && (
            <ContactPopUp modalOpen={modalOpen} handleClose={close} />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default WhatYouWillLearn;
