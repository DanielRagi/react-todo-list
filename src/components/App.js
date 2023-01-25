import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import '../styles/App.css';

const todos = [
  { text: "Recibir clase 1", completed: false },
  { text: "Ir al gimnasio", completed: false },
  { text: "Entregar libro en biblioteca", completed: false },
];

function App() {
  return (
    <React.Fragment>    {/* Elemento invisible para empaquetar todos los elementos de un componente */}
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
