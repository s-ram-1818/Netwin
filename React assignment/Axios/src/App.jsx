import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipe from "./components/Recipes/Recipe.jsx";
import AddRecipe from "./components/Recipes/AddRecipe.jsx";
import RecipesIndex from "./components/Recipes/index.jsx";
import Navbar from "./Layout/Navbar.jsx";
import Footer from "./Layout/Footer.jsx";
import PageIndex from "./components/pages/pageindex.jsx";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <PageIndex />
      <RecipesIndex />
      <Footer />
    </Router>
  );
}

export default App;
