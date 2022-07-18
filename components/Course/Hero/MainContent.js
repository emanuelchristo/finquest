import React from 'react'
import { useRouter } from 'next/router'
import CoursePageData from "../data/CoursePageData"
const MainContent = () => {
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
             
    <div className='md:text-center md:flex md:flex-col md:justify-center md:items-center'>
              <h2 className='md:w-[12ch] w-[15ch] '>{data.title}</h2>
              <p className='w-[60ch] xl:w-[50ch] lg:[35ch] md:w[25ch] sm:w-[35ch]'>
                {data.description}
              </p>
            </div>
            </>
  )
}

export default MainContent