import React, { useState } from "react"
import "./App.css";
//components import
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("") //state of string
  const [todos, setTodos] = useState([]); //state of list
  return (
    <div className="App">
      <header>
      <h1>ToDo List</h1>
      
      </header>
      <Form  inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
     <TodoList todos={todos}/>
    </div>
  );
}

export default App;
