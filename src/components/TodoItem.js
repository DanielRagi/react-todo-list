import React from 'react';
import '../styles/TodoItem.css';

function TodoItem(props) {
    return(
        <li className={`${props.completed}`}>
            <span 
                className="check"
                onClick={props.onComplete}
            >
                ✅
            </span>
            <div className="text"><p>{props.text}</p></div>
            <div 
                className ="delete"
                onClick={props.onDelete}
            >
                <span>x</span>
            </div>
        </li>
    );
}

export { TodoItem };