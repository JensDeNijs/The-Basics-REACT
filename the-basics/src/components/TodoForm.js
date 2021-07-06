import Input from "./Input";
import Submit from "./Submit";

function TodoForm(props) {
    return (
        <div>
            <form>
                <Input />
                <br />
                <Submit />
            </form>
        </div>
    );
}

export default TodoForm;