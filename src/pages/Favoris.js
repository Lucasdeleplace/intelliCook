import React, { useContext } from "react";
import Header from "../components/Header";
import { FavoritesContext } from "../components/FavoritesContext";
import RecipeCard from "../components/RecipeCard";
import "../styles/Favoris.css";
import Footer from "../components/Footer";

const Favoris = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <Header />
      <div className="favoris">
        <h2 className="titreFavoris">Mes favoris ★</h2>
        {favorites.length === 0 ? (
          <p>Aucune recette en favoris</p>
        ) : (
          favorites.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
        )}
        
      </div>
      <Footer />
    </div>
  );
};

export default Favoris;
