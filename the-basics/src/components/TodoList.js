import {useState} from "react";

function TodoList(props) {
    const initialTodos = [{text: "test1", done: false}, {text: "test2", done: true}, {text: "test3",done: false}, {text: "test4", done: true}, {text: "test5", done: false}];

    const [todos, setTodos] = useState(initialTodos);

    const changeBox = (id) => {
        setTodos(todos.map((toDo, index) => index === id ? {...toDo, done: !toDo.done} : toDo))
    }

    console.log(todos)
    return (
        <ul>
            {todos.map((toDo, index) => (
                <li key={index}>
                    <input type="checkbox" id={index} checked={toDo.done}
                           onChange={() => changeBox(index)}/> {toDo.text}
                </li>))
            }
        </ul>
    );
}

export default TodoList;