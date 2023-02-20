import React from "react";
import Community from "./Community";
import Button from "../common/Buttons/Button";
import { useRouter } from "next/router";
import CoursePageData from "../data/CoursePageData";
const CommunityLayout = () => {
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
      <Community />
    </>
  );
};

export default CommunityLayout;
