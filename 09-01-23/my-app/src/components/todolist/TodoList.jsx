import React, { useState } from "react";
import { Button } from "../button/Button";
import { Text } from "../text/Text";
import "./TodoList.css";
import { InputGroup } from "../input-group/inputGroup";

function TodoItem(props) {
  const { children, isDone, changeStatus, index } = props;
  /*   const [isDone, changeDone] = useState(false); non serve piu */

  function eventHandler() {
    changeStatus(index);
    console.log({ isDone }, `diventa: ${!isDone}`);
    /*   changeDone((lastValue) => !lastValue); */
  }

  return (
    <div className="lista">
      <Text as="h5">{children}</Text>
      <Button
        /* onClick={() => changeDone(true)} вариант со стрелочной функцией*/
        onClick={eventHandler}
        className={isDone ? "primary" : "secondary"}
      >
        {isDone ? "To be done" : "Done!"}
      </Button>
    </div>
  );
}

export function TodoList(props) {
  const [items, setItems] = useState([
    { label: `Fare la spesa`, isDone: false },
  ]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const formEl = e.target;
    const formData = new FormData(formEl);

    console.log(formData.get("taskName"));

    const label = formData.get("taskName");

    /* per aggiungere elementi */

    setItems((oldItems) => {
      const newItem = { label, isDone: false };
      return [...oldItems, newItem];
    });
  };

  const changeStatus = (index, currentStatus) => {
    console.log(`cambiando lo stato`);
    console.log(`elemento corrente`, index, items[index]);

    setItems((oldItems) => {
      const newItems = oldItems.concat([]);
      newItems[index].isDone = !currentStatus;
      return newItems;
    });
  };

  const Lista = items.map((item, index) => (
    <TodoItem
      key={index}
      index={index}
      isDone={item.isDone}
      changeStatus={changeStatus}
    >
      {item.label}
    </TodoItem>
  ));

  return (
    <div className="container-lista">
      <Text as="h2">To Do List</Text>

      <form onSubmit={formSubmitHandler}>
        <InputGroup label={`Nome task: `} name="taskName" />
      </form>

      {Lista}
    </div>
  );
}
