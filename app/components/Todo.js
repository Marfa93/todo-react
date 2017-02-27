import React, { PropTypes } from 'react';

const Todo = ({ onClick, completed, text }) => (
    <li
        onClick={onClick}
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
        {text}
    </li>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.func.isRequired,
    text: PropTypes.func.isRequired
};

export default Todo;
