import { motion } from "framer-motion";
import styles from "./oursubscriptions.module.css";
import Link from "next/link";
import { Checkbox } from "@nextui-org/react";
import { useState } from "react";
import {MdOutlineGroups} from "react-icons/md"
const emi = [
  {
    id: 1,
    plan: "one time",
    price: 399,
    mostenrolled: false,
    default: true,
  },
  {
    id: 2,
    plan: "two time",
    price: 599,
    mostenrolled: true,
    default: false,
  },
  {
    id: 3,
    plan: "three time",
    price: 6999,
    mostenrolled: false,
    default: false,
  },
];
const points =['Real-Time Trading Practice',
'1-on-1 Mentorship from Experts',
'Live Class',
'Malayalam & English',
'Learn Anywhere',
'Lifetime support',
'Community Access',
'Certificate of completion']
export default function OurSubscriptions() {
  const [selected, setSelected] = useState([emi[0].plan]);
  const [price, setPrice] = useState([emi[0].price]);

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
              <span>⚡</span> What you get
            </h2>
            <ul>
              {points.map((item)=>(
              <li>{item}</li>
              ))}
              
            </ul>
          </div>
          <div className={styles.emi}>
            <div className={styles.options}>
              <Checkbox.Group
                
                value={selected}
                aria-label='checkbox'
                className={styles.checkgroup}
              >
                {emi.map((item, index) => (
                  <div className={styles.card} key={index}>
                  {item.mostenrolled ? <p>MOST ENROLLED</p> : ""}
                  <div className={styles.check}>
                    <Checkbox
                      id={item.id}
                      value={item.plan}
                      aria-label={item.plan}
                      isRounded
                      size="md"
                      color="success"
                      onChange={()=>{setSelected([item.plan]),setPrice(item.price)}}
                    />
                    One time plan
                  </div>
                  <div className={styles.price}>
                    <h2>
                    ₹{item.price} <span>/mo</span>
                    </h2>
                    <div>
                      <h4>₹7999</h4>
                      <h5 className={styles["cut-price-wrapper"]}>₹8999</h5>
                      <h6 className={styles.offprice}>
                        <img src="/images/course/offprice.svg" alt="" />
                        <span>10% off</span>
                      </h6>
                    </div>
                  </div>
                </div>
                ))}
              </Checkbox.Group>
            </div>
            <div>
              <motion.button  whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }} aria-label="Enroll">Pay ₹{price}</motion.button>
              <p><MdOutlineGroups/>
                1000+ Learners already enrolled</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


