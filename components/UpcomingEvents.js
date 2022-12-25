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
      imageUrl: "/images/poster_sample.jpeg",
      date: "26 DEC",
      from: "7:30 PM",
      to: "9:30 PM",
      title: "Q&A with Abdul Malik",
      link: "",
    },
    {
      imageUrl: "/images/poster_sample.jpeg",
      date: "26 DEC",
      from: "7:30 PM",
      to: "9:30 PM",
      title: "Q&A with Abdul Malik",
      link: "",
    },
    {
      imageUrl: "/images/poster_sample.jpeg",
      date: "26 DEC",
      from: "7:30 PM",
      to: "9:30 PM",
      title: "Q&A with Abdul Malik",
      link: "",
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
                <Link href={item.link}>
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
{
  /* <div >
                <div className={styles.image} style={{ backgroundImage: `url('/images/whyus3.png')` }}>
                  <span>FREE</span></div>
                <div className={styles.time}>
                  <span>26 DEC</span>
                  <span>7:30 PM - 9:30 PM</span>
                  </div>
                <h2 >Q&A with Abdul Malik</h2>
                <div className={styles.button}>Book a seat</div>
              </div>
              <div >
                <div className={styles.image} style={{ backgroundImage: `url('/images/whyus3.png')` }}>
                  <span>FREE</span></div>
                <div className={styles.time}><span>26 DEC</span><span>7:30 PM - 9:30 PM</span></div>
                <h2 >Q&A with Abdul Malik</h2>
                <div className={styles.button}>Book a seat</div>
              </div> */
}
