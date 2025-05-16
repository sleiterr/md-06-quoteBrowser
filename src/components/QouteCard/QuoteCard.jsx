//QuoteCard.jsx

import React from "react";
import { Link } from "react-router-dom";

const QuoteCard = ({ quote }) => {
  if (!quote) return <p>No quote data</p>;
  
  return (
    <div>
      <p>{quote.quote}</p>
      <p>{quote.author}</p>
      <Link to={`/quote/${quote.id}`}>View Details</Link>
    </div>
  );
};

export default QuoteCard;
