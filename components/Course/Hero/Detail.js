import React from "react";

const Detail = ({ heading, content }) => {
  return (
    <div>
      <div className="font-semibold text-xl whitespace-nowrap">{heading}</div>
      <div className="font-medium text-base text-lightblack whitespace-nowrap">
        {content}
      </div>
    </div>
  );
};

export default Detail;
