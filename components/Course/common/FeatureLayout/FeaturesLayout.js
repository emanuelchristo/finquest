import styles from "./featurelayout.module.css";
import IconAndText from "../IconAndText/IconAndText";
import { useRouter } from "next/router";
import CoursePageData from "../../data/CoursePageData";
import React from "react";

export default function FeaturesLayout({ indicator }) {
  const router = useRouter();
  const { courseid } = router.query;
  const [data, setdata] = React.useState({});
  React.useEffect(() => {
    switch (courseid) {
      case "forex":
        setdata(CoursePageData.forex);
        break;
      case "professional":
        setdata(CoursePageData.professional);
        break;
      case "starter":
        setdata(CoursePageData.starter);
    }
  }, [courseid]);
  const [indicatord, setindicatord] = React.useState(indicator);
  console.log(data.whoisthisfor);
  return (
    <div id="benefits">
      <section className={styles["benefits"]}>
        <div className={styles["content-wrapper"]}>
          {indicatord === "whatyouwilllearn" &&
            data[`whatyouwilllearn`]?.map((item, index) => (
              <IconAndText
                key={index}
                iconLink={item.iconLink}
                title={item.title}
                body={item.body}
              />
            ))}
          {indicatord === "whoisthisfor" &&
            data[`whoisthisfor`]?.map((item, index) => (
              <IconAndText
                key={index}
                iconLink={item.iconLink}
                title={item.title}
                body={item.body}
              />
            ))}
        </div>
      </section>
    </div>
  );
}
