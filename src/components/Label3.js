import Leact, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const Label3 = (props) => {
  const { todo } = props;
  const { updateTodo, deleteTodo } = useContext(TodoContext);
  return (
    <>
      <h3>
        <label
          onClick={() => updateTodo(todo.id)}
          className={todo.completed === 1 ? "completed" : null}
        >
          {todo.todoname}
        </label>
        &nbsp;&nbsp;
        <button onClick={() => deleteTodo(todo.id)}>삭제</button>
      </h3>
    </>
  );
};

export default Label3;
