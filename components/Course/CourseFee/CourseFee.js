import Image from "next/image";
import React from "react";
import Button from "../common/Buttons/Button";
// import styles from "../common/css/CourseFee.module.css";
import CoursePageData from "../data/CoursePageData";
import { useRouter } from "next/router";
import styles from "./course_fee.module.css";

const CourseFee = () => {
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
      <div className="margin">
        <div className={styles.course_fee}>
          <div className={styles.fee}>
            <h2>Course fee</h2>
            <p>Tortor, ac enim aliquam turpis nibh tempus.</p>
            <Button
              className={styles.button}
              ButtonText={`Enroll Now`}
              IconName="card"
              BgColor="buttonyellow"
              TextColor="black"
            />
          </div>
          <div className={styles.details}>
            <div>
              <div>
                <h3>4 Months</h3>
                <span>Duration</span>
              </div>
              <div>
                <h3>EMI Available</h3>
                <span>Contact us</span>
              </div>
            </div>
            <div>
              <div>₹5999------------------</div>
              <div>(Including GST)</div>
              <div>Total price</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseFee;
