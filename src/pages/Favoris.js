import React, { useContext } from "react";
import Header from "../components/Header";
import { FavoritesContext } from "../components/FavoritesContext";
import RecipeCard from "../components/RecipeCard";
import "../styles/Favoris.css";

const Favoris = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <Header />
      <div className="favoris">
        <h2>Mes favoris ★</h2>
        {favorites.length === 0 ? (
          <p>Aucune recette en favoris</p>
        ) : (
          favorites.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
        )}
      </div>
    </div>
  );
};

export default Favoris;