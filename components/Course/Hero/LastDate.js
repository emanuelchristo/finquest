import React from "react";
import { useMediaQuery } from "usehooks-ts";
import CoursePageData from "../data/CoursePageData";
import {useRouter} from "next/router";
const LastDate = () => {
  const matches = useMediaQuery("(min-width:768px)");
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
  return (
    <>
    {matches && <span className="bg-lightgreen rounded-3xl px-5 py-4 my-10 md:flex md:justify-center md:items-center ">
      <span className="font-medium">Last date to apply</span>{" "}
      <span className="font-bold">29 June  <span className="font-extrabold"> - { " "}</span> </span> <span className="font-medium">Upcoming cohort-{" "}</span> 
      <span className="font-bold">1 July</span>
    </span>}
    {
      !matches && <div  className="bg-lightgreen rounded-3xl px-2 py-3 my-10 md:flex md:flex-col md:justify-center md:items-center " >
        <div className="font-medium">Last date to apply <span className="font-bold">- {data.lastdate}</span></div>
        <div className="font-medium">Upcoming cohort <span className="font-bold"> - {data.upcomingcohort}</span></div>
      </div>
    }
   
    
    </>
  );
};

export default LastDate;
