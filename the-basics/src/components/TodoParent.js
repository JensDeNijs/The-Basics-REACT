import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import {useState} from "react";

function TodoParent(props) {

    const initialTodos = [{text: "test1", done: false}, {text: "test2", done: true}, {text: "test3",done: false}, {text: "test4", done: true}, {text: "test5", done: false}];

    const [todos, setTodos] = useState(initialTodos);

    const changeBox = (id) => {
        setTodos(todos.map((toDo, index) => index === id ? {...toDo, done: !toDo.done} : toDo))
    }

    const addTodo = (message) => {
        if (message !== ""){
        const newTodo = [...todos, {text: message, done: false}]
        setTodos(newTodo)}
    }

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