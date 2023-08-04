import React from "react";
import Message from "./message-chat/message";

const Messages = () => {
  return (
    <div className=" w-full space-y-10">
      <Message justify={"start"} text="helo this is 3" />
      <Message justify={"end"} text="helo this is 3" />
      <Message justify={"start"} text="helo this is 3" />
      <Message justify={"start"} text="helo this is 3" />
      <Message justify={"start"} text="helo this is 3" />
      <Message justify={"start"} text="helo this is 3" />

      <Message justify={"start"} text="helo this is 3" />
      <Message justify={"start"} text="helo this is 3" />

      <Message justify={"start"} text="helo this is 3" />
      <Message justify={"start"} text="helo this is 3" />
      <Message justify={"start"} text="helo this is 3" />

      <Message justify={"end"} text="helo this is 3" />

      <Message justify={"start"} text="helo this is 3" />

      <Message justify={"start"} text="helo this is 3" />
      <Message justify={"start"} text="helo this is 3" />
    </div>
  );
};

export default Messages;
