import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import img1 from "../../assets/image/Ellipse 14 (2).png";
import img2 from "../../assets/image/Ellipse 14 (3).png";
import img3 from "../../assets/image/Ellipse 14 (4).png";
import img4 from "../../assets/image/Ellipse 14 (5).png";
import ChatUser from "./ChatUser";

const LeftSide = ({ setopenConversation, openConversation }) => {
  const [open, setopen] = useState(false);
  const [id, setid] = useState("");
  const handleOpen = () => {
    setopen(!open);
    console.log("d");
  };
  const user = [
    {
      id: "1",
      text: "dsf",
      img: img1,
      name: "Alen Worker",
    },
    {
      id: "2",
      text: "fdsf",
      img: img2,
      name: "Smith Johnson",
    },
    {
      id: "3",
      text: "fdsf",
      img: img3,
      name: "David Worker",
    },
    {
      id: "4",
      text: "fdsf",
      name: "john smith",
      img: img4,
    },
  ];
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
          {user.map((val) => (
            <ChatUser
              setopenConversation={setopenConversation}
              openConversation={openConversation}
              val={val}
              id={id}
              setid={setid}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
