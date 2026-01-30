import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Restaurants from "./components/Restaurants.jsx";
import Kitchen from "./components/Kitchen.jsx";
import About_app from "./components/About_app.jsx";
import About_us from "./components/About_us.jsx";
import Footer from "./Footer.jsx";
import Form from "./components/CrudExample.jsx";

function App() {
  const [count, setCount] = useState(110);

  return (
    <body>
      {/* <Header />
      <Hero />
      <Restaurants />
      <hr />
      <Kitchen />
      <About_app />
      <About_us />
      <Footer /> */}
      <Form />
    </body>
  );
}

export default App;
