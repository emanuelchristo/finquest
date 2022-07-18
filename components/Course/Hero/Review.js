import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import CoursePageData from '../data/CoursePageData';
import { useRouter } from 'next/router'
const Review = () => {
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
    <div className='md:flex md:justify-center md:flex-col md:items-center'>
          <div className="font-medium text-base whitespace-nowrap">
            {data.review}
          </div>
          <div className="bg-green flex rounded-full w-16 p-2">
            <AiFillStar color="white" />
            <div className="text-white text-sm">{data.rating}</div>
          </div>
        </div>
  )
}

export default Review