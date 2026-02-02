import { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [completedTodos, setCompletedTodos] = useState([]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        editIndex,
        setEditIndex,
        completedTodos,
        setCompletedTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
