"use client"
import Image from "next/image";
import styles from "./page.module.css";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import TodoFilter from "../components/TodoFilter";
import { Todo } from "../types/todo";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const addTodo = (text: string) => {
    const newTodo:Todo = {
      id: Date.now(),
      text,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  const getFilteredTodos = (type: string="all") => {
    switch (filter) {
      case "all":
        return todos;
      case "done":
        return todos.filter((todo) => todo.done);
      case "todo":
        return todos.filter((todo) => !todo.done);
      default:
        return todos;
    }

  }
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      })
    );
  }
  return (
   <>
   <AddTodo addTodo={addTodo} />
   <TodoList todos={getFilteredTodos()} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
   <TodoFilter setFilter={setFilter} />
   </>
  );
}
