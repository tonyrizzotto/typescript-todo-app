import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import { Todo } from './models/todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // grabs the new Todo Item
  const addTodoHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  // Delete a Todo from state
  const deleteTodoHandler = (id: string) => {
    // return a set of todos that filters out the clicked ID
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="app">
      <NewTodo addTodoHandler={addTodoHandler} />
      <TodoList items={todos} deleteTodoHandler={deleteTodoHandler} />
    </div>
  );
};

export default App;
