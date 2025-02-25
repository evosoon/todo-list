import { Todo } from "../types/todo";
import { useState } from 'react';
import './TodoFilter.css';
import { FilterType } from "@/app/page";
interface setFilterProps {
    setFilter: (type: FilterType) => void;
}
function TodoFilter({ setFilter }: setFilterProps) {
    const [activeFilter, setActiveFilter] = useState<FilterType>(FilterType.ALL);

    const handleFilterClick = (filter: FilterType) => {
        setActiveFilter(filter);
        setFilter(filter);
    };

    return (
        <div className="filter-container">
            <button 
                onClick={() => handleFilterClick(FilterType.ALL)} 
                className={`filter-button ${activeFilter === FilterType.ALL ? 'active' : ''}`}
            >
                全部
            </button>
            <button 
                onClick={() => handleFilterClick(FilterType.TODO)} 
                className={`filter-button ${activeFilter === FilterType.TODO ? 'active' : ''}`}
            >
                未完成
            </button>
            <button 
                onClick={() => handleFilterClick(FilterType.DONE)} 
                className={`filter-button ${activeFilter === FilterType.DONE ? 'active' : ''}`}
            >
                已完成
            </button>
        </div>
    );
}
export default TodoFilter;