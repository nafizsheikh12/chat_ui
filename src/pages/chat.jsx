import React from "react";
import ChatComponent from "../components/chat/chatComponent";
import DefaultLayout from "../layout/DefaultLayout";

const chat = () => {
  return (
    <div>
      <DefaultLayout>
        <ChatComponent />
      </DefaultLayout>
    </div>
  );
};

export default chat;
