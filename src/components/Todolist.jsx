import styles from "./todolist.module.css";

import TodoItem from "./TodoItem";

export default function TodoList({ todoItems }) {
    return (
        <div className={styles.list}>
            {todoItems.map((item, index) => (
                <TodoItem key={index} item={item} />
            ))}
        </div>
    );
}
