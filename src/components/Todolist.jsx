import styles from "./todolist.module.css";

import TodoItem from "./TodoItem";

export default function TodoList({ todoItems, setTodoItems }) {
    return (
        <div className={styles.list}>
            {todoItems.map((item, index) => (
                <TodoItem
                    key={index}
                    item={item}
                    todos={todoItems}
                    setTodoItems={setTodoItems}
                />
            ))}
        </div>
    );
}
