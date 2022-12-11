import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styles from "./faqs.module.css";
import Tabs from "./Tabs";

export default function Faqs() {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      open: false,
      question: "What do we do?",
      answer: `We teach money management and stock market skills to everyone.`,
      tab: "general",
    },
    {
      id: 2,
      open: false,
      question: "Can stock trading be a career?",
      answer: `Stock Trading can be an excellent full-time profession as well as a business. More people are entering the Stock Market as full-time careers after realizing its potential.`,
      tab: "general",
    },
    {
      id: 3,
      open: false,
      question: "What are the benefits of stock market trading?",
      answer: `You will be Saving and Making money, earning dividends, being your own boss, with no middlemen, low fees and commissions, high returns, fast gains, an unconventional career, a smooth process, and many more.`,
      tab: "general",
    },
    {
      id: 4,
      open: false,
      question: "How much can I earn from the stock market?",
      answer: `There is no limit to how much you can earn from the Stock Market. It can be in thousands and even lakhs if you have the proper knowledge & expertise in technical indicators and your risk appetite.`,
      tab: "general",
    },
    {
      id: 5,
      open: false,
      question: "Will I get a certificate?",
      answer: `Of course, after the successful completion of the course and online test you are eligible to receive the certificate.`,
      tab: "general",
    },
    {
      id: 6,
      open: false,
      question:
        "Do I need to have some kind of Financial education background before enrolling in the course?",
      answer: `There are no prerequisites like having any financial background for enrollment on Finquest. Whether you are a homemaker or an experienced professional, looking to either pursue full-time trading, build a second source of income or grow your wealth. It is for anyone who wants to get hold of their financials. Finquest is just the right place to get started. It’s time all of us take charge of our finances.`,
      tab: "learning",
    },
    {
      id: 7,
      open: false,
      question: "Why understand personal finance?",
      answer: `The most important skills to build a future are taught outside of school. One of the most important aspects of a successful individual is managing money. Our comprehensive program will help you to achieve your financial goals.`,
      tab: "learning",
    },
    {
      id: 8,
      open: false,
      question: "Would I stop making losses after joining Finquest?",
      answer: `Even after joining Finquest, there is no guarantee that you would make consistent profits after applying your learnings in the live markets. After all, losses are part of the game too. All you need is a 'get up and learn from the mistakes' attitude to stay in the game.`,
      tab: "learning",
    },
    {
      id: 9,
      open: false,
      question: "I missed a session. Will I get a recording?",
      answer: `No Worries, in case you miss the Live Sessions, you can find Live Session Recordings on the Finquest portal. Please note: We will only be providing Recordings from Expert Analysts' sessions.`,
      tab: "learning",
    },
    {
      id: 10,
      open: false,
      question: "What are the timings of this course?",
      answer: `The classes will be conducted in the evening from 7 pm to 9 pm and on weekends.`,
      tab: "learning",
    },
    {
      id: 11,
      open: false,
      question: "What are the steps to enroll in this course?",
      answer: `Reserve your seat for the program from here.`,
      tab: "learning",
    },
    {
      id: 12,
      open: false,
      question: "Is it worth the price?",
      answer: `You know that most of the courses related to Stock market trading are charging a high amount of money. Our aim is to provide the best course at minimum cost which helps every common people to achieve financial freedom.`,
      tab: "payment",
    },
    {
      id: 13,
      open: false,
      question: "Why are we selling this course at the lowest price?",
      answer: `Finquest's primary objective is not to make a profit by selling courses, there is a social motive also behind this. You all know courses related to stock trading is highly expensive. Most people want to learn this high-income generating skill, but the high course fee is not easily affordable for a person coming from a middle-class family or a daily wage worker, our founders are also from a middle-class family. they struggled a lot and spent a lot of money to learn this skill during their early career, but most of the courses are conducted by scammers or it has a high price. They need to eliminate these types of scammers and our aim is to make you a better trader by spending less cost that you can afford`,
      tab: "payment",
    },
    {
      id: 14,
      open: false,
      question: "Can I avail EMI on Finquest courses?",
      answer: `Yes, no-cost EMI is available on all courses. Continue on the program page to see the options.`,
      tab: "payment",
    },
    {
      id: 15,
      open: false,
      question: "Can I get a refund if I cannot join the program?",
      answer: `You cannot get a refund once the payment is completed. We can shift you to a different batch, at your convenience. For further doubts, you can refer to our complete refund policy.`,
      tab: "payment",
    },
  ]);

  const [tab, setTab] = useState("general");

  function handleClick(id) {
    let temp = faqs.map((item) => {
      if (item.id === id) return { ...item, open: !item.open };
      return { ...item, open: false };
    });
    setFaqs(temp);
  }

  return (
    <div id="faqs" className="margin">
      <section className={styles["faqs"]}>
        <div className={styles["heading-wrapper"]}>
          <h2>FAQs</h2>
          <div className={styles["faqs-count"]}>{faqs.length}</div>
        </div>
        <div className={styles["tab-wrapper"]}>
          <Tabs
            tabs={[
              { title: "General", value: "general" },
              { title: "Learning", value: "learning" },
              { title: "Payment", value: "payment" },
            ]}
            selected={tab}
            onClick={setTab}
          />
        </div>
        <div className={styles["content"]}>
          {faqs
            .filter((item) => item.tab === tab)
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
