function TodoList(props) {

    return (
        <ul>
            {props.todos.map((toDo, index) => (
                <li key={index}>
                    <input className="checkbox" type="checkbox" id={index} checked={toDo.done}
                           onChange={() => props.onChange(index)}/> {toDo.text}
                </li>))
            }
        </ul>
    );
}

export default TodoList;