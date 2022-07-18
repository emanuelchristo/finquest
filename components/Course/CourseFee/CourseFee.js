import Image from "next/image";
import React from "react";
import Button from "../common/Buttons/Button";
import styles from "../common/css/CourseFee.module.css";
import CoursePageData from "../data/CoursePageData";
import { useRouter } from "next/router";
const CourseFee = () => {
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
      <div className="margin">
        <div className="bg-lightblue rounded-3xl  p-16 lg:p-8 relative ">
          <div className=" grid grid-cols-2 grid-rows-2 justify-center items-center md:grid-cols-1 md:grid-rows-3 md:space-y-3 sm:p-3">
            <div className="row-span-2 md:flex md:flex-col md:justify-center md:items-center">
              <h2>Course Fee</h2>
              <p className="md:text-center">Tortor,ac enim aliquuam nibh tempus</p>
              <Button
                ButtonText="Enroll for &#8377;5999"
                IconName="card"
                BgColor="buttonyellow"
                TextColor="black"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 md:text-center space-x-2">
              <div>
                <h3 className="font-semibold text-2xl">4 Months</h3>
                <p>Duration</p>
              </div>
              <div>
                <h3 className="font-semibold text-2xl whitespace-nowrap">
              {data.emiavailable&&"EMI Available"}    
              {!data.emiavailable&&"EMI Not Available"}
                </h3>
                <p>Contact us</p>
              </div>
            </div>
            <div className="grid grid-rows-2 md:justify-center md:items-center">
              <div className="grid grid-cols-2 lg:grid-cols-1 md:space-y-4">
                <div className="flex md:justify-center md:items-center justify-start items-center md:space-x-3">
                  <div className="text-blue text-5xl font-bold leading-10 ">
                   {data.newprice}
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <span
                      className={`${styles.strikethrough} opacity-75 font-medium text-2xl`}
                    >
                     {data.oldprice}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start md:items-center">
                  <img
                    src={data.offerimageurl}
                    alt=""
                    width="78px"
                    height="27px"
                    className="imageclass"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-4xl font-semibold whitespace-nowrap mt-2">
                  (Including GST)
                </h3>
                <p className="md:text-center">Total price</p>
              </div>
            </div>
          </div>
          <img
            src="/icons/feearrow.svg"
            alt=""
            width={83}
            height={134}
            className="absolute top-0"
          />
          <img
            src="/icons/feearrow.svg"
            alt=""
            width={125}
            height="auto"
            className="absolute bottom-0 rotate-180 left-72 lg:right-0 lg:left-auto "
          />
        </div>
      </div>
    </>
  );
};

export default CourseFee;
