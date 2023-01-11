import styles from "./upcomingbatches.module.css";
import Link from "next/link";
import CoursePageData,{months,nth} from "../data/CoursePageData";
import {motion} from 'framer-motion'
import { useState ,useEffect} from "react";


// subcription-arrow

function waLink(msg) {
  let url = "https://api.whatsapp.com/send?";
  let params = new URLSearchParams("");
  params.append("phone", "918075145434");
  params.append("text", msg);
  return url + params.toString();
}
const UpcomingBatches = (courseid) => {
  const [data, setdata] = useState({});
  useEffect(() => {
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
  }, [courseid]);
  var deadline = new Date(data.deadline);
  var dd = String(deadline.getDate()).padStart(1, "0");
  var mm = String(deadline.getMonth()).padStart(1, "0");
  var yy = String(deadline.getFullYear()).padStart(4, "0");
  const card = [
    {
      type: "online",
      color:"green",
      week: "Weekday",
      days: "Mon, Tue & Fri",
      date: `${dd+nth(dd)} ${months[mm]} ${yy}`,
      from: "07:00 PM",
      to: "09:00 PM",
      status: "available",
    },
    {
      type: "online",
      color:"purple",
      week: "Weekend",
      days: "FRI, SAT & SUN",
      date: "16th Jan 2023",
      from: "10:00 AM",
      to: "03:00 PM",
      status: "available",
    },
  ];

  return (
    <>
      <div className="margin">
        <div className={styles.heading}>
          <h1>Upcoming Batches</h1>
          <p>
            We conduct offline and online classes, and updates for it are
            regularly posted. <br />
            Keep an eye on this section.
          </p>
        </div>
        <div className={styles.container}>
          {card.map((item, index) => {
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
