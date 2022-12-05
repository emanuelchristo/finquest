import { motion } from "framer-motion";
import styles from "./popup.module.css";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { sendMessage, dropIn } from "./Telegram";
import PopUp from "./PopUp";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const ContactPopup = ({ handleClose }) => {
  const [value, setValue] = useState();
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
      />
      {/* Same as */}
      <ToastContainer />
      <PopUp className={styles.contactmodal}>
        <section className={styles["popup"]}>
          <div className={styles.contact}>
            <h1>Ready to become a Rockstar Trader?</h1>
            <div className="inputs">
              <input type="text" placeholder="Enter your name" />
              <PhoneInput
                international
                countryCallingCodeEditable={false}
                defaultCountry="IN"
                value={value}
                onChange={setValue}
                className={styles.phone}
              />
            </div>
            <motion.button
              className={styles["submit-button"]}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => (modalOpen ? close() : open())}
            >
              <span>Submit</span>
            </motion.button>
          </div>
          <button className={styles.modal_close} onClick={handleClose}>
            <img src="/images/course/icons/popup-close.svg" alt="" />
          </button>
        </section>
      </PopUp>
    </>
  );
};

export default ContactPopup;
