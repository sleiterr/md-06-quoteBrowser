//QuoteList.jsx
import React from "react";
import QuoteCard from "../QouteCard/QuoteCard";
import styles from "./QuoteList.module.css"

const QuoteList = ({ quotes }) => {
  return (
    <div className={styles.quoteContainer}>
      {quotes.map((quote) => (
        <QuoteCard key={quote.id} quote={quote} />
      ))}
    </div>
  );
};

export default QuoteList;
