import { Todo } from "../types/todo";
import './TodoItem.css';
import { useState, useRef, useEffect } from 'react';
interface TodoItemProps {
    todo: Todo;
    editTodo: (id: number, text: string) => void;
    deleteTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}
function TodoItem({ todo, editTodo, deleteTodo, toggleTodo }: TodoItemProps) {
    const [isEditing, setIsEditing] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditing]);
    return (
        <li className="todo-item">
            <input 
                type="checkbox" 
                checked={todo.done} 
                onChange={() => toggleTodo(todo.id)} 
                className="todo-checkbox"
            />
           {
            isEditing ? (
              <input 
                ref={inputRef}
                type="text" 
                value={todo.text} 
                onChange={(e) => editTodo(todo.id, e.target.value)} 
                onBlur={() => setIsEditing(false)}
                className="todo-input"
              />
            ) : (
              <span className={`todo-text ${todo.done ? 'done' : ''}`} onClick={() => setIsEditing(true)}>
                {todo.text}
              </span>
            )
           }
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