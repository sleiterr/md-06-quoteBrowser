//Faorites.jsx

import React from "react";
import FavoritesPage from "../components/FavoritesPage/FavoritesPage";

const Favorites = ({ favorites }) => {
  return (
    <div>
      <FavoritesPage favorites={favorites} />
    </div>
  );
};

export default Favorites;
