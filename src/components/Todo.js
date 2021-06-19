import React , { useState } from "react"
import TodoForm from './TodoForm';
import { TiEdit } from 'react-icons/ti';

const Todo = ({text, todo, todos, setTodos, updateTodo}) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
      });
    //events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    //filters only things that are not the deleted element

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
          id: null,
          value: ''
        });
      };
    
      if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
      }

    const completeHandler = () => {
        setTodos(
            todos.map((item) => {
            if(item.id===todo.id){
                return{
                    ...item,
                    completed: !item.completed,
                };
            }
            return item;
        })
        );
    };
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler}className="complete-btn" ><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
            <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
        </div>
    );
};

export default Todo