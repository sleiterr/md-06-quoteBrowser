import React from "react";
import { MessageCircleHeart } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = ({ favoriteCount }) => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/favorites">
        <MessageCircleHeart size={24} />
        {favoriteCount > 0 && (
          <span className={styles.caunter}>{favoriteCount}</span>
        )}
      </Link>
    </header>
  );
};

export default Header;
