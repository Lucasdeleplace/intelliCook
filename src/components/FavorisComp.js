// src/components/FavorisComp.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import '../styles/FavorisComp.css';
import { FavoritesContext } from "./FavoritesContext";

const FavorisComp = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="favoritesSection">
      <Link to="/favoris" className="favoriteStar">★</Link>
      <Link to="/favoris" className="favoriteText">favorite ({favorites.length})</Link>
    </div>
  );
};

export default FavorisComp;