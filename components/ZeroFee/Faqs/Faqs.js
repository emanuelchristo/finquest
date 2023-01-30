import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styles from "./faqs.module.css";

export default function Faqs() {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      open: false,
      question: "What is the zero-fee Challenge?",
      answer: `As the name suggests, with Zero Fees Challenge, you could possibly learn the Stock
      Market Mentorship program for Zero cost. Not to get confused, the programme has a
      fees. (Arguably the most affordable Stock market mentorship program in Kerala with the
      best course syllabus and expert mentors).
       Through this challenge, Finquest will help you regain the Fee amount you've invested in
learning, from the Stock Market itself. It's cent percent guaranteed, for we have the best
Community which will actively helps you understand the Market inside out. There will
also be Live Trading sessions from experts so you'll right away know which stock to
watch out.`,
    },
    {
      id: 2,
      open: false,
      question: "How to participate in the zero-fee challenge?",
      answer: `Participate in Finquest's Zero Fees challenge by simply joining a Stock Market
      Mentorship programme. Once enrolled, we shall continuously monitoring your progress.`,
    },
    {
      id: 3,
      open: false,
      question: "Is there any charge to participate in the zero-fee challenge?",
      answer: `There wont be any special charge for participating in the challenge other than the
      programme fees.`,
    },
    {
      id: 4,
      open: false,
      question:
        "I have completed the zero-fee challenge. How do I download the certificate?",
      answer: `Once you successfully complete the challenge, the certificate shall be send to you via
      the registered E-Mail.`,
    },
  ]);

  function handleClick(id) {
    let temp = faqs.map((item) => {
      if (item.id === id) return { ...item, open: !item.open };
      return { ...item, open: false };
    });
    setFaqs(temp);
  }

  return (
    <div id="faqs">
      <section className={styles["faqs"]}>
        <div className={styles["heading-wrapper"]}>
          <h2>FAQs</h2>
          <div className={styles["faqs-count"]}>{faqs.length}</div>
        </div>
        <div className={styles["tab-wrapper"]}>
          <div className={styles["tabs"]}></div>
        </div>
        <div className={styles["content"]}>
          {faqs.map((item) => (
            <Faq
              key={item.id}
              question={item.question}
              answer={item.answer}
              open={item.open}
              onClick={() => handleClick(item.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

const faqAnimation = {
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

function Faq({ question, answer, open, onClick }) {
  return (
    <div className={`${styles["faq"]} ${open ? styles["open"] : ""}`}>
      <div>
        <h3 className={styles["question"]}>{question}</h3>
        <AnimatePresence>
          {open && (
            <motion.p
              variants={faqAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              className={styles["answer"]}
            >
              {answer}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <div className={styles["arrow-wrapper"]} onClick={onClick}>
        <svg
          width="18"
          height="11"
          viewBox="0 0 18 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1.5L9 9.5L17 1.5" stroke="black" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}
