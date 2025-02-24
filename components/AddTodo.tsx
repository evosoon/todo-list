import React, { useState } from 'react';
import './AddTodo.css';
interface AddTodoProps {
    addTodo: (text: string) => void;
}

function AddTodo({ addTodo }: AddTodoProps) {
    const [text, setText] = useState("");
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!text.trim()) return;
      addTodo(text);
      setText("");
    };
    return (
       <form onSubmit={handleSubmit} className="add-todo-form">
         <input 
           type="text" 
           value={text} 
           onChange={(e) => setText(e.target.value)} 
           placeholder="添加新的待办事项..."
           className="add-todo-input"
         />
         <button type="submit" className="add-todo-button">添加</button>
       </form>
    );
}
export default AddTodo;