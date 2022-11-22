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
        <section className={styles.course_fee}>
          <h1>Get the offer while it lasts!</h1>
          <div className={styles.container}>
            <div className={styles.fee}>
              <h2>Webflow On-Demand Program Launch Offer (Save ₹1500)</h2>
              <div className={styles.price}>
                <div>
                  <h2>{data.newprice}</h2>
                  <div className={styles["cut-price-wrapper"]}>
                    {data.oldprice}
                  </div>

                  <img
                    src={data["offerimageurl"]}
                    alt=""
                    width="78px"
                    height="27px"
                    className="imageclass"
                  />
                </div>
                <h3>
                  (Including GST) <span>GST @ 18%</span>
                </h3>
              </div>
              <div className={styles.emi}>
                <div>
                  <h3>4 Months</h3>
                  <span>Duration</span>
                </div>
                <div>
                  <h3>
                    {data.emiavailable && "EMI Available"}
                    {!data.emiavailable && "EMI Not Available"}
                  </h3>
                  <span>Contact us</span>
                </div>
              </div>
            </div>
            <div className={styles.details}>
              <h3>Why should I choose...</h3>
              <ul>
                <li>Real-Time Trading Practice</li>
                <li>1:1 mentorship from Experts</li>
                <li>Real-Time Trading Practice</li>
                <li>1:1 mentorship from Experts</li>
                <li>Real-Time Trading Practice</li>
                <li>1:1 mentorship from Experts</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CourseFee;
