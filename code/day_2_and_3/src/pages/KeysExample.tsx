import { useState } from "react";
import { Link } from "react-router-dom";
import "./KeysExample.css";

interface TodoItem {
  id: number;
  text: string;
  icon: string;
  defaultValue: string;
}

const initialTodos: TodoItem[] = [
  { id: 13, text: "Buy Eggs", icon: "📝", defaultValue: "2 dozen" },
  { id: 47, text: "Buy Milk", icon: "🥛", defaultValue: "1 gallon" },
  { id: 98, text: "Buy Bread", icon: "🍞", defaultValue: "whole wheat" },
];

function KeysExample() {
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos);

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleReset = () => {
    setTodos(initialTodos);
  };

  return (
    <div className="keys-example">
      <nav className="breadcrumb">
        <Link to="/">← Back to Home</Link>
      </nav>

      <h1>The Bug: Index Keys in Action</h1>
      <div className="info-box">
        <h3>Using Unique ID as Key</h3>
        <p>
          This example demonstrates the CORRECT way to use keys in React lists.
          Each todo item has a unique ID that stays with it regardless of its
          position.
        </p>
        <p>
          <strong>Try this:</strong> Delete the middle item ("Buy Milk"). Notice
          how the input values stay with the correct items because React tracks
          them by their unique ID, not their position.
        </p>
      </div>

      <div className="todo-container">
        <div className="todo-list">
          {todos.map((todo) => (
            <div className="todo-item" key={todo.id}>
              <div className="todo-content">
                <span className="key-badge">unique key={todo.id}</span>
                <span className="todo-icon">{todo.icon}</span>
                <span className="todo-text">{todo.text}</span>
                <input
                  type="text"
                  defaultValue={todo.defaultValue}
                  className="todo-input"
                  placeholder="Add details..."
                />
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="delete-btn"
                  aria-label={`Delete ${todo.text}`}
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>

        {todos.length === 0 && (
          <div className="empty-state">
            <p>All todos deleted! Click reset to restore them.</p>
          </div>
        )}

        <button onClick={handleReset} className="reset-btn">
          Reset List
        </button>
      </div>
    </div>
  );
}

export default KeysExample;
