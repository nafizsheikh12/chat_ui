import React, { useState } from "react";
import { BsMenuButton } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import img from "../../assets/image/Michael_Corleone_Part_I.jpg";

const LeftSide = () => {
  const [open, setopen] = useState(false);
  const handleOpen = () => {
    setopen(!open);
    console.log("d");
  };
  return (
    <div className="relative col-span-12 md:col-span-4 lg:col-span-3">
      <BsMenuButton
        className="mb-2 block cursor-pointer text-[29px] md:hidden"
        onClick={handleOpen}
      />
      <div
        className={` left-0 top-0 z-9999 hidden w-full transition md:block md:opacity-100 ${
          open ? "z-[10000] !block w-full  bg-white opacity-100" : ""
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
          <div className="flex items-center gap-2 rounded-md bg-[#F4F4F4] px-3 py-2">
            <img src={img} className="h-10 w-10 rounded-full" />
            <p className="font-medium text-black">Ethan Anderson</p>
          </div>
          <div className="flex items-center gap-2  px-3 py-2">
            <img src={img} className="h-10 w-10 rounded-full" />
            <p className="font-medium text-black">Ethan Anderson</p>
          </div>
          <div className="flex items-center gap-2  px-3 py-2">
            <img src={img} className="h-10 w-10 rounded-full" />
            <p className="font-medium text-black">Ethan Anderson</p>
          </div>
          <div className="flex items-center gap-2  px-3 py-2">
            <img src={img} className="h-10 w-10 rounded-full" />
            <p className="font-medium text-black">Ethan Anderson</p>
          </div>
          <div className="flex items-center gap-2  px-3 py-2">
            <img src={img} className="h-10 w-10 rounded-full" />
            <p className="font-medium text-black">Ethan Anderson</p>
          </div>
          <div className="flex items-center gap-2  px-3 py-2">
            <img src={img} className="h-10 w-10 rounded-full" />
            <p className="font-medium text-black">Ethan Anderson</p>
          </div>
          <div className="flex items-center gap-2  px-3 py-2">
            <img src={img} className="h-10 w-10 rounded-full" />
            <p className="font-medium text-black">Ethan Anderson</p>
          </div>

          <div className="flex items-center gap-2  px-3 py-2">
            <img src={img} className="h-10 w-10 rounded-full" />
            <p className="font-medium text-black">Ethan Anderson</p>
          </div>
          <div className="flex items-center gap-2  px-3 py-2">
            <img src={img} className="h-10 w-10 rounded-full" />
            <p className="font-medium text-black">Ethan Anderson</p>
          </div>
          <div className="flex items-center gap-2  px-3 py-2">
            <img src={img} className="h-10 w-10 rounded-full" />
            <p className="font-medium text-black">Ethan Anderson</p>
          </div>

          <div className="flex items-center gap-2  px-3 py-2">
            <img src={img} className="h-10 w-10 rounded-full" />
            <p className="font-medium text-black">Ethan Anderson</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
