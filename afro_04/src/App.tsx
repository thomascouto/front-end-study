import React from "react";
import { useState } from "react";
import Form from "./components/Form";
import Empty from "./components/Empty";
import check from "./assets/check.svg";
import SingleElement from "./components/SingleElement";
import "./styles/App.css";

const App = () => {
  const [list, setList] = useState<Item[]>([]);

  const removeItem = (n: number) => {
    setList(list.filter(({ text }) => text !== list[n].text));
  };

  const addItem = ({ text }: Item) => {
    setList((list) => [...list, { text }]);
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
            <h3>Tarefas concluídas</h3>
            {list.map((e, i) => (
              <SingleElement
                key={i}
                item={e}
                position={i}
                removeItem={removeItem}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default App;
