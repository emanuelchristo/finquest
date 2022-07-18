// import React from 'react'
// const Hero = () => {
//   return (<>
//     <div className="grid grid-cols-3">
//         <div className='col-span-2'>
//   <div className="bg-pink-400 text-white flex rounded-lg px-2 py-1 text-sm font-semibold max-w-fit">
//           BEGINNER
//         </div>

//         <img src="/images/heroimage.png" alt="" srcset="" />
//     </div>
//     <img src="/images/ad.png" alt="hero" className="hero-image" />
//     </>)
import React from "react";

import MainContent from "./MainContent";
import DetailsAndReview from "./DetailsAndReview";
import ButtonAndDiscount from "./ButtonAndDiscount";
import Cards from "./Cards";
import LastDate from "./LastDate";
import { useRouter } from "next/router";
import CoursePageData from "../data/CoursePageData";

const Hero = () => {
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
      <div className="grid grid-cols-3 margin space-x-12 space-y-10 md:auto-rows-max md:grid-cols-1">
        <div className="col-span-2 md:row-start-2 md:row-end-3 md:col-span-1 mt-10">
          <div className="grid grid-row-4 space-y-8">
            <div>
            <div className="bg-pink-400 text-white flex rounded-lg px-2 py-1 text-sm font-semibold max-w-fit">
                {data.toughness}
              </div>
            <MainContent/>
            </div>
           <DetailsAndReview/>
            <ButtonAndDiscount/>
            <div>
              <Cards/>
              <LastDate/>
            </div>
          </div>
        </div>
<div className="md:flex md:justify-center md:items-center pt-10">

        <img src="/images/heroimage.png" alt="" width={454} height={579} className="md:h-[234px] md:w-auto " />
</div>
      </div>
      <img src="/images/ad.png" alt="hero" className="my-10 md:my-0 md:mb-4" />
    </>
  );
};

export default Hero;
