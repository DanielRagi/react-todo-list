import React from 'react';
import '../styles/TodoCounter.css';
import { TodoContext } from './TodoContext/TodoContext.js'

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);
    return (
        <h2 className="TodoCounter">HAS COMPLETADO <span>{completedTodos} DE {totalTodos}</span> TO-DO</h2>
    );
}

export { TodoCounter };