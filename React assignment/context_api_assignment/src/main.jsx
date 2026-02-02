import ReactDOM from "react-dom/client";
import App from "./App";
import TodoProvider from "./context/TodoContext";
import ThemeProvider from "./context/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <TodoProvider>
      <App />
    </TodoProvider>
  </ThemeProvider>,
);
