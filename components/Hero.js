import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import Link from "next/link";
import TypeAnimation from "react-type-animation";
import styles from "./hero.module.css";

const DELAY = 2500;

const anim = {
  scale: [1, 1, 1],
  y: [null, 20, -30],
  x: [null, 0, 0],
  rotate: [null, -10, 10],
  transition: { repeat: Infinity, repeatType: "reverse", duration: 4 },
};

export default function Hero() {
  return (
    <div className={styles["hero"]}>
      <div className={styles["heading-wrapper"]}>
        <h1>
          <motion.span
            viewport={{ once: true }}
            initial={{ y: 60, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { type: "spring", mass: 1.25, delay: 0.5 },
            }}
          >
            Stock market
          </motion.span>
          <motion.span
            viewport={{ once: true }}
            initial={{ y: 60, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { type: "spring", mass: 1.25, delay: 0.75 },
            }}
          >
            learning
            <motion.span
              viewport={{ once: true }}
              initial={{ scale: 0, opacity: 0, y: 30 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  mass: 1,
                  delay: 0.75,
                },
              }}
              className={styles["in-text-img"]}
            ></motion.span>{" "}
            for
          </motion.span>
          <motion.span
            viewport={{ once: true }}
            initial={{ y: 60, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { type: "spring", mass: 1.25, delay: 1 },
            }}
            className={styles["changing-text"]}
          >
            <TypeAnimation
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              sequence={[
                "everyone!",
                DELAY,
                "students",
                DELAY,
                "professionals",
                DELAY,
                "entrepreneurs",
                DELAY,
                "homemakers",
                DELAY,
                "veterans",
                DELAY,
              ]}
            />
          </motion.span>
        </h1>
        <div className={styles["twinkle-wrapper"]}>
          <motion.img
            viewport={{ once: true }}
            initial={{ scale: 0, rotate: -90 }}
            animate={{
              scale: 1,
              rotate: 20,
              transition: {
                type: "spring",
                mass: 1.5,
                delay: 1.8,
              },
            }}
            className={styles["twinkle-1"]}
            src="/images/twinkle.svg"
            width="40px"
            height="auto"
            alt=""
          />
          <motion.img
            viewport={{ once: true }}
            initial={{ scale: 0, rotate: 90 }}
            animate={{
              scale: 1,
              rotate: -20,
              transition: {
                type: "spring",
                mass: 1.5,
                delay: 2,
              },
            }}
            className={styles["twinkle-2"]}
            src="/images/twinkle.svg"
            width="40px"
            height="auto"
            alt=""
          />
        </div>
        <motion.div
          viewport={{ once: true }}
          initial={{ scale: 0, rotate: 100 }}
          animate={{
            scale: 1,
            rotate: -20,
            transition: {
              type: "spring",
              mass: 1.5,
              delay: 1.75,
            },
          }}
          className={styles["square"]}
        ></motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ scale: 0, x: -20 }}
          animate={{
            scale: 1,
            x: 0,
            transition: {
              type: "spring",
              mass: 1.5,
              delay: 1.5,
            },
          }}
          className={styles["circle"]}
        ></motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ scale: 0, rotate: 100 }}
          animate={{
            scale: 1,
            rotate: -20,
            transition: {
              type: "spring",
              mass: 1.5,
              delay: 1.25,
            },
          }}
          className={styles["circle-img-1"]}
        ></motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ scale: 0, rotate: 100 }}
          animate={{
            scale: 1,
            rotate: 15,
            transition: {
              type: "spring",
              mass: 1.5,
              delay: 1.5,
            },
          }}
          className={styles["circle-img-2"]}
        ></motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ scale: 0, rotate: -90 }}
          animate={{
            scale: 1,
            rotate: 20,
            transition: {
              type: "spring",
              mass: 1.5,
              delay: 1.5,
            },
          }}
          className={styles["pill-img-2"]}
        ></motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ scale: 0, rotate: -90 }}
          animate={{
            scale: 1,
            rotate: 20,
            transition: {
              type: "spring",
              mass: 1.5,
              delay: 2,
            },
          }}
          className={styles["pill-img-1"]}
        ></motion.div>
      </div>
      <motion.p
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            mass: 1,
            delay: 1.85,
          },
        }}
        className={styles["description"]}
      >
        The most affordable stock market learning platform that cares about you.
      </motion.p>
      <div className="flex items-center sm:flex-col sm:w-[65%]">
        <Link href="/#memberships" passHref>
          <motion.button
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: { type: "spring", mass: 1.15, delay: 1.5 },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles["talk-button"]}
          >
            <span>Start learning</span>
          </motion.button>
        </Link>
        <Link href="/#consultation" passHref>
          <motion.button
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: { type: "spring", mass: 1.15, delay: 1.65 },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles["consultation-button"]}
          >
            <span>Book a class</span>
            <IoIosArrowForward className={styles["consultation-icon"]} />
          </motion.button>
        </Link>
      </div>

      <img
        className={styles["hero-arrow"]}
        src="/icons/hero-arrow.svg"
        width={32}
        height="auto"
        alt=""
      />
    </div>
  );
}
