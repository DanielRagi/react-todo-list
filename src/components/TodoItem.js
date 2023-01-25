import React from 'react';
import '../styles/TodoItem.css';

function TodoItem(props) {
    return(
        <li className={props.completed}>
            <span className="check">✅</span>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    );
}

export { TodoItem };