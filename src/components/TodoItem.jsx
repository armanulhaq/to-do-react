import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodoItems }) {
    function handleDelete() {
        setTodoItems(todos.filter((todoItem) => todoItem !== item));
    }
    function handleClick(name) {
        let newTodos = todos.map((todo) =>
            todo.name === name ? { ...todo, done: !todo.done } : todo
        );
        setTodoItems(newTodos);
        console.log(newTodos); // Log the updated todos instead of the original
    }

    const isCompleted = item.done ? styles.completed : "";

    return (
        <>
            <div className={styles.item}>
                <div className={styles.itemName}>
                    <span
                        className={isCompleted}
                        onClick={() => handleClick(item.name)}
                    >
                        {item.name}
                    </span>
                </div>
                <button
                    onClick={handleDelete} // No need to pass 'item' here
                    className={styles.deleteButton}
                >
                    x
                </button>
            </div>
            <hr className={styles.line} />
        </>
    );
}
