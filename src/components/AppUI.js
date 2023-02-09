import React from "react";

import { TodoContext } from "./TodoContext/TodoContext.js";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { Modal } from "./Modal";
import { TodoForm } from "./TodoForm";

function AppUI() {
  const { error, loading, searchedTodos, completeTodos, deleteTodos, openModal, setOpenModal } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      {" "}
      {/* Elemento invisible para empaquetar todos los elementos de un componente */}
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Error...</p>}
        {loading && <p>Cargando...</p>}
        {!loading && !searchedTodos.length && <p>Listo.</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
            <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };
