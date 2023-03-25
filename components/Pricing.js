import { BsFillCheckCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import styles from "./pricing.module.css";
import Link from "next/link";
import {FiChevronRight} from 'react-icons/fi'

const plans = [
  {
    id: "professional",
    imageLink: "/images/professional-plan.webp",
    planName: "Advanced",
    price: "12,599",
    cutPrice: "25,699",
    discount: "51% off",
    duration: "8 Weeks",
    features: [
      // 'Course duration - 1 month',
      "Intraday & Swing Trading",
      "Long term Investing",
      "Basics of FNO Segment",
      "Option Buying",
      "Option selling",
    ],
    tag: "Popular Program",
    tagColor: "#790DE5",
    message: "I would like to join the 'Professional' plan",
  },
  {
    id: "starter",
    imageLink: "/images/student-plan.webp",
    planName: "Starter",
    price: "8,999",
    cutPrice: "16,499",
    discount: "47% off",
    duration: "6 Week",
    color: "yellow",
    features: ["Intraday trading", "Swing trading", "Longterm Investing","Personal Finance"],
    tag: "Most Enrolled",
    tagColor: "#D22C2C",
    message: "I would like to join the 'Starter' plan",
  },
  {
    id: "forex",
    imageLink: "/images/options-trading-plan.webp",
    planName: "Forex Trading",
    price: "24,999",
    cutPrice: "29,999",
    discount: "18% off",
    duration: "12 Week",
    features: [
      "Stock Options",
      "Basics of forex market",
      "Institutional price action",
      "Intraday and Swing trading",
    ],
    message: "I would like to join the 'Forex trading' plan",
  },
];

export default function Pricing() {
  let max = 0;
  plans.forEach((e) => {
    if (e.features.length > max) {
      max = e.features.length;
    }
  });

  return (
    <div id="memberships" className="margin">
      <section className={styles["pricing"]}>
        <div className={styles["heading-wrapper"]}>
          <h2>Memberships</h2>
          <p>
            It&apos;s easy, it&apos;s comprehensive and best of all, it&apos;s
            here for a{" "}
            <span className=" font-medium text-gray-500 italic underline decoration-wavy underline-offset-2">
              lifetime!
            </span>
          </p>
        </div>
        <div className={styles["cards-wrapper"]}>
          {plans.map((item, index) => (
            <Card
              id={item.id}
              key={index}
              imageLink={item.imageLink}
              planName={item.planName}
              price={item.price}
              cutPrice={item.cutPrice}
              discount={item.discount}
              duration={item.duration}
              features={item.features}
              color={item.color}
              tag={item.tag}
              tagColor={item.tagColor}
              message={item.message}
              maxFeatLen={max}
            />
          ))}
          <div className={styles["twinkle-wrapper-1"]}>
            <img
              src="/images/twinkle.svg"
              alt=""
              width="50px"
              height="auto"
            ></img>
            <img
              src="/images/twinkle.svg"
              alt=""
              width="50px"
              height="auto"
            ></img>
          </div>
          <div className={styles["twinkle-wrapper-2"]}>
            <img
              src="/images/twinkle.svg"
              alt=""
              width="50px"
              height="auto"
            ></img>
            <img
              src="/images/twinkle.svg"
              alt=""
              width="50px"
              height="auto"
            ></img>
          </div>
        </div>

        <img
          className={styles["grid-pattern-1"]}
          src="/images/grid-pattern.svg"
          width="435px"
          height="auto"
          alt=""
        />
        <img
          className={styles["grid-pattern-2"]}
          src="/images/grid-pattern.svg"
          width="435px"
          height="auto"
          alt=""
        />

        <img
          className={styles["pricing-arrow"]}
          src="/images/pricing-arrow.svg"
          alt=""
        />
      </section>
    </div>
  );
}

function waLink(msg) {
  let url = "https://api.whatsapp.com/send?";
  let params = new URLSearchParams("");
  params.append("phone", "918075145434");
  params.append("text", msg);
  return url + params.toString();
}

function Card({
  id,
  imageLink,
  planName,
  price,
  cutPrice,
  discount,
  duration,
  features,
  color,
  tag,
  tagColor,
  message,
  maxFeatLen,
}) {
  return (
    <div id="membershipscards"
      className={`${styles["card"]} ${
        color === "yellow" ? styles["yellow-card"] : ""
      }`}
    >
      {tag && (
        <div className={styles["tag"]} style={{ backgroundColor: tagColor }}>
          {tag}
        </div>
      )}
      <div
        className={styles["image-container"]}
        style={{ backgroundImage: `url('${imageLink}')` }}
      ></div>
      <p className={styles["plan-name"]}>{planName}</p>
      <div className="flex items-center mb-2">
        <div className={styles["cut-price-wrapper"]}>₹{cutPrice}</div>
        <div className={styles["discount"]}>{discount}</div>
      </div>
      <div className={styles["price-wrapper"]}>
        <h3>₹{price}</h3>
        <span>{duration + " duration"}</span>
      </div>
      <ul
        style={{ height: String(maxFeatLen * 45) + "px" }}
        className={styles["features"]}
      >
        {features.map((item, index) => (
          <li key={index}>
            <BsFillCheckCircleFill className={styles["tick-icon"]} />{" "}
            <p>{item}</p>
          </li>
        ))}
      </ul>
      <a
        className={styles["action-link"]}
        href={waLink(message)}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Link href={`course/${id}/`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles["action-button"]}
          >
            Learn More&nbsp;&nbsp;<FiChevronRight/>
          </motion.button>
        </Link>
      </a>
      <span className={styles.money_back}>* 5 days money back guarantee</span>
    </div>
  );
}
