/////////////////////////
// Todo List Interfaces//
/////////////////////////

// Describe a Todo
export interface Todo {
  id: string;
  text: string;
}

// Describes the Todo List Props on the TodoList component
export interface TodoListProps {
  items: {
    id: string;
    text: string;
  }[];
  deleteTodoHandler: (id: string) => void;
}

// describes a new Todo Item on the NewTodo component
export interface NewTodoProps {
  addTodoHandler: (text: string) => void;
}
