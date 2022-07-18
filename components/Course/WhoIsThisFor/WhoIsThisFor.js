import React from 'react'
import Button from '../common/Buttons/Button'
import FeaturesLayout from '../common/FeatureLayout/FeaturesLayout'
import { useRouter } from 'next/router'
import CoursePageData from '../data/CoursePageData'

const WhoIsThisFor = () => {
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
    <div className='margin'>
<div className='flex'>
    <h2 className='md:text-center'>Who is this for</h2>
    <img src="/images/sparkle.png" alt=""width="70px" height="50px" className='imageclass md:hidden'/>

</div>
    <Button ButtonText={`Enroll for ${data.newprice}`} IconName="card" BgColor="buttonyellow" TextColor="black"/>
    <FeaturesLayout indicator="whoisthisfor"/>
    </div>
    </>
  )
}

export default WhoIsThisFor