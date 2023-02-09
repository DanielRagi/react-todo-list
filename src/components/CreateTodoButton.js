import React from 'react';
import '../styles/CreateTodoButton.css'

function CreateTodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    }

    return(
        <div 
            className="button"
            onClick={onClickButton}
        >
            <span>+</span>
        </div>
    );
}

export { CreateTodoButton };