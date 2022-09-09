import React, { useState } from "react";
import "../styles/Form.css";
import { format } from "date-fns";

interface FormProps {
  addItem: (item: Item) => void;
}

const Form = ({ addItem }: FormProps) => {
  const [text, setText] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const send = () => {
    if (text.trim().length > 0 && date.length > 0) {
      addItem({ text, date, isChecked: false });
      setText("");
    }
  };

  const handleKeyboard = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === "Enter" && text.length > 0 && date.length > 0) send();
  };

  const handleDate = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setDate(format(new Date(target.value), "dd/MM/yyyy"));
  };

  return (
    <div className="form">
      <input
        className="grid-span"
        type={"text"}
        value={text}
        placeholder={"Insira uma nova atividade"}
        onChange={({ target }) => setText(target.value)}
        onKeyDown={handleKeyboard}
        required
        autoFocus
      />
      <input
        type={"text"}
        placeholder={"Insira a data limite para a atividade"}
        onChange={handleDate}
        required
      />
      <input type={"button"} onClick={send}></input>
    </div>
    // <div className="content-form">
    //   <input
    //     type={"text"}
    //     value={text}
    //     placeholder={"Insira uma nova atividade"}
    //     onChange={({ target }) => setText(target.value)}
    //     onKeyDown={handleKeyboard}
    //     required
    //     autoFocus
    //   />
    //   <input type={"date"} onChange={handleDate} required />
    //   <input type={"button"} onClick={send}></input>
    // </div>
  );
};

export default Form;
