import React, { createContext, useState, useEffect } from "react";

const FavoriteContext = createContext();

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Load favorites from local storage if available
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    // Save favorites to local storage whenever it changes
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (article) => {
    setFavorites([...favorites, article]);
  };

  const removeFromFavorites = (articleId) => {
    const updatedFavorites = favorites.filter(
      (article) => article.id !== articleId
    );
    setFavorites(updatedFavorites);
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export { FavoriteProvider, FavoriteContext };
