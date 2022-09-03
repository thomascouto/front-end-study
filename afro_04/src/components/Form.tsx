import React, { useState } from "react";
import "../styles/Form.css";

interface FormProps {
  addItem: (item: Item) => void;
}

const Form = ({ addItem }: FormProps) => {
  const [text, setText] = useState<string>("");

  const send = () => {
    if (text.trim().length > 0) {
      addItem({ text });
      setText("");
    }
  };

  const handleKeyboard = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === "Enter") send();
  };

  return (
    <div className="content-form">
      <input
        type={"text"}
        value={text}
        placeholder={"Insira uma nova atividade"}
        onChange={({ target }) => setText(target.value)}
        onKeyDown={handleKeyboard}
        required
        autoFocus
      />
      <input type={"button"} onClick={send}></input>
    </div>
  );
};

export default Form;
