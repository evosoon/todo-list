"use client"
import { useCallback, useMemo } from 'react';
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import TodoFilter from "../components/TodoFilter";
import { Todo } from "../types/todo";
import { useTodos } from "../hooks/useTodos";
import './page.css';

export enum FilterType {
  ALL = 'all',
  DONE = 'done',
  TODO = 'todo'
}

export default function Home() {
  const {
    todos,
    addTodo,
    deleteTodo,
    editTodo,
    toggleTodo,
    filter,
    setFilter
  } = useTodos();

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case FilterType.DONE:
        return todos.filter((todo) => todo.done);
      case FilterType.TODO:
        return todos.filter((todo) => !todo.done);
      case FilterType.ALL:
      default:
        return todos;
    }
  }, [todos, filter]);

  const handleAddTodo = useCallback((text: string) => {
    addTodo(text.trim());
  }, [addTodo]);

  const handleEditTodo = useCallback((id: number, text: string) => {
    editTodo(id, text.trim());
  }, [editTodo]);

  return (
    <div className="container">
      <div className="todo-card">
        <h1 className="todo-title">待办事项</h1>
        <div className="todo-content">
          <AddTodo addTodo={handleAddTodo} />
          <TodoList 
            todos={filteredTodos}
            editTodo={handleEditTodo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
          <TodoFilter setFilter={setFilter} />
        </div>
      </div>
    </div>
  );
}
