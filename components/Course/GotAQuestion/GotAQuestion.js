import React from "react";
import Button from "../common/Buttons/Button";
import Image from "next/image";
const GotAQuestion = () => {
  return (
    <>
    <div className="my-10">
    <div className="grid margin grid-cols-2 md:grid-cols-1 justify-center items-center space-x-16 md:space-x-0">
        <div className="grid space-y-2 md:row-start-2">
          <div className="md:flex md:items-center md:justify-center">
            <div className="relative top-3 right-4 md:hidden">
              <img
                src="/icons/questionicon.png"
                alt=""
                width="77px"
                height="52px"
              />
            </div>
            <h2 className="md:text-center">Got a question</h2>
          </div>
          <p className="md:text-center">
            We are happy to answer any questions you may have. Ask us anything
            about the mentorship programs, course structure or live trading
            sessions.
          </p>
          <div className="md:flex md:justify-center md:items-center">
            <Button
              ButtonText="Talk to us"
              IconName="whatsapp"
              BgColor="buttonblue"
              TextColor="white"
            />
          </div>
        </div>
        <div className="md:row-start-1 flex justify-center items-center md:mt-5">
          <img
            src="/images/question.png"
            alt=""
            width="478px"
            height="363px"
            className="md:h-56 md:w-auto"
          />
        </div>
      </div>
    </div>
     
    </>
  );
};

export default GotAQuestion;
