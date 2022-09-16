import React from "react";
import { useState } from "react";
import Form from "./components/Form";
import Empty from "./components/Empty";
import check from "./assets/check.svg";
import SingleElement from "./components/SingleElement";
import { dateFormatter } from "./util/dateUtil";
import { CheckedTasks } from "./components/CheckedTasks";
import "./styles/App.css";

const App = () => {
  const [list, setList] = useState<Item[]>([]);
  const [currentItem, setCurrentItem] = useState<Item | null>(null);
  const [checkedTasks, setCheckedTasks] = useState<number>(0);

  const handleItem = ({ id, text, date, isChecked }: Item) => {
    const index = list.findIndex((e) => e.id === id);
    if (index >= 0) {
      setList((list) => {
        list[index] = {
          id,
          text,
          date,
          isChecked,
          isOnEdit: false,
        };
        setCurrentItem(null);
        return list;
      });
    } else {
      setList((list) => [
        ...list,
        { id, text, date, isChecked: false, isOnEdit: false },
      ]);
    }
  };

  const removeItem = (id: number) => {
    setList((list) => list.filter((e) => e.id !== id));
  };

  const loadSingleItem = (id: number) => {
    const item = list[list.findIndex((e) => e.id == id)];

    item.isOnEdit = true;
    setCurrentItem(item);
  };

  const handleTask = (id: number, isChecked: boolean) => {
    let taskSum = 0;
    setList((list) =>
      list.map((e) => {
        if (e.id === id) {
          e.isChecked = isChecked;
          e.endDate = dateFormatter(Date.now(), "dd/MM/yyyy");
        }
        if (e.isChecked) taskSum += 1;
        setCheckedTasks(taskSum);

        return e;
      })
    );
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
        <Form handleItem={handleItem} editItem={currentItem} />
        {list.length === 0 ? (
          <Empty />
        ) : (
          <div className="elements-container">
            <CheckedTasks checkedItems={checkedTasks} arraySize={list.length} />
            {list.map((e) => (
              <SingleElement
                key={e.id}
                item={e}
                loadSingleItem={loadSingleItem}
                removeItem={removeItem}
                handleTask={handleTask}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default App;
