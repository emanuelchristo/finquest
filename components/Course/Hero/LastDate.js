import React from "react";
import { useMediaQuery } from "usehooks-ts";
const LastDate = () => {
  const matches = useMediaQuery("(min-width:768px)");

  return (
    <>
    {matches && <span className="bg-lightgreen rounded-3xl px-5 py-4 my-10 md:flex md:justify-center md:items-center ">
      <span className="font-medium">Last date to apply</span>{" "}
      <span className="font-bold">29 June  <span className="font-extrabold"> - { " "}</span> </span> <span className="font-medium">Upcoming cohort-{" "}</span> 
      <span className="font-bold">1 July</span>
    </span>}
    {
      !matches && <div  className="bg-lightgreen rounded-3xl px-2 py-3 my-10 md:flex md:flex-col md:justify-center md:items-center " >
        <div className="font-medium">Last date to apply <span className="font-bold">- 29 June</span></div>
        <div className="font-medium">Upcoming cohort <span className="font-bold"> - 1 July</span></div>
      </div>
    }
   
    
    </>
  );
};

export default LastDate;
