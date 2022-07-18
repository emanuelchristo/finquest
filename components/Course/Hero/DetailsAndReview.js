import React from "react";
import { AiFillStar } from "react-icons/ai";
import Detail from "./Detail";
import Review from "./Review";
import { useRouter } from "next/router";
import CoursePageData from "../data/CoursePageData";
const DetailsAndReview = () => {
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
    <div>
      
      <div className="flex space-x-16 md:grid md:space-x-0 md:space-y-3 xl:flex-wrap xl:space-y-5">
        

      <Review/>
        
      <div className="flex space-x-16 md:space-x-0 md:space-x-10 md:justify-center">

        {data["details"]?.map((item, index) => {
          return (
            <>
              <Detail
                key={index}
                heading={item.heading}
                content={item.content}
              />
              {data["details"]- 1 !== index && (
                <div className="w-2 border-r border-[#DCDCDC] h-12 flex items-center justify-center md:hidden "></div>
              )}
            </>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default DetailsAndReview;
