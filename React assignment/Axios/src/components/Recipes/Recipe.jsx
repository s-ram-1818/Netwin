import React, { useState, useEffect } from "react";
import getRecipe from "../../api/getRecipe";
import "./Recipe.css";
import AddRecipe from "./AddRecipe.jsx";
import { useContext } from "react";
import { recipeContext } from "../../context/recipe_context.jsx";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Recipe = () => {
  const navigate = useNavigate();
  const { recipes, setRecipes, expandedIndex, setExpandedIndex } =
    React.useContext(recipeContext);

  useEffect(() => {
    getRecipe().then((response) => {
      setRecipes(response.data.recipes);
      console.log(response.data.recipes);
    });
  }, []);

  const handleViewDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleStartCooking = (recipeName) => {
    alert(`Started cooking: ${recipeName}`);
  };

  const handleDeleteRecipe = (index) => {
    setRecipes(recipes.filter((_, i) => i !== index));
  };

  return (
    <div className="recipes-container">
      <h1>Recipes</h1>

      <div className="recipes-grid">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className={`recipe-card ${expandedIndex === index ? "expanded" : ""}`}
          >
            {recipe.image && (
              <img
                src={recipe.image}
                alt={recipe.name}
                className="recipe-image"
              />
            )}
            <div className="recipe-content">
              <h2 className="recipe-name">{recipe.name}</h2>

              {recipe.cuisine && (
                <p className="recipe-info">
                  <strong>Cuisine:</strong> {recipe.cuisine}
                </p>
              )}

              {recipe.difficulty && (
                <p className="recipe-info">
                  <strong>Difficulty:</strong> {recipe.difficulty}
                </p>
              )}

              {recipe.servings && (
                <p className="recipe-info">
                  <strong>Servings:</strong> {recipe.servings}
                </p>
              )}

              {recipe.prepTime && (
                <p className="recipe-info">
                  <strong>Prep:</strong> {recipe.prepTime}
                </p>
              )}

              {recipe.cookTime && (
                <p className="recipe-info">
                  <strong>Cook:</strong> {recipe.cookTime}
                </p>
              )}

              {expandedIndex === index && recipe.ingredients && (
                <div className="recipe-ingredients">
                  <strong>Ingredients:</strong>
                  <ul>
                    {recipe.ingredients.map((ingredient, idx) => (
                      <li key={idx}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              )}

              {expandedIndex === index && recipe.instructions && (
                <div className="recipe-instructions">
                  <strong>Instructions:</strong>
                  <ol>
                    {recipe.instructions.map((instruction, idx) => (
                      <li key={idx}>{instruction}</li>
                    ))}
                  </ol>
                </div>
              )}

              <div className="recipe-buttons">
                <button
                  className="btn btn-view btn-primary"
                  onClick={() => handleViewDetails(index)}
                >
                  {expandedIndex === index ? "Hide Details" : "View Details"}
                </button>
                <button
                  className="btn btn-cook btn-success"
                  onClick={() => handleStartCooking(recipe.name)}
                >
                  Start Cooking
                </button>

                <button
                  className="btn btn-delete btn-danger"
                  onClick={() => handleDeleteRecipe(index)}
                >
                  Delete Recipe
                </button>
                <button
                  className="btn btn-edit btn-warning"
                  onClick={() => navigate(`/recipes/edit/${index}`)}
                >
                  Edit Recipe
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="add-recipe container text-center my-4">
        <button
          className="btn btn-primary m-auto"
          onClick={() => navigate("/recipes/add")}
        >
          Add New Recipe
        </button>
      </div>

      <Outlet />
    </div>
  );
};

export default Recipe;
