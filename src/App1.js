import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Input1 from "./components/input1";
import Todo1 from "./components/todo1";

function App1() {
  const inputRef = useRef("");

  const wrap = {
    with: "500px",
    border: "1px solid black",
    margin: "10px auto",
  };

  let boardList = [
    { id: 1, todoname: "운동하기", completed: 0 },
    { id: 2, todoname: "SNS꾸미기", completed: 1 },
    { id: 3, todoname: "사진정리하기", completed: 0 },
  ];

  const [todos, setTodos] = useState([...boardList]);
  const [input, setInput] = useState("");

  const handleChangeText = () => {
    setInput(document.querySelector("#work").value);
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, completed: todo.completed === 1 ? 0 : 1 }
          : todo;
      })
    );
  };

  const deleteTodo = (id) => {
    // alert(id);
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const insertTodo = (e) => {
    e.preventDefault(); //기본 이벤트 차단
    setTodos((prevState) => {
      return [
        ...prevState,
        { id: new Date().getTime(), todoname: input, completed: 0 },
      ];
    });
    setInput("");
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div className="App" style={wrap}>
      <h1>TODO LIST</h1>
      <Input1
        insertTodo={insertTodo}
        input={input}
        inputRef={inputRef}
        handleChangeText={handleChangeText}
      />

      <Todo1 todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App1;
