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
            <img
              className={styles["arrow-1"]}
              src="/images/course_fee-arrow.svg"
              width="140px"
              height="auto"
              alt=""
            />
            <img
              className={styles["arrow-2"]}
              src="/images/course_fee-arrow.svg"
              width="140px"
              height="auto"
              alt=""
            />

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
                <h3>
                  {data.emiavailable && "EMI Available"}
                  {!data.emiavailable && "EMI Not Available"}
                </h3>
                <span>Contact us</span>
              </div>
            </div>
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
              <h1>(Including GST)</h1>
              <span>Total price</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseFee;
