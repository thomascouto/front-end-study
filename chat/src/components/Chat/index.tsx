import React from "react";
import Form from "../Input";
import ChatCell from "./ChatCell";

const Chat = () => {
  const [chat, setChat] = React.useState<ChatContent[]>([]);

  const pushMessage = (msg: ChatContent) => {
    setChat([...chat, msg]);
  };

  return (
    <div className="app">
      <section className="text-area">
        <ul>
          {chat?.map(({ name, text, time }, i) => (
            <li key={i}>
              <ChatCell name={name} text={text} time={time} />
            </li>
          ))}
        </ul>
      </section>
      <section>
        <Form
          chat={{
            pushMessage,
          }}
        />
      </section>
    </div>
  );
};

export default Chat;
