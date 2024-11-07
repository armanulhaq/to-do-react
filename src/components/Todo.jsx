import { useState } from "react";
import Form from "./Form";
import TodoList from "./Todolist";
import Footer from "./Footer";

export default function Todo() {
    const [todoItems, setTodoItems] = useState([]); //This is called raising up the state one level up as this state is needed by both Form and ToDoList we raised it and passed it to both
    const completedTaskCount = todoItems.filter((todo) => todo.done).length;
    const totalTodos = todoItems.length;
    return (
        <>
            <Form todoItems={todoItems} setTodoItems={setTodoItems} />
            <TodoList todoItems={todoItems} setTodoItems={setTodoItems} />
            <Footer count={completedTaskCount} total={totalTodos} />
        </>
    );
}
