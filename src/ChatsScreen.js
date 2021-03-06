import { Avatar, Button, Input } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatsScreen.css";

const ChatsScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "data:image/jpeg;base64,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",
      message: "whats up",
    },
    {
      name: "justine",
      image:
        "data:image/jpeg;base64,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",
      message: "fine",
    },
    {
      message: "hmm",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatsScreen">
      <p className="ChatScreen__timestamp">
        You Matched With Ellen On 10/10/21
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="ChatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="ChatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="type a message"
          type="text"
        />
        <button onClick={handleSend} className="chatScreen__inputButton">
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatsScreen;
