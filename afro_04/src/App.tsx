import React from "react";
import { useState } from "react";
import Form from "./components/Form";
import Empty from "./components/Empty";
import check from "./assets/check.svg";
import SingleElement from "./components/SingleElement";
import "./styles/App.css";

const App = () => {
  const [list, setList] = useState<Item[]>([]);
  const [doneTasks, setDoneTasks] = useState<number>(0);

  const addItem = ({ text, date }: Item) => {
    setList((list) => [...list, { text, date, isChecked: false }]);
  };
  const removeItem = (n: number) => {
    setList((list) => list.filter((e, i) => n !== i));
  };

  const updateItemText = (n: number, newValue: string) => {
    setList((list) => {
      list[n].text = newValue;
      return list;
    });
  };

  const handleTaskCheck = (n: number, isChecked: boolean) => {
    isChecked ? setDoneTasks(doneTasks + 1) : setDoneTasks(doneTasks - 1);
  };

  return (
    <main>
      <section>
        <div className="header">
          <img src={check} alt="(Check Icon)" />
          AfroToDo
        </div>
      </section>
      <section className="content">
        <Form addItem={addItem} />
        {list.length === 0 ? (
          <Empty />
        ) : (
          <div className="elements-container">
            <h3>
              Tarefas concluídas{" "}
              <span>
                {doneTasks} de {list.length}
              </span>
            </h3>
            {list.map((e, i) => (
              <SingleElement
                key={i}
                item={e}
                position={i}
                updateItemText={updateItemText}
                removeItem={removeItem}
                handleTask={handleTaskCheck}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default App;
