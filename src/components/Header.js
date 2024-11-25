
// src/components/Header.js
import React, { useState } from "react";
import Select from "react-select";
import Search from "./Search";
import "../styles/Header.css";
import FavorisComp from "./FavorisComp";
import NavBar from "./NavBar";
import RecipeCard from "./RecipeCard";
import data from "../data/recipe.json";

const Header = () => {
  const [luna, setLuna] = useState("☀️");
  const [search, setSearch] = useState("");
  const [includeIngredients, setIncludeIngredients] = useState([]);
  const [excludeIngredients, setExcludeIngredients] = useState([]);

  const handleClick = () => {
    setLuna(luna === "☀️" ? "🌙" : "☀️");
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleIncludeIngredients = (selectedOptions) => {
    setIncludeIngredients(selectedOptions);
  };

  const handleExcludeIngredients = (selectedOptions) => {
    setExcludeIngredients(selectedOptions);
  };

  const handledelete = () => {
    setSearch("");
    setIncludeIngredients([]);
    setExcludeIngredients([]);
  };

  const allIngredients = Array.from(
    new Set(data.flatMap((recipe) => recipe.ingredients.map((ing) => ing.ingredient)))
  ).map((ingredient) => ({ value: ingredient, label: ingredient }));

  const result = data.filter((recipe) => {
    const includes = includeIngredients.map((ing) => ing.value.toLowerCase());
    const excludes = excludeIngredients.map((ing) => ing.value.toLowerCase());

    const recipeIngredients = recipe.ingredients.map((ingredient) =>
      ingredient.ingredient.toLowerCase()
    );

    const includesAll = includes.every((ing) =>
      recipeIngredients.includes(ing)
    );
    const excludesNone = excludes.every((ing) =>
      !recipeIngredients.includes(ing)
    );

    return (
      (recipe.name.toLowerCase().includes(search.toLowerCase()) ||
        recipeIngredients.some((ingredient) =>
          ingredient.includes(search.toLowerCase())
        )) &&
      includesAll &&
      excludesNone
    );
  });

  const shouldShowResults = search.length > 0 || includeIngredients.length > 0 || excludeIngredients.length > 0;

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
          <FavorisComp />
          <div className="searchAndFilterContainer">
            <div className="searchContainer">
              <Search
                handleSearch={handleSearch}
                handledelete={handledelete}
                search={search}
              />
            </div>
            <Select
              isMulti
              options={allIngredients}
              placeholder="Ingrédients à inclure"
              value={includeIngredients}
              onChange={handleIncludeIngredients}
              className="ingredientSelect"
            />
            <Select
              isMulti
              options={allIngredients}
              placeholder="Ingrédients à exclure"
              value={excludeIngredients}
              onChange={handleExcludeIngredients}
              className="ingredientSelect"
            />
          </div>
          <div className="DarkMode" onClick={handleClick}>
            {luna}
          </div>
        </div>
        <div className="headerMenu">
          <NavBar />
        </div>
        {shouldShowResults && (
          <div className="resultSearch">
            <p>{result.length} recettes disponibles</p>
            {result.map((recipe) => {
              return <RecipeCard key={recipe.id} recipe={recipe} />;
            })}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;