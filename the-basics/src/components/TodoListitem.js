import React from 'react';

function TodoListitem({ title }) {
    return (
        <li>
            <p><input type="checkbox" /> {title}</p>
        </li>
    );
}

export default TodoListitem;