import React, { ChangeEvent, useState } from "react";
import "../styles/card/SingleElement.css";
import "../styles/card/Icons.css";

function SingleElement({
  item,
  loadSingleItem,
  removeItem,
  handleTask,
}: SingleElementProps) {
  const [textStyle, setTextStyle] = useState<TextStyle>("text-normal");
  const [editStyle, setEditStyle] = useState<ElementEditStyle>({
    box: "border-normal",
    icon: "icon-normal",
  });

  React.useEffect(() => {
    if (item.isOnEdit) {
      setEditStyle({
        box: "border-edit",
        icon: "icon-edit",
      });
    } else {
      setEditStyle({
        box: "border-normal",
        icon: "icon-normal",
      });
    }
  }, [item.isOnEdit]);

  React.useEffect(() => {
    item.isChecked ? setTextStyle("text-line") : setTextStyle("text-normal");
  }, [item.isChecked]);

  const handleCheckBox = ({ target }: ChangeEvent<HTMLInputElement>) => {
    handleTask(item.id, target.checked);
  };

  const handleRemove = () => {
    removeItem(item.id);
  };

  const handleEdit = () => {
    loadSingleItem(item.id);
  };

  return (
    <div className={`element-item radius ${editStyle.box}`}>
      <input
        id="checkbox"
        type={"checkbox"}
        // eslint-disable-next-line react/no-unknown-property
        checked={item.isChecked}
        onChange={handleCheckBox}
      />
      <p className={textStyle}>{item.text}</p>
      <span
        className={`element-edit pointer ${editStyle.icon}`}
        onClick={handleEdit}
      />
      <span
        className={`element-delete pointer ${editStyle.icon}`}
        onClick={handleRemove}
      />

      <div className="element-dates item">
        <span
          className="element-end"
          style={{ display: item.isChecked ? "inline" : "none" }}
        >
          Finalizado em {item.endDate}
        </span>
        <span className="element-limit-date">até {item.date}</span>
      </div>
    </div>
  );
}

export default SingleElement;
