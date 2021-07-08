import {useRef} from "react";

function TodoForm(props) {
    const inputRef = useRef();

    const clickHandler = (e) => {
        e.preventDefault()
        const inputElement = inputRef.current;
        props.onAdd(inputElement.value)

    }
    return (
        <div>
            <form>
                <input ref={inputRef} className='inputText' type="text" placeholder="What needs to get done?"/>
                <br/>
                <button className='inputButton' onClick={clickHandler}>Submit</button>
            </form>
        </div>
    );
}

export default TodoForm;