import React, { ChangeEvent, useState } from "react";
import "../styles/SingleElement.css";
import recycle from "../assets/recycle.svg";

type TextStyle = "text-normal" | "text-line";

function SingleElement({ item, position, removeItem }: SingleElementProps) {
  const [textStyle, setTextStyle] = useState<TextStyle>("text-normal");

  const handleCheckBox = ({ target }: ChangeEvent<HTMLInputElement>) => {
    target.checked ? setTextStyle("text-line") : setTextStyle("text-normal");
  };

  return (
    <div className="element-item">
      <input type={"checkbox"} onChange={handleCheckBox} />
      <p className={textStyle}>{item.text}</p>
      <img src={recycle} onClick={() => removeItem(position)} />
    </div>
  );
}

export default SingleElement;
