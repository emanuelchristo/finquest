import { motion } from "framer-motion";
import styles from "./oursubscriptions.module.css";
import Link from "next/link";
import { Checkbox } from "@nextui-org/react";
import React from "react";
import { MdOutlineGroups } from "react-icons/md";


function waLink(msg) {
  let url = "https://api.whatsapp.com/send?";
  let params = new URLSearchParams("");
  params.append("phone", "918075145434");
  params.append("text", msg);
  return url + params.toString();
}
const CoursePageData = {
  professional: {
    default: {
      plan: "One Time",
      monthly: "9,900",
    },
    emi: [
      {
        id: 1,
        plan: "One Time",
        monthly: '9,900',
        price: '9,900',
        cutprice: '25,699',
        off: 62,
        mostenrolled: false,
      },
      {
        id: 2,
        plan: "One Month",
        monthly: "5300",
        price: '10,600',
        cutprice: '25,699',
        off: 59,
        mostenrolled: true,
      },
      {
        id: 3,
        plan: "Two Month",
        monthly: "3,740",
        price: '11,199',
        cutprice: '25,699',
        off: 56,
        mostenrolled: false,
      },
    ],
  },
  starter: {
    default: {
      plan: "One Time",
      monthly: "7,999",
    },
    emi: [
      {
        id: 1,
        plan: "One Time",
        monthly: "7,999",
        price: "7,999",
        cutprice: "15,499",
        off: 49,
        mostenrolled: false,
      },
      {
        id: 2,
        plan: "One Month",
        monthly: "4,350",
        price: "8,699",
        cutprice: "15,499",
        off: 44,
        mostenrolled: true,
      },
      {
        id: 3,
        plan: "Two Months",
        monthly: "3,070",
        price: "9,199",
        cutprice: "15,499",
        off: 41,
        mostenrolled: false,
      },
    ],
  },
};
const defaultval = {
  plan: "One Time",
  monthly: "",
};
const points = [
  "Real-Time Trading Practice",
  "1-on-1 Mentorship from Experts",
  "Live Class",
  "Malayalam & English",
  "Learn Anywhere",
  "Lifetime support",
  "Community Access",
  "Certificate of completion",
];

export default function OurSubscriptions(courseid) {
  const [data, setdata] = React.useState({});
  React.useEffect(() => {
    switch (courseid.courseid) {
      case "options":
        setdata(CoursePageData.options);
        break;
      case "professional":
        setdata(CoursePageData.professional);
        break;
      case "starter":
        setdata(CoursePageData.starter);
    }
  }, [courseid.courseid]);
  const [selected, setSelected] = React.useState([defaultval.plan]);
  const [price, setPrice] = React.useState();
  console.log(courseid);

  return (
    <div className="margin" id="oursubscription">
      <section className={styles["oursubscription"]}>
        <div className={styles.heading}>
          <span>PRICING</span>
          <h3>Our subscriptions fit your needs</h3>
          <p>
            Our pricing plans are designed to fit your study schedule, as well
            as your wallet.
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.details}>
            <h2>
              <span>⚡</span>Why should I choose...
            </h2>
            <ul>
              {points.map((item,index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.emi}>
            <div className={styles.options} id='subscriptionoptions'>
              <Checkbox.Group
                defaultValue={selected}
                value={selected}
                aria-label="checkbox"
                className={styles.checkgroup}
              >
                {data.emi
                  ? data.emi.map((item, index) => (
                      <div className={styles.card} key={index} onClick={() => {
                        setSelected([item.plan]), setPrice(item.monthly);
                      }}>
                        {item.mostenrolled ? <p>MOST ENROLLED</p> : ""}
                        <div className={styles.check}>
                          <Checkbox
                            id={item.id}
                            value={item.plan}
                            aria-label={item.plan}
                            isRounded
                            size="md"
                            color="success"
                            onChange={() => {
                              setSelected([item.plan]), setPrice(item.monthly);
                            }}
                          />
                          {item.plan} plan
                        </div>
                        <div className={styles.price}>
                          <h2>
                            ₹ {item.monthly} <span>/mo</span>
                          </h2>
                          <div>
                            <h4>₹{item.price}</h4>
                            <h5 className={styles["cut-price-wrapper"]}>
                              ₹{item.cutprice}
                            </h5>
                            <h6 className={styles.offprice}>
                              <img src="/images/course/offprice.svg"  alt="" />
                              <span>{item.off}% off</span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    ))
                  : null}
              </Checkbox.Group>
            </div>
            <div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Enroll"
              >
                <Link target='_blank' href={price!=null?waLink(`I would like to join the '${courseid.courseid} course' with ${selected} Plan`):'#oursubscription'}>
                
                {price!=null?`Pay ₹${price}`:'Select your plan'}
                </Link>
                
              </motion.button>
              <p>
                <MdOutlineGroups />
                600+ Learners already enrolled
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
