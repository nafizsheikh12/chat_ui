import React from "react";
import { BiPlus } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import Messages from "./messages";

const RightSide = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold text-black">
          Chat With Noah Martinez
        </h2>
        <div className="flex items-center gap-2 rounded-md border-[1px] border-[#aaaaaa2b] px-1.5 py-1.5 font-medium text-black">
          <BsFilter />
          Filter
        </div>
      </div>
      <div className="mt-5 rounded-lg border-[1px] border-[#aaaaaa2b]  pb-5 pl-5">
        <div className="messages-scroll relative mt-8 flex h-[610px] w-full  flex-col overflow-y-scroll">
          <div className="m-auto mb-12 w-fit rounded-3xl bg-[#F4F4F4] px-4 py-1 text-sm font-medium">
            <p>Wednesday, July 25th</p>
          </div>
          <Messages />
        </div>
        <div className="relative mt-9 w-full pr-5">
          <input
            type="text"
            placeholder="Message Noah Martinez"
            className="w-full rounded-lg  bg-[#F4F4F4] py-4 pl-3 pr-31 text-sm outline-none"
          />
          <div className="absolute top-[13px] right-[100px] rounded-full bg-white p-[6px]">
            <BiPlus className="text-black" />
          </div>
          <button className="absolute top-[10px] right-[32px] rounded-md bg-black px-3 py-1 text-white">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
