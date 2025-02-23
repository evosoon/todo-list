import { Todo } from "../types/todo";
interface TodoItemProps {
    todo: Todo;
    deleteTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}
function TodoItem({ todo, deleteTodo, toggleTodo }: TodoItemProps) {
    return (
        <li>
            <input type="checkbox" checked={todo.done} onChange={() => toggleTodo(todo.id)} />
            <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    );
}
export default TodoItem;