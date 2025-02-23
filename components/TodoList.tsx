import { Todo } from "../types/todo";
import TodoItem from "../components/TodoItem";
interface TodoListProps {
    todos: Todo[];
    deleteTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}
function TodoList({ todos, deleteTodo, toggleTodo }: TodoListProps) {
    return (
       <ul>{
        todos.map((todo)=>
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />)
        }</ul>
    );
}
export default TodoList;