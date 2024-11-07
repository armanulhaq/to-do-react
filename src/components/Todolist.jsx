import TodoItem from "./TodoItem";

export default function TodoList({ todoItems }) {
    return (
        <ul>
            {todoItems.map((item, index) => (
                <TodoItem key={index} item={item} />
            ))}
        </ul>
    );
}
