//QuoteList.jsx
import React from "react";
import QuoteCard from "../QouteCard/QuoteCard";
import styles from "./QuoteList.module.css";

const QuoteList = ({ quotes }) => {
  return (
    <section>
      <div className={styles.quoteContainer}>
        {quotes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} />
        ))}
      </div>
    </section>
  );
};

export default QuoteList;
