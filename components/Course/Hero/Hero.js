import React from "react";
import MainContent from "./MainContent";
import DetailsAndReview from "./DetailsAndReview";
import ButtonAndDiscount from "./ButtonAndDiscount";
import Cards from "./Cards";
import { useRouter } from "next/router";
import CoursePageData from "../data/CoursePageData";
import styles from "./hero.module.css";

const Hero = () => {
  const router = useRouter();
  const { courseid } = router.query;
  const [data, setdata] = React.useState({});
  React.useEffect(() => {
    switch (courseid) {
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

  return (
    <>
      <div className={styles.course}>
        <div className={styles.content}>
          <div className={styles.toughness}>{data.toughness}</div>
          <MainContent />
          <DetailsAndReview />
          <ButtonAndDiscount />
          <Cards />
        </div>
        <div className={styles.image}>
          <img src="/images/course/hero-ameen.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default Hero;
