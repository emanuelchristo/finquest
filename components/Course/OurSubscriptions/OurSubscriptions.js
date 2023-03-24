import { motion, AnimatePresence } from "framer-motion";
import styles from "./oursubscriptions.module.css";
import { Checkbox } from "@nextui-org/react";
import React from "react";
import { MdOutlineGroups } from "react-icons/md";
import BookingPopUp from "../PopUp/Booking";

const points = [
  "Real-Time Trading Practice",
  "1-on-1 Mentorship from Experts",
  "Live Class",
  "Malayalam & English",
  "Learn Anywhere",
  "Lifetime support",
  "Community Access",
  "Certificate of completion",
];

const CoursePageData = {
  professional: {
    title: "From beginner to PRO TRADER",
    default: {
      plan: "Pre Booking",
      monthly: "9,900",
    },
    emi: [
      {
        id: 1,
        plan: "Pre Booking",
        monthly: "999",
        price: "11,600",
        cutprice: "25,699",
        off: 51,
        mostenrolled: false,
      },
      {
        id: 2,
        plan: "One Time",
        monthly: "12,599",
        price: "12,599",
        cutprice: "25,699",
        off: 51,
        mostenrolled: true,
      },
      {
        id: 3,
        plan: "One Month",
        monthly: "7,000",
        price: "14,000",
        cutprice: "25,699",
        off: 46,
        mostenrolled: false,
      },
    ],
  },
  starter: {
    title: "Kickstart your Stock market journey in less than 6 weeks!",
    default: {
      plan: "Pre Booking",
      monthly: "7,999",
    },
    emi: [
      {
        id: 1,
        plan: "Pre Booking",
        monthly: "599",
        price: "8,400",
        cutprice: "16,499",
        off: 49,
        mostenrolled: false,
      },
      {
        id: 2,
        plan: "One Time",
        monthly: "8,999",
        price: "8,999",
        cutprice: "16,499",
        off: 47,
        mostenrolled: true,
      },
      {
        id: 3,
        plan: "One Month",
        monthly: "5,000",
        price: "10,000",
        cutprice: "16,499",
        off: 41,
        mostenrolled: false,
      },
    ],
  },
};

export default function OurSubscriptions({ courseid }) {
  const [selectedCourse, setSelectedCourse] = React.useState(0);
  const [selected, setSelected] = React.useState(["Pre Booking"]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const data = CoursePageData[courseid] ?? CoursePageData.starter;
  const price_data = data.emi[selectedCourse].monthly;

  return (
    <div className="margin" id="oursubscription">
      <section id="EnrollNow" className={styles["oursubscription"]}>
        <div className={styles.heading}>
          <span>PRICING</span>
          <h3>Our subscriptions fit your needs</h3>
          <p>
            Our pricing plans are designed to fit your study schedule, as well
            as your wallet.
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.details}>
            <h2>
              <span>⚡</span>Why should I choose...
            </h2>
            <ul>
              {points.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.emi}>
            <div className={styles.forex} id="subscriptionoptions">
              <Checkbox.Group
                defaultValue={selected}
                value={selected}
                aria-label="checkbox"
                className={styles.checkgroup}
              >
                {data?.emi
                  ? data.emi.map((item, index) => (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={styles.card}
                        key={index}
                        onClick={() => {
                          setSelectedCourse(index);
                          setSelected([item.plan]);
                        }}
                      >
                        {item.mostenrolled ? <p>MOST ENROLLED</p> : ""}
                        <div className={styles.check}>
                          <Checkbox
                            id={item.id}
                            value={item.plan}
                            aria-label={item.plan}
                            isRounded
                            size="md"
                            color="success"
                            onChange={() => {
                              setSelectedCourse(index);
                              setSelected([item.plan]);
                            }}
                          />
                          {item.plan} plan
                        </div>
                        <div className={styles.price}>
                          <h2>
                            ₹ {item.monthly} <span>/mo</span>
                          </h2>
                          <div>
                            <h4>₹{item.price}</h4>
                            <h5 className={styles["cut-price-wrapper"]}>
                              ₹{item.cutprice}
                            </h5>
                            <h6 className={styles.offprice}>
                              <img src="/images/course/offprice.svg" alt="" />
                              <span>{item.off}% off</span>
                            </h6>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  : null}
              </Checkbox.Group>
            </div>
            <div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Enroll"
                onClick={() => (modalOpen ? close() : open())}
              >
                {`Pay ₹${price_data}`}
              </motion.button>

              <p>
                <MdOutlineGroups />
                800+ Learners already enrolled
              </p>
            </div>
          </div>
        </div>
      </section>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && (
          <BookingPopUp
            head={data.title}
            price={price_data}
            modalOpen={modalOpen}
            handleClose={close}
            courseid={courseid}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
