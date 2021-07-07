import Input from "./Input";
import Submit from "./Submit";

function TodoForm(props) {
    const onClick= () =>{
        console.log("click!")
    }
    return (
        <div>
            <form>
                <Input />
                <br />
                <Submit onClick={onClick}/>
            </form>
        </div>
    );
}

export default TodoForm;