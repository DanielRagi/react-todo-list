import React from 'react';

import { TodoContext } from './TodoContext/TodoContext.js';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

function AppUI() {
    return (
        <React.Fragment>    {/* Elemento invisible para empaquetar todos los elementos de un componente */}
        <TodoCounter />
        <TodoSearch />

        <TodoContext.Consumer>
            {({ error, loading, searchedTodos, completeTodos, deleteTodos }) => (
                <TodoList>
                    {error && <p>Error...</p>}
                    {loading && <p>Cargando...</p>}
                    {(!loading && !searchedTodos.length) && <p>Listo.</p>}
        
                    {searchedTodos.map(todo => (
                    <TodoItem 
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodos(todo.text)}
                        onDelete={() => deleteTodos(todo.text)}
                    />
                    ))}
                </TodoList>
            )}
        </TodoContext.Consumer>

        <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI };