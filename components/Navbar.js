import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "./navbar.module.css";
import Link from "next/link";
import { FaBuilding, FaStar, FaQuestion, FaAward } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import VisibilitySensor from "react-visibility-sensor";

const container = {
  hide: {},
  show: {
    transition: {
      delay: 1,
      type: "spring",
      duration: 0.15,
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hide: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", mass: 1 } },
};

const menu = {
  hide: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      mass: 1,
      staggerChildren: 0.05,
    },
  },
};

const menuItem = {
  hide: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", mass: 1 } },
};
function waLink() {
  let url = "https://api.whatsapp.com/send?";
  let params = new URLSearchParams("");
  params.append("phone", "918075145434");
  // params.append("text", '');
  return url + params.toString();
}
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [contact, setContact] = useState(false);




  
  const [isMouse, toggleMouse] = useState(false);
  const toggleMouseMenu = () => {
    toggleMouse(!isMouse);
  };
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      y: 70,
      transition: {
        duration: 0.3,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      y: 100,
      // rotateX: -15,
      transition: {
        duration: 0.2,
        delay: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <div>
      <motion.nav
        variants={container}
        initial="hide"
        animate="show"
        className={styles["navbar"]}
      >
        <Link href="/" passHref>
          <VisibilitySensor>
            {({ isVisible }) => (
              <motion.img
                className=" cursor-pointer"
                variants={item}
                src="/images/logo.svg"
                height={32}
                width="auto"
              >
                {isVisible ? setContact(false) : setContact(true)}
              </motion.img>
            )}
          </VisibilitySensor>
        </Link>
        <motion.span
          className={styles["menu-icon-wrapper"]}
          variants={item}
          onClick={() => setShowMenu(true)}
        >
          <IoMdMenu className={styles["menu-icon"]} />
        </motion.span>

        <ul className={styles["links-list"]}>
          <motion.li variants={item}>
            <Link href="/about">
              <a>About us</a>
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link href="/#benefits">
              <a>Benefits</a>
            </Link>
          </motion.li>
          <motion.li
            variants={item}
            onMouseEnter={toggleMouseMenu}
            onMouseLeave={toggleMouseMenu}
          >
           
              <a className={styles.membership}>
                Memberships <FaAngleDown />
              </a>
        
            <motion.div
              className={styles["sub-menu"]}
              initial="exit"
              animate={isMouse ? "enter" : "exit"}
              variants={subMenuAnimate}
            >
              <div className={styles["sub-menu-background"]} />
              <div className={styles["sub-menu-container"]}>
                <div className={styles["sub-menu-item"]}>
                  <Link href="/course/starter">
                    <a>Starter</a>
                  </Link>
                </div>
                <div className={styles["sub-menu-item"]}>
                  <Link href="/course/professional">
                    <a>Advanced</a>
                  </Link>
                </div>
                <div className={styles["sub-menu-item"]}>
                  <Link href="/course/options">
                    <a>Options</a>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.li>
          <motion.li variants={item}>
            <Link href="/#faqs">
              <a>FAQs</a>
            </Link>
          </motion.li>
        </ul>
        <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={styles["button"]}
          >
          <motion.button
            initial={{}}
            animate={contact ? {} : {}}
            transition={{
              duration: 1,
            }}
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles["talk-button"]}
          >
            <BsWhatsapp className=" mb-[0.125rem]" />
            <span>Contact</span>
          </motion.button>
        </a>
        {showMenu && <Menu onClose={() => setShowMenu(false)} />}
      </motion.nav>
      <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={styles["button"]}
          >

        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={contact ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          variants={item}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className={styles["talk-button-hidden"]}
          >
          <BsWhatsapp className=" mb-[0.125rem]" />
          <span>Contact</span>
        </motion.button>
          </a>
    </div>
  );
}

function Menu({ onClose }) {
  return (
    <motion.div
      variants={menu}
      initial="hide"
      animate="show"
      className={styles["menu"]}
    >
      <div className={styles["menu-close-wrapper"]} onClick={onClose}>
        <IoMdClose className={styles["menu-close-icon"]} />
      </div>
      <ul className={styles["menu-links-list"]} onClick={onClose}>
        <motion.li variants={menuItem}>
          <Link href="/about">
            <a>
              <FaBuilding
                className={styles["menu-item-icon"]}
                style={{ color: "#1963ed" }}
              />
              <span>About us</span>
            </a>
          </Link>
        </motion.li>
        <motion.li variants={menuItem}>
          <Link href="/#benefits">
            <a>
              <FaStar
                className={styles["menu-item-icon"]}
                style={{ color: "#f1b915" }}
              />
              <span>Benefits</span>
            </a>
          </Link>
        </motion.li>
        <motion.li variants={menuItem}>
          <Link href="/#memberships">
            <a>
              <FaAward
                className={styles["menu-item-icon"]}
                style={{ color: "#0bab2e" }}
              />
              <span>Memberships</span>
            </a>
          </Link>
        </motion.li>
        <motion.li variants={menuItem}>
          <Link href="/#faqs">
            <a>
              <FaQuestion
                className={styles["menu-item-icon"]}
                style={{ color: "#e71628" }}
              />
              <span>FAQs</span>
            </a>
          </Link>
        </motion.li>
        <motion.li variants={menuItem}>
          <Link href="/#community">
            <a>
              <BsPeopleFill
                className={styles["menu-item-icon"]}
                style={{ color: "#8117f3" }}
              />
              <span>Community</span>
            </a>
          </Link>
        </motion.li>
      </ul>
    </motion.div>
  );
}
