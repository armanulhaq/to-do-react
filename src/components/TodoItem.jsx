import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodoItems }) {
    function handleDelete() {
        console.log("Delete button clicked for item", item);
        // Use todos instead of item and filter out the current item
        setTodoItems(todos.filter((todoItem) => todoItem !== item));
    }

    return (
        <>
            <div className={styles.item}>
                <div className={styles.itemName}>{item}</div>
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
