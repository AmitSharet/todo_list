import React from "react"
//import components
import Todo from "./Todo"

const TodoList = ({todos, setTodos, filteredTodos}) => {

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

    return(
        <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
              <Todo setTodos={setTodos}  text={todo.text} key={todo.id}  todo={todo} todos={filteredTodos} updateTodo={updateTodo} />
          ))}
            </ul> 
      </div>
    );
    /* Here we enter the Todos 
    for each todo in todos render a Todo*/
};

export default TodoList;

