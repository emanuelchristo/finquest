import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import styles from "./popup.module.css";
import { BsBookHalf } from "react-icons/bs";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const chat_id = 651770430;
const bot_id = "5479087425:AAG6TaqMFvWyaFbBZXXM-eRsgZRABPKR0Ro";
// const chat_id = process.env.chat_id;
// const bot_id = process.env.bot_id;
const makePostRequest = async (url, details) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(details),
  });
  return await response.json();
};

const sendMessage = async (text, parse_mode) => {
  const endpoint = `https://api.telegram.org/bot${bot_id}/sendMessage`;
  await makePostRequest(endpoint, {
    text,
    parse_mode,
    chat_id,
  });
};

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },

  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },

  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const PopUp = ({ handleClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  function join(e) {
    e.preventDefault();
    try {
      sendMessage(
        `<a href="https://www.finqlearning.com/images/quote.webp"> </a><b>Community Join Request</b>\n\n💎 Name: <b>${name}</b>\n☎️ Phone: <b>${phone}</b>\n📩 Email: ${email}\n`,
        "html",
        chat_id
      );
      toast.success("Hurray! we'll contact you shortly", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: setTimeout(() => {
          handleClose();
        }, 5000),
      });
    } catch (error) {
      toast.error("Sorry Something went wrong", {
        position: "top-right",
      });
    }
    setEmail("");
    setName("");
    setPhone("");
  }

  return (
    <Backdrop onClick={handleClose}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={styles["modal"]}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
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
                  Option Trading <span>Advanced</span>
                </h6>
                <p>
                  The Programs lasts for 4 to 8 weeks. Once in, the students
                  received One year access to loads of resources, live support
                  and a community to help excel.
                </p>
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
                <span>Enroll for ₹5999</span>
              </motion.button>
              <p>*All times in IST</p>
            </div>
          </div>
          <div className={styles.content}>
            <div>
              <p>
                <span>Week 1:</span>
                Orientation + Basic Learning + Doubt Clearing
              </p>
              <ul>
                <li>
                  Monday - 7:30PM to 8:30PM
                  <ul>
                    <li>Ice-breaking and Welcome Session</li>
                  </ul>
                </li>
                <li>
                  Tuesday - 6:00PM to 8:00PM
                  <ul>
                    <li>Live Classroom Training, Strategy Discussion</li>
                  </ul>
                </li>
                <li>
                  Wednesday - 5:00PM to 7:00PM
                  <ul>
                    <li>Screener Discussions</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <p>
                <span>Week 2 to Week 4: </span>
                Practical Community-based Learning + Live Trading
              </p>
              <ul>
                <li>Live Trading </li>
                <li>Premium Support and Community Access </li>
                <li>Access to all of our trades and analysis </li>
                <li>Weekly Catchup and Review Sessions </li>
                <li>Last Thursday 4 PM - 4 PM</li>
              </ul>
            </div>
          </div>
          {/* <button className={styles.modal_close} onClick={handleClose}>
            <img src="/images/modal-close.svg" alt="" />
          </button> */}
        </section>
      </motion.div>
    </Backdrop>
  );
};

export default PopUp;
