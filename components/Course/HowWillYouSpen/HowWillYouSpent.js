import React from "react";
import Button from "../common/Buttons/Button";
import Container from "./Container";
import Image from "next/image"
const HowWillYouSpent = () => {
  const data = [
    {
      duration: "4 Hours",
      title: "Live training",
      content: "Sem turpis dui id nunc. Cras et diam ullamcorper massa id enim. Quam sed massa tempus mattis.",
      color: "buttonblue",
    },
    {
      duration: "2 Weeks",
      title: "Q&A session",
      content: "Sem turpis dui id nunc. Cras et diam ullamcorper massa id enim. Quam sed massa tempus mattis.",
      color: "buttongreen",
    },
    {
      duration: "1 Month",
      title: "Community access",
      content: "Sem turpis dui id nunc. Cras et diam ullamcorper massa id enim. Quam sed massa tempus mattis.",
      color: "buttonblue",
    },
    {
      duration: "1 Month",
      title: "Audio rooms access",
      content: "Sem turpis dui id nunc. Cras et diam ullamcorper massa id enim. Quam sed massa tempus mattis.",
      color:'buttonyellow',
    },
  ];
  return (
    <>
      <div className="container flex flex-col items-center justify-center gap-6 ">
        <Image src="/images/hourglass.png" alt="" width="62px" height="62px"/>
        <h2 className="text-center">How Will You spend Your Time</h2>
        <div className="grid grid-cols-2 gap-5 justify-center items-center sm:grid-cols-1">
          {data.map((item, index) => {
            return (
              <Container
                key={index}
                duration={item.duration}
                title={item.title}
                content={item.content}
                color={item.color}
              />
            );
          })}
        </div>

        
          <Button
            ButtonText="curriculum"
            IconName="Book"
            BgColor="buttonblue"
            TextColor="white"
          />
        
      </div>
    </>
  );
};

export default HowWillYouSpent;
