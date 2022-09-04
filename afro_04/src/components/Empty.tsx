import React from "react";
import empty from "../assets/checklist.svg";
import "../styles/Empty.css";

function Empty() {
  return (
    <div className="empty-box">
      <img src={empty} />
      <p className="empty-text">
        Você não tem nenhuma tarefa no momento. Adicione novas tarefas para que
        elas sejam mostradas.
      </p>
    </div>
  );
}

export default Empty;
