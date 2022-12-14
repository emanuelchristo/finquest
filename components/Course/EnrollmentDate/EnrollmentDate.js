import styles from "./enrollmentdate.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import CoursePageData from "../data/CoursePageData";

export default function EnrollmentDate() {
  const router = useRouter();
  const { courseid } = router.query;
  const [data, setdata] = useState({});
  useEffect(() => {
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
    <div className="margin" id="enrollmentdate">
      <section className={styles["enrollmentdate"]}>
        <div>
          <h2>ENROLLMENT DEADLINE</h2>
          <p>{data.deadline}</p>
        </div>
        <div>
          <h2>Cohort Starts on</h2>
          <p>{data.startdate}</p>
        </div>
      </section>
    </div>
  );
}
