import React from "react";
import Button from "../common/Buttons/Button";
import FeaturesLayout from "../common/FeatureLayout/FeaturesLayout";
import { useRouter } from "next/router";
import CoursePageData from "../data/CoursePageData";

const WhoIsThisFor = () => {
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
      <div className="margin">
        <div className="flex">
          <h2 style={{ margin: "3rem 0" }}>Who is this program for ?</h2>
          <img
            src="/images/course/sparkle.png"
            alt=""
            style={{
              width: "85px",
              height: "100px",
            }}
          />
        </div>
        <Button
          ButtonText={`Enroll for ${data.newprice}`}
          IconName="card"
          BgColor="buttonyellow"
          TextColor="black"
        />
        <div style={{ marginBottom: "3rem" }}></div>
        <FeaturesLayout indicator="whoisthisfor" />
      </div>
    </>
  );
};

export default WhoIsThisFor;
