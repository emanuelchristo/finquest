import { HiPhone } from "react-icons/hi";
import { MdMail } from "react-icons/md";
import { motion } from "framer-motion";
import styles from "./features.module.css";

const featuresItems = [
  {
    imageLink: "/images/features-icon-1.svg",
    title: "600+",
    subtitle: "students & growing",
  },
  {
    imageLink: "/images/features-icon-2.svg",
    title: "94%",
    subtitle: "satisfaction rate",
  },
  {
    imageLink: "/images/features-icon-3.svg",
    title: "27+",
    subtitle: "cities worldwide",
  },
];

export default function Features() {
  return (
    <div id="contact" className="margin">
      <section className={styles["features"]}>
        <div className={styles["heading-wrapper"]}>
          <h6>4200+ Hours of tutoring resulted in</h6>
        </div>
        <div className={styles["content-wrapper"]}>
          <div className={styles["features-content"]}>
            {featuresItems.map((item, index) => (
              <Item
                key={index}
                imageLink={item.imageLink}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
function Item({ imageLink, title, subtitle }) {
  return (
    <div>
      <img src={imageLink} alt="" />
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
}
