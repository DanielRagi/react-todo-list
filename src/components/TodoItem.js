import React from 'react';
import '../styles/TodoItem.css';

function TodoItem(props) {
    return(
        <li className={`${props.completed}`}>
            <span className="check">✅</span>
            <div><p>{props.text}</p></div>
            <span>X</span>
        </li>
    );
}

export { TodoItem };