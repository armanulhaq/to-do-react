import { useState } from "react";
import Form from "./Form";
import TodoList from "./Todolist";

export default function Todo() {
    const [todoItems, setTodoItems] = useState([]); //This is called raising up the state one level up as this state is needed by both Form and ToDoList we raised it and passed it to both

    return (
        <>
            <Form todoItems={todoItems} setTodoItems={setTodoItems} />
            <TodoList todoItems={todoItems} />
        </>
    );
}
