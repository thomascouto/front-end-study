import React from "react";
import "../styles/CheckedTasks.css";

export const CheckedTasks = ({ arraySize, checkedItems }: CounterProps) => {
  return (
    <div className="counter">
      <h3>Tarefas concluídas</h3>
      <span className="checked-counter">
        {checkedItems} de {arraySize}
      </span>
    </div>
  );
};
