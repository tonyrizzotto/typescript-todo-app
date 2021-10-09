import React, { useRef } from 'react';
import { NewTodoProps } from '../models/todo.model';
import './NewTodo.css';

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Handles Form Submission and sends data back to the App Component
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    if (enteredText === '') {
      alert('You must enter a task');

      inputRef.current!.focus();
      return;
    }
    props.addTodoHandler(enteredText);
    // clear input on submission
    inputRef.current!.value = '';
    inputRef.current!.focus();
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-input">New Todo: </label>
        <input
          id="todo-input"
          ref={inputRef}
          type="text"
          placeholder="enter new task"
        />
      </div>
      <button type="submit">CREATE</button>
    </form>
  );
};

export default NewTodo;
