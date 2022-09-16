import React from "react";

const Form = ({ chat }: FormProps) => {
  const [text, setText] = React.useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendText();
  };

  const handleSendMsg = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && text.trim().length > 0) {
      e.preventDefault();
      sendText();
    }
  };

  const sendText = () => {
    chat.pushMessage({ name: "Fake Name", text, time: "14:14" });
    setText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="input-form">
        <textarea
          className="input-form__input"
          placeholder="Message"
          value={text}
          onKeyDown={handleSendMsg}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button type={"submit"} className="input-form__button"></button>
      </form>
    </div>
  );
};

export default Form;
