import React from 'react'
import Community from "./Community";
import Button from '../common/Buttons/Button';
import { useRouter } from 'next/router'
import CoursePageData from '../data/CoursePageData'
const CommunityLayout = () => {
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

        <Community />
        <div className="margin">

        <div className="flex justify-center items-center my-10">

        <Button
            ButtonText={`Enroll for ${data.newprice}`}
            IconName="card"
            BgColor="buttonyellow"
            TextColor="black"
          />
        </div>
        </div>
    </>
  )
}

export default CommunityLayout