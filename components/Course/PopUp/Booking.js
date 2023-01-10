import { motion, AnimatePresence } from "framer-motion";
import styles from "./booking.module.css";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { sendMessage } from "./Telegram";
import PopUp from "./PopUp";
import { Checkbox } from "@nextui-org/react";

const chat_id = process.env.chat_id;
const BookingPopUp = ({ handleClose, courseid }) => {
  const [section, setSection] = useState(true);
  const Next = () => setSection(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const img = "https://www.finqlearning.com/images/professional-plan.webp";

  if (courseid == "starter") {
    img = "https://www.finqlearning.com/images/student-plan.webp";
  } else if (courseid == "options") {
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
      <PopUp className={styles.popup}>
        <button className={styles.modal_close} onClick={handleClose}>
          <img src="/images/course/icons/popup-close.svg" alt="" />
        </button>
        {section ? <Section1 goNext={Next} /> : <Section2 />}
      </PopUp>
    </>
  );
};

export default BookingPopUp;

const Section1 = ({ goNext }) => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      open: true,
      batch: "Wednesday Batch 9:00PM - 10:30PM",
      points: [
        "Module 1 - 4 Jan, 23",
        "Module 1 - 4 Jan, 23",
        "Module 1 - 4 Jan, 23",
      ],
    },
    {
      id: 2,
      open: false,
      batch: "Wednesday Batch 10:00PM - 10:30PM",
      points: [
        "Module 1 - 4 Jan, 23",
        "Module 1 - 4 Jan, 23",
        "Module 1 - 4 Jan, 23",
      ],
    },
  ]);

  function handleClick(id) {
    let temp = faqs.map((item) => {
      if (item.id === id) return { ...item, open: !item.open };
      return { ...item, open: false };
    });
    setFaqs(temp);
  }
  const defaultval = {
    plan: "Wednesday Batch 9:00PM - 10:30PM",
  };
  const [selected, setSelected] = useState([defaultval.plan]);

  return (
    <>
      <div className={styles.section1}>
        <div>
          <img src="/images/course/hero-ameen.png" alt="" />
          <div className={styles.desc}>
            <span>beginner</span>
            <h4>Lorem ipsum dolor sit amet</h4>
            <div>
              <div>
                <img src="/images/course/booking-popup-off.svg" alt="" />
                <h2>₹4999/-</h2>
              </div>
              <p>Total inclusive of taxes</p>
            </div>
          </div>
        </div>
        <div className={styles["points-wrapper"]}>
          <Checkbox.Group
            defaultValue={selected}
            value={selected}
            aria-label="checkbox"
          >
            {faqs.map((item, index) => (
              <Faq
                key={index}
                batch={item.batch}
                points={item.points}
                open={item.open}
                onClick={()=>{
                  setSelected(item.batch),handleClick(item.id)
                }}
                
                
              />
            ))}
          </Checkbox.Group>
        </div>
        <div>
          <button onClick={goNext}>Next</button>
        </div>
      </div>
    </>
  );
};
const Section2 = () => {
  return (
    <>
      <div className={styles.section2}>Section2</div>
    </>
  );
};
const pointsAnimation = {
  initial: {
    height: 0,
  },
  animate: {
    height: "auto",
  },
  exit: {
    height: 0,
  },
};
function Faq({ batch, points, open,onClick }) {
  return (
    <div className={`${styles["batch"]} ${open ? styles["open"] : ""}`}>
      <motion.div>
        <Checkbox
          value={batch}
          aria-label={batch}
          isRounded
          size="md"
          color="primary"
          onChange={onClick}
          
        />
      </motion.div>
      <div>
        <h2>{batch}</h2>
        <AnimatePresence>
        <div className={styles.points}>
          {open &&
          points.map((item,index)=>(
              <motion.p
              key={index}
              variants={pointsAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                >
                {item}
              </motion.p>
          ))
           }
            </div>
        </AnimatePresence>
      </div>
    </div>
  );
}
