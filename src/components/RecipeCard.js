import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RecipeCard.css";
import { FavoritesContext } from "../contexts/FavoritesContext";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const handleClick = () => {
    navigate(`/recipe/${recipe.id}`);
  };

  const isFavorite = favorites.some((fav) => fav.id === recipe.id);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe);
    }
  };

  return (
    <div className="recipe-card" onClick={handleClick}>
      <h2>{recipe.name}</h2>
      <p>Temps de préparation: {recipe.time} minutes</p>
      <button onClick={handleFavoriteClick}>
        {isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
      </button>
    </div>
  );
};

export default RecipeCard;