import styles from "./upcomingbatches.module.css";
import Link from "next/link";
import {motion} from 'framer-motion'
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
function waLink(msg) {
  let url = "https://api.whatsapp.com/send?";
  let params = new URLSearchParams("");
  params.append("phone", "918075145434");
  params.append("text", msg);
  return url + params.toString();
}
const UpcomingBatches = () => {
  const router = useRouter();
  const { courseid } = router.query;
  const data = [
    {
      type: "online",
      color:"green",
      week: "Weekday",
      days: "Mon, Tue & Fri",
      date: "January 10",
      from: "7:00 PM",
      to: "9:00 PM",
      status: "available",
    },
    {
      type: "online",
      color:"purple",
      week: "Weekend",
      days: "SAT & SUN",
      date: "January 14",
      from: "7:00 PM",
      to: "9:00 PM",
      status: "Soldout",
    },
  ];

  return (
    <>
      <div className="margin">
        <div className={styles.heading}>
          <h1>Upcoming Batches</h1>
          <p>
            We conduct offline and online classes, and updates for it are
            regularly posted. Keep an eye on this section.
          </p>
        </div>
        <div className={styles.container}>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <span style={{background:item.color=='green'?'#1BA93F':'#C141CC'}}>{item.type}</span>
                <div className={styles.week}>
                  <h2>{item.week}</h2>
                  <h4>{item.days}</h4>
                </div>
                <div className={styles.time}>
                  <h2>
                    <img src="/images/course/icons/calender.svg" alt="" />{" "}
                    {item.date}
                  </h2>
                  <h2>
                    <img src="/images/course/icons/clock.svg" alt="" /> {item.from} - {item.to}
                    
                  </h2>
                </div>
                <Link href={waLink(`I would like to join in ${courseid} course ${item.week} batch starting from ${item.date}`)}>
            <motion.button
            style={{opacity:item.status=='available'?'':'.5'}} disabled={item.status=='available'?0:1}
              whileHover={{ scale:item.status=='available'?1.05:1 }}
              whileTap={{ scale:item.status=='available'?0.95:1  }}
            >
              Join Now
             
            </motion.button>
            </Link>

              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default UpcomingBatches;