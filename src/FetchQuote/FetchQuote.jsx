import React, { useState, useEffect } from "react";
import FilterSort from "../components/FilterSort/FilterSort";

const FetchQuote = () => {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await fetch("https://dummyjson.com/quotes");

        if (!res.ok) throw new Error(`HTTP! error! ${res.status}`);
        const data = await res.json();
        setQuotes(data.quotes);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchQuote();
  }, []);

  return <FilterSort quotes={quotes} error={error} />;
};

export default FetchQuote;
