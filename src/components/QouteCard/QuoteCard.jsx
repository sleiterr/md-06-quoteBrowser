//QuoteCard.jsx

import React from "react";
import styles from "./QuoteCard.module.css";
import { Heart, MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";

const QuoteCard = ({ quote }) => {
  if (!quote) return <p>No quote data</p>;

  return (
    <div className={styles.ListItem}>
      <div className={styles.info}>
        <div className={styles.text}>
          <p className={styles.quoteAuthor}>{quote.author}</p>
          <p className={styles.quoteText}>{quote.quote}</p>
        </div>
        <div className={styles.linkCart}>
          <Link className={styles.quoteLink} to={`/quote/${quote.id}`}>
            <MoveLeft /> View Details
          </Link>
          <button className={styles.like} >
            <Heart size={36} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
