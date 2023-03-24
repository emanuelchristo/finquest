import { motion } from "framer-motion";
import styles from "./features.module.css";
import CountUp, { useCountUp } from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const featuresItems = [
  {
    imageLink: "/images/features-icon-1.svg",
    title: 800,
    ext: "+",
    subtitle: "students & growing",
  },
  {
    imageLink: "/images/features-icon-2.svg",
    title: 94,
    ext: "%",
    subtitle: "satisfaction rate",
  },
  {
    imageLink: "/images/features-icon-3.svg",
    title: 27,
    ext: "+",
    subtitle: "cities worldwide",
  },
];

export default function Features() {
  return (
    <div id="contact" className="margin">
      <section className={styles["features"]}>
        <div className={styles["heading-wrapper"]}>
          <h6>5200+ Hours of tutoring resulted in</h6>
        </div>
        <div className={styles["content-wrapper"]}>
          <div className={styles["features-content"]}>
            {featuresItems.map((item, index) => (
              <Item
                key={index}
                imageLink={item.imageLink}
                title={item.title}
                subtitle={item.subtitle}
                ext={item.ext}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
function Item({ imageLink, title, subtitle, ext }) {
  return (
    <div>
      <img src={imageLink} alt="" />

      <VisibilitySensor delayedCall>
        {({ isVisible }) => (
          <h3>
            {isVisible ? (
              <CountUp end={title} duration={2.5} redraw={true} />
            ) : (
              0
            )}
            {ext}
          </h3>
        )}
      </VisibilitySensor>

      <p>{subtitle}</p>
    </div>
  );
}
