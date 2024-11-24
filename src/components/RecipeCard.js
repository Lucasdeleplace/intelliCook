import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <div className="recipe-card" onClick={handleClick}>
      <h2>{recipe.name}</h2>
      <p>Temps de préparation: {recipe.time} minutes</p>
    </div>
  );
};


export default RecipeCard;