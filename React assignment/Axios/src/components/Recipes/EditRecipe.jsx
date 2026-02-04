import React, { useState } from "react";
import axiosInstance from "../../api/axios.instance.js";
import { useContext } from "react";
import { recipeContext } from "../../context/recipe_context.jsx";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";
const EditRecipe = () => {
  const editRef = useRef(null);
  const navigate = useNavigate();
  const { recipes, setRecipes } = useContext(recipeContext);
  const { id } = useParams();
  const editingRecipe = recipes[id];
  console.log("Editing Recipe:", editingRecipe);

  const [formData, setFormData] = useState({
    name: "",
    cuisine: "Italian",
    difficulty: "Easy",
    servings: 1,
    ingredients: "",
    instructions: "",
    image: "",
    rating: 0,
    description: "",
  });
  useEffect(() => {
    editRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  useEffect(() => {
    if (editingRecipe) {
      setFormData({
        name: editingRecipe.name || "",
        cuisine: editingRecipe.cuisine || "Italian",
        difficulty: editingRecipe.difficulty || "Easy",
        servings: editingRecipe.servings || 1,
        ingredients: editingRecipe.ingredients?.join("\n") || "",
        instructions: editingRecipe.instructions?.join("\n") || "",
        image: editingRecipe.image || "",
        rating: editingRecipe.rating || 0,
        description: editingRecipe.description || "",
      });
    }
  }, [editingRecipe]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        mealType: checked
          ? [...prev.mealType, value]
          : prev.mealType.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      id: id,
      name: formData.name,
      cuisine: formData.cuisine,
      difficulty: formData.difficulty,
      servings: parseInt(formData.servings),

      ingredients: formData.ingredients.split("\n").filter((i) => i.trim()),
      instructions: formData.instructions.split("\n").filter((i) => i.trim()),

      image: formData.image,
      rating: parseFloat(formData.rating),
    };
    setRecipes((prevRecipes) => {
      const updatedRecipes = prevRecipes.map((recipe, index) =>
        index === parseInt(id) ? newRecipe : recipe,
      );
      return updatedRecipes;
    });

    setFormData({
      name: "",
      cuisine: "Italian",
      difficulty: "Easy",
      servings: 1,

      ingredients: "",
      instructions: "",

      image: "",
      rating: 0,
      description: "",
    });

    navigate("/recipes");
  };

  return (
    <div className="container my-5" ref={editRef}>
      <h1>Edit Recipe</h1>
      <form onSubmit={handleSubmit} className="needs-validation">
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Recipe Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter recipe name"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="image" className="form-label">
              Image URL
            </label>
            <input
              type="url"
              className="form-control"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              placeholder="https://example.com/image.jpg"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4">
            <label htmlFor="cuisine" className="form-label">
              Cuisine Type
            </label>
            <select
              className="form-select"
              id="cuisine"
              name="cuisine"
              value={formData.cuisine}
              onChange={handleInputChange}
            >
              <option value="Italian">Italian</option>
              <option value="Mexican">Mexican</option>
              <option value="Chinese">Chinese</option>
              <option value="Indian">Indian</option>
              <option value="French">French</option>
              <option value="American">American</option>
              <option value="Thai">Thai</option>
              <option value="Japanese">Japanese</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="difficulty" className="form-label">
              Difficulty Level
            </label>
            <select
              className="form-select"
              id="difficulty"
              name="difficulty"
              value={formData.difficulty}
              onChange={handleInputChange}
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="servings" className="form-label">
              Servings
            </label>
            <input
              type="number"
              className="form-control"
              id="servings"
              name="servings"
              value={formData.servings}
              onChange={handleInputChange}
              min="1"
              max="20"
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="rating" className="form-label">
              Rating (0-5)
            </label>
            <input
              type="number"
              className="form-control"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              min="0"
              max="5"
              step="0.1"
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="ingredients" className="form-label">
            Ingredients (one per line)
          </label>
          <textarea
            className="form-control"
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleInputChange}
            rows="5"
            placeholder="2 cups flour&#10;1 cup sugar&#10;3 eggs&#10;..."
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="instructions" className="form-label">
            Instructions (one per line)
          </label>
          <textarea
            className="form-control"
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleInputChange}
            rows="5"
            placeholder="Preheat oven to 350°F&#10;Mix all ingredients&#10;..."
            required
          ></textarea>
        </div>

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            Update Recipe
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/recipes")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditRecipe;
