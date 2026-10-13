import { useState } from "react";
import { Link } from "react-router-dom";
import { useTodoStore } from "../stores/useTodoStore";
import "./TodoList.css";

function TodoList() {
  const [input, setInput] = useState("");
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodoStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input.trim());
      setInput("");
    }
  };

  return (
    <div className="todo-page">
      <div className="container">
        <section className="back-menu">
          <nav>
            <Link to="/">← Back to Home</Link>
          </nav>
        </section>

        <h1>Todo List</h1>

        <div className="todo-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="What needs to be done?"
              className="todo-input"
            />
            <button type="submit" className="add-button">
              Add
            </button>
          </form>

          {todos.length > 0 && (
            <ul className="todo-list">
              {todos.map((todo) => (
                <li key={todo.id} className={todo.completed ? "completed" : ""}>
                  <label className="todo-item">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                    />
                    <span className="todo-text">{todo.text}</span>
                  </label>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="delete-button"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
