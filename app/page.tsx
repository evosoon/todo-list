"use client"
import Image from "next/image";
import styles from "./page.module.css";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import TodoFilter from "../components/TodoFilter";
import { TodoItem } from "../types/todo";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const addTodo = (text: string) => {
    const newTodo:TodoItem = {
      id: Date.now(),
      text,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  const getFilteredTodos = (type: string) => {
    switch (type) {
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
   {/* <TodoList todos={getFilteredTodos("all")} deleteTodo={deleteTodo} toggleTodo={toggleTodo} /> */}
   {/* <TodoFilter getFilteredTodos={getFilteredTodos} /> */}
   </>
  );
}
