//QuoteList.jsx
import React from "react";
import QuoteCard from "../QouteCard/QuoteCard";

const QuoteList = ({ quotes }) => {
  return (
    <div>
      {quotes.map((quote) => (
        <QuoteCard key={quote.id} quote={quote} />
      ))}
    </div>
  );
};

export default QuoteList;
