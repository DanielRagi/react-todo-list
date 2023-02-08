import React from 'react';
import '../styles/TodoItem.css';

function TodoItem(props) {
    const onComplete = () => {
        alert('Ya completaste el TODO ' + props.text);
    };

    const onDelete = () => {
        alert('Borraste el TODO ' + props.text);
    };

    return(
        <li className={`${props.completed}`}>
            <span 
                className="check"
                onClick={onComplete}
            >
                ✅
            </span>
            <div className="text"><p>{props.text}</p></div>
            <div 
                className ="delete"
                onClick={onDelete}
            >
                <span>x</span>
            </div>
        </li>
    );
}

export { TodoItem };