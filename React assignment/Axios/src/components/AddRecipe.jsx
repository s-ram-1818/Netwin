import React from "react";
import axiosInstance from "../api/axios.instance";
import { useContext } from "react";
import { recipeContext } from "../context/recipe_context.jsx";

const AddRecipe = () => {
  const { recipes, setRecipes } = useContext(recipeContext);

  const handleAdd = () => {
    const temp = {
      id: 1,
      name: "Classic Margherita Pizza",
      ingredients: [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot.",
      ],
      prepTimeMinutes: 20,
      cookTimeMinutes: 15,
      servings: 4,
      difficulty: "Easy",
      cuisine: "Italian",
      caloriesPerServing: 300,
      tags: ["Pizza", "Italian"],
      userId: 166,
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      rating: 4.6,
      reviewCount: 98,
      mealType: ["Dinner"],
    };
    // axiosInstance
    //   .post("/recipes", {
    //     name: "New Recipe",
    //     cuisine: "International",
    //   })
    //   .then((response) => {
    //     setRecipes([...recipes, response.data]);
    //     console.log("Recipe added:", response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error adding recipe:", error);
    //   });
    setRecipes([...recipes, temp]);
  };

  return (
    <div>
      <div className="container w-25 ">
        <div className="row my-3">
          <button className="btn btn-primary" onClick={handleAdd}>
            Add Recipe
          </button>
        </div>
      </div>

      {/* <AddRecipeForm /> */}
    </div>
  );
};

export default AddRecipe;
