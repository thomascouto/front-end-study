import React, { ChangeEvent, useState } from "react";
import "../styles/SingleElement.css";
import recycle from "../assets/recycle.svg";
import editPen from "../assets/edit.svg";

function SingleElement({
  item,
  position,
  updateItemText,
  removeItem,
  handleTask,
}: SingleElementProps) {
  const [textStyle, setTextStyle] = useState<TextStyle>("text-normal");
  const [edit, setEdit] = useState<boolean>(false);

  const handleCheckBox = ({ target }: ChangeEvent<HTMLInputElement>) => {
    target.checked ? setTextStyle("text-line") : setTextStyle("text-normal");
    handleTask(position, target.checked);
  };

  const handleRemove = () => {
    removeItem(position);
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const handleBlur = ({
    target,
  }: React.FocusEvent<HTMLTextAreaElement, Element>) => {
    updateItemText(position, target.value);
    setEdit(false);
  };

  return (
    <div className="element-item radius">
      <input id="checkbox" type={"checkbox"} onChange={handleCheckBox} />
      {edit ? (
        <textarea
          rows={4}
          onBlur={handleBlur}
          onFocus={(e) => {
            e.target.selectionStart = e.target.textContent?.length as number;
            e.target.selectionEnd = e.target.textContent?.length as number;
          }}
          defaultValue={item.text}
          autoFocus
        />
      ) : (
        <p className={textStyle} onClick={handleEdit}>
          {item.text}
        </p>
      )}

      <img src={editPen} />
      <img src={recycle} onClick={handleRemove} />
    </div>
  );
}

export default SingleElement;
