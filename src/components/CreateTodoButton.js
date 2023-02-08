import React from 'react';
import '../styles/CreateTodoButton.css'

function CreateTodoButton(props) {
    return(
        <div 
            className="button"
            onClick={() => {console.log("click")}}
        >
            <span>+</span>
        </div>
    );
}

export { CreateTodoButton };