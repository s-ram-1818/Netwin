import { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  return (
    <TodoContext.Provider value={{ todos, setTodos, editIndex, setEditIndex }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
