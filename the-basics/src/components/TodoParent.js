import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import {useState , useEffect} from "react";

const LSKEY = "MyTodoApp";

function TodoParent(props) {

    const initialTodos = () => JSON.parse(localStorage.getItem(LSKEY + ".todos")) ||
        [{
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc libero ipsum, ultricies et odio vel, convallis molestie orci. Fusce ultrices.",
            done: false
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo sagittis mauris. Interdum et malesuada fames ac ante ipsum primis.",
            done: true
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut accumsan augue. Vivamus quis pulvinar lacus. Ut eu sapien nisl",
            done: false
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas rhoncus consectetur. Morbi enim purus, porttitor a pulvinar a, posuere.",
            done: true
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec erat id purus sagittis hendrerit. Aenean gravida turpis sit amet.",
            done: false
        }];

    const [todos, setTodos] = useState(initialTodos);

    const changeBox = (id) => {
        setTodos(todos.map((toDo, index) => index === id ? {...toDo, done: !toDo.done} : toDo))
    }

    const addTodo = (message) => {
        if (message !== "") {
            const newTodo = [...todos, {text: message, done: false}]
            setTodos(newTodo)
        }
    }

    useEffect(() => {
        window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
    }, [todos]);

    console.log(todos)


    return (
        <div>
            <Header/>
            <TodoForm onAdd={addTodo}/>
            <TodoList onChange={changeBox} todos={todos}/>
        </div>
    );
}

export default TodoParent;