import React from "react";
import Detail from "./Detail";
import Review from "./Review";
import { useRouter } from "next/router";
import styles from "./hero.module.css";
import CoursePageData from "../data/CoursePageData";
const DetailsAndReview = () => {
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
  return (
    <div>
      <div className={styles.details_review}>
        <div className={styles.details}>
          {data["details"]?.map((item, index) => {
            return (
              <>
                <Detail
                  key={index}
                  heading={item.heading}
                  content={item.content}
                />
                {data["details"] - 1 !== index && (
                  <div className={styles.separator}></div>
                )}
              </>
            );
          })}
        </div>
        <div className={styles.separator}></div>
        <Review />
      </div>
    </div>
  );
};

export default DetailsAndReview;
