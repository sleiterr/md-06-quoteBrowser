//QuoteCard.jsx

import React from "react";
import styles from "./QuoteCard.module.css";
import { Link } from "react-router-dom";

const QuoteCard = ({ quote }) => {
  if (!quote) return <p>No quote data</p>;

  return (
    <div className={styles.ListItem}>
      <p className={styles.quoteText}>{quote.quote}</p>
      <p className={styles.quoteAuthor}>{quote.author}</p>
      <Link className={styles.quoteLink} to={`/quote/${quote.id}`}>
        View Details
      </Link>
    </div>
  );
};

export default QuoteCard;
