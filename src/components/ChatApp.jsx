import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import Bot from "../assets/BotIcon.png"
import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";
const ChatApp = () => {

  const [chatHistory, setChatHistory] = useState([]);

  return (
    <div className="container flex justify-center items-center min-h-screen">
      <div className="chatbot-popup shadow-2xl ">
        {/* Header starts here */}
        <div className="chat-header">
          <div className="header-info">
           <img src ={Bot} alt="Icon" className="bg-[#008F96] rounded-full self-end p-1.5" />

            <h2 className="logo-text text-white text-xl font-bold">
              Ask anything
            </h2>
          </div>
          <button className=" rounded-sm h-10">
            <ChevronDownIcon size={25} color="white" />
          </button>
        </div>

        {/* Chat Box body starts here */}
        <div className="chat-body h-96 p-7 flex flex-col gap-4 ">
          <div className="message bot-message flex gap-1.5 items-center">
            <img src={Bot} alt="Icon" className="bg-[#008F96] rounded-full self-end p-1.5 w-10"  />
            <p className="message-text">Welcome 👋 How can we help you .</p>
          </div>
          {/* Render chat dynamically */}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>
        {/* Chat footer */}
        <div className="chat-footer">
          <ChatForm setChatHistory={setChatHistory} />
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
