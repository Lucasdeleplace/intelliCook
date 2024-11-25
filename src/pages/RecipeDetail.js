import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/recipe.json";
import "../styles/RecipeDetail.css";
import Header from "../components/Header";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = data.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <p>Recette non trouvée</p>;
  }

  const takeBack = () => {
    window.history.back();
  };

  return (
    <>
    <Header />
    <div className="recipe-detail">
      <p onClick={takeBack}>back</p>
      <h2>{recipe.name}</h2>
      <p>Temps de préparation: {recipe.time} minutes</p>
      <p>Ingrédients:</p>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.quantity} {ingredient.unit} {ingredient.ingredient}
          </li>
        ))}
      </ul>
      <p>Instructions:</p>
      <p>{recipe.description}</p>
      </div>
    </>
  );
};

export default RecipeDetail;