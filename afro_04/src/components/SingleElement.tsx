import React, { ChangeEvent, useState } from "react";
import "../styles/SingleElement.css";
import recycle from "../assets/recycle.svg";

type TextStyle = "text-normal" | "text-line";

function SingleElement({ item, position, removeItem }: SingleElementProps) {
  const [textStyle, setTextStyle] = useState<TextStyle>("text-normal");
  const [edit, setEdit] = useState<boolean>(false);

  const handleCheckBox = ({ target }: ChangeEvent<HTMLInputElement>) => {
    target.checked ? setTextStyle("text-line") : setTextStyle("text-normal");
  };

  const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    removeItem(position);
  };

  const handleEdit = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    setEdit(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement, Element>) => {
    console.log(e.target.value);
    setEdit(false);
  };

  return (
    <div className="element-item">
      <input type={"checkbox"} onChange={handleCheckBox} />
      {edit ? (
        <textarea
          rows={4}
          onBlur={handleBlur}
          defaultValue={item.text}
          autoFocus
        />
      ) : (
        <p className={textStyle} onClick={handleEdit}>
          {item.text}
        </p>
      )}

      <img src={recycle} onClick={handleClick} />
    </div>
  );
}

export default SingleElement;
