import React from "react";

const FavoritesPage = ({ favorites }) => {
  return (
    <div>
      <h2>my favorites quotes</h2>
      <div>
        {favorites.length === 0 ? (
          <p>Your Cart Favorites is empty.</p>
        ) : (
          favorites.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.author}</p>
                <p>{item.quote}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
