import React from 'react'
import GrayBox from './GrayBox';
const Cards = () => {
    const carddata = [
        {
          imagepath: "/icons/scholar.png",
          content1: "Zero fee",
          content2: "challenge",
        },
        {
          imagepath: "/icons/chart.png",
          content1: "Small group session",
          content2: "(1:5)",
        },
        {
          imagepath: "/icons/bulb.png",
          content1: "Live trading",
          content2: "flexible timing",
        },
      ];
  return (
    <div className="flex space-x-6 md:flex-col md:space-y-6 flex-wrap md:space-x-0 md:space-y-6 md:justify-center md:items-center">
    {carddata.map((item, index) => {
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