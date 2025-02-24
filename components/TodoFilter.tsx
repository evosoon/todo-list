import { Todo } from "../types/todo";
import { useState } from 'react';
import './TodoFilter.css';
interface setFilterProps {
    setFilter: (type: string) => void;
}
function TodoFilter({ setFilter }: setFilterProps) {
    const [activeFilter, setActiveFilter] = useState('all');

    const handleFilterClick = (filter: string) => {
        setActiveFilter(filter);
        setFilter(filter);
    };

    return (
        <div className="filter-container">
            <button 
                onClick={() => handleFilterClick("all")} 
                className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
            >
                全部
            </button>
            <button 
                onClick={() => handleFilterClick("todo")} 
                className={`filter-button ${activeFilter === 'todo' ? 'active' : ''}`}
            >
                未完成
            </button>
            <button 
                onClick={() => handleFilterClick("done")} 
                className={`filter-button ${activeFilter === 'done' ? 'active' : ''}`}
            >
                已完成
            </button>
        </div>
    );
}
export default TodoFilter;