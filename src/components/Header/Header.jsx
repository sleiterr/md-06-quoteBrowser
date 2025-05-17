import React from "react";
import { MessageCircleHeart } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link>
        <MessageCircleHeart size={24} />
      </Link>
    </header>
  );
};

export default Header;
