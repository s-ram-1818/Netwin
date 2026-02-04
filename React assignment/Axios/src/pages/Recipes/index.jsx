import { Route, Routes } from "react-router-dom";
import Recipe from "./Recipe";
import AddRecipe from "./AddRecipe";
import EditRecipe from "./EditREcipe";
import { Suspense } from "react";
import RecipeProvider from "./recipe_context.jsx";
import AuthProvider from "../Auths/Auth.context.jsx";
const RecipesIndex = () => {
  return (
    <>
      <RecipeProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/recipes" element={<Recipe />}>
              <Route path="/recipes/add" element={<AddRecipe />} />
              <Route path="/recipes/edit/:id" element={<EditRecipe />} />
            </Route>
          </Routes>
        </Suspense>
      </RecipeProvider>
    </>
  );
};

export default RecipesIndex;
