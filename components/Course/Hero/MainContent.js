import React from "react";
import { useRouter } from "next/router";
import CoursePageData from "../data/CoursePageData";
import styles from "./hero.module.css";

const MainContent = () => {
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
    <>
      <div className={styles.maincontent}>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </>
  );
};

export default MainContent;
