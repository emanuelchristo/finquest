import React from "react";
import GrayWrapper from "../common/Wrappers/GrayWrapper";
import Image from "next/image";
const Curriculum = () => {
  const data = [
    {
      imagepath: "/images/curiculum1.png",
      content: "Gravida nunc sed porta ultricies justo, ut.",
    },
    {
      imagepath: "/images/curiculum2.png",
      content:
        "Sed donec pellentesque enim felis mauris imperdiet turpis aliquam eu.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-5 margin">
      <Image src="/images/book.png" alt="" width="68px" height="68px" />
      <h2 className="md:text-center">Curriculum built by the best</h2>
      <div className="flex gap-5 flex-wrap justify-center items-center">
        {data.map((item, index) => {
          return (<div key={index}>
              <GrayWrapper>
                <img src={item.imagepath} alt="" width="24px" height="24px" />
                <div>{item.content}</div>
              </GrayWrapper>
            </div>
            
          );
        })}
      </div>
    </div>
  );
};

export default Curriculum;
