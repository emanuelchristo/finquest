import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import styles from "./modal.module.css";
import { BsBookHalf } from "react-icons/bs";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const chat_id = process.env.chat_id;
const bot_id = process.env.bot_id;
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

const Modal = ({ handleClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  function join(e) {
    e.preventDefault();
    try {
      sendMessage(
        `<a href="https://www.finqlearning.com/images/community.webp"> </a><b>Community Join Request</b>\n\n💎 Name: <b>${name}</b>\n☎️ Phone: <b>${phone}</b>\n📩 Email: ${email}\n`,
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
          <div className={styles["heading-wrapper"]}>
            <img
              className={styles["image"]}
              src="./images/community-popup-image.svg"
              width="60px"
              height="auto"
              alt=""
            />
            <h2>Join our community</h2>
            <div className={styles["prices"]}>
              <span>&#x20B9;199</span>
              <span>
                <p>
                  &#x20B9;599
                  <div>
                    <img src="./images/modal-pricecross-line.svg" alt="" />
                  </div>
                </p>
              </span>
              <span>
                <span>
                  <p>
                    <img src="./images/modal-off-rect.svg" alt="" />
                    <div>67% off</div>
                  </p>
                </span>
              </span>
            </div>
          </div>
          <form className={styles.modal_form} onSubmit={join}>
            <div>
              <label htmlFor="name">
                Name
                <span
                  style={{
                    color: "red",
                    fontSize: "18px",
                  }}
                >
                  *
                </span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                placeholder="Enter your name"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={email}
                name="email"
                placeholder="Enter your email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="phone">
                Phone
                <span
                  style={{
                    color: "red",
                    fontSize: "18px",
                  }}
                >
                  *
                </span>
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                required
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div className={styles["join"]}>
              <a href="#" target="_blank" rel="noreferrer noopener">
                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className={styles["join-button"]}
                >
                  <BsBookHalf className={styles["join-icon"]} />
                  <span>Join Now</span>
                </motion.button>
              </a>
            </div>
          </form>
          <button className={styles.modal_close} onClick={handleClose}>
            <img src="./images/modal-close.svg" alt="" />
          </button>
        </section>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
