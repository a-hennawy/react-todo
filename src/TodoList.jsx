import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

import "./TodoList.css";

function TodoList() {
  const [todoList, setTodoList] = useState([]);

  const add = (newtTodoObj) => {
    setTodoList((todoList) => [...todoList, newtTodoObj]);
  };

  const todoComponents = todoList.map((todo) => (
    <ul>
      <Todo
        id={todo.id}
        key={todo.id}
        text={todo.text}
        priority={todo.priority}
      />
    </ul>
  ));
  return (
    <div className="todolist">
      <NewTodoForm createTodo={add} />
      {todoComponents}
    </div>
  );
}

export default TodoList;
