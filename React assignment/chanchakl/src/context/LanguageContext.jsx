import { createContext, useState } from "react";
import language from "../utility/language";

export const LanguageContext = createContext();

 const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const value = {
    lang,
    setLang,
    text: language[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
export default LanguageProvider