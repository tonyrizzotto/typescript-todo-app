import React from 'react';
import { TodoListProps } from '../models/todo.model';
import './TodoList.css';

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>
            {todo.text}{' '}
            <button onClick={props.deleteTodoHandler.bind(null, todo.id)}>
              DELETE
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
