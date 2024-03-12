import Leact from "react";

const Label1 = (props) => {
  const { todo, updateTodo, deleteTodo } = props;
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

export default Label1;
