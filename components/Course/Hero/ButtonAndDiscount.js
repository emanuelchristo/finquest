import React from 'react'
import Button from '../common/Buttons/Button'
import styles from "../common/css/CourseFee.module.css";
const ButtonAndDiscount = () => {
  return (
    <div>
    <div className="flex md:flex-col md:justify-center md:items-center">
      <Button
        ButtonText="Enroll for &#8377; 5999"
        IconName="card"
        BgColor="buttonblue"
        TextColor="white"
      />
      <div className="flex flex-col items-center justify-center">
        <span
          className={`${styles.strikethrough} opacity-75 font-medium text-2xl`}
        >
          &#8377;8999
        </span>
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
  </div>
  )
}

export default ButtonAndDiscount