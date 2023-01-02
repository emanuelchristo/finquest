import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styles from "./faqs.module.css";

export default function Faqs() {
  const [faqs, setFaqs] = useState([
    
    {
      id: 2,
      open: false,
      question: "What is the zero-fee Challenge?",
      answer: ``,
    },
    {
      id: 3,
      open: false,
      question: "How to participate in the zero-fee challenge?",
      answer: ``,
    },
    {
      id: 4,
      open: false,
      question: "Is there any charge to participate in the zero-fee challenge?",
      answer: ``,
    },
    {
      id: 5,
      open: false,
      question: "Can the zero-fee challenge be stopped or cancelled? ( duration)",
      answer: ``,
    },
    {
      id: 1,
      open: false,
      question: "I have completed the zero-fee challenge. How do I download the certificate?",
      answer: ``,
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
