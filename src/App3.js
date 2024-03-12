import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { InputContext } from "./contexts/InputContext";
import Input3 from "./components/input3";
import Todo3 from "./components/Todo3";
import { TodoContext } from "./contexts/TodoContext";
/*
비동기 처리
AJAX, fetch, axios

axios설치
npm install axios

axios import
import axios from 'axios';

axios 동기화
async()=>{
    await axios.get().then().catch();
    console.log('program');
}

*/

/* 
1. Provider을 이용해서 상태값을 저장 한다.
<InputContext.Provider
value={{ insertTodo, input, inputRef, handleChangeText }}
>
<Input3 />
</InputContext.Provider>

<TodoContext.Provider value={(todos, updateTodo, deleteTodo)}>
<Todo3 />
</TodoContext.Provider> 
2. useContext(Context)을 이용해서 전역상태값을 사용한다.
  const { todos } = useContext(TodoContext);
  const { insertTodo, input, inputRef, handleChangeText } = useContext(InputContext);
  const { updateTodo, deleteTodo } = useContext(TodoContext);


*/

//전역상태관리 중에 하나인 Context API로 리펙토링
const App3 = () => {
  const inputRef = useRef("");

  const wrap = {
    with: "500px",
    border: "1px solid black",
    margin: "10px auto",
  };

  //   let boardList = [
  //     { id: 1, todoname: "운동하기", completed: 0 },
  //     { id: 2, todoname: "SNS꾸미기", completed: 1 },
  //     { id: 3, todoname: "사진정리하기", completed: 0 },
  //   ];

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleChangeText = () => {
    setInput(document.querySelector("#work").value);
  };

  const updateTodo = async (id) => {
    let completed = todos.filter((todo) => todo.id === id)[0].completed;
    await axios
      .put(`/todo/${id}/${completed}`)
      .then((response) => {
        console.log(response);
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTodo = async (id) => {
    await axios
      .delete(`/todo/${id}`)
      .then((response) => {
        console.log(response);
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      });
    // setTodos(
    //   todos.filter((todo) => {
    //     return todo.id !== id;
    //   })
    // );
  };

  const insertTodo = async (e) => {
    e.preventDefault();

    await axios
      .post("/todo", { todoname: input })
      .then((response) => {
        //console.log(response.data);
        getTodos();
        setInput("");
      })
      .catch();
  };

  const getTodos = async () => {
    await axios
      .get(`todo/all`)
      .then((response) => {
        //  console.log(response);
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTodos();
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div className="App" style={wrap}>
      <h1>TODO LIST</h1>
      <InputContext.Provider
        value={{ insertTodo, input, inputRef, handleChangeText }}
      >
        <Input3 />
      </InputContext.Provider>

      <TodoContext.Provider value={(todos, updateTodo, deleteTodo)}>
        <Todo3 />
      </TodoContext.Provider>
    </div>
  );
};

export default App3;
