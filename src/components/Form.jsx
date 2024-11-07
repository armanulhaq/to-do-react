import { useState } from "react";

const Form = ({ todoItems, setTodoItems }) => {
    const [todoItem, setTodoItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setTodoItems([...todoItems, todoItem]); // Add new todo item
        setTodoItem("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={(e) => setTodoItem(e.target.value)}
                value={todoItem}
                type="text"
            />
            <button type="submit">+</button>
        </form>
    );
};

export default Form;
