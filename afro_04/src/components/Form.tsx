import React, { useEffect, useState } from "react";
import "../styles/Form.css";

const Form = ({ handleItem, editItem }: FormProps & EditItemProps) => {
  const [text, setText] = useState<string>("");
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    if (editItem) {
      setText(editItem.text);
      setDate(editItem.date);
    }
  }, [editItem]);

  const send = () => {
    if (text.trim().length > 0 && date.length > 0) {
      handleItem({
        id: Date.now(),
        text,
        date,
        isChecked: false,
        isOnEdit: false,
      });

      setText("");
      setDate("");
    }
  };

  return (
    <div className="form">
      <input
        className="grid-span"
        type={"text"}
        value={text}
        placeholder={"Insira uma nova atividade"}
        onChange={({ target }) => setText(target.value)}
        required
        autoFocus
      />
      <input
        type={"text"}
        placeholder={"Insira a data limite para a atividade"}
        value={date}
        onChange={({ target }) => setDate(target.value)}
        required
      />
      <input type={"button"} onClick={send}></input>
    </div>
  );
};

export default Form;
