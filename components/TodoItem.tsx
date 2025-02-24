import { Todo } from "../types/todo";
import './TodoItem.css';
interface TodoItemProps {
    todo: Todo;
    deleteTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}
function TodoItem({ todo, deleteTodo, toggleTodo }: TodoItemProps) {
    return (
        <li className="todo-item">
            <input 
                type="checkbox" 
                checked={todo.done} 
                onChange={() => toggleTodo(todo.id)} 
                className="todo-checkbox"
            />
            <span className={`todo-text ${todo.done ? 'done' : ''}`}>
                {todo.text}
            </span>
            <button 
                onClick={() => deleteTodo(todo.id)} 
                className="delete-button"
            >
                删除
            </button>
        </li>
    );
}
export default TodoItem;