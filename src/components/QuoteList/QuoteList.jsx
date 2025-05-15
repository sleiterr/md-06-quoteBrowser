import React from "react";

const QuoteList = ({ quotes }) => {
  return (
    <div>
      <ul>
        {quotes.map((quote) => (
          <li key={quote.id}>
            <p>{quote.quote}</p>
            <p>{quote.author}</p>
            <p></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuoteList;
