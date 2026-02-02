import { useContext, useState } from "react";

const PreferenceContext = useContext();
function PreferenceProvider({children}){
                    const [lang, setLang] = useState("en");
                    const[fontSize , setFontSize] = useState(20);
                    function changeLang(language){
                                        setLang(language);
                    }
                    const changeFontSize =  (size)  => {
                                        setFontSize(size);
                    }
                    return(
                                        <PreferenceContext.Provider value={{lang,fontSize,changeFontSize,changeLang}}>
                                                            {children}
                                        </PreferenceContext.Provider>
                    )
}
export default PreferenceProvider