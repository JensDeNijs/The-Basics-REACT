import TodoListitem from "./TodoListitem";
function TodoList(props) {
    return (
        <div>
            <ul>
                <TodoListitem title="Make some cool css."/>
                <TodoListitem title="Make the submit button functional."/>
            </ul>

        </div>
    );
}

export default TodoList;