import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { ThemeContext } from "../context/ThemeContext";

const TodoApp = () => {
  const { todos, setTodos, editIndex, setEditIndex } = useContext(TodoContext);

  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const [text, setText] = useState("");

  const addTodo = () => {
    if (!text) return;

    if (editIndex !== null) {
      const updated = [...todos];
      updated[editIndex] = text;
      setTodos(updated);
      setEditIndex(null);
    } else {
      setTodos([...todos, text]);
    }

    setText("");
  };

  const editTodo = (index) => {
    setText(todos[index]);
    setEditIndex(index);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div
      className={`container mt-4 p-4 rounded ${
        darkMode ? "bg-secondary text-light" : "bg-light text-dark"
      }`}
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Todo Manager</h3>
        <button className="btn btn-primary" onClick={toggleTheme}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div className="d-flex mb-3">
        <input
          className="form-control me-2"
          placeholder="Enter todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTodo}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <ul className="list-group">
        {todos.map((todo, i) => (
          <li
            key={i}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              darkMode ? "bg-secondary text-light" : ""
            }`}
          >
            {todo}
            <div>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => editTodo(i)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteTodo(i)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
