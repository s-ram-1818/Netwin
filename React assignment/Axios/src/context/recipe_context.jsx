import { createContext, useState } from "react";

export const recipeContext = createContext();

const recipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <recipeContext.Provider
      value={{ recipes, setRecipes, expandedIndex, setExpandedIndex }}
    >
      {children}
    </recipeContext.Provider>
  );
};

export default recipeProvider;
