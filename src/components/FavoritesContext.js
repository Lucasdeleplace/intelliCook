// src/components/FavoritesContext.js
import React, { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (recipe) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = [...prevFavorites, recipe];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const removeFavorite = (recipeId) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter((recipe) => recipe.id !== recipeId);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;