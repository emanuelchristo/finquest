import React, { useEffect } from "react";
import GrayWrapper from "../common/Wrappers/GrayWrapper";
const Container = ({ duration, title, content, color }) => {
  const [bgcolor, setbgcolor] = React.useState(color);
  useEffect(() => {
    if (color === "buttonblue") {
      setbgcolor("bg-buttonblue");
    }
    if (color === "buttongreen") {
      setbgcolor("bg-buttongreen");
    }
    if (color === "buttonpink") {
      setbgcolor("bg-buttonpink");
    }
    if (color === "buttonpurple") {
      setbgcolor("bg-buttonpurple");
    }
  }, [duration, title, content, color]);
  return (
    <GrayWrapper>
      <div
        className={`${bgcolor} text-white flex rounded-lg px-2 py-1 text-sm font-semibold max-w-fit`}
      >
        {duration}
      </div>
      <h3 className="font-semibold text-2xl">{title}</h3>
      <p className="w-[40ch] font-normal text-sm text-black md:w-[30ch]">
        {content}
      </p>
    </GrayWrapper>
  );
};

export default Container;
