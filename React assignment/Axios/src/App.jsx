import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipe from "./pages/Recipes/Recipe.jsx";
import AddRecipe from "./pages/Recipes/AddRecipe.jsx";
import RecipesIndex from "./pages/Recipes/index.jsx";
import Navbar from "./Layout/Navbar.jsx";
import Footer from "./Layout/Footer.jsx";
import PageIndex from "./pages/Header/pageindex.jsx";
import AuthIndex from "./pages/Auths/authIndex.jsx";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <PageIndex />
      <RecipesIndex />
      <AuthIndex />
      <Footer />
    </Router>
  );
}

export default App;
