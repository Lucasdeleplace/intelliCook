// src/components/FavorisComp.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import '../styles/FavorisComp.css';
import { FavoritesContext } from "./FavoritesContext"; //je veux ça 

const FavorisComp = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="favoritesSection">
      <Link to="/favoris" className="favoriteStar">★</Link>
      <Link to="/favoris" className="favoriteText">favoris ({favorites.length})</Link>
    </div>
  );
};

export default FavorisComp;