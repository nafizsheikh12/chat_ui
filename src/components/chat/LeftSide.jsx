import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import img from "../../assets/image/Michael_Corleone_Part_I.jpg";

const LeftSide = ({ setopenConversation, openConversation }) => {
  const [open, setopen] = useState(false);
  const handleOpen = () => {
    setopen(!open);
    console.log("d");
  };
  return (
    <div className="relative col-span-12 md:col-span-4 lg:col-span-3">
      <div
        className={`  z-9999  w-full transition md:block md:opacity-100 ${
          openConversation ? "hidden" : "z-[10000] !block w-full  "
        }`}
      >
        <h3 className="font-medium">Direct Messages</h3>
        <div className="relative my-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded bg-[#F4F4F4] px-9 py-2 text-[15px] outline-none"
          />
          <FiSearch className="absolute top-[11px] left-[8px] text-[19px] text-black" />
        </div>
        <div className="messages-scroll mt-8 flex h-[718px] flex-col gap-8 overflow-y-auto pr-[1px]">
          <div
            className=" rounded-md bg-[#F4F4F4] px-3  py-2"
            onClick={() => setopenConversation(1)}
          >
            <div className="flex items-center gap-2 ">
              <img src={img} className="h-10 w-10 rounded-full" />
              <div>
                <p className="font-medium text-black">Ethan Anderson</p>
                <div className="flex gap-2 text-sm">
                  <p>how are you</p>
                  <p>12:14 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
