import React from 'react';
import '../styles/TodoCounter.css';

function TodoCounter({ total, completed }) {
    return (
        <h2 className="TodoCounter">HAS COMPLETADO <span>{completed} DE {total}</span> TO-DO</h2>
    );
}

export { TodoCounter };