import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./rightSide";

const chatComponent = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-5 bg-white">
        <LeftSide />
        <div className="col-span-12 md:col-span-8 lg:col-span-9">
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default chatComponent;
