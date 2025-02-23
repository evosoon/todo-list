import { Todo } from "../types/todo";
interface setFilterProps {
    setFilter: (type: string) => void;
}
function TodoFilter({ setFilter }: setFilterProps) {
    return (
        <div>
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("todo")}>Todo</button>
            <button onClick={() => setFilter("done")}>Done</button>
        </div>
    );
}
export default TodoFilter;