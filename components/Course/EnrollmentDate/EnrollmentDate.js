import styles from "./enrollmentdate.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import CoursePageData, { months, nth } from "../data/CoursePageData";

export default function EnrollmentDate({ sheetdata }) {
  const router = useRouter();
  const { courseid } = router.query;
  const [data, setdata] = useState({});


  useEffect(() => {
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
  var deadline = new Date(sheetdata.start_date ?? data.deadline);
  var startdate = new Date(sheetdata.start_date ?? data.deadline);
  deadline.setDate(deadline.getDate() - 1);
  var ddd = String(deadline.getDate()).padStart(1, "0");
  var dmm = String(deadline.getMonth()).padStart(1, "0");
  var dyy = String(deadline.getFullYear()).padStart(4, "0");
  var sdd = String(startdate.getDate()).padStart(1, "0");
  var smm = String(startdate.getMonth()).padStart(1, "0");
  var syy = String(startdate.getFullYear()).padStart(4, "0");
  return (
    <div className="margin" id="enrollmentdate">
      <section className={styles["enrollmentdate"]}>
        <div>
          <h2>ENROLLMENT DEADLINE</h2>
          <p>
            {ddd + nth(ddd)} {months[dmm]} {dyy}
          </p>
        </div>
        <div>
          <h2>Cohort Starts on</h2>
          <p>
            {sdd + nth(sdd)} {months[smm]} {syy}
          </p>
        </div>
      </section>
    </div>
  );
}
