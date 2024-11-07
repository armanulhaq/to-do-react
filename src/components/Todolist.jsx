import styles from "./todolist.module.css";

import TodoItem from "./TodoItem";

export default function TodoList({ todoItems, setTodoItems }) {
    const sortedTodos = todoItems
        .slice()
        .sort((a, b) => Number(a.done) - Number(b.done));

    return (
        <div>
            {sortedTodos.length > 0 ? ( // Check if there are items
                <div className={styles.list}>
                    {sortedTodos.map((item, index) => (
                        <TodoItem
                            key={index}
                            item={item}
                            todos={todoItems}
                            setTodoItems={setTodoItems}
                        />
                    ))}
                </div>
            ) : (
                <p className={styles.noItem}>No items in the list.</p> // Optional message for empty list
            )}
        </div>
    );
}
