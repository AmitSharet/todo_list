import React, { useState } from "react"
import "./App.css";
//components import
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("") //state of string
  const [todos, setTodos] = useState([]); //state of list
  const [status, setStatus] = useState("all") // state for filter with default value all
  return (
    <div className="App">
      <header>
      <h1>ToDo List</h1>
      
      </header>
      <Form  inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus}/>
     <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
