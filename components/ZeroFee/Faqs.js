import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styles from "./faqs.module.css";

export default function Faqs() {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      open: false,
      question: "What do we do?",
      answer: `We teach money management and stock market skills to everyone.`,
    },
    {
      id: 2,
      open: false,
      question: "Can stock trading be a career?",
      answer: `Stock Trading can be an excellent full-time profession as well as a business. More people are entering the Stock Market as full-time careers after realizing its potential.`,
    },
    {
      id: 3,
      open: false,
      question: "What are the benefits of stock market trading?",
      answer: `You will be Saving and Making money, earning dividends, being your own boss, with no middlemen, low fees and commissions, high returns, fast gains, an unconventional career, a smooth process, and many more.`,
    },
    {
      id: 4,
      open: false,
      question: "How much can I earn from the stock market?",
      answer: `There is no limit to how much you can earn from the Stock Market. It can be in thousands and even lakhs if you have the proper knowledge & expertise in technical indicators and your risk appetite.`,
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
        <div className={styles['tabs']}>
				
		</div>
        </div>
        <div className={styles["content"]}>
          {faqs
            .map((item) => (
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
