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

  const handleItem = ({ text, date, isChecked, index }: Item) => {
    if ((index as number) >= 0) {
      setList((list) => {
        const newItem: Item = {
          text,
          date,
          isChecked,
          index,
          isOnEdit: false,
        };

        list[index as number] = newItem;
        setCurrentItem(null);
        return list;
      });
    } else {
      setList((list) => [
        ...list,
        { text, date, isChecked: false, isOnEdit: false },
      ]);
    }
  };

  const removeItem = (n: number) => {
    setList((list) => list.filter((e, i) => n !== i));
  };

  const loadSingleItem = (n: number) => {
    const item = list[n];
    item.isOnEdit = true;
    item.index = n;
    setCurrentItem(item);
  };

  const handleTaskCheck = (n: number, isChecked: boolean) => {
    let taskSum = 0;
    setList((list) =>
      list.map((e, i) => {
        if (i === n) {
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
            {list.map((e, i) => (
              <SingleElement
                key={i}
                item={e}
                index={i}
                loadSingleItem={loadSingleItem}
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
