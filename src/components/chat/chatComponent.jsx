import React, { useState } from "react";
import LeftSide from "./LeftSide";
import RightSide from "./rightSide";

const chatComponent = () => {
  const [openConversation, setopenConversation] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-12 gap-5 bg-white">
        <LeftSide
          openConversation={openConversation}
          setopenConversation={setopenConversation}
        />
        <div
          className={`col-span-12 ${
            openConversation ? "block" : "hidden md:block"
          } md:col-span-8 lg:col-span-9`}
        >
          <RightSide openConversation={openConversation} />
        </div>
      </div>
    </div>
  );
};

export default chatComponent;
