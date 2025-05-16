//QuoteCard.jsx

import React from "react";
import styles from "./QuoteCard.module.css";
import { Link } from "react-router-dom";

const QuoteCard = ({ quote }) => {
  if (!quote) return <p>No quote data</p>;

  return (
    <div className={styles.ListItem}>
      <div className={styles.info}>
        <div className={ styles.text}>
          <p className={styles.quoteText}>{quote.quote}</p>
        </div>
        <div className={styles.linkCart}>
          <p className={styles.quoteAuthor}>{quote.author}</p>
          <Link className={styles.quoteLink} to={`/quote/${quote.id}`}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
