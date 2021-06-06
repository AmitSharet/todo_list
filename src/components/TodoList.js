import React from "react"
//import components
import Todo from "./Todo"

const TodoList = ({todos, setTodos}) => {
    return(
        <div className="todo-container">
        <ul className="todo-list">
          {todos.map((todo) => (
              <Todo text={todo.text} key={todo.id} todos={todos} setTodos={setTodos}//>
          ))}
            </ul> 
      </div>
    );
    /* Here we enter the Todos 
    for each todo in todos render a Todo*/
};

export default TodoList;

