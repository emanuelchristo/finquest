import React from 'react'
import GrayBox from './GrayBox';
import CoursePageData from '../data/CoursePageData';
import { useRouter } from 'next/router'
const Cards = () => {
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
  console.log(data[0]?.cards);

  return (
    <div className="flex space-x-6 md:flex-col md:space-x-0 md:space-y-6 md:justify-center md:items-center mb-10">
    {data["cards"]?.map((item, index) => {
      return (
        <GrayBox
          key={index}
          imagepath={item.imagepath}
          content1={item.content1}
          content2={item.content2}
        />
      );
    })}
  </div>
  )
}

export default Cards