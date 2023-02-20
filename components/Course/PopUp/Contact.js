import { motion } from "framer-motion";
import styles from "./popup.module.css";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { sendMessage } from "./Telegram";
import PopUp from "./PopUp";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
const chat_id = process.env.chat_id;
const ContactPopup = ({ handleClose, courseid }) => {
  const [value, setValue] = useState();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const img = "https://www.finqlearning.com/images/professional-plan.webp";

  if (courseid == "starter") {
    img = "https://www.finqlearning.com/images/student-plan.webp";
  } else if (courseid == "forex") {
    img = "https://www.finqlearning.com/images/options-trading-plan.webp";
  }
  function join(e) {
    e.preventDefault();
    try {
      sendMessage(
        `<a href="${img}"> </a><b>Course Join Request</b>\n\n🚀 Course: <b>${courseid.toUpperCase()}</b>\n💎 Name: <b>${name}</b>\n☎️ Phone: <b>${phone}</b>\n\n`,
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
    setName("");
    setPhone("");
  }

  return (
    <>
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
        style={{ zIndex: 999999 }}
      />
      {/* Same as */}
      <PopUp className={styles.contactmodal}>
        <section className={styles["popup"]}>
          <form className={styles.contact} onSubmit={join}>
            <h1>Ready to become a Rockstar Trader?</h1>
            <div className={styles["inputs"]}>
              <input
                type="text"
                placeholder="Enter your name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
              <PhoneInput
                international
                countryCallingCodeEditable={false}
                defaultCountry="IN"
                value={value}
                onChange={setPhone}
                className={styles.phone}
                rules={{ required: true }}
              />
            </div>
            <motion.button
              className={styles["submit-button"]}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
            >
              <span>Submit</span>
            </motion.button>
          </form>
          <button className={styles.modal_close} onClick={handleClose}>
            <img src="/images/course/icons/popup-close.svg" alt="" />
          </button>
        </section>
      </PopUp>
    </>
  );
};

export default ContactPopup;
