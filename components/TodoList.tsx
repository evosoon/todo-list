import { Todo } from "../types/todo";
import TodoItem from "../components/TodoItem";
import './TodoList.css';
interface TodoListProps {
    todos: Todo[];
    deleteTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}
function TodoList({ todos, deleteTodo, toggleTodo }: TodoListProps) {
    if (todos.length === 0) {
        return (
            <div className="empty-message">
                还没有待办事项，请添加一个！
            </div>
        );
    }

    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    deleteTodo={deleteTodo} 
                    toggleTodo={toggleTodo} 
                />
            ))}
        </ul>
    );
}
export default TodoList;