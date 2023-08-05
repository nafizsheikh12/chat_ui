import React from "react";

const ChatUser = ({
  val,
  openConversation,
  id,
  setid,
  setopenConversation,
}) => {
  const handleid = () => {
    setid(val?.id);
    setopenConversation(true);
    console.log(setopenConversation);
    console.log(openConversation);
  };
  return (
    <div>
      <div
        onClick={handleid}
        className={`cursor-pointer rounded-md ${
          id === val?.id ? "bg-[#F4F4F4]" : ""
        } px-3  py-2`}
      >
        <div className="flex items-center gap-2 ">
          <img src={val?.img} className="h-10 w-10 rounded-full" />
          <div>
            <p className="font-medium text-black">{val?.name}</p>
            <div className="flex gap-2 text-sm">
              <p>how are you</p>
              <p>12:14 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatUser;
