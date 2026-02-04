import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import RecipeProvider from "./context/recipe_context.jsx";
import CommentProvider from "./context/comments_context.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RecipeProvider>
      <CommentProvider>
        <App />
      </CommentProvider>
    </RecipeProvider>
  </StrictMode>,
);
