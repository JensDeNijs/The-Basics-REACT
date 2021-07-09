function TodoList(props) {

    return (
        <div className="container-md ">
            <ul className="row-cols-1 pt-5">
                {props.todos.map((toDo, index) => (
                    <li key={index} className="col-10 offset-1 p-2 my-4">
                        <div>
                            <input className="checkbox form-check-input mx-2" type="checkbox" id={index}
                                   checked={toDo.done}
                                   onChange={() => props.onChange(index)}/>
                        </div>
                        <div>
                            {toDo.text}
                        </div>
                        <div>

                        </div>
                    </li>))
                }
            </ul>
        </div>
    );
}

export default TodoList;