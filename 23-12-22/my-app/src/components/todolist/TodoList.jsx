import React, { useState } from "react";
import { Button } from "../button/Button";
import { Text } from "../text/Text";

function TodoItem({ label }) {
  const [isDone, changeDone] = useState(false);

  console.log(label + " " + isDone);

  return (
    <div>
      <Text as="h5">{label}</Text>
      <Button
        onClick={() => changeDone(true)}
        className={isDone ? "primary" : "secondary"}
      >
        Done!
      </Button>
    </div>
  );
}

export function TodoList(props) {
  const items = [
    { label: "Eat", id: 1 },
    { label: "Sleap", id: 2 },
    { label: "Code", id: 3 },
    { label: "Drink", id: 4 },
    { label: "Rest", id: 5 },
    { label: "Repeat", id: 6 },
  ];

  return items.map((item) => <TodoItem label={item.label} key={item.id} />);
}
