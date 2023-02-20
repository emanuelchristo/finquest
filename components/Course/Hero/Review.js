import React from "react";
import { AiFillStar } from "react-icons/ai";
import CoursePageData from "../data/CoursePageData";
import { useRouter } from "next/router";
import styles from "./hero.module.css";
const Review = () => {
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
    <div className={styles.review}>
      <h3>{data.review}</h3>
      <div>
        <AiFillStar color="white" />
        <span>{data.rating}</span>
      </div>
    </div>
  );
};

export default Review;
