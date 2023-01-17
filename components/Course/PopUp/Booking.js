import { motion, AnimatePresence } from "framer-motion";
import styles from "./booking.module.css";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import PopUp from "./PopUp";
import { Checkbox } from "@nextui-org/react";
import {BsBookHalf} from 'react-icons/bs'
import Link from "next/link";


const CoursePageData = {
  starter: [
    {
      id: 1,
      open: true,
      batch: "Feb 6th Batch - 07:30 PM - 09:00 PM",
      points: [
        "Module 1&2 - 06 Feb to 20 Feb",
        "Module 3&4 - 20 Feb to 06 Mar",
        "Module 5&6- 06 Mar to 20 Mar",
      ],
    },
    {
      id: 2,
      open: false,
      batch: "Feb 6th Batch - 10:00 AM - 03:00 PM (Weekend)",
      points: [
        "Module 1&2 - 06 Feb to 20 Feb",
        "Module 3&4 - 20 Feb to 06 Mar",
        "Module 5&6- 06 Mar to 20 Mar",
      ],
    },
  ],
  professional: [
    {
      id: 1,
      open: true,
      batch: "Feb 6th Batch - 07:30 PM - 09:00 PM",
      points: [
        "Module 1&2 - 06 Feb to 20 Feb",
        "Module 3&4 - 20 Feb to 06 Mar",
        "Module 5&6- 06 Mar to 20 Mar",
        "Module 7&8- 20 Mar to 03 Apr",
      ],
    },
    {
      id: 2,
      open: false,
      batch: "Feb 6th Batch - 10:00 AM - 03:00 PM (Weekend)",
      points: [
        "Module 1&2 - 06 Feb to 20 Feb",
        "Module 3&4 - 20 Feb to 06 Mar",
        "Module 5&6- 06 Mar to 20 Mar",
        "Module 7&8- 06 Mar to 03 Apr",
      ],
    },
  ]
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


const BookingPopUp = ({ handleClose,head,price,courseid}) => {
  const data = CoursePageData[courseid] ??  CoursePageData.starter;
  const [section, setSection] = useState(true);
  const Next = () => setSection(false);
  return (
    <>
      <PopUp className={styles.popup}>
        <button className={styles.modal_close} onClick={handleClose}>
          <img src="/images/course/icons/popup-close.svg" alt="" />
        </button>
        {section ? <Section1 data={data} head={head} goNext={Next} price={price}/> : <Section2 courseid={courseid} head={head} price={price}/>}
      </PopUp>
    </>
  );
};



const Section1 = ({ goNext,head ,price,data}) => {
  const [modules, setModules] = useState(data);

  function handleClick(id) {
    let temp = modules.map((item) => {
      if (item.id === id) return { ...item, open: !item.open };
      return { ...item, open: false };
    });
    setModules(temp);
  }

  const [selected, setSelected] = useState([modules[0].batch]);

  return (
    <>
      <div className={styles.section1}>
        <Header head={head} price={price}/>
        <div className={styles["points-wrapper"]}>
          <Checkbox.Group
            defaultValue={selected}
            value={selected}
            aria-label="checkbox"
          >
            {modules.map((item, index) => (
              <Module
                key={index}
                batch={item.batch}
                points={item.points}
                open={item.open}
                onClick={() => {
                  setSelected(item.batch), handleClick(item.id);
                }}
              />
            ))}
          </Checkbox.Group>
          
        </div>
        <div className={styles.next}>
          <motion.button onClick={goNext}>Next</motion.button>
        </div>
      </div>
    </>
  );
};
const Section2 = ({head,price,courseid}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isWaNumber, setIsWaNumber] = useState(false);
  function waLink(msg) {
    let url = "https://api.whatsapp.com/send?";
    let params = new URLSearchParams("");
    params.append("phone", "918075145434");
    params.append("text", msg);
    return url + params.toString();
  }
  return (

      <div className={styles.section2}>
        <Header head={head} price={price}/>
        <form className={styles.modal_form} >
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
            <div>
            <Checkbox isSelected={!isWaNumber} onChange={()=>{
              setIsWaNumber(!isWaNumber)
            }} ><span className={styles.wa}>This is my WhatsApp number</span></Checkbox>
            </div>
            <div className={styles["join"]}>
            <Link
                  target="_blank"
                  rel="noreferrer noopener"
                  href={waLink(
                    `${courseid} (${price})\n${name}\n${email}\n${phone}${!isWaNumber?' (WhatsApp)':''}`
                  )}
                >
            
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
                </Link>
            </div>
          </form>
         
      </div>

  );
};

function Module({ batch, points, open, onClick }) {
  return (
    <div className={`${styles["batch"]} ${open ? styles["open"] : ""}`}>
      <motion.div>
        <Checkbox
          isReadOnly={open}
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
              points.map((item,index) => (
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
              {open && (
                <div className={styles.ist}> All timings are in IST (+05:30)</div>
              )}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}

const Header = ({head,price}) => {
  return (
    <div className={styles.header}>
      <img src="/images/course/hero-ameen.png" alt="" />
      <div className={styles.desc}>
        <span>beginner</span>
        <h4>{head}</h4>
        <div>
          <div>
            <img src="/images/course/booking-popup-off.svg" alt="" />
            <h2>₹ {price}/-</h2>
          </div>
          <p>Total inclusive of taxes</p>
        </div>
      </div>
    </div>
  );
};
export default BookingPopUp;