import styles from "./form.module.css";
import { useState } from "react";

const Form = ({ todoItems, setTodoItems }) => {
    const [todoItem, setTodoItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setTodoItems([...todoItems, todoItem]); // Add new todo item
        setTodoItem("");
    }

    return (
        <form className={styles.todoForm} onSubmit={handleSubmit}>
            <input
                className={styles.todoInput}
                onChange={(e) => setTodoItem(e.target.value)}
                value={todoItem}
                placeholder="Enter todos"
                type="text"
            />
            <button className={styles.addButton} type="submit">
                +
            </button>
        </form>
    );
};

export default Form;
