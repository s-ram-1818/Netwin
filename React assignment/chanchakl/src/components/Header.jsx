import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Header = () => {
  const { text, lang, setLang } = useContext(LanguageContext);

  return (
    <div className="container-fluid bg-success-subtle py-3 d-flex justify-content-between">
      <h2> {text.headerTitle}</h2>

      <button onClick={() => setLang(lang === "en" ? "hi" : "en")}>
        {text.changeLanguage}
      </button>
    </div>
  );
};

export default Header;
