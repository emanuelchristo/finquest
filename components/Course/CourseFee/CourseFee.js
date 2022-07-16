import Image from "next/image";
import React from "react";
import Button from "../common/Buttons/Button";
import styles from "./CourseFee.module.css";
const CourseFee = () => {
  return (
    <>
      <div className="margin">
        <div className="bg-lightblue rounded-3xl  p-16 lg:p-8 relative ">
          <div className=" grid grid-cols-2 grid-rows-2 justify-center items-center md:grid-cols-1 md:grid-rows-3 md:space-y-3 sm:p-3">
            <div className="row-span-2 md:flex md:flex-col md:justify-center md:items-center">
              <h2>Course Fee</h2>
              <p>Tortor,ac enim aliquuam nibh tempus</p>
              <Button
                ButtonText="Enroll for &#8377;5999"
                IconName="card"
                BgColor="buttonyellow"
                TextColor="black"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 md:text-center">
              <div>
                <h3 className="font-semibold text-2xl">4 Months</h3>
                <p>Duration</p>
              </div>
              <div>
                <h3 className="font-semibold text-2xl whitespace-nowrap">
                  EMI Available
                </h3>
                <p>Contact us</p>
              </div>
            </div>
            <div className="grid grid-rows-2 md:justify-center md:items-center">
              <div className="grid grid-cols-2 lg:grid-cols-1">
                <div className="flex md:justify-center md:items-center">
                  <div className="text-blue text-5xl font-bold leading-10 ">
                    &#8377;5999
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <span
                      className={`${styles.strikethrough} opacity-75 font-medium text-2xl`}
                    >
                      &#8377;8999
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start md:items-center">
                  <img
                    src="/icons/50.png"
                    alt=""
                    width="78px"
                    height="27px"
                    className="imageclass"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-4xl font-semibold whitespace-nowrap">
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
