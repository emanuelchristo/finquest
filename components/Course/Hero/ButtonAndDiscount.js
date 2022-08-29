import React from "react";
import Button from "../common/Buttons/Button";
import CoursePageData from "../data/CoursePageData";
import { useRouter } from "next/router";
import styles from "./hero.module.css";

const ButtonAndDiscount = () => {
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
      <div className={styles.buttons_and_discount}>
        <Button
          ButtonText={`Enroll for  ${data["newprice"]}`}
          IconName="card"
          BgColor="buttonblue"
          TextColor="white"
        />
        <div>
          <span className={styles.strikethrough}>{data["oldprice"]}</span>
        </div>
        <div className="">
          <img
            src={data["offerimageurl"]}
            alt=""
            width="78px"
            height="27px"
            className="imageclass"
          />
        </div>
      </div>
    </>
  );
};

export default ButtonAndDiscount;
