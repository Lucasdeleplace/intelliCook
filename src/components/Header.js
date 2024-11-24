import React, { useState } from "react";
import Search from "./Search";
import "../styles/Header.css";
import FavorisComp from "./FavorisComp";
import NavBar from "./NavBar";
import data from "../data/recipe.json";

const Header = () => {
  const [luna, setLuna] = useState("☀️");
  const [search, setSearch] = useState("");
  const handleClick = () => {
    if (luna === "☀️") {
      setLuna("🌙");
    } else {
      setLuna("☀️");
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(result);
  };

  const handledelete = () => {
    setSearch("");
  };

  const result = data.filter((recipe) => {
    return (
        recipe.name.toLowerCase().includes(search.toLowerCase()) || recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(search.toLowerCase())
      )
    );
  });

  return (
    <header>
      <div>
        <div className="mysteryRecipe">
          <p className="mysteryRecipe">
            ✨🕵️‍♀️ Découvrez la recette mystère du jour ! 🕵️‍♂️✨
          </p>
        </div>
        <div className="headerTitle">
          <h1 className="headerLogo">IntelliCooooooook</h1>
          <Search
            handleSearch={handleSearch}
            handledelete={handledelete}
            search={search}
          />
          <FavorisComp />
          <div className="DarkMode" onClick={handleClick}>
            {luna}
          </div>
        </div>
        <div className="headerMenu">
          <NavBar />
        </div>
        <div className="resultSearch">
            { search.length > 0 ? <p>{result.length} recettes disponibles</p> : null }
          { search.length > 0 ? result.map((recipe) => {
            return (
              <div>
                <p>{recipe.name}</p>
              </div>
            );
          }) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;
