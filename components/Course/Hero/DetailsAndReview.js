import React from "react";
import { AiFillStar } from "react-icons/ai";
import Detail from "./Detail";
import Review from "./Review";
const DetailsAndReview = () => {
  const Detaildata = [
    {
      heading: "₹ 500",
      content: "Min Capital",
    },
    {
      heading: "Malayalam",
      content: "Language",
    },
    {
      heading: "1 month",
      content: "Duration",
    },
  ];
  return (
    <div>
      
      <div className="flex space-x-16 md:grid md:space-x-0 md:space-y-3 xl:flex-wrap xl:space-y-5">
        

      <Review/>
        
      <div className="flex space-x-16 md:space-x-0 md:flex-col md:text-center md:space-y-5 ">

        {Detaildata.map((item, index) => {
          return (
            <>
              <Detail
                key={index}
                heading={item.heading}
                content={item.content}
              />
              {Detaildata.length - 1 !== index && (
                <div className="w-2 border-r border-[#DCDCDC] h-12 flex items-center justify-center md:hidden "></div>
              )}
            </>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default DetailsAndReview;
