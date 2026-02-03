import { createContext, useState } from "react";

export const commentContext = createContext();

const commentProvider = ({ children }) => {
  const [comments, setcomments] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <commentContext.Provider
      value={{ comments, setcomments, expandedIndex, setExpandedIndex }}
    >
      {children}
    </commentContext.Provider>
  );
};

export default commentProvider;
