import React, { useState, useEffect } from "react";

const FetchQuote = () => {
  const [quote, setQuote] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await fetch("https://dummyjson.com/quotes");

        if (!res.ok) throw new Error(`HTTP! error! ${res.status}`);
        const data = await res.json();
        setQuote(data.quotes);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchQuote();
  }, []);
};

export default FetchQuote;
