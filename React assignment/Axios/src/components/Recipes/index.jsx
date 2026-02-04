import { Route, Routes } from "react-router-dom";
import Recipe from "./Recipe";
import AddRecipe from "./AddRecipe";
import EditRecipe from "./EditREcipe";
import { Suspense } from "react";
const RecipesIndex = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/recipes" element={<Recipe />}>
            <Route path="/recipes/add" element={<AddRecipe />} />
            <Route path="/recipes/edit/:id" element={<EditRecipe />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default RecipesIndex;
