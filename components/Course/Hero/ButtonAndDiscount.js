import React from 'react'
import Button from '../common/Buttons/Button'
import styles from "../common/css/CourseFee.module.css";
import CoursePageData from '../data/CoursePageData'
import { useRouter } from 'next/router'
const ButtonAndDiscount = () => {
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
    <div className="flex md:flex-col md:justify-center md:items-center space-x-3">
      <Button
        ButtonText={`Enroll for  ${data["newprice"]}`}
        IconName="card"
        BgColor="buttonblue"
        TextColor="white"
      />
      <div className="flex flex-col items-center justify-center">
        <span
          className={`${styles.strikethrough} opacity-75 font-medium text-2xl`}
        >
          {data["oldprice"]}
        </span>
      </div>
      <div className="flex flex-col justify-center items-start md:items-center">
        <img
          src={data["offerimageurl"]}
          alt=""
          width="78px"
          height="27px"
          className="imageclass"
        />
      </div>
    </div>
  </div>
  )
}

export default ButtonAndDiscount