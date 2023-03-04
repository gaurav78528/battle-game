import React from "react";
import "../styles/Chat.module.css";
import { Window, MessageList, MessageInput } from "stream-chat-react";
const Chat = () => {
  return (
    <div>
      chat box
      <Window>
        <MessageList />
        <MessageInput />
      </Window>
    </div>
  );
};

export default Chat;
