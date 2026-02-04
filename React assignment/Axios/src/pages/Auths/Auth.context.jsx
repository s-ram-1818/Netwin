import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [custom, setCustom] = useState(null);

  return (
    <AuthContext.Provider value={{ custom, setCustom }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthProvider;
