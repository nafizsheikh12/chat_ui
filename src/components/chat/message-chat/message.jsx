import React from "react";
import img from "../../../assets/image/Michael_Corleone_Part_I.jpg";

const message = ({ justify, text }) => {
  return (
    <div className={`flex  justify-${justify} pr-5`}>
      <div className="flex items-center gap-2">
        {justify === "start" && (
          <img src={img} className="h-7 w-7 rounded-full" />
        )}
        <div>
          <p
            className={`inline-block rounded-lg rounded-bl-none px-4 py-2 font-medium ${
              justify === "end"
                ? "bg-[#F5EED9] text-black"
                : "bg-[#E8DAF4] text-black"
            }`}
          >
            {text}
          </p>
          {justify === "start" && (
            <p className="ml-0.5 mt-0.5 text-[13px] text-[#8F8F8F]">
              Noah Martinez 9:08 AM
            </p>
          )}
          {justify === "end" && (
            <p className="ml-0.5 mt-0.5 text-[13px] text-[#8F8F8F]">9:08 AM</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default message;
