import { TodoList } from "./components/todolist/TodoList";
import { Text } from "./components/text/Text";
import "./App.css";
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <Text as="h2">To Do List</Text>
      <TodoList />
    </div>
  );
}

export default App;
