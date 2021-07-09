import {useRef} from "react";

function TodoForm(props) {
    const inputRef = useRef();

    const clickHandler = (e) => {
        e.preventDefault()
        const inputElement = inputRef.current;
        props.onAdd(inputElement.value)
    }

    return (
        <div className="container-md sticky-top todoform">
            <div className="row-cols-1 pb-2 pt-5">
            <form>
                <input ref={inputRef} className='inputText' type="text" placeholder="What needs to get done?"/>
                <br/>
                <button className='inputButton' onClick={clickHandler}>Submit</button>
            </form>
            </div>
        </div>
    );
}

export default TodoForm;