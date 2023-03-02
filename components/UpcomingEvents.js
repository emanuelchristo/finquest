import styles from "./upcomingbatches.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
function waLink(msg) {
  let url = "https://api.whatsapp.com/send?";
  let params = new URLSearchParams("");
  params.append("phone", "918075145434");
  params.append("text", msg);
  return url + params.toString();
}
const UpcomingEvents = () => {
  const data = [
   
    {
      imageUrl: "/images/Q&A.png",
      date: "17 MARCH",
      from: "08:30 PM",
      to: "9:30 PM",
      title: "Q&A With Noel & Afsal",
    },
    {
      imageUrl: "/images/Office-Hours.png",
      date: "24 MARCH",
      from: "08:30 PM",
      to: "9:30 PM",
      title: "Office Hours With Noel",
    },
    {
      imageUrl: "/images/Q&A.png",
      date: "31 MARCH",
      from: "08:30 PM",
      to: "9:30 PM",
      title: "Q&A With Noel & Afsal",
    },
  ];

  return (
    <>
      <div className="margin" id="upcomingevents">
        <div className={styles.heading}>
          <h1>Upcoming Events</h1>
          <p>
          We conduct a lot of workshops, demo classes and other events. There is always something new for you to learn.
          </p>
        </div>
        <div className={styles.container}>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <div
                  className={styles.image}
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                >
                  <span>FREE</span>
                </div>
                <div className={styles.time}>
                  <span>{item.date}</span>
                  <span>
                    {item.from} - {item.to}
                  </span>
                </div>
                <h2>{item.title}</h2>
                <Link
                  target="_blank"
                  href={waLink(`${item.title} : ${item.date}`)}
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={styles.button}
                  >
                    Book a seat
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
export default UpcomingEvents;
