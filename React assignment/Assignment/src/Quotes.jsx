import React from "react";
import { useState, useEffect } from "react";

const Quotes = () => {
  const [quotes, setQuotes] = useState([{ quote: "", author: "" }]);
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch("https://dummyjson.com/quotes");
        const data = await response.json();
        setQuotes(data.quotes);
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    };

    fetchQuotes();
  }, []);

  return (
    <div>
      <div className=""></div>
      {quotes.map((quote, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "20px",
            border: "1px solid #ccc",
          }}
        >
          <h4>{quote.quote}</h4>
          <p>~{quote.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Quotes;
