import React from "react";
import Button from "../common/Buttons/Button";
import Container from "./Container";
import Image from "next/image"
import CoursePageData from "../data/CoursePageData";
import { useRouter } from "next/router";
const HowWillYouSpent = () => {

  const router = useRouter();
  const { courseid } = router.query;
  const [data,setdata]=React.useState({});
  React.useEffect(()=>{
    switch(courseid){
      case "options":
        setdata(CoursePageData.options);
        break;
      case "professional":
        setdata(CoursePageData.professional);
        break;
       case "starter":
        setdata(CoursePageData.starter);
    }
  },[courseid]);
  console.log(data?.howwillyouspendyourtime)
  return (
    <>
      <div className="container flex flex-col items-center justify-center gap-6 margin">
        <Image src="/images/hourglass.png" alt="" width="62px" height="62px"/>
        <h2 className="text-center">How Will You spend Your Time</h2>
        <div className="grid grid-cols-2 gap-5 justify-center items-center sm:grid-cols-1">
          {data["howwillyouspendyourtime"]?.map((item, index) => {
            return (
              <Container
                key={index}
                duration={item.duration}
                title={item.title}
                content={item.content}
                color={item.color}
              />
            );
          })}
        </div>

        
          <Button
            ButtonText="curriculum"
            IconName="Book"
            BgColor="buttonblue"
            TextColor="white"
          />
        
      </div>
    </>
  );
};

export default HowWillYouSpent;
