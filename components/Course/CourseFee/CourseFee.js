import React from "react";
import Button from "../common/Buttons/Button";
// import styles from "../common/css/CourseFee.module.css";
import CoursePageData from "../data/CoursePageData";
import { useRouter } from "next/router";
import styles from "./course_fee.module.css";

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const CourseFee = () => {
  var today = new Date();
  today.setDate(today.getDate() + 1);
  var dd = String(today.getDate()).padStart(1, "0");
  var mm = String(today.getMonth()).padStart(2, "0");
  var yy = String(today.getFullYear()).padStart(2, "0");
  const router = useRouter();
  const { courseid } = router.query;
  const [data, setdata] = React.useState({});
  const [curriculum, setcurriculum] = React.useState();
  const [duration, setduration] = React.useState();
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
  }, [courseid, CoursePageData]);
  React.useEffect(() => {
    setcurriculum(data.curriculumbuiltbythebest);
    setduration(data.details);
  }, [courseid, data]);
  return (
    <>
      <div className="margin">
        <section id="EnrollNow" className={styles.course_fee}>
          <h1>Get the offer while it lasts!</h1>
          <div className={styles.container}>
            <div className={styles.fee}>
              <img src="/images/course/course-fee-arrow_1.svg" alt="" />
              <img src="/images/course/course-fee-arrow_2.svg" alt="" />
              <h2>{curriculum?.title}</h2>
              <div className={styles.price}>
                <div>
                  <h2>{data.newprice}</h2>
                  <div className={styles["cut-price-wrapper"]}>
                    {data.oldprice}
                  </div>

                  <div className={styles.offprice}>
                    <img src="/images/course/offprice.svg" alt="" />
                    <span>{data.offprice}% off</span>
                  </div>
                </div>
                <h3>
                  (Including GST) <span>GST @ 18%</span>
                </h3>
              </div>
              <div className={styles.emi}>
                <div>
                  <h3>{duration ? duration[2]?.heading : ""}</h3>
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
              <ul>
                <li>
                  <img
                    src={"/images/course/course-fee-list.svg"}
                    alt=""
                    width="15px"
                    height="15px"
                  />
                  {curriculum?.point} <br />
                </li>

                <li>
                  <img
                    src={"/images/course/course-fee-list.svg"}
                    alt=""
                    width="15px"
                    height="15px"
                  />
                  The launch offer expires tommorow, {months[mm]} {dd}, {yy}
                </li>
              </ul>

              <span>
                Note: No exceptions would be made beyond the offer expiry date.
                The prices would go up and no free bonuses
              </span>
              <div>
                <Button
                  className={styles.button}
                  ButtonText={`Enroll Now`}
                  IconName="card"
                  BgColor="buttonyellow"
                  TextColor="black"
                />
              </div>
            </div>
            <div className={styles.details}>
              <h3>Why should I choose...</h3>
              <ul>
                <li>Real-Time Trading Practice</li>
                <li>1-on-1 Mentorship from Experts</li>
                <li>Live Class</li>
                <li>Malayalam & English</li>
                <li>At the cost of pizza</li>
                <li>Learn Anywhere</li>
                <li>Lifetime support</li>
                <li>Community Access</li>
                <li>Certificate of completion</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CourseFee;
