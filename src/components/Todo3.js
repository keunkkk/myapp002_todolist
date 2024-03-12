import React, { useContext } from "react";
import Label3 from "./Label3";
import { TodoContext } from "../contexts/TodoContext";

const Todo3 = () => {
  const { todos } = useContext(TodoContext);
  return (
    <>
      {todos.map((todo) => {
        return (
          <div className="todo" key={todo.id}>
            <Label3 todo={todo} />
          </div>
        );
      })}
    </>
  );
};

export default Todo3;
